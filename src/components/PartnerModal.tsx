import { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { SITE_NAME } from '@/lib/siteConfig';

interface PartnerModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PartnerModal({ open, onClose }: PartnerModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    businessName: '',
    contactPerson: '',
    offer: '',
    message: '',
  });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = 'jon.waite@sales.movement.college';
    const subject = `Partnership inquiry: ${form.businessName || 'New Partner'}`;
    const body = `Business Name: ${form.businessName}\nContact Person: ${form.contactPerson}\nProposed Offer: ${form.offer}\n\nMessage:\n${form.message}`;
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Open user's mail client with prefilled email
    window.location.href = mailto;
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ businessName: '', contactPerson: '', offer: '', message: '' });
    }, 250);
  };

  // Close on Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" onKeyDown={handleKeyDown}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E8E6]">
          <h2 className="text-base font-semibold text-[#1A1A1A]">
            {submitted ? 'Thank you!' : 'Partner with Us'}
          </h2>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg hover:bg-[#F9F9F7] transition-colors"
          >
            <X className="w-4 h-4 text-[#9E9E9E]" />
          </button>
        </div>

        {/* Body */}
        {submitted ? (
          <div className="px-6 py-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-3">
              <CheckCircle className="w-6 h-6 text-emerald-500" />
            </div>
            <p className="text-sm font-medium text-[#1A1A1A] mb-1">
              Partnership inquiry received
            </p>
            <p className="text-xs text-[#6B6B6B] max-w-xs">
              Our team will reach out within 1-2 business days to discuss how we can drive student traffic to your business.
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
              {`Join ${SITE_NAME} and reach thousands of UofW students on The Ave. Tell us about your business and the student offer you would like to activate.`}
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
                Contact Person
              </label>
              <input
                type="text"
                required
                value={form.contactPerson}
                onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                placeholder="Your name and role"
                className="w-full h-10 px-3 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                Proposed Student Offer
              </label>
              <input
                type="text"
                required
                value={form.offer}
                onChange={(e) => setForm({ ...form, offer: e.target.value })}
                placeholder="e.g. 15% off with student ID"
                className="w-full h-10 px-3 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                Message
              </label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your business and why UofW students would love it..."
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full h-10 flex items-center justify-center gap-2 bg-uw-purple text-white text-sm font-medium rounded-full hover:bg-uw-purple-light active:scale-[0.98] transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              Submit Partnership Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
