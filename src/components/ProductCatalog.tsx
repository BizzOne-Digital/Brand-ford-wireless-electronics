import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Search, X } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/mockData';
import { DEMO_IMAGE } from '../data/demoMedia';
import { ProductCategory, ProductItem } from '../types';

interface ProductCatalogProps {
  /** Suppress the in-section title when a PageHero already states it. */
  hideHeader?: boolean;
  /** The store page adds search, category groups and the full inventory. */
  isFullPage?: boolean;
  /** Category group to open on. Lets a service page link straight to its
      shelf, e.g. used phones or accessories. */
  initialGroup?: string;
  onSeeAll?: () => void;
  onSelectProduct: (product: ProductItem) => void;
}

/**
 * Category groups.
 *
 * The raw data carries thirteen categories, which is a wall of pills on a
 * phone. These seven groups are what a customer actually browses by; each maps
 * to the underlying categories.
 */
const GROUPS: { id: string; label: string; match: ProductCategory[]; image?: string }[] = [
  { id: 'all', label: 'Everything', match: [] },
  { id: 'phones', label: 'Phones', match: ['smartphones', 'used-phones'], image: DEMO_IMAGE.phonesBright },
  { id: 'used', label: 'Used & refurbished', match: ['used-phones'], image: DEMO_IMAGE.phoneInHand },
  { id: 'computers', label: 'Computers', match: ['laptops', 'desktops'], image: DEMO_IMAGE.laptopDesk },
  { id: 'gaming', label: 'Gaming', match: ['gaming'], image: DEMO_IMAGE.console },
  { id: 'wraps', label: 'Custom wraps', match: ['wraps'], image: DEMO_IMAGE.texturedPhone },
  { id: 'security', label: 'Security cameras', match: ['security-cameras'], image: DEMO_IMAGE.cameraInstall },
  {
    id: 'accessories',
    label: 'Accessories',
    match: ['phone-accessories', 'computer-accessories', 'chargers-cables', 'headphones', 'other-electronics'],
    image: DEMO_IMAGE.headphones,
  },
];

/** The three the store leads the shelf with. */
const FEATURED = ['prod-smartphones-flagship', 'prod-device-wraps', 'prod-gaming-consoles'];

/** A short, mixed set for the homepage. */
const HOME_PICKS = [
  'prod-smartphones-flagship',
  'prod-used-phones',
  'prod-laptop-ultrabook',
  'prod-gaming-consoles',
  'prod-device-wraps',
  'prod-security-cameras',
];

