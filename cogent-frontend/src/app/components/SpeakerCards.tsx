'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Barlow } from 'next/font/google'
import { speakers } from '../data/speakers'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

interface Speaker {
  name: string
  title: string
  image: string
  description: string
}

export default function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  const columns = 4 // Number of columns for the grid
  // Calculate the number of rows based on the number of speakers and columns
  const fullRows = Math.floor(speakers.length / columns)
  const lastRowCount = speakers.length % columns
  const rows = Array.from({ length: fullRows }, (_, i) =>
    speakers.slice(i * columns, i * columns + columns)
  )
  if (lastRowCount > 0) {
    rows.push(speakers.slice(fullRows * columns))
  }

  return (
    <section className="bg-black text-white px-6 md:px-20 py-20" id="speakers">
      <h2 className={`text-6xl font-semibold text-center mb-12 ${barlow.className}`}>
        Our Speakers
      </h2>

      {/* Speaker Grid in Rows */}
      <div className="space-y-8">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`${
              row.length < columns ? 'flex justify-center gap-8 flex-wrap' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center'
            }`}
          >
            {row.map((speaker, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-[300px] bg-gradient-to-t gray-900 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedSpeaker(speaker)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="w-full h-60 relative overflow-hidden">
                  
                  {/* Blurred background */}
                  <div className="absolute inset-0 backdrop-blur-sm">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover opacity-30"
                    />
                  </div>
                  {/* Main image */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-3xl line-clamp-4 h-24 flex items-center justify-center">
                    {speaker.name}
                  </h3>
                  <p className="text-lg mt-1 text-gray-300">{speaker.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              className="bg-white text-black max-w-2xl w-full max-h-[90vh] rounded-xl p-6 relative z-10 overflow-y-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 text-xl"
                onClick={() => setSelectedSpeaker(null)}
              >
                ×
              </button>
              <h3 className="text-lg text-purple-700 uppercase font-bold mb-2">Speaker</h3>
              <div className="flex justify-center mb-4">
                <div className="w-64 h-64 relative rounded-lg overflow-hidden">
                  <Image
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center line-clamp-2">
                {selectedSpeaker.name}
              </h3>
              <p className="text-lg font-bold text-gray-700 mb-4 text-center">{selectedSpeaker.title}</p>
              <div className="text-base text-gray-800 whitespace-pre-line text-justify space-y-4">
                {selectedSpeaker.description.startsWith('Bio:') ||
                selectedSpeaker.description.startsWith('**Bio:**') ? (
                  <p>
                    <strong>Bio:</strong>{' '}
                    {selectedSpeaker.description.replace(/^(\*\*Bio:\*\*|\s*Bio:\s*)/, '').trim()}
                  </p>
                ) : (
                  <p>{selectedSpeaker.description}</p>
                )}
              </div>
              <div className="mt-6 text-right">
                <button
                  className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
                  onClick={() => setSelectedSpeaker(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
