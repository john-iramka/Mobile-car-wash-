import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'About', href: '#about' },
  ]

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-[#d4af37]">ShineXpress</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white hover:text-[#d4af37] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#book" 
              className="ml-4 bg-[#d4af37] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#c9a22e] transition-all shadow-lg shadow-[rgba(212,175,55,0.4)] hover:shadow-xl hover:shadow-[rgba(212,175,55,0.6)] hover:-translate-y-1 hover:scale-105"
            >
              Book Now
            </a>
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#1e1e1e] mt-4 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-white hover:text-[#d4af37] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#book" 
                className="bg-[#d4af37] text-black px-6 py-2 rounded-full font-semibold text-center hover:bg-[#c9a22e] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}