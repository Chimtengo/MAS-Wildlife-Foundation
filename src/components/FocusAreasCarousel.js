'use client'

import { useEffect, useState } from 'react'

export default function FocusAreasCarousel({ areas }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % areas.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [areas.length])

  return (
    <div className="max-w-4xl mx-auto">
      <div key={currentIndex} className="animate-slide-in-right flex items-center justify-center min-h-40">
        <div className="w-full flex flex-col items-center justify-center text-center bg-black/35 backdrop-blur-sm p-6 rounded-xl hover:bg-black/45 transition-all">
          <div className="w-3 h-3 bg-white rounded-full mb-3 animate-pulse"></div>
          <p className="text-lg">{areas[currentIndex]}</p>
        </div>
      </div>
    </div>
  )
}
