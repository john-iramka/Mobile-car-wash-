import { FaCheckCircle } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className="bg-[#1e1e1e] py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Your Car Deserves the Best Care</h2>
            <p className="mb-6">
              ShineXpress Mobile Car Wash brings professional car cleaning services right to your doorstep in Nairobi. 
              No more waiting in lines or wasting time at car washes. Our trained technicians use premium products 
              and eco-friendly methods to make your vehicle shine.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="text-[#d4af37] mt-1 mr-2" />
                <span>Convenient door-to-door service</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-[#d4af37] mt-1 mr-2" />
                <span>Premium cleaning products</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-[#d4af37] mt-1 mr-2" />
                <span>Water-saving techniques</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-[#d4af37] mt-1 mr-2" />
                <span>Flexible scheduling</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/4480537/pexels-photo-4480537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Car being washed" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}