import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { ContactSubmission, PageRoute } from '../types';
import {
  Phone,
  Mail,
  Instagram,
  Send,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

interface ContactSectionProps {
  /** Suppress the in-section title when a PageHero already states it. */
  hideHeader?: boolean;
  /** Full page shows the message form; the homepage shows a compact contact band. */
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onOpenBooking?: () => void;
  onNotify?: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  hideHeader = false,
  isFullPage = false,
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
      onNotify('Please fill in your name, phone number and message.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onNotify(
        `Thank you ${formData.name}. Your message has been sent. We will respond promptly.`
      );
    }, 600);
  };

  const details = (
    <div className="space-y-1">
      <a
        id="contact-info-phone"
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="flex min-h-[44px] items-center gap-3 text-ink hover:text-brand-700 transition-colors"
      >
        <Phone aria-hidden="true" className="w-4 h-4 text-brand-600 shrink-0" />
        <span className="font-semibold">{BUSINESS_INFO.phone}</span>
      </a>

      <a
        id="contact-info-email"
        href={`mailto:${BUSINESS_INFO.email}`}
        className="flex min-h-[44px] items-center gap-3 text-copy hover:text-brand-700 transition-colors min-w-0"
      >
        <Mail aria-hidden="true" className="w-4 h-4 text-brand-600 shrink-0" />
        <span className="truncate">{BUSINESS_INFO.email}</span>
      </a>

      <a
        href={BUSINESS_INFO.socialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[44px] items-center gap-3 text-copy hover:text-brand-700 transition-colors"
      >
        <Instagram aria-hidden="true" className="w-4 h-4 text-brand-600 shrink-0" />
        <span>{BUSINESS_INFO.social}</span>
      </a>

      <p className="flex items-start gap-3 text-copy">
        <MapPin aria-hidden="true" className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
        <span>{BUSINESS_INFO.locationNote}</span>
      </p>
    </div>
  );

  /* Homepage: a short contact band. The full form lives on the contact page. */
  if (!isFullPage) {
    return (
      <section id="contact-section" className="section bg-mist">
        <div className="shell">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-[1.1] font-bold text-ink">
                Come in, or call us first
              </h2>
              <p className="mt-4 text-base sm:text-lg text-copy leading-relaxed max-w-[46ch]">
                Ask for {BUSINESS_INFO.contactPerson}. We are happy to talk through a repair,
                a device upgrade or a quote before you visit.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                {onOpenBooking && (
                  <button
                    id="contact-book-shortcut-btn"
                    onClick={onOpenBooking}
                    className="btn btn-primary"
                  >
                    <Calendar aria-hidden="true" className="w-4 h-4" />
                    <span>Book a Service</span>
                  </button>
                )}
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn btn-secondary">
                  <Phone aria-hidden="true" className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:pt-2 text-[0.95rem]">{details}</div>
          </div>
        </div>
      </section>
    );
  }

  /* Contact page: details plus the message form. */
  return (
    <section id="contact-section" className="section bg-white">
      <div className="shell">

        {!hideHeader && (
  <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-[1.1] font-bold text-ink">
              Contact {BUSINESS_INFO.shortName}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-copy leading-relaxed">
              Primary contact:{' '}
              <strong className="text-ink font-semibold">{BUSINESS_INFO.contactPerson}</strong>.
              Call for the fastest answer, or send a message and we will get back to you.
            </p>
          </div>
        )}

        <div className={`${hideHeader ? '' : 'mt-10 lg:mt-14'} grid lg:grid-cols-12 gap-8 lg:gap-12 items-start`}>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-mist border border-line p-6 sm:p-7">
              {details}
              {onOpenBooking && (
                <button
                  id="contact-book-shortcut-btn"
                  onClick={onOpenBooking}
                  className="btn btn-primary w-full mt-6"
                >
                  <Calendar aria-hidden="true" className="w-4 h-4" />
                  <span>Book a Service</span>
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="card p-8 text-center">
                <span className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center mx-auto text-brand-600">
                  <CheckCircle2 aria-hidden="true" className="w-7 h-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">Message sent</h3>
                <p className="mt-3 text-sm text-copy max-w-md mx-auto">
                  Thank you, <strong className="text-ink font-semibold">{formData.name}</strong>.
                  Your inquiry about {formData.subject} has been received. We will contact you
                  at <strong className="text-ink font-semibold">{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-ink">Send a message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-ink mb-1.5">
                      Your name <span className="text-brand-700">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="field"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-ink mb-1.5">
                      Phone number <span className="text-brand-700">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-ink mb-1.5">
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="field"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-semibold text-ink mb-1.5">
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="field"
                    >
                      <option value="General Inquiry">General Tech Inquiry</option>
                      <option value="Mobile Phone / Accessories">Mobile Phones &amp; Accessories</option>
                      <option value="Computer Sales">Computer Sales Consultation</option>
                      <option value="Repair Diagnostic">Repair &amp; Diagnostic Question</option>
                      <option value="Product Availability">Product Stock &amp; Availability</option>
                      <option value="Other Question">Other Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-ink mb-1.5">
                    Your message <span className="text-brand-700">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what device you have and what you need"
                    className="field resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="flex items-center gap-2 text-xs text-faint">
                    <ShieldCheck aria-hidden="true" className="w-4 h-4 text-brand-600" />
                    <span>Replies come directly from {BUSINESS_INFO.contactPerson}</span>
                  </p>

                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary w-full sm:w-auto disabled:opacity-60"
                  >
                    {submitting ? (
                      <span>Sending</span>
                    ) : (
                      <>
                        <Send aria-hidden="true" className="w-4 h-4" />
                        <span>Send message</span>
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
