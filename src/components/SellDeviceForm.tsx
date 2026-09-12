import React, { useState } from 'react';
import { CheckCircle2, Info, Phone, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface SellDeviceFormProps {
  onNotify?: (msg: string) => void;
}

/** What the store will consider buying. Drives the checkbox list. */
const ITEM_TYPES = [
  'Phone',
  'Tablet or iPad',
  'Laptop',
  'Desktop computer',
  'Games console',
  'Accessories',
  'Other electronics',
];

const CONDITIONS = [
  'Working, good condition',
  'Working, some damage',
  'Cracked screen',
  'Will not power on',
  'Not sure',
];

/**
 * Intake form for "We buy phones and electronics".
 *
 * A buy back is not a booking: there is no appointment slot, and what the
 * store needs up front is what the item is and what condition it is in. So
 * this is its own short form rather than another pass through `BookingForm`.
 *
 * Submission is local only, exactly like the other forms on the site: it shows
 * a confirmation and does not transmit anything. Wiring it to the backend is a
 * separate job.
 */
export const SellDeviceForm: React.FC<SellDeviceFormProps> = ({ onNotify }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    itemTypes: [] as string[],
    makeModel: '',
    quantity: '1',
    condition: CONDITIONS[0],
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleType = (type: string) =>
    setForm((f) => ({
      ...f,
      itemTypes: f.itemTypes.includes(type)
        ? f.itemTypes.filter((t) => t !== type)
        : [...f.itemTypes, type],
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || form.itemTypes.length === 0) return;
    setSubmitted(true);
    onNotify?.(`Thank you ${form.name}. We will contact you at ${form.phone} about your items.`);
  };

  if (submitted) {
    return (
      <section className="section bg-white">
        <div className="shell">
          <div className="card mx-auto max-w-xl p-8 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <CheckCircle2 aria-hidden="true" className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-ink">Details received</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-copy">
              Thank you, <strong className="font-semibold text-ink">{form.name}</strong>. We will
              review what you have listed and contact you at{' '}
              <strong className="font-semibold text-ink">{form.phone}</strong>. Any offer is
              subject to inspecting the item in store and verifying ownership.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="btn btn-secondary mt-6"
            >
              Send another item
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="sell-device-section" className="section bg-white">
      <div className="shell">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-[1.15] text-ink sm:text-3xl">
              Tell us what you have
            </h2>
            <p className="mt-4 text-base leading-relaxed text-copy">
              Working, damaged or broken. Fill this in and we will come back to you, or bring the
              item to {BUSINESS_INFO.addressFull} and we will look at it while you wait.
            </p>

            <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-line bg-mist p-4">
              <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              <p className="text-sm text-copy">
                Every offer is subject to inspection, ownership verification and our purchasing
                requirements. Nothing here is a final quote.
              </p>
            </div>

            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn btn-secondary mt-6">
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8 lg:col-span-7">
            <fieldset>
              <legend className="mb-2 block text-sm font-semibold text-ink">
                What are you selling? <span className="text-brand-700">*</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {ITEM_TYPES.map((type) => {
                  const active = form.itemTypes.includes(type);
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleType(type)}
                      aria-pressed={active}
                      className={`min-h-[44px] rounded-full border px-4 text-[13px] font-semibold transition-colors ${
                        active
                          ? 'border-brand-600 bg-brand-600 text-white'
                          : 'border-line bg-white text-copy hover:border-brand-300 hover:text-ink'
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="sell-make" className="mb-1.5 block text-sm font-semibold text-ink">
                  Make and model
                </label>
                <input
                  id="sell-make"
                  type="text"
                  value={form.makeModel}
                  onChange={(e) => setForm({ ...form, makeModel: e.target.value })}
                  placeholder="e.g. iPhone 13, Galaxy S21, PlayStation 4"
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="sell-qty" className="mb-1.5 block text-sm font-semibold text-ink">
                  How many items
                </label>
                <input
                  id="sell-qty"
                  type="number"
                  min="1"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                  className="field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="sell-condition" className="mb-1.5 block text-sm font-semibold text-ink">
                Condition
              </label>
              <select
                id="sell-condition"
                value={form.condition}
                onChange={(e) => setForm({ ...form, condition: e.target.value })}
                className="field"
              >
                {CONDITIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="sell-name" className="mb-1.5 block text-sm font-semibold text-ink">
                  Your name <span className="text-brand-700">*</span>
                </label>
                <input
                  id="sell-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="sell-phone" className="mb-1.5 block text-sm font-semibold text-ink">
                  Phone number <span className="text-brand-700">*</span>
                </label>
                <input
                  id="sell-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="sell-email" className="mb-1.5 block text-sm font-semibold text-ink">
                Email address
              </label>
              <input
                id="sell-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="field"
              />
            </div>

            <div>
              <label htmlFor="sell-details" className="mb-1.5 block text-sm font-semibold text-ink">
                Anything else we should know
              </label>
              <textarea
                id="sell-details"
                rows={3}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="Storage size, colour, what is wrong with it, whether you have the charger"
                className="field resize-none"
              />
            </div>

            <div className="flex justify-end pt-1">
              <button type="submit" className="btn btn-primary">
                <Send aria-hidden="true" className="h-4 w-4" />
                <span>Send details</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
