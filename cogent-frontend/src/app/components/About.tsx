'use client'

import { motion } from 'framer-motion'
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function About() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className={`text-4xl md:text-6xl font-semibold mb-8 ${barlow.className}`}>About Finastra</h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-200">
          Finastra is a global provider of financial services software applications across Lending,
          Payments, Treasury and Capital Markets, and Universal (retail and digital) Banking.
          Committed to unlocking the potential of people, businesses and communities everywhere,
          its vision is to accelerate the future of Open Finance through technology and collaboration,
          and its pioneering approach is why it is trusted by ~8,100 financial institutions,
          including 45 of the world&apos;s top 50 banks.
        </p>

        <p className="mt-10 text-base md:text-lg text-gray-400">
          For more information, visit{' '}
          <a
            href="https://www.finastra.com"
            className="text-purple-400 underline hover:text-purple-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.finastra.com
          </a>
          .
        </p>
      </motion.div>
    </section>
  )
}
