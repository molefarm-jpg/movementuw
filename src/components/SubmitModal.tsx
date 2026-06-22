import { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { SITE_NAME } from '@/lib/siteConfig';

interface SubmitModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SubmitModal({ open, onClose }: SubmitModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    businessName: '',
    contact: '',
    offerDetails: '',
  });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ businessName: '', contact: '', offerDetails: '' });
    }, 250);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" onKeyDown={handleKeyDown}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E8E6]">
          <h2 className="text-base font-semibold text-[#1A1A1A]">
            {submitted ? 'Thank you!' : 'Submit a deal'}
          </h2>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg hover:bg-[#F9F9F7] transition-colors"
          >
            <X className="w-4 h-4 text-[#9E9E9E]" />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-3">
              <CheckCircle className="w-6 h-6 text-emerald-500" />
            </div>
            <p className="text-sm font-medium text-[#1A1A1A] mb-1">
              Submission received
            </p>
            <p className="text-xs text-[#6B6B6B] max-w-xs">
              {`We will review this deal for the ${SITE_NAME} network and follow up within 24-48 hours.`}
            </p>
            <button
              onClick={handleClose}
              className="mt-5 px-5 py-2 bg-uw-purple text-white text-xs font-medium rounded-full hover:bg-uw-purple-light transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <p className="text-xs text-[#6B6B6B] leading-relaxed -mt-1 mb-1">
              {`Know a business on The Ave that should join ${SITE_NAME}? Submit their details and we will reach out to activate their student discount.`}
            </p>

            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                Business Name
              </label>
              <input
                type="text"
                required
                value={form.businessName}
                onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                placeholder="e.g. Thai Tom"
                className="w-full h-10 px-3 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                Contact Info
              </label>
              <input
                type="text"
                required
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder="Phone, email, or point of contact"
                className="w-full h-10 px-3 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                Offer Details
              </label>
              <textarea
                rows={3}
                value={form.offerDetails}
                onChange={(e) => setForm({ ...form, offerDetails: e.target.value })}
                placeholder="What discount should they offer UofW students?"
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full h-10 flex items-center justify-center gap-2 bg-uw-purple text-white text-sm font-medium rounded-full hover:bg-uw-purple-light active:scale-[0.98] transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              Submit for Activation
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
