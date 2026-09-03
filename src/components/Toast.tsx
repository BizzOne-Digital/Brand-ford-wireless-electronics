import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div 
      id="app-toast-notification"
      className="fixed top-20 right-4 sm:right-6 z-50 max-w-md bg-white border border-brand-200 rounded-2xl p-4 text-ink flex items-start gap-3 animate-in slide-in-from-top-4 duration-300"
    >
      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
      <div className="flex-1 text-xs sm:text-sm leading-relaxed">
        {message}
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-lg text-copy hover:text-ink hover:bg-frost transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
