import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/254712345678" 
      className="fixed bottom-10 right-10 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg z-50 bounce-animation hover:scale-110 hover:shadow-xl transition-transform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  )
}