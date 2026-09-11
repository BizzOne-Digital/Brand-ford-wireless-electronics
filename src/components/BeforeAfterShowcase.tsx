import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { getServiceMedia } from '../data/media';
import { SERVICES_DATA } from '../data/mockData';
import { BeforeAfter } from './BeforeAfter';

interface BeforeAfterShowcaseProps {
  onOpenService: (serviceId: string) => void;
}

/** Services whose result is visible in a photograph. */
const COMPARISONS = ['device-wrapping', 'cell-phone-repair', 'computer-repairs'];

/**
 * Homepage before and after. One comparison at a time with a short switcher,
 * because three sliders side by side are three unreadable slivers on a laptop.
 * Each comparison links through to the service it belongs to.
 */
export const BeforeAfterShowcase: React.FC<BeforeAfterShowcaseProps> = ({ onOpenService }) => {
  const entries = COMPARISONS.map((id) => {
    const service = SERVICES_DATA.find((s) => s.id === id);
    const media = getServiceMedia(id);
    return service && media.before && media.after
      ? { id, title: service.title, before: media.before, after: media.after }
      : null;
  }).filter((e): e is NonNullable<typeof e> => Boolean(e));

  const [active, setActive] = useState(0);

  if (entries.length === 0) return null;
  const current = entries[active];

  return (
    <section id="before-after-section" className="section bg-white">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Before and after</p>
            <h2 className="mt-3 text-2xl font-bold leading-[1.1] text-ink sm:text-3xl lg:text-[2.5rem]">
              The work speaks for itself
            </h2>
          </div>

          {entries.length > 1 && (
            <div
              role="tablist"
              aria-label="Choose a before and after comparison"
              className="-mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:px-0"
            >
              {entries.map((entry, i) => (
                <button
                  key={entry.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-full border px-4 text-[13px] font-semibold transition-colors min-h-[44px] ${
                    i === active
                      ? 'border-brand-600 bg-brand-600 text-white'
                      : 'border-line bg-white text-copy hover:border-brand-300 hover:text-ink'
                  }`}
                >
                  {entry.title}
                </button>
              ))}
            </div>
          )}
        </div>

        <BeforeAfter
          key={current.id}
          before={current.before}
          after={current.after}
          label={current.title}
          className="mt-8"
        />

        <div className="mt-6">
          <button
            type="button"
            onClick={() => onOpenService(current.id)}
            className="group inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            <span>{current.title}</span>
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
