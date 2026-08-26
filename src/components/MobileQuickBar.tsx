import React from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { PageRoute } from '../types';
import { Phone, Calendar, MessageSquare, ShoppingBag } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
  onOpenLeadModal: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenBooking,
  onOpenLeadModal,
  onNavigate,
}) => {
  return (
    <div 
      id="mobile-quick-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#030610]/95 backdrop-blur-lg border-t border-blue-900/40 p-2.5 pb-safe px-4"
    >
      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          id="mobile-bar-call"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-1">Call Now</span>
        </a>

        {/* Book Service */}
        <button
          id="mobile-bar-book"
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30 active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] mt-1">Book Service</span>
        </button>

        {/* Shop */}
        <button
          id="mobile-bar-products"
          onClick={() => {
            onNavigate('products');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 active:scale-95 transition-transform"
        >
          <ShoppingBag className="w-4 h-4 text-blue-400" />
          <span className="text-[10px] font-semibold mt-1">Shop</span>
        </button>

        {/* Inquire */}
        <button
          id="mobile-bar-inquire"
          onClick={onOpenLeadModal}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-blue-400" />
          <span className="text-[10px] font-semibold mt-1">Inquire</span>
        </button>
      </div>
    </div>
  );
};
