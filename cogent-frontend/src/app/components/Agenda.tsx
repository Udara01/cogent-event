'use client';

import { motion } from 'framer-motion';
import { Barlow, Nunito } from 'next/font/google'
import {agendaItems} from '../data/agendaItems'// import the agenda items from the data file

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Agenda() {
  return (
    <section className="min-h-screen bg-white flex flex-col md:flex-row items-start p-6 md:p-40 gap-10 overflow-hidden">
      
  {/* Left side - Agenda title */}
  <div className="md:min-w-fit md:h-screen sticky ">
    <h1
      className={`text-8xl md:text-6xl leading-none md:leading-[1.5] whitespace-nowrap overflow-visible bg-gradient-to-r from-pink-500 to-purple-800 bg-clip-text text-transparent font-light mb-6 ${barlow.className}`}
    >
      Agenda
    </h1>
  </div>

  {/* Right side - Agenda items */}
  <div className="md:w-3/4 w-full space-y-20 text-justify overflow-y-auto">
    <div className="w-full bg-purple-50 rounded-2xl p-10 space-y-20 text-justify shadow-lg">
      {agendaItems.map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          variants={itemVariants}
          className="flex items-start gap-10 border-b-2 border-pink-500 to-purple-800 pb-10"
        >
          <div className="w-24 text-right text-[20px] font-semibold text-gray-700 flex flex-col items-end">
            <span>{item.time}</span>
            {item.title.toLowerCase().includes('registration') && (
              <span className="mt-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                Registration
              </span>
            )}
          </div>

          <div className="flex-1">
            <div className="text-[25px] font-medium text-gray-900 pb-6">
              {item.title}
            </div>
            {item.speaker && (
              <ul className="text-base text-gray-600 mt-1 space-y-1 list-disc pl-5">
                {item.speaker.split('\n').map((speaker, i) => (
                  <li key={i}>{speaker.trim()}</li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}
