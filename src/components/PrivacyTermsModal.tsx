import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div 
      id="privacy-terms-modal"
      className="fixed inset-0 z-[999] overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center items-start p-3 sm:p-4 pt-24 sm:pt-28 md:pt-32 pb-20 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-md sm:max-w-lg bg-[#070d1e] border border-blue-500/40 rounded-2xl shadow-2xl text-slate-200 flex flex-col max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-9.5rem)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-slate-800 bg-[#091126] shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              {type === 'privacy' ? <ShieldCheck className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
            </div>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-sm font-bold text-white font-display truncate leading-tight">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h2>
              <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider block leading-none mt-0.5">
                Brantford Wireless & Electronics
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3 text-xs text-slate-300">
          {type === 'privacy' ? (
            <>
              <p>
                At Brantford Wireless & Electronics, we prioritize the protection and confidentiality of your personal information and electronic devices.
              </p>
              <h4 className="text-white font-bold font-display text-xs">1. Information We Collect</h4>
              <p>
                When you request quotes, book repair appointments, or inquire about products, we collect contact information (name, phone number, and email address) and device details necessary to diagnose and fulfill your request.
              </p>
              <h4 className="text-white font-bold font-display text-xs">2. Device Data Confidentiality</h4>
              <p>
                During diagnostic and repair procedures, we respect customer privacy. We do not access, inspect, copy, or distribute your private personal files, photos, or data unless specifically authorized by you for the express purpose of file migration or data recovery.
              </p>
              <h4 className="text-white font-bold font-display text-xs">3. Third-Party Sharing</h4>
              <p>
                We do not sell, rent, or trade your contact information to external third-party marketing companies.
              </p>
              <h4 className="text-white font-bold font-display text-xs">4. Contacting Us</h4>
              <p>
                For any privacy questions or requests regarding your data, contact Ernest directly at (416) 771-9078 or via email at brantfordwirelss@gmail.com.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to Brantford Wireless & Electronics (brantfordwirelss.com). By utilizing our website, booking services, or purchasing products, you agree to these terms.
              </p>
              <h4 className="text-white font-bold font-display text-xs">1. Appointments & Estimates</h4>
              <p>
                Online appointment requests are subject to confirmation by our team. Initial price estimates are provided based on the reported symptoms and may be adjusted upon in-person physical diagnostic testing, with customer approval.
              </p>
              <h4 className="text-white font-bold font-display text-xs">2. Data Backups</h4>
              <p>
                While we exercise extreme technical care, customers are encouraged to back up critical data prior to extensive hardware or operating system repairs when possible.
              </p>
              <h4 className="text-white font-bold font-display text-xs">3. Product Inquiries</h4>
              <p>
                Showroom product inventory and availability fluctuate. Items submitted via inquiry will be verified and held upon direct customer confirmation with Ernest.
              </p>
            </>
          )}
        </div>

        {/* Pinned Bottom Footer */}
        <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 border-t border-slate-800 bg-[#091126] flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors active:scale-95 shadow-md shadow-blue-600/20"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

