import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))] bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center text-white text-center px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">We Bring the Shine to You</h1>
        <p className="text-xl md:text-2xl mb-8">Your Premium Mobile Car Wash Experience in Nairobi</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#book" 
            className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#c9a22e] transition-all shadow-lg shadow-[rgba(212,175,55,0.4)] hover:shadow-xl hover:shadow-[rgba(212,175,55,0.6)] hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
          >
            Book Now
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-20 transition-opacity"></span>
          </a>
          <a 
            href="https://wa.me/254712345678" 
            className="bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1da851] transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
          >
            <FaWhatsapp size={24} />
            Chat Now
          </a>
        </div>
      </div>
    </section>
  )
}