import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { useEffect } from 'react'
import { gsap } from 'gsap'

const testimonials = [
  {
    rating: 5,
    text: "ShineXpress saved me so much time! They come to my office while I'm working and my car is sparkling when I leave. Best service in Nairobi!",
    name: "James M.",
    location: "Westlands",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    rating: 5,
    text: "The full detailing package brought my 5-year-old car back to life! It looks brand new. Will definitely be subscribing to their monthly plan.",
    name: "Sarah K.",
    location: "Karen",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    rating: 4.5,
    text: "As a busy mom, I don't have time for car washes. ShineXpress comes to my home while I'm with the kids. Game changer!",
    name: "Linda W.",
    location: "Kilimani",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
]

export default function Testimonials() {
  useEffect(() => {
    gsap.fromTo(".testimonial-card", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.15, 
        delay: 0.5,
        ease: "power2.out"
      }
    )
  }, [])

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-center text-xl mb-12">Rated 4.9/5 from 200+ reviews</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card glass-effect rounded-lg p-6 opacity-0"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => {
                  if (i < Math.floor(testimonial.rating)) {
                    return <FaStar key={i} className="text-yellow-500" />
                  } else if (i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0) {
                    return <FaStarHalfAlt key={i} className="text-yellow-500" />
                  } else {
                    return <FaStar key={i} className="text-gray-500" />
                  }
                })}
              </div>
              <p className="mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}