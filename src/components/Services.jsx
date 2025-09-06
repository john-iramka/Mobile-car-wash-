import { FaCheckCircle } from 'react-icons/fa'

const services = [
  {
    title: "Basic Wash",
    description: "Exterior wash, wheel cleaning, and window cleaning.",
    image: "/images/wash.jpeg"
  },
  {
    title: "Interior Cleaning",
    description: "Vacuuming, dashboard cleaning, and seat sanitizing.",
    image: "/images/interiorclean.jpeg"
  },
  {
    title: "Full Detailing",
    description: "Complete interior and exterior deep cleaning.",
    image: "/images/fullcardetailing.jpeg"
  },
  {
    title: "Buffing & Add-ons",
    description: "Paint buffing, car perfume, leather conditioning & more.",
    image: "/images/buffing.jpeg"
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-left text-3xl md:text-4xl font-bold mb-8">Our Services</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Optional Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-4">
                <p className="text-white font-semibold text-lg">{service.title}</p>
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
