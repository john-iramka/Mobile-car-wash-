export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const servicesLinks = [
    { name: 'Basic Wash', href: '#services' },
    { name: 'Interior Cleaning', href: '#services' },
    { name: 'Full Detailing', href: '#services' },
    { name: 'Subscription Plans', href: '#pricing' },
    { name: 'Add-ons', href: '#services' }
  ]

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#d4af37] mb-4">ShineXpress</h3>
            <p className="text-gray-400">
              Nairobi's premier mobile car wash service. We bring professional cleaning right to your doorstep.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#d4af37] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#d4af37] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <a href="tel:+254712345678" className="hover:text-[#d4af37] transition-colors">+254 712 345 678</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@shinexpress.co.ke" className="hover:text-[#d4af37] transition-colors">info@shinexpress.co.ke</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Nairobi CBD</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2023 ShineXpress Mobile Car Wash. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Website designed for Nairobi's finest mobile car wash service
          </p>
        </div>
      </div>
    </footer>
  )
}