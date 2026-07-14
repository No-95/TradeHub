'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'

interface GalleryImage {
  id: number
  src: string
  alt: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-bY6OVhK64qso8PsrrItDqWDA0trAcC.png', alt: 'Mattress display' },
  { id: 2, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Lc6nnWhdlyEzdtzZNEQnL0wlgmNzvh.png', alt: 'Exhibition booth design' },
  { id: 3, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-873jZ57BKSzsbdJe7vjHWIAm5afVVL.png', alt: 'Crowded exhibition' },
  { id: 4, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-Zdcxtd8YWJtfF8anstiULGDVP52nrV.png', alt: 'Exhibition visitors' },
  { id: 5, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-rf1ixa9kM8R7xNr2FCIJt1aaZ32ItM.png', alt: 'Exhibition floor view' },
  { id: 6, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-fr4FNrxfEZlCCcK1C4wRMOFzYjA2PM.png', alt: 'Furniture pavilion' },
  { id: 7, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.png-VogsDopK8uHqhfpGoBV2JfHVM6U3Po.jpeg', alt: 'Indonesian booth' },
  { id: 8, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-iFF1x2kcqkoTJiOjj5iTWAWZDawq9k.png', alt: 'Bed display' },
  { id: 9, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-jl6YNf62C2EJEtQ9bUWFBJILFUGQFu.png', alt: 'Traditional structures' },
  { id: 10, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-qORggHKaExVUDBmIEosQvVaqAKnSTC.png', alt: 'Decorative boxes' },
  { id: 11, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-qfoPqGSlXsv87X99kB7kvkqVDcmqba.png', alt: 'Wooden sculptures' },
  { id: 12, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-g7LbJCt54D00FqN9sHNesWaQcSC4yA.png', alt: 'Wooden architecture' },
  { id: 13, src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-BLOgyTB98Yj89rrDmU6dm0QjCcGCXD.png', alt: 'Traditional interior' },
]

export default function KofurnGallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openGallery = () => setIsOpen(true)
  const closeGallery = () => setIsOpen(false)

  const openImage = (index: number) => {
    setSelectedImageIndex(index)
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const currentImage = galleryImages[selectedImageIndex]

  return (
    <>
      {/* Gallery Button */}
      <Button
        onClick={openGallery}
        className="bg-white hover:bg-blue-50 text-[#0A4093] px-6 py-5 font-semibold text-base rounded-lg border-2 border-blue-300"
      >
        View Gallery
      </Button>

      {/* Gallery Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-6xl flex flex-col gap-6">
            {/* Lightbox View */}
            <div className="relative">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-auto rounded-lg shadow-2xl max-h-[70vh] object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 overflow-auto max-h-32">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => openImage(index)}
                  className={`relative rounded-lg overflow-hidden transition-all transform hover:scale-105 ${
                    selectedImageIndex === index
                      ? 'ring-2 ring-yellow-400 scale-105'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
