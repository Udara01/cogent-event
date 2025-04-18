import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EventOverview from '../components/EventOverview'
import SpeakersSection from '../components/SpeakerCards'
import Agenda from '../components/Agenda'
import About from '../components/About'
import RegisterForm from '../components/RegisterForm'
import Footer from '../components/Footer'


export default function Page() {
    return (
    <> 

        <main className="min-h-screen bg-black text-white">
        <Navbar />

        <Hero />

        <section id="event-overview">
        <EventOverview />
        </section>

        <SpeakersSection />
        <section id="agenda">
        <Agenda />
        </section>

        <About />

        <section id="register">
        <RegisterForm />
        </section>

        <Footer />

      </main>

    </>
    )
  }