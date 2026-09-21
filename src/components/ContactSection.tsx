import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { ContactSubmission, PageRoute } from '../types';
import { Phone, Mail, Instagram, Send, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  /** Suppress the in-section title when a PageHero already states it. */
  hideHeader?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onOpenBooking?: () => void;
  onNotify?: (msg: string) => void;
}

/** Which required fields are currently missing. */
type FieldErrors = Partial<Record<'name' | 'phone' | 'message', string>>;

const REQUIRED_MESSAGE = 'This is a required field.';

/**
 * The contact page: one card holding the ways in on the left and the message
 * form on the right.
 *
 * Both columns sit inside a single bordered panel rather than floating on the
 * page, which is what makes the two halves read as one exchange: here is how
 * to reach us, here is how to write to us.
 *
 * The store publishes no opening hours, so there is no hours row. Do not add
 * one until real hours exist in `BUSINESS_INFO`, and do not fill it with a
 * plausible guess.
 */
export const ContactSection: React.FC<ContactSectionProps> = ({
  hideHeader = false,
  onNotify = (_msg: string) => {},
}) => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /** Updates one field and clears its error as soon as it has a value. */
  const update = (key: keyof ContactSubmission, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (value.trim() && key in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as keyof FieldErrors];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /* Validated here rather than by the browser: `noValidate` on the form
       turns off the native bubbles so every missing field is named at once,
       under the field it belongs to, instead of one at a time. */
    const next: FieldErrors = {};
    if (!formData.name.trim()) next.name = REQUIRED_MESSAGE;
    if (!formData.phone.trim()) next.phone = REQUIRED_MESSAGE;
    if (!formData.message.trim()) next.message = REQUIRED_MESSAGE;

    setErrors(next);

    if (Object.keys(next).length > 0) {
      onNotify('Please fill in your name, phone number and message.');
      document.getElementById(`contact-${Object.keys(next)[0]}`)?.focus();
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

  /** Field shell: label, control, and the error line beneath it. */
  const fieldClass = (key: keyof FieldErrors) =>
    `field ${errors[key] ? 'border-red-400 bg-red-50/60' : ''}`;

  const errorLine = (key: keyof FieldErrors) =>
    errors[key] ? (
      <p id={`contact-${key}-error`} className="mt-1.5 text-[13px] font-medium text-red-600">
        {errors[key]}
      </p>
    ) : null;

  const invalidProps = (key: keyof FieldErrors) =>
    errors[key]
      ? ({ 'aria-invalid': true, 'aria-describedby': `contact-${key}-error` } as const)
      : {};

  return (
    <section id="contact-section" className="section bg-white">
      <div className="shell">
        {!hideHeader && (
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl lg:text-[2.5rem] lg:leading-[1.1]">
              Contact {BUSINESS_INFO.shortName}
            </h2>
          </div>
        )}

        {/* One panel around both halves. */}
        <div className="rounded-2xl border border-line bg-white p-6 sm:p-8 lg:p-10">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Ways in. First on a phone: calling is the fastest answer. */}
            <div className="lg:col-span-5">
              <h2 className="flex items-center gap-3 text-xl font-bold text-ink">
                <span aria-hidden="true" className="block h-6 w-1 rounded-full bg-brand-600" />
                <span>Get in touch</span>
              </h2>

              <div className="mt-6 space-y-1">
                <a
                  id="contact-info-address"
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[52px] items-start gap-4 text-ink transition-colors hover:text-brand-700"
                >
                  <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    <span className="block font-semibold">{BUSINESS_INFO.addressLine}</span>
                    <span className="block text-copy">{BUSINESS_INFO.addressCity}</span>
                  </span>
                </a>

                <a
                  id="contact-info-email"
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex min-h-[52px] items-center gap-4 text-ink transition-colors hover:text-brand-700"
                >
                  <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-600" />
                  <span className="min-w-0 truncate font-semibold">{BUSINESS_INFO.email}</span>
                </a>

                <a
                  id="contact-info-phone"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex min-h-[52px] items-center gap-4 text-ink transition-colors hover:text-brand-700"
                >
                  <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-600" />
                  <span className="font-semibold">{BUSINESS_INFO.phone}</span>
                </a>
              </div>

              <hr className="my-6 border-t border-dashed border-line" />

              <a
                href={BUSINESS_INFO.socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Brantford Wireless on Instagram, ${BUSINESS_INFO.social}`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-brand-700"
              >
                <Instagram aria-hidden="true" className="h-5 w-5" />
              </a>

              <hr className="mt-6 border-t border-dashed border-line" />
            </div>

            {/* The form takes the wider column. */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="py-6 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <CheckCircle2 aria-hidden="true" className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">Message sent</h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-copy">
                    Thank you, <strong className="font-semibold text-ink">{formData.name}</strong>.
                    Your inquiry about {formData.subject} has been received. We will contact you at{' '}
                    <strong className="font-semibold text-ink">{formData.phone}</strong>.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary mt-6">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-sm font-semibold text-ink"
                      >
                        Your name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={(e) => update('name', e.target.value)}
                        className={fieldClass('name')}
                        {...invalidProps('name')}
                      />
                      {errorLine('name')}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-1.5 block text-sm font-semibold text-ink"
                      >
                        Phone number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className={fieldClass('phone')}
                        {...invalidProps('phone')}
                      />
                      {errorLine('phone')}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-sm font-semibold text-ink"
                      >
                        Email address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => update('email', e.target.value)}
                        className="field"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="mb-1.5 block text-sm font-semibold text-ink"
                      >
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => update('subject', e.target.value)}
                        className="field"
                      >
                        <option value="General Inquiry">General Tech Inquiry</option>
                        <option value="Phone Repair">Phone, iPad or Tablet Repair</option>
                        <option value="Computer Repair">Computer &amp; Laptop Repair</option>
                        <option value="Gaming Console Repair">Gaming Console Repair</option>
                        <option value="Custom Device Wrapping">Custom Device Wrapping</option>
                        <option value="Security Cameras">Security Cameras &amp; CCTV</option>
                        <option value="Sell My Device">Sell or Trade In a Device</option>
                        <option value="Product Availability">
                          Product Stock &amp; Availability
                        </option>
                        <option value="Business Technology">Business Technology Enquiry</option>
                        <option value="Other Question">Other Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      Your message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell us what device you have and what you need"
                      className={`${fieldClass('message')} resize-none`}
                      {...invalidProps('message')}
                    />
                    {errorLine('message')}
                  </div>

                  <div className="flex flex-col justify-between gap-4 pt-1 sm:flex-row sm:items-center">
                    <p className="flex items-center gap-2 text-xs text-faint">
                      <ShieldCheck aria-hidden="true" className="h-4 w-4 text-brand-600" />
                      <span>Replies come directly from {BUSINESS_INFO.contactPerson}</span>
                    </p>

                    <button
                      id="submit-contact-form-btn"
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary w-full disabled:opacity-60 sm:w-auto"
                    >
                      {submitting ? (
                        <span>Sending</span>
                      ) : (
                        <>
                          <Send aria-hidden="true" className="h-4 w-4" />
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
      </div>
    </section>
  );
};
