"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductImageGalleryProps {
  images: string[]
  productName: string
}

export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="space-y-4">

      {/* Main Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 ${
              selectedImage === image
                ? "border-primary"
                : "border-transparent"
            }`}
          >
            <Image
              src={image}
              alt={`${productName} ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

    </div>
  )
}