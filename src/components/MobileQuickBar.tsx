import React from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, Calendar } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
  onOpenLeadModal?: () => void;
  onNavigate?: (route: any) => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-quick-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur border-t border-line px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-2 gap-3">
        <a
          id="mobile-bar-call"
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="btn btn-secondary !py-2.5 min-h-[46px]"
          aria-label={`Call ${BUSINESS_INFO.contactPerson} at ${BUSINESS_INFO.phone}`}
        >
          <Phone aria-hidden="true" className="w-4 h-4 shrink-0" />
          <span>Call {BUSINESS_INFO.contactPerson}</span>
        </a>

        <button
          id="mobile-bar-book"
          onClick={onOpenBooking}
          className="btn btn-primary !py-2.5 min-h-[46px]"
          aria-label="Book a service appointment"
        >
          <Calendar aria-hidden="true" className="w-4 h-4 shrink-0" />
          <span>Book Service</span>
        </button>
      </div>
    </div>
  );
};
