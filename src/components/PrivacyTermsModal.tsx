import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div 
      id="privacy-terms-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#080d1e] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Privacy Policy
                </h3>
                <span className="text-xs text-slate-400">Brantford Wireless & Electronics</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                At Brantford Wireless & Electronics, we prioritize the protection and confidentiality of your personal information and electronic devices.
              </p>
              <h4 className="text-white font-bold font-display">1. Information We Collect</h4>
              <p>
                When you request quotes, book repair appointments, or inquire about products, we collect contact information (name, phone number, and email address) and device details necessary to diagnose and fulfill your request.
              </p>
              <h4 className="text-white font-bold font-display">2. Device Data Confidentiality</h4>
              <p>
                During diagnostic and repair procedures, we respect customer privacy. We do not access, inspect, copy, or distribute your private personal files, photos, or data unless specifically authorized by you for the express purpose of file migration or data recovery.
              </p>
              <h4 className="text-white font-bold font-display">3. Third-Party Sharing</h4>
              <p>
                We do not sell, rent, or trade your contact information to external third-party marketing companies.
              </p>
              <h4 className="text-white font-bold font-display">4. Contacting Us</h4>
              <p>
                For any privacy questions or requests regarding your data, contact Ernest directly at (416) 771-9078 or via email at brantfordwirelss@gmail.com.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Terms of Service
                </h3>
                <span className="text-xs text-slate-400">Brantford Wireless & Electronics</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                Welcome to Brantford Wireless & Electronics (brantfordwirelss.com). By utilizing our website, booking services, or purchasing products, you agree to these terms.
              </p>
              <h4 className="text-white font-bold font-display">1. Appointments & Estimates</h4>
              <p>
                Online appointment requests are subject to confirmation by our team. Initial price estimates are provided based on the reported symptoms and may be adjusted upon in-person physical diagnostic testing, with customer approval.
              </p>
              <h4 className="text-white font-bold font-display">2. Data Backups</h4>
              <p>
                While we exercise extreme technical care, customers are encouraged to back up critical data prior to extensive hardware or operating system repairs when possible.
              </p>
              <h4 className="text-white font-bold font-display">3. Product Inquiries</h4>
              <p>
                Showroom product inventory and availability fluctuate. Items submitted via inquiry will be verified and held upon direct customer confirmation with Ernest.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
