import React, { useState } from 'react';
import { Calendar, Users, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupSize: '',
    preferredDate: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 2 hours to confirm your divine journey.",
    });
    console.log('Booking request:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Book Your Divine Journey
          </h2>
          <p className="text-xl text-blue-200">
            Reserve your spot for this spiritual weekend experience
          </p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="pl-4 h-12 border-2 border-gray-200 focus:border-orange-500"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="pl-12 h-12 border-2 border-gray-200 focus:border-orange-500"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    id="phone"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="pl-12 h-12 border-2 border-gray-200 focus:border-orange-500"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-gray-700 font-semibold">Group Size *</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={20} />
                  <Select onValueChange={(value: string) => handleChange('groupSize', value)}>
                    <SelectTrigger className="pl-12 h-12 border-2 border-gray-200 focus:border-orange-500">
                      <SelectValue placeholder="Select group size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 People (₹7,500 per person)</SelectItem>
                      <SelectItem value="3">3 People (₹5,000 per person)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date" className="text-gray-700 font-semibold">Preferred Weekend Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  id="date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e.target.value)}
                  className="pl-12 h-12 border-2 border-gray-200 focus:border-orange-500"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-700 font-semibold">Special Requirements</Label>
              <Textarea
                id="message"
                placeholder="Any special dietary requirements, accessibility needs, or other requests..."
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="border-2 border-gray-200 focus:border-orange-500 min-h-[100px]"
              />
            </div>
            
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Booking Summary:</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Total Package: ₹15,000 (for {formData.groupSize || '2-3'} people)</p>
                <p>• Advance Payment: ₹5,000 (refundable)</p>
                <p>• Balance Payment: On tour day</p>
                <p>• Cancellation: Free cancellation 48 hours before</p>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-14 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold text-lg shadow-lg"
            >
              <Send className="mr-2" size={20} />
              Book Your Divine Journey Now
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">For immediate booking or queries, contact us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                <Phone className="mr-2" size={20} />
                Call: +91 98765 43210
              </a>
              <a href="https://wa.me/919876543210" className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                <Phone className="mr-2" size={20} />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;