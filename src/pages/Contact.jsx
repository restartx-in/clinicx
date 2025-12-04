import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Info } from 'lucide-react';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-thin mb-6 text-white uppercase tracking-wide">
            Apply / Register
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto font-light text-lg">
            Start your journey with Lumina. Fill out the form below to register for workshops or apply for representation.
          </p>
        </div>

        {/* Application Form Container */}
        <div className="bg-[#121212] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Decorative decorative accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4a484] to-transparent opacity-50"></div>

            {formStatus === 'success' ? (
              <div className="py-24 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-900/20 rounded-full flex items-center justify-center mb-8 border border-green-500/30">
                  <CheckCircle className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Application Received</h3>
                <p className="text-gray-400 max-w-sm mx-auto mb-8">
                  Our team will review your submission and contact you within 48 hours with next steps.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="px-8 py-3 border border-[#c4a484] text-[#c4a484] text-xs font-bold uppercase tracking-widest hover:bg-[#c4a484] hover:text-black transition-colors"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Selection Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#c4a484] mb-4">I am interested in</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="cursor-pointer">
                        <input type="radio" name="type" className="peer sr-only" defaultChecked />
                        <div className="border border-white/10 p-4 text-center text-gray-400 peer-checked:border-[#c4a484] peer-checked:text-white peer-checked:bg-[#c4a484]/5 transition-all">
                          <span className="text-xs font-bold uppercase tracking-wider">Online Workshop</span>
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input type="radio" name="type" className="peer sr-only" />
                        <div className="border border-white/10 p-4 text-center text-gray-400 peer-checked:border-[#c4a484] peer-checked:text-white peer-checked:bg-[#c4a484]/5 transition-all">
                          <span className="text-xs font-bold uppercase tracking-wider">Agency Representation</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="space-y-6">
                    <h3 className="text-white font-serif italic text-xl border-b border-white/10 pb-2">Personal Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">First Name</label>
                        <input type="text" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#c4a484] focus:outline-none transition-colors placeholder-white/10" placeholder="JANE" />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Last Name</label>
                        <input type="text" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#c4a484] focus:outline-none transition-colors placeholder-white/10" placeholder="DOE" />
                    </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Email Address</label>
                        <input type="email" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#c4a484] focus:outline-none transition-colors placeholder-white/10" placeholder="EMAIL@EXAMPLE.COM" />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Phone</label>
                        <input type="tel" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#c4a484] focus:outline-none transition-colors placeholder-white/10" placeholder="+1 (000) 000-0000" />
                    </div>
                    </div>
                </div>

                {/* Stats (Optional) */}
                <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                        <h3 className="text-white font-serif italic text-xl">Measurements</h3>
                        <span className="text-[10px] text-gray-500 uppercase">Optional for Workshop</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <input type="text" className="bg-transparent border-b border-white/20 py-2 text-white focus:border-[#c4a484] focus:outline-none text-center placeholder-gray-600 text-sm" placeholder="Height" />
                        <input type="text" className="bg-transparent border-b border-white/20 py-2 text-white focus:border-[#c4a484] focus:outline-none text-center placeholder-gray-600 text-sm" placeholder="Bust/Chest" />
                        <input type="text" className="bg-transparent border-b border-white/20 py-2 text-white focus:border-[#c4a484] focus:outline-none text-center placeholder-gray-600 text-sm" placeholder="Waist" />
                        <input type="text" className="bg-transparent border-b border-white/20 py-2 text-white focus:border-[#c4a484] focus:outline-none text-center placeholder-gray-600 text-sm" placeholder="Hips" />
                    </div>
                </div>

                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Message / Social Handles</label>
                    <textarea rows={3} className="w-full bg-[#1a1a1a] border border-white/10 p-4 text-white focus:border-[#c4a484] focus:outline-none transition-colors text-sm font-light" placeholder="Tell us about your experience or paste your Instagram link..."></textarea>
                </div>

                <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full md:w-auto px-12 py-4 bg-[#c4a484] text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors disabled:opacity-50 flex items-center justify-center space-x-2 group"
                >
                    <span>{formStatus === 'submitting' ? 'Processing...' : 'Submit Application'}</span>
                    {!formStatus === 'submitting' && <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
        </div>
        
        {/* Quick Contact Footer */}
        <div className="mt-16 text-center border-t border-white/5 pt-12">
            <h4 className="text-[#c4a484] text-xs font-bold uppercase tracking-widest mb-4">General Inquiries</h4>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-500 text-sm font-light">
                <span className="flex items-center justify-center gap-2"><Mail className="h-4 w-4" /> info@lumina.agency</span>
                <span className="flex items-center justify-center gap-2"><Info className="h-4 w-4" /> +1 (212) 555-0199</span>
            </div>
        </div>
      </div>
    </div>
  );
};