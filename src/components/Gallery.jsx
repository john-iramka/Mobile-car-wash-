import { useEffect } from 'react'

const galleryImages = [
  {
    full: "https://images.pexels.com/photos/5592596/pexels-photo-5592596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    thumb: "https://images.pexels.com/photos/5592596/pexels-photo-5592596.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&q=80"
  },
  {
    full: "https://images.pexels.com/photos/4480535/pexels-photo-4480535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    thumb: "https://images.pexels.com/photos/4480535/pexels-photo-4480535.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&q=80"
  },
  {
    full: "https://images.pexels.com/photos/4480537/pexels-photo-4480537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    thumb: "https://images.pexels.com/photos/4480537/pexels-photo-4480537.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&q=80"
  },
  {
    full: "https://images.pexels.com/photos/4480545/pexels-photo-4480545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    thumb: "https://images.pexels.com/photos/4480545/pexels-photo-4480545.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&q=80"
  },
  {
    full: "https://images.pexels.com/photos/5592594/pexels-photo-5592594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    thumb: "https://images.pexels.com/photos/5592594/pexels-photo-5592594.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&q=80"
  },
  {
    full: "https://images.pexels.com/photos/4480543/pexels-photo-4480543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    thumb: "https://images.pexels.com/photos/4480543/pexels-photo-4480543.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&q=80"
  }
]

export default function Gallery() {
  useEffect(() => {
    // Initialize lightGallery when component mounts
    if (window.lightGallery) {
      window.lightGallery(document.getElementById('lightgallery'), {
        selector: '.gallery-item',
        download: false,
        counter: false
      })
    }

    // Initialize Juxtapose when component mounts
    if (window.juxtapose) {
      new window.juxtapose.JXSlider('#juxtapose-container', [
        {
          src: 'https://images.pexels.com/photos/5592596/pexels-photo-5592596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          label: 'Before'
        },
        {
          src: 'https://images.pexels.com/photos/4480535/pexels-photo-4480535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          label: 'After'
        }
      ], {
        animate: true,
        showLabels: true,
        showCredits: true,
        startingPosition: "50%",
        makeResponsive: true
      })
    }
  }, [])

  return (
    <section id="gallery" className="bg-[#1e1e1e] py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Our Work Gallery</h2>
        <p className="text-center text-xl mb-12">See the transformation for yourself</p>
        
        {/* Before/After Slider */}
        <div id="juxtapose-container" className="juxtapose w-full my-8 rounded-lg overflow-hidden shadow-xl"></div>
        
        {/* Image Gallery */}
        <div id="lightgallery" className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <a 
              key={index} 
              href={image.full} 
              className="gallery-item h-48 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-103"
            >
              <img 
                src={image.thumb} 
                alt={`Car wash ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </a>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="border border-[#d4af37] text-[#d4af37] px-6 py-2 rounded-full hover:bg-[#d4af37] hover:text-black transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}