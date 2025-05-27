import { Clock, MapPin, Star, Camera, Hotel, Utensils } from 'lucide-react';

const Itinerary = () => {
  const dayOne = [
    { time: "Morning", activity: "Arrival in Indore & Hotel Check-in", icon: Hotel },
    { time: "10:00 AM", activity: "Travel to Mahakaleshwar Temple, Ujjain", icon: Clock },
    { time: "11:30 AM", activity: "VIP Darshan at Mahakaleshwar Jyotirlinga", icon: Star },
    { time: "1:30 PM", activity: "Traditional lunch in Ujjain", icon: Utensils },
    { time: "3:00 PM", activity: "Return journey to Indore", icon: Clock },
    { time: "5:00 PM", activity: "Visit famous Khajrana Ganesh Mandir", icon: Star },
    { time: "7:00 PM", activity: "Evening rest at hotel", icon: Hotel },
    { time: "9:00 PM", activity: "Night food tour - Chappan Dukan or Sarafa Bazaar", icon: Utensils }
  ];

  const dayTwo = [
    { time: "6:00 AM", activity: "Early morning travel to Omkareshwar", icon: Clock },
    { time: "8:30 AM", activity: "Sacred Narmada River bath (Isnan)", icon: Star },
    { time: "9:30 AM", activity: "VIP Darshan at Omkareshwar Jyotirlinga", icon: Star },
    { time: "11:00 AM", activity: "Darshan at Mamleshwar Temple", icon: Star },
    { time: "12:30 PM", activity: "Temple complex exploration & photography", icon: Camera },
    { time: "2:00 PM", activity: "Lunch at Omkareshwar", icon: Utensils },
    { time: "3:30 PM", activity: "Return journey to Indore", icon: Clock },
    { time: "6:00 PM", activity: "Arrival in Indore & tour completion", icon: MapPin }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            Detailed Itinerary
          </h2>
          <p className="text-xl text-gray-600">
            Carefully planned schedule starting from Indore for maximum spiritual experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Day 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Day 1 - Indore to Mahakaleshwar & Khajrana
            </h3>
            <div className="space-y-6">
              {dayOne.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full p-3 group-hover:shadow-lg transition-all duration-300">
                    <item.icon className="text-orange-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="font-semibold text-orange-600">{item.time}</span>
                    </div>
                    <p className="text-gray-700">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              Day 2 - Omkareshwar & Return to Indore
            </h3>
            <div className="space-y-6">
              {dayTwo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-3 group-hover:shadow-lg transition-all duration-300">
                    <item.icon className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="font-semibold text-blue-600">{item.time}</span>
                    </div>
                    <p className="text-gray-700">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
