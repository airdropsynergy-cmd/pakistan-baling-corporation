import manifest from "@/lib/image-manifest.json"
import { cn } from "@/lib/utils"

type ManifestEntry = {
  width: number
  height: number
  fallback: string
  variants: { width: number; src: string }[]
}

const imageManifest = manifest as Record<string, ManifestEntry>

// Below this width, a `mobileSrc` image is used instead of `src`, via a real
// <picture> source — the browser fetches only the one that matches, never both.
const MOBILE_MEDIA = "(max-width: 767px)"
const DESKTOP_MEDIA = "(min-width: 768px)"

interface ResponsiveImageProps {
  src: string
  alt: string
  sizes: string
  className?: string
  priority?: boolean
  /** Optional art-directed crop shown instead of `src` on screens under 768px. */
  mobileSrc?: string
}

function srcSetFor(entry: ManifestEntry) {
  return [...entry.variants, { width: entry.width, src: entry.fallback }]
    .map((v) => `${v.src} ${v.width}w`)
    .join(", ")
}

// Fills its parent box the same way next/image's `fill` prop does — callers
// keep the same "relative" + sized wrapper div they already use, and pass the
// same object-cover/hover classes. Looks `src` up in the build-time generated
// manifest (lib/image-manifest.json) to serve a real srcset; if a path isn't
// in the manifest yet (script hasn't been run for it), falls back to the
// plain file so nothing ever breaks. Explicit width/height are included so the
// browser knows the aspect ratio before the image data arrives — needed for
// object-fit: cover to size the box correctly from the very first paint.
export function ResponsiveImage({ src, alt, sizes, className, priority, mobileSrc }: ResponsiveImageProps) {
  const entry = imageManifest[src]
  const mobileEntry = mobileSrc ? imageManifest[mobileSrc] : undefined
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

  const srcSet = srcSetFor(entry)
  const mobileSrcSet = mobileEntry ? srcSetFor(mobileEntry) : undefined

  return (
    <>
      {/* next/image's `priority` prop used to inject this automatically; now
          that these images render as a plain <img>, we do it ourselves so the
          browser discovers the LCP candidate from the initial HTML instead of
          only after it parses the <img>'s srcset. React 19 hoists <link> tags
          rendered anywhere in the tree into <head>. Scoped by `media` so only
          one of the two (mobile/desktop) is ever actually fetched. */}
      {priority && mobileEntry && (
        <link
          rel="preload"
          as="image"
          href={mobileEntry.fallback}
          imageSrcSet={mobileSrcSet}
          imageSizes={sizes}
          media={MOBILE_MEDIA}
          fetchPriority="high"
        />
      )}
      {priority && (
        <link
          rel="preload"
          as="image"
          href={entry.fallback}
          imageSrcSet={srcSet}
          imageSizes={sizes}
          media={mobileEntry ? DESKTOP_MEDIA : undefined}
          fetchPriority="high"
        />
      )}
      <picture>
        {mobileEntry && <source media={MOBILE_MEDIA} srcSet={mobileSrcSet} sizes={sizes} />}
        <img
          src={entry.fallback}
          srcSet={srcSet}
          sizes={sizes}
          width={entry.width}
          height={entry.height}
          {...commonProps}
        />
      </picture>
    </>
  )
}
