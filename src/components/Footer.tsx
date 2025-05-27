
import { MapPin, Phone, Mail, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Divine Jyotirlinga Tours
            </h3>
            <p className="text-gray-300 mb-4">
              Experience the divine energy of sacred Jyotirlingas with our carefully crafted spiritual tours.
            </p>
            <div className="flex space-x-2">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#tour" className="hover:text-orange-300">Tour Package</a></li>
              <li><a href="#itinerary" className="hover:text-orange-300">Itinerary</a></li>
              <li><a href="#booking" className="hover:text-orange-300">Book Now</a></li>
              <li><a href="#contact" className="hover:text-orange-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Sacred Places</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Mahakaleshwar Jyotirlinga</li>
              <li>Omkareshwar Jyotirlinga</li>
              <li>Indore Sarafa Bazaar</li>
              <li>Chappan Dukan</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="mr-3 text-orange-400" size={18} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-orange-400" size={18} />
                <span>info@divinetours.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 text-orange-400" size={18} />
                <span>Indore, Madhya Pradesh</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Divine Jyotirlinga Tours. All rights reserved. | Blessed journeys since 2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
