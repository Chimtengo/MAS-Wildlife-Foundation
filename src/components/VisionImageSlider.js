'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const IMAGES = [
  {
    src: '/images/vision-image.jpg',
    alt: 'Our Vision',
  },
  {
    src: '/images/vision-image2.jpg',
    alt: 'Community Wildlife Education',
  },
  {
    src: '/images/vision-image3.jpg',
    alt: 'Community Wildlife Education',
  },
]

export default function VisionImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
  }

  return (
    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {IMAGES.map((image) => (
          <div key={image.src} className="relative min-w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/55 text-white flex items-center justify-center transition-colors"
        aria-label="Previous image"
      >
        &#10094;
      </button>

      <button
        type="button"
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/55 text-white flex items-center justify-center transition-colors"
        aria-label="Next image"
      >
        &#10095;
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === index ? 'bg-white scale-110' : 'bg-white/55'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
