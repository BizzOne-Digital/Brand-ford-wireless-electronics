import React, { useState, useMemo } from 'react';
import { FAQ_DATA, BUSINESS_INFO } from '../data/mockData';
import { PageRoute } from '../types';
import { ChevronDown, Sparkles, Search, HelpCircle, Phone, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onOpenBooking?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
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
      className={`relative ${isFullPage ? 'pt-32 pb-24' : 'py-20 lg:py-28'} bg-[#030610]`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Common Questions & Answers
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Clear, transparent answers about our devices, repair processes, quotes, and customer support.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            id="faq-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. computer repair, quote, appointment)..."
            className="w-full bg-[#070d1e] border border-blue-900/30 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
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
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
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
                  className="bg-[#070d1e] border border-blue-900/20 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors font-display pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-blue-400 border-blue-500/50' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#070d1e] rounded-2xl border border-slate-800 text-slate-400 text-xs">
              No questions found matching your search.
            </div>
          )}
        </div>

        {/* Bottom Direct Support Banner */}
        <div className="bg-gradient-to-r from-blue-950/60 to-[#070d1e] border border-blue-800/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                Still have a question?
              </h4>
              <p className="text-xs text-slate-400">
                Call Ernest directly at <strong>{BUSINESS_INFO.phone}</strong> or send us a message.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-blue-500/40 text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call Now</span>
            </a>
            {onOpenBooking && (
              <button
                id="faq-book-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 text-center flex items-center justify-center gap-1.5"
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
