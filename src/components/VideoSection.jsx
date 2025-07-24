import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/burner.mp4" 
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/50 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          See Us In Action
        </motion.h2>
      </div>
    </section>
  );
};

export default VideoSection;
