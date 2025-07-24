import { useState } from 'react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    location: '',
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    alert('Thank you for your booking! We will contact you shortly to confirm.')
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      location: '',
      notes: ''
    })
  }

  return (
    <section id="book" className="bg-[#1e1e1e] py-16 px-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Service</h2>
              <p className="text-xl">Fill out the form and we'll contact you to confirm your appointment</p>
            </div>
            
            <form 
              onSubmit={handleSubmit}
              className="glass-effect-gold rounded-xl p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-[#1e1e1e] border border-[#444] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-[#1e1e1e] border border-[#444] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block mb-2">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-[#1e1e1e] border border-[#444] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Basic Wash">Basic Wash (KES 1,200)</option>
                  <option value="Interior Cleaning">Interior Cleaning (KES 2,500)</option>
                  <option value="Full Detailing">Full Detailing (KES 5,000)</option>
                  <option value="Silver Package">Silver Package (KES 4,500/mo)</option>
                  <option value="Gold Package">Gold Package (KES 7,500/mo)</option>
                  <option value="Platinum Package">Platinum Package (KES 12,000/mo)</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="block mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-[#1e1e1e] border border-[#444] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block mb-2">Preferred Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-[#1e1e1e] border border-[#444] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="location" className="block mb-2">Location (Address)</label>
                <textarea
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  rows="2"
                  className="w-full p-3 rounded bg-[#1e1e1e] border border-[#444] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                  required
                ></textarea>
              </div>
              
              <div className="mb-8">
                <label htmlFor="notes" className="block mb-2">Special Instructions</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 rounded bg-[#1e1e1e] border border-[#444] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </form>
            
            <div className="text-center mt-6">
              <p>Prefer to chat? <a href="https://wa.me/254712345678" className="text-[#d4af37] font-bold">Message us on WhatsApp</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}