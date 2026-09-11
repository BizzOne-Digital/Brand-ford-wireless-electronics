import React, { useEffect, useId, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Accessible name for the dialog. Rendered unless `hideTitle` is set. */
  title: string;
  hideTitle?: boolean;
  /** Tailwind max-width utility. Wider for image lightboxes. */
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const SIZES = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-4xl',
};

/**
 * The one modal shell on the site: ink scrim, white rounded panel, close
 * control top-right at 44px, Escape to close, body scroll locked, focus moved
 * into the panel and restored on close.
 *
 * Modals carry secondary detail only. If a visitor needs the information to
 * understand the business, it belongs on the page.
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  hideTitle = false,
  size = 'md',
  children,
}) => {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    restoreRef.current = document.activeElement as HTMLElement | null;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    panelRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      restoreRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/60 p-3 pt-20 pb-10 backdrop-blur-sm sm:p-6 sm:pt-24"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative w-full ${SIZES[size]} rounded-2xl bg-white outline-none`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-copy transition-colors hover:bg-mist hover:text-ink"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>

        <h2 id={titleId} className={hideTitle ? 'sr-only' : 'px-6 pt-6 pr-16 text-xl font-bold text-ink'}>
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
};
