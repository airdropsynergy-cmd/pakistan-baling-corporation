// Build-time image pipeline. Run with `npm run images` whenever a file under
// image-sources/ is added or changed.
//
// For every photo in image-sources/<path>, this:
//   1. Re-saves it as WebP at its existing public/<path> location (the "full
//      size" file every existing page, OG tag, and JSON-LD reference already
//      points at — so nothing else in the codebase needs to change).
//   2. Creates smaller WebP copies at a few widths, each with a short content
//      hash in the filename, under public/images/generated/<path>/.
//   3. Writes lib/image-manifest.json, which maps each of those existing
//      "/images/..." paths to its small/medium/large variants so
//      <ResponsiveImage> can build a srcset without touching product data.
//
// Re-run after editing anything in image-sources/ and commit the results
// (image-sources/, the regenerated public/ files, and the manifest) together.

import { createHash } from "node:crypto"
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const ROOT = path.resolve(import.meta.dirname, "..")
const SOURCE_DIR = path.join(ROOT, "image-sources")
const PUBLIC_DIR = path.join(ROOT, "public")
const GENERATED_DIR = path.join(PUBLIC_DIR, "images", "generated")
const MANIFEST_PATH = path.join(ROOT, "lib", "image-manifest.json")

// Widths we generate for responsive use. Never upscaled past the source's
// own width.
const WIDTHS = [640, 1024, 1600]
const QUALITY = 78

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else if (/\.(webp|jpe?g|png)$/i.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

// image-sources/products/rhode-grass/hero-1.webp -> /images/products/rhode-grass/hero-1.webp
// image-sources/home/hero-1.webp                 -> /hero-1.webp
function toPublicPath(relFromSource) {
  const parts = relFromSource.split(path.sep)
  if (parts[0] === "home") {
    return "/" + parts.slice(1).join("/")
  }
  return "/images/" + parts.join("/")
}

async function main() {
  const sourceFiles = await walk(SOURCE_DIR)
  const manifest = {}

  for (const sourcePath of sourceFiles) {
    const relFromSource = path.relative(SOURCE_DIR, sourcePath)
    const publicPath = toPublicPath(relFromSource)
    const parsed = path.parse(relFromSource)

    const bytes = await readFile(sourcePath)
    const hash = createHash("sha256").update(bytes).digest("hex").slice(0, 8)
    const image = sharp(bytes)
    const meta = await image.metadata()

    // 1. Full-size file at the existing public path (unchanged location).
    const fullSizeOut = path.join(PUBLIC_DIR, publicPath)
    await mkdir(path.dirname(fullSizeOut), { recursive: true })
    const fullBuf = await sharp(bytes).webp({ quality: QUALITY }).toBuffer()
    await writeFile(fullSizeOut, fullBuf)

    // 2. Smaller, hashed variants for responsive use.
    const variants = []
    const widths = WIDTHS.filter((w) => w <= meta.width)
    if (widths.length === 0) widths.push(meta.width) // source narrower than our smallest step

    const relDir = path.dirname(relFromSource) // e.g. "products/rhode-grass" or "home"
    for (const width of widths) {
      const buf = await sharp(bytes).resize({ width }).webp({ quality: QUALITY }).toBuffer()
      const variantName = `${parsed.name}.${hash}-${width}.webp`
      const outDir = path.join(GENERATED_DIR, relDir)
      await mkdir(outDir, { recursive: true })
      await writeFile(path.join(outDir, variantName), buf)
      variants.push({
        width,
        src: `/images/generated/${relDir}/${variantName}`.replace(/\\/g, "/"),
      })
    }

    manifest[publicPath] = {
      width: meta.width,
      height: meta.height,
      fallback: publicPath,
      variants,
    }

    console.log(`${relFromSource} -> ${publicPath} (${variants.length} variant${variants.length === 1 ? "" : "s"})`)
  }

  await mkdir(path.dirname(MANIFEST_PATH), { recursive: true })
  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n")
  console.log(`\nWrote manifest for ${Object.keys(manifest).length} images -> ${path.relative(ROOT, MANIFEST_PATH)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
