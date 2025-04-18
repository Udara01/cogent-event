'use client'

import Image from 'next/image'
import { Cairo, Oswald} from 'next/font/google'


const cairo = Cairo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cairo',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: '700'})

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center text-white bg-gradient-to-b from-black via-purple-900 to-purple-700 overflow-hidden">

      {/* Text Content */}
      <div className="max-w-3xl z-10">
        <p className={`text-3xl text-gray-300 mb-6 ${cairo.className}`}>Organized By</p>
        <h2 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-800 bg-clip-text text-transparent mb-7">
          FINASTRA
        </h2>

        <h1 className={`text-4xl md:text-7xl font-bold leading-tight mb-6 tracking-wide ${oswald.className}`}>
          Reimagine Banking:<br />
          <span className="block">Adapt. Evolve. Thrive.</span>
        </h1>

        <p className={`text-lg md:text-2xl text-gray-300 mb-1 ${cairo.className}`}>
          Date: <span className="text-gray-500">9th April 2025</span>
        </p>
        <p className={`text-lg md:text-2xl text-gray-300 mb-1 ${cairo.className}`}>
          Time: <span className="text-gray-500">9:30 AM - 2:00 PM GMT+2</span>
        </p>
        <p className={`text-lg md:text-1x text-gray-300 mb-1 ${cairo.className}`}>
          The Nile Ritz-Carlton, Cairo, Egypt
        </p>
      </div>

      {/* Optional Image Section */}
      <div className="mt-10 max-w-xl w-full rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/event-photo.png"
          alt="Event"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>

    </section>
  )
}
