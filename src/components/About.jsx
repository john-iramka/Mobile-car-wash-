export default function About() {
  return (
    <section id="about" className="bg-[#1e1e1e] py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              Founded in 2020, ShineXpress Mobile Car Wash was born out of a desire to bring convenience 
              and quality to car owners in Nairobi. We noticed that people were spending too much time 
              waiting at traditional car washes and often weren't satisfied with the results.
            </p>
            <p className="mb-4">
              Our mission is to provide exceptional car cleaning services while saving our customers time 
              and water. We use eco-friendly products and water-saving techniques to minimize our 
              environmental impact.
            </p>
            <p>
              All our technicians undergo rigorous training to ensure your vehicle receives the best care 
              possible. We take pride in our attention to detail and customer satisfaction guarantee.
            </p>
          </div>
          <div className="lg:w-1/2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="ShineXpress team" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}