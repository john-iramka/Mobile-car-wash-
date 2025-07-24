import { useEffect } from 'react';

const galleryImages = Array(6).fill({
  full: "/images/1.jpg",
  thumb: "/images/1.jpg"
});

export default function Gallery() {
  useEffect(() => {
    // Initialize lightGallery
    if (window.lightGallery) {
      window.lightGallery(document.getElementById('lightgallery'), {
        selector: '.gallery-item',
        download: false,
        counter: false
      });
    }

    // Initialize Juxtapose with different before/after images
    if (window.juxtapose) {
      new window.juxtapose.JXSlider('#juxtapose-container', [
        {
          src: '/images/1.jpg',
          label: 'Before'
        },
        {
          src: '/images/2.jpg',
          label: 'After'
        }
      ], {
        animate: true,
        showLabels: true,
        showCredits: false,
        startingPosition: "50%",
        makeResponsive: true
      });
    }
  }, []);

  return (
    <section id="gallery" className="bg-[#1e1e1e] py-16 px-4 text-white">
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
              className="gallery-item block h-48 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={image.thumb}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="border border-[#d4af37] text-[#d4af37] px-6 py-2 rounded-full hover:bg-[#d4af37] hover:text-black transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
