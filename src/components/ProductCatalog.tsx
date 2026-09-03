import React, { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PRODUCTS_DATA } from '../data/mockData';
import { ProductItem, ProductCategory, PageRoute } from '../types';
import { Search, ArrowRight, HelpCircle } from 'lucide-react';

interface ProductCatalogProps {
  /** Suppress the in-section title when a PageHero already states it. */
  hideHeader?: boolean;
  /** Full page adds search, category filters and the complete inventory. */
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  hideHeader = false,
  isFullPage = false,
  onNavigate,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const reduceMotion = useReducedMotion();

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'smartphones', label: 'Smartphones' },
    { id: 'phone-accessories', label: 'Phone Accessories' },
    { id: 'laptops', label: 'Laptops' },
    { id: 'desktops', label: 'Desktop Computers' },
    { id: 'computer-accessories', label: 'Computer Accessories' },
    { id: 'chargers-cables', label: 'Chargers & Cables' },
    { id: 'headphones', label: 'Headphones' },
    { id: 'other-electronics', label: 'Other Electronics' },
  ];

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return PRODUCTS_DATA.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.specs.some((s) => s.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // The homepage shows a short, curated set spanning the four things the store
  // actually sells, rather than the first four rows of the catalog. Search and
  // filters live on the products page, where someone is actually browsing.
  const HOME_PICKS = [
    'prod-smartphones-flagship',
    'prod-laptop-ultrabook',
    'prod-cases-protection',
    'prod-audio-headphones',
  ];

  const displayedProducts = isFullPage
    ? filteredProducts
    : HOME_PICKS.map((id) => PRODUCTS_DATA.find((p) => p.id === id)).filter(
        (p): p is ProductItem => Boolean(p)
      );

  return (
    <section
      id="product-catalog-section"
      className="section relative overflow-hidden bg-frost"
      style={!isFullPage ? {
        backgroundImage: "linear-gradient(rgba(236, 243, 255, 0.78), rgba(236, 243, 255, 0.78)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      } : undefined}
    >
      <div className="shell">

        {!hideHeader && (
  <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-[1.1] font-bold text-ink">
              {isFullPage ? 'Products / Shop' : 'In the showroom'}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-copy leading-relaxed">
              Smartphones, computing hardware, protective accessories and power essentials.
            </p>
          </div>
        )}

        {isFullPage && (
          <>
            <div className={`${hideHeader ? '' : 'mt-8'} flex flex-col md:flex-row md:items-center gap-4`}>
              <div className="relative flex-1">
                <Search
                  aria-hidden="true"
                  className="w-4 h-4 text-faint absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                />
                <label htmlFor="product-search-input" className="sr-only">
                  Search products
                </label>
                <input
                  id="product-search-input"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search smartphones, laptops, chargers, audio"
                  className="field !pl-11"
                />
              </div>
              <p className="hidden lg:flex items-center gap-2 text-sm text-copy shrink-0">
                <HelpCircle aria-hidden="true" className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Need a specific model? Ask us to confirm stock.</span>
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`category-filter-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    aria-pressed={isActive}
                    className={`px-4 min-h-[40px] rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors shrink-0 border ${
                      isActive
                        ? 'bg-brand-600 text-white border-brand-600'
                        : 'bg-white text-copy border-line hover:border-brand-300 hover:text-ink'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {displayedProducts.length > 0 ? (
          <div className={`${hideHeader && !isFullPage ? '' : 'mt-10 lg:mt-12'} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6`}>
            {displayedProducts.map((product, index) => (
              <motion.article
                key={product.id}
                id={`product-card-${product.id}`}
                initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06, ease: 'easeOut' }}
                className="card card-interactive overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[4/3] bg-mist overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-white/95 px-2.5 py-1 rounded-full">
                      {product.tag}
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-faint">
                    {product.categoryLabel}
                  </p>

                  <h3 className="mt-2 text-base font-bold text-ink leading-snug">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm text-copy leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-4 flex items-center justify-between gap-2">
                    <span className="text-xs text-faint">{product.status}</span>
                    <button
                      id={`ask-product-${product.id}`}
                      onClick={() => onSelectProduct(product)}
                      className="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-1 min-h-[44px] -my-3 transition-colors group/btn"
                      aria-label={`Inquire about ${product.name}`}
                    >
                      <span>Inquire</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="mt-10 text-center py-14 bg-white rounded-2xl border border-line">
            <p className="text-sm text-copy">
              No products match {searchQuery ? `"${searchQuery}"` : 'this filter'}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Reset filters
            </button>
          </div>
        )}

        {!isFullPage && onNavigate && (
          <div className="mt-10">
            <button
              id="view-all-products-catalog-btn"
              onClick={() => {
                onNavigate('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn btn-secondary group"
            >
              <span>Browse the full showroom</span>
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
