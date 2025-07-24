import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const phrases = [
  "We Bring the Shine to You",
  "Premium Mobile Car Wash",
  "Interior Vacuum & Steam Clean",
  "Ceramic Wax & Polish",
  "Engine Bay Detailing",
  "Eco-Friendly Wash Solutions"
];

export default function Hero() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const typeSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      setText(currentPhrase.substring(0, charIndex));

      if (!isDeleting && charIndex < currentPhrase.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1500); // pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/loop.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 container mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 min-h-[80px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {text}
          <span className="border-r-2 border-white animate-pulse ml-1" />
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Your Premium Mobile Car Wash Experience in Nairobi
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <a
            href="#book"
            className="px-8 py-3 rounded-full font-semibold text-white border border-[#d4af37] bg-transparent hover:bg-[#d4af37]/10 transition-all duration-300"
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
