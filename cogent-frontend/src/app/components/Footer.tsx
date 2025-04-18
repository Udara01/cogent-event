'use client'

//import icons
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Facebook,
  Linkedin
  
} from 'lucide-react'

import Image from 'next/image'
import React from 'react'
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left section */}
        <div>
          <h2 className={`text-3xl font-semibold mb-4 ${barlow.className}`}>Cogent Solutions™</h2>
          <p className="text-gray-300 mb-6">
            Through our conferences we transform your business challenges into opportunities. Our clients and customers are leading government entities and the fortune 500 companies.
          </p>

          <h3 className={`text-3xl font-semibold mb-2 ${barlow.className}`}>Awards</h3>
            <div className="flex flex-wrap gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/award/award1.png" alt="award" width={120} height={120} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/award/award2.png" alt="award" width={120} height={120} />
              </a>
              <a href="https://greatplacetowork.me/events/best-workplaces-in-retail%EF%B8%8F-pharmaceuticals-healthcare%EF%B8%8F-technology%EF%B8%8F-media-advertising-and-marketing%EF%B8%8F/" target="_blank" rel="noopener noreferrer">
                <Image src="/award/award3.png" alt="award" width={120} height={120} />
              </a>
              <a href="https://greatplacetowork.me/certified-organization/cogent-solutions-event-management/" target="_blank" rel="noopener noreferrer">
                <Image src="/award/award4.png" alt="award" width={75} height={120} />
              </a>
            </div>
        </div>

        {/* Right section */}
        <div>
          <h3 className={`text-3xl font-semibold mb-4 ${barlow.className}`}>Our office</h3>
          <ul className="space-y-4 text-gray-500">
            
            {/* Dubai */}
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5" />
              <a
                href="https://www.google.com/maps?q=The+Metropolis+Tower,+Business+Bay,+Dubai,+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                <strong>Middle East & Africa HQ</strong><br />
                Office No: 209, The Metropolis Tower<br />
                Business Bay, Dubai, United Arab Emirates
              </a>
            </li>

            {/* Sri Lanka */}
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5" />
              <a
                href="https://www.google.com/maps?q=Green+Lanka+Tower,+Colombo,+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                <strong>Asia Pacific HQ</strong><br />
                7th floor Green Lanka Tower, Colombo<br />
                Sri Lanka
              </a>
            </li>

            {/* Saudi Arabia */}
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5" />
              <a
                href="https://www.google.com/maps?q=Riyadh,+Saudi+Arabia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                <strong>Saudi Arabia HQ</strong><br />
                Riyadh, Saudi Arabia
              </a>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <a href="tel:+971505718867" className="hover:text-white transition duration-300">
                +971 50 5718867
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:partnerships@cogentsolutions.ae"
                className="hover:text-white transition duration-300"
              >
                partnerships@cogentsolutions.ae
              </a>
            </li>

          </ul>
        </div>
        </div>

        {/* social media links with icons*/}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-lg text-gray-400 px-4 md:px-20">
          <span className="md:ml-10">© 2025 Cogent Solutions Event Management LLC. All Rights Reserved</span>
          <div className="flex gap-4 md:mr-10">
            <a href="https://www.linkedin.com/company/cogent-solutions-event-management/mycompany/" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin />
            </a>
            <a href="https://www.facebook.com/cseventsuae/" aria-label="Facebook" className="hover:text-white">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/cs_event_management/" aria-label="Instagram" className="hover:text-white">
              <Instagram />  
            </a>
            <a href="https://twitter.com/cseventsdxb" aria-label="Twitter" className="hover:text-white">
              <Twitter />
            </a>
          </div>
        </div>
    </footer>
  )
}
