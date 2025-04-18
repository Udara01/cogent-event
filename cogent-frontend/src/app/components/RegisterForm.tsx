'use client'

import React, { useState } from 'react'
import { Barlow } from 'next/font/google'
import { motion } from 'framer-motion'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    mobileNumber: '',
    email: '',
    website: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      alert('Registration successful!');

      //Reset the form
      setFormData({
        firstName: '',
        lastName: '',
        jobTitle: '',
        company: '',
        mobileNumber: '',
        email: '',
        website: '',
      });
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong');
    }
  };

  return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 flex items-center justify-center px-4"
      >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-5 items-center">
        {/* Left Text Section */}
        <div className="text-white text-center md:text-left text-3xl">
          <h1 className={`text-5xl md:text-6xl font-semibold mb-4 ${barlow.className}`}>Register Now</h1>
          <p className="text-2xl">Join us for an unforgettable experience!</p>
        </div>

        {/* Form Section */}
        <div className="bg-zinc-900/90 p-8 rounded-2xl shadow-xl w-full">
        <motion.form
            className="space-y-6"
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              },
              hidden: {}
            }}
          >

            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              name="jobTitle"
              type="text"
              placeholder="Job Title"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              name="company"
              type="text"
              placeholder="Company"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              name="mobileNumber"
              type="tel"
              placeholder="Mobile Number"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              name="website"
              type="url"
              placeholder="Company Website URL"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <div className="flex items-start text-sm text-white">
              <input type="checkbox" className="mt-1 mr-2" required />
              <label>
                By filling out the registration form to attend our event, you agree and consent to{' '}
                <a href="#" className="text-pink-400 underline">
                  Cogent Solutions Privacy Policy
                </a>.
              </label>
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="w-full bg-pink-600 hover:bg-pink-700 transition-colors text-white py-3 rounded-md font-semibold"
            >
              Register
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  )
}
