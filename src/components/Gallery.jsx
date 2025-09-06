import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    "/images/1.jpg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const closeEnlargedImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="bg-[#1e1e1e] py-8 md:py-16 px-4 text-white relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          Our Work Gallery
        </h2>
        <p className="text-center text-lg md:text-xl mb-8 md:mb-12">
          See the transformation for yourself
        </p>

        {/* Image Gallery Container - This will be the boundary for the enlarged image */}
        <div className="relative min-h-[500px]">
          {/* Regular Grid Layout */}
          <div className={`grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 transition-all duration-300 ${selectedImage !== null ? 'opacity-0' : 'opacity-100'}`}>
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="block aspect-square sm:aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading={index > 1 ? "lazy" : "eager"}
                />
              </div>
            ))}
          </div>

          {/* Enlarged Image - Positioned within the gallery section */}
          {selectedImage !== null && (
            <div className="absolute inset-0 bg-[#1e1e1e] z-10 flex flex-col items-center justify-center p-4">
              <button 
                className="absolute top-4 right-4 text-white text-3xl z-20 hover:text-[#d4af37] transition-colors bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={closeEnlargedImage}
                aria-label="Close image"
              >
                &times;
              </button>
              
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={galleryImages[selectedImage]}
                  alt={`Enlarged Gallery Image ${selectedImage + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              <div className="text-white text-center mt-4 flex items-center justify-center space-x-4">
                <button 
                  className="bg-[#d4af37] text-black w-10 h-10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)}
                  disabled={selectedImage === 0}
                >
                  &larr;
                </button>
                
                <span className="mx-2">
                  Image {selectedImage + 1} of {galleryImages.length}
                </span>
                
                <button 
                  className="bg-[#d4af37] text-black w-10 h-10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setSelectedImage((selectedImage + 1) % galleryImages.length)}
                  disabled={selectedImage === galleryImages.length - 1}
                >
                  &rarr;
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CTA - Hidden when image is enlarged */}
        <div className={`text-center mt-8 md:mt-12 transition-opacity duration-300 ${selectedImage !== null ? 'opacity-0' : 'opacity-100'}`}>
          <button className="border border-[#d4af37] text-[#d4af37] px-6 py-2 rounded-full hover:bg-[#d4af37] hover:text-black transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}