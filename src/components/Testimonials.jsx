import { useEffect, useRef, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

export default function StatsAndTestimonials() {
  const stats = [
    { label: "Customers", value: 217, suffix: "" },
    { label: "Experience", value: 100, suffix: "%" },
    { label: "Trust", value: 100, suffix: "%" },
    { label: "Reliability", value: 100, suffix: "%" },
  ]

  const testimonials = [
    {
      quote: "Amazing work",
      text: "The team did an amazing job with both interior and exterior. My car looks brand new!",
      author: "John M."
    },
    {
      quote: "Highly recommended",
      text: "They came to my place and cleaned the car professionally. I’ll definitely book again.",
      author: "Linda A."
    },
    {
      quote: "Efficient & friendly",
      text: "Great communication and quick service. Loved the attention to detail.",
      author: "Kevin W."
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [fade, setFade] = useState(true)
  const countersRef = useRef([])
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        setFade(true)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          countersRef.current.forEach((el, index) => {
            let start = 0
            const end = stats[index].value
            const duration = 2000
            const startTime = performance.now()

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const value = Math.floor(progress * end)
              el.innerText = value + stats[index].suffix
              if (progress < 1) requestAnimationFrame(animate)
            }

            requestAnimationFrame(animate)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated, stats])

  return (
    <section ref={sectionRef} className="bg-black text-white py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Stats Circles */}
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center relative">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#333"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#888"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset={hasAnimated ? "0" : "251.2"}
                  fill="transparent"
                  className="transition-all duration-[2s]"
                />
              </svg>
              <div className="absolute top-0 left-0 w-24 h-24 flex items-center justify-center font-bold text-xl">
                <span ref={(el) => (countersRef.current[i] = el)}>0</span>
              </div>
              <p className="text-gray-300 mt-4 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-[#2c2c2c] p-8 rounded-xl shadow-md relative transition-all duration-500 ease-in-out">
          <FaQuoteLeft className="text-4xl text-gray-600 mb-4" />
          <div className={`${fade ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-500`}>
            <h3 className="text-xl font-semibold italic mb-4">
              "{testimonials[currentTestimonial].quote}"
            </h3>
            <p className="text-gray-200 mb-6">{testimonials[currentTestimonial].text}</p>
            <p className="font-bold text-sm text-gray-400">{testimonials[currentTestimonial].author}</p>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setFade(false)
                  setTimeout(() => {
                    setCurrentTestimonial(i)
                    setFade(true)
                  }, 300)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentTestimonial ? 'bg-white' : 'bg-gray-500'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
