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
  /** Suppress the in-section title when a PageHero already states it. */
  hideHeader?: boolean;
  initialService?: string;
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onNotify?: (msg: string) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  hideHeader = false,
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
        `Appointment request submitted for ${formData.fullName}! Our team will contact you at ${formData.phone} to confirm your appointment.`
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
      className="section bg-mist"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {!hideHeader && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Service Appointments</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight mb-4 font-display">
              Book Your Service
            </h2>

            <p className="text-sm sm:text-base text-copy max-w-2xl mx-auto leading-relaxed">
              Schedule a diagnostic check, device repair, or technology consultation. Appointment requests are reviewed and confirmed promptly by our team.
            </p>
          </div>
        )}


        {/* Booking Card Container */}
        <div className="bg-white border border-brand-200 rounded-3xl p-6 sm:p-10 relative overflow-hidden">

          {isSuccess ? (
            /* Success State */
            <div className="text-center py-10 sm:py-16 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center mx-auto text-brand-700">
                <CheckCircle2 className="w-8 h-8 text-brand-700" />
              </div>

              <div className="max-w-lg mx-auto">
                <h3 className="text-2xl font-bold text-ink mb-2 font-display">
                  Appointment Request Received!
                </h3>
                <p className="text-sm text-copy leading-relaxed mb-6">
                  Thank you, <strong className="text-ink">{formData.fullName}</strong>. Your appointment request for{' '}
                  <strong className="text-brand-700">{formData.serviceType}</strong> on{' '}
                  <strong className="text-ink">{formData.preferredDate} ({formData.preferredTime})</strong> has been received.
                </p>
                <div className="bg-mist border border-line rounded-2xl p-4 text-xs text-copy mb-8 text-left space-y-2">
                  <div className="flex items-center gap-2 text-copy">
                    <Info className="w-4 h-4 text-brand-700 shrink-0" />
                    <span><strong>Next Step:</strong> Our team will contact you via <strong>{formData.phone}</strong> to confirm scheduling.</span>
                  </div>
                  <div className="flex items-center gap-2 text-copy">
                    <Phone className="w-4 h-4 text-brand-700 shrink-0" />
                    <span>Have urgent questions? Call directly at <strong>{BUSINESS_INFO.phone}</strong>.</span>
                  </div>
                </div>

                <button
                  id="book-another-btn"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 transition-all"
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
                  <label htmlFor="booking-form-field-1" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                    <input
                      id="booking-form-field-1"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Taylor Smith"
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="booking-form-field-2" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                    <input
                      id="booking-form-field-2"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(416) 771-9078"
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="booking-form-field-3" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                    <input
                      id="booking-form-field-3"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="field"
                  />
                </div>
              </div>

              {/* Row 2: Service & Device Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-form-field-4" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1.5">
                    Service Type *
                  </label>
                    <select
                      id="booking-form-field-4"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="field"
                  >
                    <option value="Cell Phone Repair">Cell Phone Repair (iPhone / Samsung / Android)</option>
                    <option value="Tablet Repair">iPad &amp; Tablet Repair</option>
                    <option value="Computer Repair">Computer &amp; Laptop Repair</option>
                    <option value="Gaming Console Repair">Gaming Console Repair (PlayStation / Other)</option>
                    <option value="Custom Device Wrapping">Custom Device Wrapping</option>
                    <option value="Security Cameras">Security Cameras &amp; CCTV Installation</option>
                    <option value="Sell or Trade In a Device">Sell or Trade In a Device</option>
                    <option value="Device Sales Consultation">Phone or Computer Purchase Advice</option>
                    <option value="Technical Support">Device Support, Setup &amp; Data Transfer</option>
                    <option value="Business Technology">Business Technology &amp; Networking</option>
                    <option value="Other">Other Technology Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="booking-form-field-5" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1.5">
                    Device Type / Model *
                  </label>
                    <input
                      id="booking-form-field-5"
                      type="text"
                      required
                      value={formData.deviceType}
                      onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
                    placeholder="e.g. iPhone 13, Galaxy S22, Dell Inspiron, PlayStation 5..."
                    className="field"
                  />
                </div>
              </div>

              {/* Row 3: Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-form-field-6" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1.5">
                    Preferred Date *
                  </label>
                    <input
                      id="booking-form-field-6"
                      type="date"
                      required
                      value={formData.preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="booking-form-field-7" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1.5">
                    Preferred Time Window
                  </label>
                    <select
                      id="booking-form-field-7"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="field"
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
                <label htmlFor="booking-form-field-8" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1.5">
                  Message / Problem Description
                </label>
                  <input
                    id="booking-form-field-8"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe what you are experiencing or what service you require..."
                  className="field resize-none"
                />
              </div>

              {/* Notice & Disclaimer */}
              <div className="p-4 rounded-2xl bg-mist border border-line text-xs text-copy flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Please note:</strong> Appointment requests are subject to schedule availability and direct confirmation. Our team will reach out via call or text to finalize your timing.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto text-xs text-copy hover:text-brand-700 flex items-center justify-center gap-2 py-2"
                >
                  <Phone className="w-4 h-4 text-brand-700" />
                  <span>Immediate questions? Call {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  id="submit-booking-appointment-btn"
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 border border-brand-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
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