const byId = (id: string) => PRODUCTS_DATA.find((p) => p.id === id);

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  hideHeader = false,
  isFullPage = false,
  initialGroup = 'all',
  onSeeAll,
  onSelectProduct,
}) => {
  const [group, setGroup] = useState(initialGroup);
  const [query, setQuery] = useState('');
  const reduceMotion = useReducedMotion();

  /* Follow the prop when the visitor arrives from a different service link
     while this component is already mounted. */
  useEffect(() => {
    setGroup(initialGroup);
    setQuery('');
  }, [initialGroup]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const active = GROUPS.find((g) => g.id === group);
    return PRODUCTS_DATA.filter((item) => {
      const inGroup = group === 'all' || (active?.match.includes(item.category) ?? false);
      const inSearch =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.specs.some((s) => s.toLowerCase().includes(q));
      return inGroup && inSearch;
    });
  }, [group, query]);

  const featured = FEATURED.map(byId).filter((p): p is ProductItem => Boolean(p));
  const homePicks = HOME_PICKS.map(byId).filter((p): p is ProductItem => Boolean(p));

  /* On the store page the featured three head the shelf, so they are not
     repeated inside the grid below while the visitor is browsing everything. */
  const gridItems = isFullPage
    ? group === 'all' && query.trim() === ''
      ? filtered.filter((p) => !FEATURED.includes(p.id))
      : filtered
    : homePicks;

  return (
    <section id="product-catalog-section" className="section bg-white">
      <div className="shell">
        {!hideHeader && (
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">In the showroom</p>
              <h2 className="mt-3 text-2xl font-bold leading-[1.1] text-ink sm:text-3xl lg:text-[2.5rem]">
                Phones, computers, consoles and everything around them
              </h2>
            </div>
            {onSeeAll && (
              <button type="button" onClick={onSeeAll} className="btn btn-secondary group shrink-0">
                <span>Visit the store</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
            )}
          </div>
        )}

        {/* Browse by category, as pictures. This is the top of the store for a
            visitor who knows what kind of thing they want but not the model
            name, which the pill row below cannot serve on its own. */}
        {isFullPage && (
          <div className={hideHeader ? '' : 'mt-10'}>
            <h2 className="text-lg font-bold text-ink">Browse the store</h2>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
              {GROUPS.filter((g) => g.image).map((g) => (
                <button
                  key={g.id}
                  type="button"
                  id={`category-tile-${g.id}`}
                  onClick={() => {
                    setGroup(g.id);
                    setQuery('');
                    document
                      .getElementById('store-grid')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  aria-label={`Show ${g.label}`}
                  className="group relative block overflow-hidden rounded-2xl border border-line text-left transition-colors hover:border-brand-300"
                >
                  <span className="relative block aspect-square w-full overflow-hidden bg-mist">
                    <img
                      src={g.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/55 to-transparent"
                    />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 block p-3 text-[13px] font-bold leading-tight text-white sm:text-sm">
                    {g.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Featured. One product leads at twice the size of the pair beside it,
            so the shelf has a focal point instead of three equal rectangles. */}
        {isFullPage && featured.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-bold text-ink">Featured this week</h2>

            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              <ProductCard
                product={featured[0]}
                index={0}
                size="feature"
                reduceMotion={Boolean(reduceMotion)}
                onSelect={() => onSelectProduct(featured[0])}
                className="lg:col-span-2"
              />

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {featured.slice(1).map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index + 1}
                    size="default"
                    reduceMotion={Boolean(reduceMotion)}
                    onSelect={() => onSelectProduct(product)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search, categories, result count and the grid itself, in one block.
            The toolbar sticks under the header so the filters stay reachable
            while the visitor is deep in the grid. That is also why the grid
            lives inside this wrapper rather than beside it: a sticky element
            only sticks for the height of its own parent, so a toolbar whose
            parent ended above the products would scroll straight off.
            `top-20` clears the fixed header's 64px bar. */}
        <div
          id={isFullPage ? 'store-grid' : undefined}
          className={isFullPage ? 'mt-14 scroll-mt-28' : ''}
        >
          {isFullPage && (
            <h2 className="text-lg font-bold text-ink">All products</h2>
          )}
          {isFullPage && (
            <div className="sticky top-20 z-30 -mx-4 mt-4 border-y border-line bg-white/95 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:px-5">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5">
                <div className="relative lg:max-w-md lg:flex-1">
                  <Search
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
                  />
                  <label htmlFor="product-search-input" className="sr-only">
                    Search products
                  </label>
                  <input
                    id="product-search-input"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search phones, laptops, consoles, wraps, chargers"
                    className="field !pl-11"
                  />
                </div>

                <div className="flex items-center gap-4 lg:ml-auto">
                  <p className="text-sm text-faint" aria-live="polite">
                    {gridItems.length === 0
                      ? 'No products'
                      : `${gridItems.length} ${gridItems.length === 1 ? 'product' : 'products'}`}
                    {group !== 'all' &&
                      ` in ${GROUPS.find((g) => g.id === group)?.label.toLowerCase()}`}
                  </p>

                  {(group !== 'all' || query.trim() !== '') && (
                    <button
                      type="button"
                      onClick={() => {
                        setGroup('all');
                        setQuery('');
                      }}
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                    >
                      <X aria-hidden="true" className="h-4 w-4" />
                      <span>Clear</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="-mx-4 mt-3 flex items-center gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
                {GROUPS.map((g) => {
                  const isActive = group === g.id;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      id={`category-filter-${g.id}`}
                      onClick={() => setGroup(g.id)}
                      aria-pressed={isActive}
                      className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-full border px-4 text-[13px] font-semibold transition-colors ${
                        isActive
                          ? 'border-brand-600 bg-brand-600 text-white'
                          : 'border-line bg-white text-copy hover:border-brand-300 hover:text-ink'
                      }`}
                    >
                      {g.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {gridItems.length > 0 ? (
            <div
              className={`${isFullPage ? 'mt-6' : hideHeader ? '' : 'mt-10'} grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6`}
            >
              {gridItems.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  size="default"
                  reduceMotion={Boolean(reduceMotion)}
                  onSelect={() => onSelectProduct(product)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-line bg-mist px-6 py-14 text-center">
              <p className="text-sm text-copy">
                Nothing matches {query.trim() ? `"${query.trim()}"` : 'this filter'}. Stock changes
                weekly, so call the store to check a specific model.
              </p>
              <button
                type="button"
                onClick={() => {
                  setGroup('all');
                  setQuery('');
                }}
                className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Show everything
              </button>
            </div>
          )}
        </div>

        {!isFullPage && onSeeAll && (
          <div className="mt-8">
            <button type="button" onClick={onSeeAll} className="btn btn-primary group">
              <span>Browse the full store</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * Product card. The image is the card: it fills the top at a generous size,
 * the name sits under it, and the supporting line is one sentence. The whole
 * card opens the product's enquiry view, so there is one target, not two.
 */
const ProductCard: React.FC<{
  product: ProductItem;
  index: number;
  /** `feature` is the one card that leads the shelf; `default` is the grid. */
  size: 'default' | 'feature';
  reduceMotion: boolean;
  onSelect: () => void;
  className?: string;
}> = ({ product, index, size, reduceMotion, onSelect, className = '' }) => (
  <motion.button
    type="button"
    id={`product-card-${product.id}`}
    onClick={onSelect}
    initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06, ease: 'easeOut' }}
    aria-label={`${product.name}. Ask about availability`}
    className={`card card-interactive group flex flex-col overflow-hidden text-left ${className}`}
  >
    <span
      /* From lg the feature card sits beside a stacked pair and the grid
         stretches it to their combined height. Letting the image take the
         slack keeps it a photograph rather than a short image over a long
         blank panel. */
      className={`relative block w-full overflow-hidden bg-mist ${
        size === 'feature'
          ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[24rem] lg:flex-1'
          : 'aspect-[4/3]'
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        loading={index < 3 ? 'eager' : 'lazy'}
        decoding="async"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {product.tag && (
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
          {product.tag}
        </span>
      )}
    </span>

    <span
      className={`flex flex-1 flex-col ${
        size === 'feature' ? 'p-6 sm:p-7 lg:flex-none' : 'p-5'
      }`}
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-faint">
        {product.categoryLabel}
      </span>

      <span
        className={`mt-2 block font-display font-bold leading-snug text-ink ${
          size === 'feature' ? 'text-2xl' : 'text-lg'
        }`}
      >
        {product.name}
      </span>

      <span
        className={`mt-2 text-sm leading-relaxed text-copy ${
          size === 'feature' ? 'line-clamp-3 sm:text-base' : 'line-clamp-2'
        }`}
      >
        {product.description}
      </span>

      <span className="mt-auto flex items-center justify-between gap-3 pt-5">
        <span className="text-xs text-faint">{product.status}</span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
          <span>Ask about it</span>
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
      </span>
    </span>
  </motion.button>
);
