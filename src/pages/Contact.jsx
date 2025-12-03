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
    <div className="min-h-screen bg-neutral-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Get in Touch</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Whether you're looking to book a model or aspire to become one, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-neutral-900 rounded-xl shadow-2xl overflow-hidden border border-white/5">
          
          {/* Contact Info */}
          <div className="bg-black text-white p-12 lg:col-span-1 flex flex-col justify-between border-r border-white/5">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8 text-gold">Contact Info</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider mb-1 text-white">Phone</p>
                    <p className="text-gray-400">+1 (212) 555-0199</p>
                    <p className="text-gray-500 text-xs mt-1">Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider mb-1 text-white">Email</p>
                    <p className="text-gray-400">bookings@lumina.agency</p>
                    <p className="text-gray-400">scouting@lumina.agency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider mb-1 text-white">Studio</p>
                    <p className="text-gray-400">152 Mercer St</p>
                    <p className="text-gray-400">New York, NY 10012</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Follow Us</p>
              <a href="#" className="inline-flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
                <span>@lumina_mgmt</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 lg:col-span-2 bg-neutral-900">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-white">Message Sent</h3>
                <p className="text-gray-400">Thank you for contacting Lumina. We will get back to you shortly.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 px-6 py-2 bg-gold text-black rounded-full hover:bg-white transition-colors text-sm font-bold uppercase tracking-widest"
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
                      className="w-full border-b border-white/20 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent text-white placeholder-gray-600"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full border-b border-white/20 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent text-white placeholder-gray-600"
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
                      className="w-full border-b border-white/20 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent text-white placeholder-gray-600"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                    <select className="w-full border-b border-white/20 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent text-gray-400">
                      <option className="bg-neutral-900 text-gray-200">Booking Inquiry</option>
                      <option className="bg-neutral-900 text-gray-200">New Face Submission</option>
                      <option className="bg-neutral-900 text-gray-200">Press & Media</option>
                      <option className="bg-neutral-900 text-gray-200">General</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="w-full border-b border-white/20 py-2 focus:border-gold focus:outline-none transition-colors bg-transparent resize-none text-white placeholder-gray-600"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors disabled:opacity-50"
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