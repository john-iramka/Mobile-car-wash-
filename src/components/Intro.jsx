import { FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className="bg-[#1e1e1e] py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Text Content */}
          <div className="lg:w-1/2">
            <div className="h-1 w-24 bg-[#d4af37] mb-6 rounded" />

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Your Car Deserves <span className="text-[#d4af37]">the Best Care</span>
            </h2>

            <p className="mb-6 text-gray-300 leading-relaxed">
              ShineXpress Mobile Car Wash brings <strong className="text-white">professional cleaning</strong> to your doorstep in Nairobi. 
              No more queues — just <strong className="text-white">eco-friendly</strong>, time-saving detailing by trained technicians.
            </p>

            <ul className="space-y-3 text-white">
              {[
                "Convenient door-to-door service",
                "Premium cleaning products",
                "Water-saving techniques",
                "Flexible scheduling"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -30 }}
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

          {/* Right Image with Animation */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/4480537/pexels-photo-4480537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Car being washed"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
