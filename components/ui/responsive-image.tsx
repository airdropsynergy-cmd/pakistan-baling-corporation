import manifest from "@/lib/image-manifest.json"
import { cn } from "@/lib/utils"

type ManifestEntry = {
  width: number
  height: number
  fallback: string
  variants: { width: number; src: string }[]
}

const imageManifest = manifest as Record<string, ManifestEntry>

interface ResponsiveImageProps {
  src: string
  alt: string
  sizes: string
  className?: string
  priority?: boolean
}

// Fills its parent box the same way next/image's `fill` prop does — callers
// keep the same "relative" + sized wrapper div they already use, and pass the
// same object-cover/hover classes. Looks `src` up in the build-time generated
// manifest (lib/image-manifest.json) to serve a real srcset; if a path isn't
// in the manifest yet (script hasn't been run for it), falls back to the
// plain file so nothing ever breaks.
export function ResponsiveImage({ src, alt, sizes, className, priority }: ResponsiveImageProps) {
  const entry = imageManifest[src]
  const commonProps = {
    alt,
    className: cn("absolute inset-0 h-full w-full", className),
    loading: priority ? ("eager" as const) : ("lazy" as const),
    fetchPriority: priority ? ("high" as const) : undefined,
    decoding: "async" as const,
  }

  if (!entry) {
    return (
      <>
        {priority && <link rel="preload" as="image" href={src} fetchPriority="high" />}
        <img src={src} {...commonProps} />
      </>
    )
  }

  const srcSet = [...entry.variants, { width: entry.width, src: entry.fallback }]
    .map((v) => `${v.src} ${v.width}w`)
    .join(", ")

  return (
    <>
      {/* next/image's `priority` prop used to inject this automatically; now
          that these images render as a plain <img>, we do it ourselves so the
          browser discovers the LCP candidate from the initial HTML instead of
          only after it parses the <img>'s srcset. React 19 hoists <link> tags
          rendered anywhere in the tree into <head>. */}
      {priority && (
        <link rel="preload" as="image" href={entry.fallback} imageSrcSet={srcSet} imageSizes={sizes} fetchPriority="high" />
      )}
      <img src={entry.fallback} srcSet={srcSet} sizes={sizes} {...commonProps} />
    </>
  )
}
