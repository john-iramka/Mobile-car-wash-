import { FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      {/* Left Panel - Black Background */}
      <div className="lg:w-1/2 bg-black text-white p-10 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left">
          Your Car Deserves <br />
          <span className="text-[#d4af37]">the Best Care</span>
        </h1>
      </div>

      {/* Right Panel - Dark Gray Background */}
      <div className="lg:w-1/2 bg-[#1e1e1e] text-white p-10 space-y-6">
        <p className="text-base leading-relaxed">
          Buff ‘n’ Go Mobile Car Wash brings <strong className="text-white">professional cleaning</strong> to your doorstep in Nairobi.
          No more queues — just <strong className="text-white">eco-friendly</strong>, time-saving detailing by trained technicians.
        </p>

        <ul className="space-y-3">
          {[
            "Convenient door-to-door service",
            "Premium cleaning products",
            "Water-saving techniques",
            "Flexible scheduling"
          ].map((item, i) => (
            <motion.li
              key={i}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <FaCheckCircle className="text-[#d4af37] mt-1 mr-2" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
