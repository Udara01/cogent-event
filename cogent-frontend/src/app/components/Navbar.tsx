'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full px-18 py-7 bg-black text-white z-50 relative">
      <div className="flex items-center justify-between">

        {/* Logo  */}
        <div className="flex items-center flex-shrink-0 md:ml-4">
          <Link href="https://cogentsolutions.ae/">
            <Image
              src="/cogent-logo.png"
              alt="Cogent Solutions Logo"
              width={150}
              height={46}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Links for the  Event Overview and Agenda */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-base font-light">
          <Link href="#event-overview" className="hover:text-purple-400 transition">
            Event Overview
          </Link>
          <Link href="#agenda" className="hover:text-purple-400 transition">
            Agenda
          </Link>
        </div>

        {/* Register Button */}
        <div className="hidden md:flex md:mr-4">
          <Link
            href="#register"
            className="bg-transparent text-white border px-4 py-2 rounded-full text-lg font-semibold transition
            hover:bg-gradient-to-r hover:from-purple-900 hover:to-pink-900 hover:text-white"

          >
            Register Now
          </Link>
        </div>

        {/* Hamburger Icon for the make responsive*/}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-sm font-light bg-black p-4 rounded-md shadow-lg">
          <Link
            href="#overview"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Event Overview
          </Link>
          <Link
            href="#agenda"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Agenda
          </Link>
          <Link
            href="#register"
            onClick={() => setIsOpen(false)}
            className="bg-white text-black px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-purple-500 hover:text-white transition self-start"
          >
            Register Now
          </Link>
        </div>
      )}
    </nav>
  )
}
