import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, BUSINESS_INFO } from '../data/mockData';
import { ProductItem, ProductCategory, PageRoute } from '../types';
import { ProductInquiryModal } from './ProductInquiryModal';
import { 
  Search, 
  Sparkles, 
  Tag, 
  CheckCircle2, 
  ArrowRight, 
  SlidersHorizontal,
  HelpCircle 
} from 'lucide-react';

interface ProductCatalogProps {
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onNotify?: (msg: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  isFullPage = false,
  onNavigate,
  onNotify = () => {},
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeInquiryProduct, setActiveInquiryProduct] = useState<ProductItem | null>(null);

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
    return PRODUCTS_DATA.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedProducts = isFullPage ? filteredProducts : filteredProducts.slice(0, 6);

  return (
    <section 
      id="product-catalog-section"
      className={`relative ${isFullPage ? 'pt-32 pb-24' : 'py-20 lg:py-28'} bg-[#040711]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Retail & Showroom Hardware</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            {isFullPage ? 'Products & Electronics Catalog' : 'Curated Technology & Devices'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Explore our curated inventory of smartphones, computing hardware, protective accessories, and power essentials.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#070d1e] p-3 sm:p-4 rounded-2xl border border-blue-900/20">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="product-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search smartphones, laptops, chargers, audio..."
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Quick Notice Note */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400 px-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Need a custom model? Ask Ernest for stock confirmation</span>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`category-filter-${cat.id}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group relative bg-[#070d1e] border border-blue-900/20 hover:border-blue-500/40 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/40"
              >
                <div>
                  {/* Product Image Stage */}
                  <div className="relative h-56 w-full bg-slate-950 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-transparent to-transparent" />

                    {/* Category / Status Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/80">
                        {product.categoryLabel}
                      </span>
                      {product.tag && (
                        <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-amber-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-800/80">
                          {product.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors font-display">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Specs / Features */}
                    <div className="space-y-1.5 mb-6">
                      {product.specs.slice(0, 3).map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with CTA */}
                <div className="p-6 pt-0 mt-auto">
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                        Availability
                      </span>
                      <span className="text-xs font-semibold text-blue-400">
                        {product.status}
                      </span>
                    </div>

                    <button
                      id={`ask-product-${product.id}`}
                      onClick={() => setActiveInquiryProduct(product)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 border border-blue-400/30 transition-all flex items-center gap-1.5 active:scale-95"
                      aria-label={`Inquire about ${product.name}`}
                    >
                      <span>Inquire About This</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#070d1e] rounded-3xl border border-slate-800">
            <p className="text-sm text-slate-400 mb-3">
              No products found matching "{searchQuery}" in this category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-blue-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View All Products button (if on homepage preview) */}
        {!isFullPage && onNavigate && (
          <div className="text-center">
            <button
              id="view-all-products-catalog-btn"
              onClick={() => {
                onNavigate('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all hover:scale-[1.02]"
            >
              <span>Explore Complete Electronics Showroom</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>
        )}

      </div>

      {/* Inquiry Dialog Modal */}
      {activeInquiryProduct && (
        <ProductInquiryModal
          product={activeInquiryProduct}
          onClose={() => setActiveInquiryProduct(null)}
          onSubmitSuccess={onNotify}
        />
      )}
    </section>
  );
};
