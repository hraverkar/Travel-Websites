import { Check, X } from 'lucide-react';

const WhatsIncluded = () => {
  const included = [
    "VIP Darshan at both Jyotirlingas",
    "Transportation in Amaze car",
    "1 Night stay in best hotel in Indore",
    "All meals (Lunch & Dinner)",
    "Experienced driver cum guide",
    "Fuel and toll charges",
    "Parking fees",
    "Indore Sarafa & Chappan experience",
    "Temple photography assistance",
    "Emergency support 24/7"
  ];

  const notIncluded = [
    "Personal expenses",
    "Shopping expenses",
    "Extra snacks/beverages",
    "Tips and donations",
    "Travel insurance"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            What's Included
          </h2>
          <p className="text-xl text-gray-600">
            Transparent pricing with no hidden costs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Included */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-green-700 flex items-center">
              <Check className="mr-3 text-green-600" size={28} />
              Included in Package
            </h3>
            <div className="space-y-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-green-500 rounded-full p-1">
                    <Check className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Not Included */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-700 flex items-center">
              <X className="mr-3 text-red-600" size={28} />
              Not Included
            </h3>
            <div className="space-y-4">
              {notIncluded.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-red-500 rounded-full p-1">
                    <X className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 text-white">
            <h3 className="text-4xl font-bold mb-4">₹18,999 Total Package</h3>
            <p className="text-xl text-orange-100 mb-6">For 2-3 people | All inclusive with best hotel stay</p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-semibold">Per Person (3 people)</h4>
                <p className="text-2xl font-bold">₹6,333</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-semibold">Per Person (2 people)</h4>
                <p className="text-2xl font-bold">₹9,499</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-semibold">Best Value</h4>
                <p className="text-lg">Group of 3 recommended</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
