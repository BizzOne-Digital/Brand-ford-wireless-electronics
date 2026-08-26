import React from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, Calendar } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
  onOpenLeadModal?: () => void;
  onNavigate?: (route: any) => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenBooking,
}) => {
  return (
    <div 
      id="mobile-quick-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#030612]/95 backdrop-blur-2xl border-t border-blue-500/20 px-4 py-2.5 pb-safe shadow-2xl shadow-black"
    >
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        {/* Call Now */}
        <a
          id="mobile-bar-call"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 min-h-[46px] py-2 px-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-blue-300 hover:text-white active:scale-95 transition-all shadow-md"
          aria-label={`Call ${BUSINESS_INFO.contactPerson} at ${BUSINESS_INFO.phone}`}
        >
          <Phone className="w-4 h-4 text-blue-400 shrink-0" />
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold leading-tight">Call Ernest</span>
            <span className="text-[9px] text-slate-400 leading-none">{BUSINESS_INFO.phone}</span>
          </div>
        </a>

        {/* Book Service Appointment */}
        <button
          id="mobile-bar-book"
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-2 min-h-[46px] py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-600/30 border border-blue-400/30 active:scale-95 transition-all"
          aria-label="Book a Service Appointment"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-extrabold leading-tight">Book Service</span>
            <span className="text-[9px] text-blue-200 leading-none">Quick Schedule</span>
          </div>
        </button>
      </div>
    </div>
  );
};


