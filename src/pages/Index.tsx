
import Hero from '../components/Hero';
import TourPackage from '../components/TourPackage';
import Itinerary from '../components/Itinerary';
import WhatsIncluded from '../components/WhatsIncluded';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <Hero />
      <TourPackage />
      <Itinerary />
      <WhatsIncluded />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;