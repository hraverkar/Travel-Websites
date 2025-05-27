
import { MapPin, Star, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Divine Jyotirlinga Tour
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-orange-100">
            Mahakaleshwar Ujjain & Omkareshwar
          </p>
          <p className="text-lg md:text-xl text-blue-200">
            2 Days Weekend Spiritual Journey | VIP Darshan | Complete Package | Best Hotel Stay
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <Users className="mx-auto mb-3 text-orange-300" size={32} />
            <h3 className="font-semibold text-orange-200">Group Size</h3>
            <p className="text-sm text-blue-200">2-3 People</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <Calendar className="mx-auto mb-3 text-orange-300" size={32} />
            <h3 className="font-semibold text-orange-200">Duration</h3>
            <p className="text-sm text-blue-200">2 Days Weekend</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <Star className="mx-auto mb-3 text-orange-300" size={32} />
            <h3 className="font-semibold text-orange-200">VIP Darshan</h3>
            <p className="text-sm text-blue-200">Priority Access</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <MapPin className="mx-auto mb-3 text-orange-300" size={32} />
            <h3 className="font-semibold text-orange-200">Transport</h3>
            <p className="text-sm text-blue-200">Amaze Car</p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-3xl font-bold mb-6 shadow-2xl">
            ₹18,999 Only
          </div>
          <p className="text-orange-200 text-lg">All Inclusive Package with Best Hotel Stay</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
