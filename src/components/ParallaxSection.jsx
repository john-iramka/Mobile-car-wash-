export default function ParallaxSection() {
  return (
    <section 
      className="min-h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <h2 className="text-3xl md:text-5xl font-bold text-white relative z-10 px-4 text-center">
        Drive Clean. Shine Everywhere.
      </h2>
    </section>
  )
}