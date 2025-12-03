import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Get in Touch</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Whether you're looking to book a model or aspire to become one, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          
          {/* Contact Info */}
          <div className="bg-black text-white p-12 lg:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8">Contact Info</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-gray-400">+1 (212) 555-0199</p>
                    <p className="text-gray-400 text-xs mt-1">Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider mb-1">Email</p>
                    <p className="text-gray-400">bookings@lumina.agency</p>
                    <p className="text-gray-400">scouting@lumina.agency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider mb-1">Studio</p>
                    <p className="text-gray-400">152 Mercer St</p>
                    <p className="text-gray-400">New York, NY 10012</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="font-bold text-sm uppercase tracking-wider mb-4">Follow Us</p>
              <a href="#" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span>@lumina_mgmt</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 lg:col-span-2">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">Message Sent</h3>
                <p className="text-gray-500">Thank you for contacting Lumina. We will get back to you shortly.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-bold uppercase tracking-widest"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors bg-transparent"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors bg-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors bg-transparent"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                    <select className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors bg-transparent text-gray-700">
                      <option>Booking Inquiry</option>
                      <option>New Face Submission</option>
                      <option>Press & Media</option>
                      <option>General</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors bg-transparent resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="px-10 py-4 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};