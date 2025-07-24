import { useEffect } from 'react'
import { gsap } from 'gsap'

const services = [
  {
    title: "Basic Wash",
    description: "Exterior wash, wheel cleaning, and window cleaning.",
    price: "KES 1,200",
    image: "https://images.pexels.com/photos/5592594/pexels-photo-5592594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Interior Cleaning",
    description: "Vacuuming, dashboard cleaning, and seat sanitizing.",
    price: "KES 2,500",
    image: "https://images.pexels.com/photos/5231161/pexels-photo-5231161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Full Detailing",
    description: "Complete interior and exterior deep cleaning.",
    price: "KES 5,000",
    image: "https://images.pexels.com/photos/5231163/pexels-photo-5231163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Add-ons",
    description: "Car perfume, headlight restoration, leather conditioning.",
    price: "From KES 500",
    image: "https://images.pexels.com/photos/5231162/pexels-photo-5231162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]

export default function Services() {
  useEffect(() => {
    gsap.fromTo(".service-card", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.15, 
        delay: 0.3,
        ease: "back.out(1.2)"
      }
    )
  }, [])

  return (
    <section id="services" className="bg-[#1e1e1e] py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-center text-xl mb-12">Professional cleaning solutions tailored to your needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl opacity-0"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-[#d4af37] font-bold">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}