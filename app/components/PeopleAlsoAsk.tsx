'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const questions = [
    {
        question: "What is Papikondalu famous for?",
        answer: "Papikondalu is famous for its breathtaking scenic beauty where the Godavari River narrows between the Papi Hills. It's renowned for boat cruises, the scenic Papi Kondalu National Park, and the peaceful atmosphere nestled in the Eastern Ghats."
    },
    {
        question: "Which is the best time to visit Papikondalu?",
        answer: "The best time to visit Papikondalu is from October to March when the weather is pleasant and cool. The monsoon season (July to September) offers lush greenery, but boat operations depend on the river water levels."
    },
    {
        question: "How far is Papikondalu from Rajahmundry?",
        answer: "Papikondalu is approximately 60-70 km from Rajahmundry. The boat journey usually starts from Purushothapatnam or Pattiseema, which is a short drive from Rajahmundry."
    },
    {
        question: "How to plan a Papikondalu trip?",
        answer: "To plan a Papikondalu trip: 1. Reach Rajahmundry or Bhadrachalam. 2. Book a boat tour package in advance (day tour or overnight). 3. The tour typically includes breakfast, lunch, and a visit to Perantapalli temple. 4. Carry comfortable clothing and a camera!"
    },
    {
        question: "How to reach Papikondalu from Hyderabad?",
        answer: "You can reach Rajahmundry from Hyderabad by train (approx. 8-9 hours) or bus (approx. 9-10 hours). From Rajahmundry, you can take a pre-booked boat tour to Papikondalu."
    }
]

export default function PeopleAlsoAsk() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <HelpCircle className="text-primary-600" size={28} />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">People Also Ask</h2>
                    </div>
                    <p className="text-gray-600">Common questions about planning your Papikondalu adventure</p>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-gray-50/50"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                                <span className="ml-4 flex-shrink-0 text-primary-600">
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Schema.org markup for FAQ */}
                            <script type="application/ld+json" dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "Question",
                                    "name": item.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": item.answer
                                    }
                                })
                            }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
