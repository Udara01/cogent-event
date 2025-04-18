'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
    Lightbulb,
    TrendingUp,
    Users,
    Rocket,
    MessageCircle
  } from 'lucide-react'

import { Barlow, Nunito } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function EventOverview() {
  return (
    <section className="bg-gray-950 text-white px-6 md:px-20 py-20 space-y-16" id="overview">
      
      {/* Overview Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10">

        {/* Title of the event*/}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className={`text-6xl flex-shrink-0 md:w-1/5 leading-tight text-center ${barlow.className}`}
          >
           <span className="block">Event</span>
           <span className="block">Overview</span>
        </motion.h2>

        {/* Event Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className={`space-y-6 text-2xl md:w-5/5 text-justify ${barlow.className}`}
        >
        <p>
          Join us on April 9th in Cairo, Egypt, for Finastra’s Universal Banking Forum,
          &quot;Reimagine Banking: Adapt. Evolve. Thrive.&quot; This exclusive event is designed to help
          you navigate and excel in the rapidly evolving banking landscape.
        </p>
        <p>
          Our forum will bring together business and technology experts, industry leaders, and
          visionaries to share their insights on the latest trends and challenges in the banking
          sector. You’ll gain valuable knowledge on topics such as Generative AI, the impact of
          volatility, globalization challenges, persistent supply chain issues, recession threats,
          shifts in competitive dynamics, and evolving regulations.
        </p>
        <p>
          Each session will delve into the implications, challenges, and opportunities these topics
          present, providing you with practical strategies to leverage the latest technologies and
          capitalize on emerging opportunities.
        </p>
        <p>
          Don’t miss this opportunity to enhance your knowledge, skills, and network in the finance
          and banking sector. Register today and secure your place at this must-attend event!
        </p>

        </motion.div>
      </div>

      {/* Reasons Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
        className="max-w-6xl mx-auto bg-gradient-to-r from-purple-800 to-purple-600 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8"
      >
      {/* Image for the Card*/}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <Image
          src="/event-image.avif"
          alt="Banking Innovation"
          width={600}
          height={400}
          className="rounded-xl"
        />
      </div>

      {/* Points */}
      <div className="flex-1 text-white space-y-6"> 
        <h3 className={`text-2xl md:text-4xl font-bold ${nunito.className}`}>
          TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN 2025
        </h3>
        <ul className="list-none space-y-5 text-base md:text-lg"> 
          <li className="flex items-center gap-4">
            <Lightbulb className="w-6 h-6 text-white" />
            Learn from industry experts
          </li>
          <li className="flex items-center gap-4">
            <TrendingUp className="w-6 h-6 text-white" />
            Stay ahead of emerging trends
          </li>
          <li className="flex items-center gap-4">
            <Users className="w-6 h-6 text-white" />
            Connect with fellow banking professionals
          </li>
          <li className="flex items-center gap-4">
            <Rocket className="w-6 h-6 text-white" />
            Enhance your knowledge, skills, and network
          </li>
          <li className="flex items-center gap-4">
            <MessageCircle className="w-6 h-6 text-white" />
            Share your expertise and experience with peers
          </li>
        </ul>
      </div>
    </motion.div>

    </section>
  )
}
