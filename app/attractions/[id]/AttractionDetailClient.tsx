'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Star, MapPin, Camera, Info, CheckCircle, Phone, Clock, Calendar, Shield, Utensils, Anchor, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

interface Attraction {
  id: number
  name: string
  shortDescription: string
  description: string
  image: string
  gallery: string[]
  highlights: string[]
  bestTime: string
  activities: string[]
  facilities: string[]
  tips: string[]
}

interface AttractionDetailClientProps {
  attraction: Attraction
}

export default function AttractionDetailClient({ attraction }: AttractionDetailClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : activeFaq === index ? null : index)
  }

  const isPapikondalu = attraction.id === 1

  const faqs = [
    { q: "How much does Papikondalu boat tour cost in 2025?", a: "Papikondalu boat tour prices in 2025 start from ₹1,050 for Non-AC boats and ₹1,250 for AC luxury boats per adult. Child prices are lower. Bhadrachalam drop packages are also available." },
    { q: "What is the best time to visit Papikondalu?", a: "The best time is from October to March. wonderful weather makes the boat cruise enjoyable. Avoid heavy monsoon days." },
    { q: "Is food included in the package?", a: "Yes! All our packages include breakfast (Idli/Upma), a vegetarian Andhra lunch, and evening tea/snacks." },
    { q: "Is it safe for families and kids?", a: "Absolutely. We adhere to strict safety protocols with life jackets for everyone. Our boats are inspected regularly." }
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-sans ">
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={attraction.image}
          alt={attraction.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-16 justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-xl font-display">
                {attraction.name}
              </h1>
              <div className="h-1 w-24 bg-green-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                {attraction.shortDescription}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          href="/attractions"
          className="absolute top-6 left-6 group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all z-10"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Attractions</span>
        </Link>
      </section>

      {/* Main Content */}
      <section className="relative -mt-20 z-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column (Content) */}
          <div className="lg:col-span-8 space-y-8">

            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                    <Info size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">About the Experience</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                  {attraction.description}
                </p>

                {/* Visual Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Clock className="w-8 h-8 mx-auto text-orange-500 mb-2" />
                    <p className="font-semibold text-gray-900">10-12 Hrs</p>
                    <p className="text-xs text-gray-500">Duration</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Utensils className="w-8 h-8 mx-auto text-green-500 mb-2" />
                    <p className="font-semibold text-gray-900">Meals</p>
                    <p className="text-xs text-gray-500">Included</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Anchor className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                    <p className="font-semibold text-gray-900">Boating</p>
                    <p className="text-xs text-gray-500">Experience</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Shield className="w-8 h-8 mx-auto text-purple-500 mb-2" />
                    <p className="font-semibold text-gray-900">Safe</p>
                    <p className="text-xs text-gray-500">Certified</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Papikondalu Special Section */}
            {isPapikondalu && (
              <>
                {/* Premium Pricing Tables */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🎫</span> Choose Your Package
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* AC Package */}
                    <div className="relative group bg-white rounded-3xl shadow-lg border-2 border-transparent hover:border-green-500 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">AC Luxury Boat</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                          <span className="text-4xl font-bold text-green-600">₹1,250</span>
                          <span className="text-sm text-gray-500">/ adult</span>
                        </div>

                        <ul className="space-y-3 mb-6">
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-green-500" /> AC Seating Component
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-green-500" /> Breakfast & Lunch
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-green-500" /> Temple Visit
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-green-500" /> Dance & Music
                          </li>
                        </ul>

                        <a href="tel:+919848323488" className="block w-full text-center bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-colors">
                          Book Now
                        </a>
                      </div>
                    </div>

                    {/* Non-AC Package */}
                    <div className="relative group bg-white rounded-3xl shadow-lg border-2 border-transparent hover:border-blue-500 transition-all duration-300">
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Non-AC Standard</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                          <span className="text-4xl font-bold text-blue-600">₹1,050</span>
                          <span className="text-sm text-gray-500">/ adult</span>
                        </div>

                        <ul className="space-y-3 mb-6">
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-blue-500" /> Open Deck View
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-blue-500" /> Breakfast & Lunch
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-blue-500" /> Temple Visit
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-blue-500" /> Classical Music
                          </li>
                        </ul>

                        <a href="tel:+919848323488" className="block w-full text-center bg-blue-100 text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-200 transition-colors">
                          Call to Book
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-2">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-gray-100 last:border-0 pb-2">
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full flex items-center justify-between py-4 text-left font-semibold text-gray-800 hover:text-green-600 transition-colors"
                        >
                          {faq.q}
                          {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        <AnimatePresence>
                          {activeFaq === idx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-600 pb-4 leading-relaxed">{faq.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}

            {/* Activities & Facilities Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><Camera size={24} /></div>
                  <h3 className="text-xl font-bold">Activities</h3>
                </div>
                <ul className="space-y-3">
                  {attraction.activities.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><MapPin size={24} /></div>
                  <h3 className="text-xl font-bold">Facilities</h3>
                </div>
                <ul className="space-y-3">
                  {attraction.facilities.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle size={16} className="text-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              {/* Floating Action Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4 text-gray-900">
                  <Star className="fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-xl">4.8/5</span>
                  <span className="text-gray-500 text-sm">(2,500+ reviews)</span>
                </div>

                <h3 className="font-bold text-gray-900 mb-4">Highlights</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {attraction.highlights.map((h, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:+919848323488"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 hover:shadow-xl hover:bg-green-700 transition-all hover:-translate-y-1"
                  >
                    <Phone size={20} />
                    Call to Book Now
                  </a>
                  <p className="text-xs text-center text-gray-400">
                    No hidden charges. Direct Operator.
                  </p>
                </div>
              </motion.div>

              {/* Tips Card */}
              <div className="bg-blue-50/50 rounded-3xl p-6 mt-6 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2"><Calendar size={18} /> Best Time</h3>
                <p className="text-blue-800 mb-4 text-sm font-medium">{attraction.bestTime}</p>
                <hr className="border-blue-200/50 mb-4" />
                <h3 className="font-bold text-blue-900 mb-3 text-sm uppercase tracking-wide">Travel Tips</h3>
                <ul className="space-y-2">
                  {attraction.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-blue-800/80 flex gap-2">
                      <span className="text-blue-500">•</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  )
}