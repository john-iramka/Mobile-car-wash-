export default function VideoSection() {
  return (
    <section className="bg-[#1e1e1e] py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">See Us In Action</h2>
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.youtube.com/embed/9No-FiEInLA?autoplay=0&showinfo=0&controls=1" 
              title="ShineXpress Car Wash Demonstration"
              className="w-full h-[250px] md:h-[450px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}