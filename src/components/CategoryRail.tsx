import React from 'react';
import { ArrowRight, Cctv, Gamepad2, Headphones, Laptop, Palette, Recycle, Smartphone, Tag } from 'lucide-react';

interface CategoryRailProps {
  /**
   * `bar` is the desktop form: a thin pinned strip above the hero.
   * `tiles` is the mobile form: an icon grid below it.
   *
   * Two instances render, each hidden at the other's widths, because the two
   * forms sit on opposite sides of the hero and a single element cannot be
   * reordered across it without losing `sticky`: an ordered flex wrapper
   * becomes the sticky containing block, so the bar would unpin the moment
   * the hero scrolled past.
   */
  variant: 'bar' | 'tiles';
  /** Every entry resolves through App's service router, which already sends
      the shelf services to the store and the buy-back service to its form. */
  onOpenService: (serviceId: string) => void;
  onSeeAll: () => void;
}

const CATEGORIES: { id: string; label: string; icon: React.ElementType }[] = [
  { id: 'cell-phone-repair', label: 'Phone repair', icon: Smartphone },
  { id: 'computer-repairs', label: 'Computer repair', icon: Laptop },
  { id: 'device-wrapping', label: 'Custom wraps', icon: Palette },
  { id: 'security-cameras', label: 'Security cameras', icon: Cctv },
  { id: 'gaming-console-repair', label: 'Gaming repair', icon: Gamepad2 },
  { id: 'used-refurbished-phones', label: 'Used phones', icon: Recycle },
  { id: 'accessories-peripherals', label: 'Accessories', icon: Headphones },
  { id: 'we-buy-devices', label: 'Sell or trade', icon: Tag },
];

export const CategoryRail: React.FC<CategoryRailProps> = ({
  variant,
  onOpenService,
  onSeeAll,
}) =>
  variant === 'bar' ? (
    /* Desktop: chrome. One white bar above the hero, pinned for the whole
       page because the header itself scrolls away. */
    <nav
      id="category-rail"
      aria-label="Shop by category"
      className="sticky top-0 z-40 hidden border-b border-line bg-white/95 backdrop-blur lg:block"
    >
      <div className="shell-wide">
        <ul className="-mx-1 flex items-center gap-0.5 py-1">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <li key={category.id} className="shrink-0">
                <button
                  type="button"
                  id={`category-rail-${category.id}`}
                  onClick={() => onOpenService(category.id)}
                  className="flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-lg px-3 text-[13px] font-semibold text-ink transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-600" />
                  <span>{category.label}</span>
                </button>
              </li>
            );
          })}

          <li className="ml-auto shrink-0">
            <button
              type="button"
              id="category-rail-see-all"
              onClick={onSeeAll}
              className="group flex min-h-[44px] items-center gap-1.5 whitespace-nowrap rounded-lg px-3 text-[13px] font-bold text-brand-700 transition-colors hover:bg-brand-50"
            >
              <span>All services</span>
              <ArrowRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
    /* Mobile: a launcher below the hero. Three across, with "All services"
       taking the ninth cell so eight entries fill a clean 3x3 rather than
       leaving a ragged last row. */
    <nav
      id="category-tiles"
      aria-label="Shop by category"
      className="bg-white py-6 lg:hidden"
    >
      <div className="shell">
        <ul className="grid grid-cols-3 gap-2.5">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <li key={category.id}>
                <button
                  type="button"
                  id={`category-tile-${category.id}`}
                  onClick={() => onOpenService(category.id)}
                  className="flex min-h-[104px] w-full flex-col items-center justify-center gap-2 rounded-2xl border border-line px-2 py-3 text-center transition-colors active:border-brand-300 active:bg-brand-50"
                >
                  <Icon aria-hidden="true" className="h-7 w-7 shrink-0 text-brand-600" />
                  <span className="text-[13px] font-semibold leading-tight text-ink">
                    {category.label}
                  </span>
                </button>
              </li>
            );
          })}

          <li>
            <button
              type="button"
              id="category-tiles-see-all"
              onClick={onSeeAll}
              className="flex min-h-[104px] w-full flex-col items-center justify-center gap-2 rounded-2xl border border-brand-200 bg-brand-50 px-2 py-3 text-center transition-colors active:bg-brand-100"
            >
              <ArrowRight aria-hidden="true" className="h-7 w-7 shrink-0 text-brand-700" />
              <span className="text-[13px] font-bold leading-tight text-brand-700">
                All services
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
