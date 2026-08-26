import React, { useState } from 'react';
import { BookingSubmission, PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  Send, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  Info,
  Smartphone,
  Laptop
} from 'lucide-react';

interface BookingFormProps {
  initialService?: string;
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onNotify?: (msg: string) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = '',
  isFullPage = false,
  onNavigate,
  onNotify = (_msg: string) => {},
}) => {
  const [formData, setFormData] = useState<BookingSubmission>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: initialService || 'Mobile Device',
    deviceType: '',
    preferredDate: '',
    preferredTime: '11:00 AM - 01:00 PM',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
    'Flexible / Any Time',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.preferredDate) {
      onNotify('Please complete your name, phone number, and preferred date.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSuccess(true);
      onNotify(
        `Appointment request submitted for ${formData.fullName}! Ernest will contact you at ${formData.phone} to confirm your appointment.`
      );
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceType: 'Mobile Device',
      deviceType: '',
      preferredDate: '',
      preferredTime: '11:00 AM - 01:00 PM',
      message: '',
    });
    setIsSuccess(false);
  };

  return (
    <section 
      id="booking-service-section"
      className={`relative ${isFullPage ? 'pt-32 pb-24' : 'py-20 lg:py-28'} bg-[#030610]`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Service Appointments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Book Your Service
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a diagnostic check, device repair, or technology consultation. Appointment requests are reviewed and confirmed promptly by Ernest.
          </p>
        </div>

        {/* Booking Card Container */}
        <div className="bg-[#070d1e] border border-blue-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-10 sm:py-16 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-400/50 flex items-center justify-center mx-auto text-blue-400 shadow-xl shadow-blue-600/20">
                <CheckCircle2 className="w-8 h-8 text-blue-400" />
              </div>

              <div className="max-w-lg mx-auto">
                <h3 className="text-2xl font-bold text-white mb-2 font-display">
                  Appointment Request Received!
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your appointment request for{' '}
                  <strong className="text-blue-300">{formData.serviceType}</strong> on{' '}
                  <strong className="text-white">{formData.preferredDate} ({formData.preferredTime})</strong> has been received.
                </p>
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 text-xs text-slate-400 mb-8 text-left space-y-2">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Info className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Next Step:</strong> Ernest will contact you via <strong>{formData.phone}</strong> to confirm scheduling.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Have urgent questions? Call directly at <strong>{BUSINESS_INFO.phone}</strong>.</span>
                  </div>
                </div>

                <button
                  id="book-another-btn"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ernest Taylor"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(416) 771-9078"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Row 2: Service & Device Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Service Type *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Mobile Device">Mobile Device (Repair / Setup)</option>
                    <option value="Computer Repair">Computer Repair & Diagnostics</option>
                    <option value="Computer Sales">Computer Sales Consultation</option>
                    <option value="Accessories">Accessories & Protection</option>
                    <option value="Technical Support">Technical Support & Troubleshooting</option>
                    <option value="Other">Other Technology Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Device Type / Model *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.deviceType}
                    onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
                    placeholder="e.g. iPhone 13, Dell Inspiron, Custom Desktop..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Row 3: Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Message / Problem Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Message / Problem Description
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe what you are experiencing or what service you require..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              {/* Notice & Disclaimer */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Please note:</strong> Appointment requests are subject to schedule availability and direct confirmation. Ernest will reach out via call or text to finalize your timing.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto text-xs text-slate-400 hover:text-blue-300 flex items-center justify-center gap-2 py-2"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>Immediate questions? Call {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  id="submit-booking-appointment-btn"
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 border border-blue-400/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {submitting ? (
                    <span>Processing Request...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Request Appointment</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
