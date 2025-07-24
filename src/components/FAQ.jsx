import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useEffect } from 'react'
import { gsap } from 'gsap'

const faqs = [
  {
    question: "How do I book a service?",
    answer: "You can book a service through our website by filling out the booking form, calling us directly, or messaging us on WhatsApp. We'll confirm your appointment within 30 minutes."
  },
  {
    question: "Do I need to be present during the wash?",
    answer: "No, you don't need to be present. Many of our customers leave their keys with security or in a designated spot. Our technicians are fully vetted and insured for your peace of mind."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept M-Pesa, credit/debit cards, and cash. For subscription plans, we recommend setting up automatic M-Pesa payments for convenience."
  },
  {
    question: "How long does a service take?",
    answer: "A basic wash takes about 45 minutes, interior cleaning takes 60-90 minutes, and full detailing takes 2-3 hours depending on your vehicle size and condition."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    gsap.fromTo(".faq-item", 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5, 
        stagger: 0.1, 
        delay: 0.4,
        ease: "power2.out"
      }
    )
  }, [])

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-[#1e1e1e] py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-xl mb-12">Find answers to common questions about our service</p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-item bg-[#2a2a2a] rounded-lg overflow-hidden border border-[#333] opacity-0"
            >
              <button 
                className="w-full flex justify-between items-center p-4 bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-left font-medium">{faq.question}</h3>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-[#2a2a2a]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}