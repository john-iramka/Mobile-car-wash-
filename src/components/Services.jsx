import { FaCheckCircle } from 'react-icons/fa'

const services = [
  {
    title: "Basic Wash",
    description: "Exterior wash, wheel cleaning, and window cleaning.",
    image: "https://images.pexels.com/photos/5592594/pexels-photo-5592594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Interior Cleaning",
    description: "Vacuuming, dashboard cleaning, and seat sanitizing.",
    image: "https://images.pexels.com/photos/5231161/pexels-photo-5231161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Full Detailing",
    description: "Complete interior and exterior deep cleaning.",
    image: "https://images.pexels.com/photos/5231163/pexels-photo-5231163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Buffing & Add-ons",
    description: "Paint buffing, car perfume, leather conditioning & more.",
    image: "https://images.pexels.com/photos/5593053/pexels-photo-5593053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
