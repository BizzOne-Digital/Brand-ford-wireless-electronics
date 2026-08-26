import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { ContactSubmission, PageRoute } from '../types';
import { 
  Phone, 
  Mail, 
  Globe, 
  Instagram, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  MessageSquare,
  Calendar
} from 'lucide-react';

interface ContactSectionProps {
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onOpenBooking?: () => void;
  onNotify?: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  isFullPage = false,
  onNavigate,
  onOpenBooking,
  onNotify = (_msg: string) => {},
}) => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      onNotify('Please fill in your name, phone number, and message.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onNotify(
        `Thank you ${formData.name}! Your message has been sent to Ernest at Brantford Wireless. We will respond promptly.`
      );
    }, 600);
  };

  return (
    <section 
      id="contact-section"
      className={`relative ${isFullPage ? 'pt-32 pb-24' : 'py-20 lg:py-28'} bg-[#040711]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Contact Brantford Wireless & Electronics
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Have a question about a device, computer repair, or accessory? Speak with Ernest directly or send us an inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Business Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Info Card */}
            <div className="bg-[#070d1e] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold font-display">
                  Business Details
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 font-display">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Primary Contact: <strong className="text-slate-200">{BUSINESS_INFO.contactPerson}</strong>
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  id="contact-info-phone"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Direct Phone / Calls
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {BUSINESS_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  id="contact-info-email"
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Email Inquiries
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors truncate block">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Website */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Official Domain
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {BUSINESS_INFO.website}
                    </span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Social Media
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-blue-400">
                      {BUSINESS_INFO.social}
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Region Note */}
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/30 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <strong className="text-white block mb-0.5">Location & Area Served</strong>
                  Serving Brantford & surrounding Ontario communities. Please contact Ernest by phone or appointment form for showroom visits and service drop-offs.
                </div>
              </div>

              {/* Book button shortcut */}
              {onOpenBooking && (
                <button
                  id="contact-book-shortcut-btn"
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 flex items-center justify-center gap-2 transition-all"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>Prefer To Schedule An Appointment?</span>
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-[#070d1e] border border-blue-900/20 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out the form below and Ernest will respond promptly.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-blue-600/20 border border-blue-400/50 flex items-center justify-center mx-auto text-blue-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-white font-display">Message Dispatched!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding "{formData.subject}" has been received. We will contact you at <strong className="text-blue-300">{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mitchell"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(416) 000-0000"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@domain.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Subject / Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="General Inquiry">General Tech Inquiry</option>
                      <option value="Mobile Phone / Accessories">Mobile Phones & Accessories</option>
                      <option value="Computer Sales">Computer Sales Consultation</option>
                      <option value="Repair Diagnostic">Repair & Diagnostic Question</option>
                      <option value="Product Availability">Product Stock & Availability</option>
                      <option value="Other Question">Other Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what device you have, what problem you are facing, or what products you need..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Direct responses from Ernest</span>
                  </div>

                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 border border-blue-400/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
