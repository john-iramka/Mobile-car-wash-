export default function About() {
  return (
    <section id="about" className="bg-black text-white">
      <div className="flex flex-col lg:flex-row max-w-[1600px] mx-auto">
        
        {/* Left Side - Image with dark overlay */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
          <img
            src="/images/companycar.png" 
            alt="Buff ‘n’ Go team"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="mb-4 leading-relaxed text-gray-300">
            Founded in 2020, Buff ‘n’ Go Mobile Car Wash was born out of a desire to bring convenience 
            and quality to car owners in Nairobi. We noticed that people were spending too much time 
            waiting at traditional car washes and often weren't satisfied with the results.
          </p>
          <p className="mb-4 leading-relaxed text-gray-300">
            Our mission is to provide exceptional car cleaning services while saving our customers time 
            and water. We use eco-friendly products and water-saving techniques to minimize our 
            environmental impact.
          </p>
          <p className="leading-relaxed text-gray-300">
            All our technicians undergo rigorous training to ensure your vehicle receives the best care 
            possible. We take pride in our attention to detail and customer satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
