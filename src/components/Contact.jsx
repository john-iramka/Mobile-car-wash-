import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="flex items-center text-xl mb-2">
                  <FaPhoneAlt className="text-[#d4af37] mr-3" />
                  Phone
                </h3>
                <p><a href="tel:+254712345678" className="hover:text-[#d4af37] transition-colors">+254 712 345 678</a></p>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl mb-2">
                  <FaEnvelope className="text-[#d4af37] mr-3" />
                  Email
                </h3>
                <p><a href="mailto:info@shinexpress.co.ke" className="hover:text-[#d4af37] transition-colors">info@shinexpress.co.ke</a></p>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl mb-2">
                  <FaWhatsapp className="text-[#d4af37] mr-3" />
                  WhatsApp
                </h3>
                <p><a href="https://wa.me/254712345678" className="hover:text-[#d4af37] transition-colors" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl mb-2">
                  <FaMapMarkerAlt className="text-[#d4af37] mr-3" />
                  Headquarters
                </h3>
                <p>Nairobi CBD, Kenya</p>
              </div>
              
              <div>
                <h3 className="text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/shinexpress" className="text-white hover:text-[#d4af37] transition-colors" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="https://instagram.com/shinexpress" className="text-white hover:text-[#d4af37] transition-colors" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} />
                  </a>
                  <a href="https://tiktok.com/@shinexpress" className="text-white hover:text-[#d4af37] transition-colors" target="_blank" rel="noopener noreferrer">
                    <FaTiktok size={20} />
                  </a>
                  <a href="https://twitter.com/shinexpress" className="text-white hover:text-[#d4af37] transition-colors" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808477395885!2d36.8211593147539!3d-1.286385835980925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d71cc97cc5%3A0x4a01f8b1a4fdc0e5!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske" 
                title="ShineXpress Location Map"
                className="w-full h-64 md:h-96"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}