import { Camera, Car, Utensils, Moon } from 'lucide-react';

const TourPackage = () => {
  const highlights = [
    {
      icon: Camera,
      title: "VIP Darshan",
      description: "Skip the lines with priority access to both Jyotirlingas"
    },
    {
      icon: Car,
      title: "Comfortable Travel",
      description: "Travel in style with our well-maintained Amaze car"
    },
    {
      icon: Utensils,
      title: "All Meals Included",
      description: "Delicious lunch and dinner throughout the journey"
    },
    {
      icon: Moon,
      title: "Indore Night Life",
      description: "Experience famous Sarafa Bazaar and Chappan Dukan"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Complete Spiritual Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on a divine journey to two of the most sacred Jyotirlingas with our carefully crafted weekend package
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg">
                <highlight.icon className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Why Choose Our Tour?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Experienced Guide</h4>
              <p className="text-orange-100">Local expertise and spiritual insights</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Hassle-Free</h4>
              <p className="text-orange-100">Everything planned and organized for you</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Best Value</h4>
              <p className="text-orange-100">Complete package at unbeatable price</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackage;
