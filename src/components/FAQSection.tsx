import React, { useState, useMemo } from 'react';
import { FAQ_DATA, BUSINESS_INFO } from '../data/mockData';
import { PageRoute } from '../types';
import { ChevronDown, Sparkles, Search, HelpCircle, Phone, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  /** Suppress the in-section title when a PageHero already states it. */
  hideHeader?: boolean;
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onOpenBooking?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  hideHeader = false,
  isFullPage = false,
  onNavigate,
  onOpenBooking,
}) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Repairs', 'Products', 'Booking & Quotes'];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchCat = activeCategory === 'All' || faq.category === activeCategory;
      const matchSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq-section"
      className="section bg-mist"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight mb-4 font-display">
              Common Questions & Answers
            </h2>

            <p className="text-sm sm:text-base text-copy">
              Clear, transparent answers about our devices, repair processes, quotes, and customer support.
            </p>
          </div>
        )}


        {/* Search Bar */}
        <div className="relative mb-6">
          <Search aria-hidden="true" className="w-4 h-4 text-faint absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <label htmlFor="faq-search-input" className="sr-only">Search frequently asked questions</label>
          <input
            id="faq-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. computer repair, quote, appointment)..."
            className="field !pl-11"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`faq-cat-${cat}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 min-h-[40px]  rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-brand-600 text-white'
                    : 'bg-mist text-copy hover:text-ink border border-line'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-12">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="bg-white border border-brand-200 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-ink group-hover:text-brand-700 transition-colors font-display pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg bg-mist border border-line flex items-center justify-center text-copy transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-brand-700 border-brand-200' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-copy leading-relaxed border-t border-line animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-line text-copy text-xs">
              No questions found matching your search.
            </div>
          )}
        </div>

        {/* Bottom Direct Support Banner */}
        <div className="bg-frost border border-brand-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-700 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-ink font-display">
                Still have a question?
              </h4>
              <p className="text-xs text-copy">
                Call us directly at <strong>{BUSINESS_INFO.phone}</strong> or send us a message.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn btn-secondary w-full sm:w-auto"
            >
              <Phone className="w-3.5 h-3.5 text-brand-700" />
              <span>Call Now</span>
            </a>
            {onOpenBooking && (
              <button
                id="faq-book-btn"
                onClick={onOpenBooking}
                className="btn btn-primary w-full sm:w-auto"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
