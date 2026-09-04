import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Send } from 'lucide-react';

const TARGET_EMAIL = 'jon.waite@sales.movement.college';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_FORM = {
  businessName: '',
  neighborhood: '',
  contactInfo: '',
  offerIdea: '',
  studentName: '',
  studentEmail: '',
};

export default function SubmitDeal() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('submitting');

    const formData = new FormData();
    formData.append('businessName', form.businessName);
    formData.append('neighborhood', form.neighborhood);
    formData.append('contactInfo', form.contactInfo);
    formData.append('offerIdea', form.offerIdea);
    formData.append('studentName', form.studentName);
    formData.append('studentEmail', form.studentEmail);
    formData.append('_subject', 'Student submitted a new U-District deal recommendation');
    formData.append('_template', 'table');
    formData.append('_captcha', 'true');
    formData.append('_honey', '');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setForm(INITIAL_FORM);
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <div className="px-4 sm:px-6 py-10 max-w-3xl mx-auto">
      <div className="mb-6">
        <p className="text-[11px] font-bold uppercase tracking-widest text-uw-purple mb-2">Submit a Deal</p>
        <h1 className="text-[30px] sm:text-[40px] font-bold text-[#1A1A1A] leading-tight mb-2">
          Recommend your favorite U-District spot.
        </h1>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">
          Fill out this quick form and we will send the recommendation to our activation team.
        </p>
      </div>

      <div className="rounded-2xl border border-[#E8E8E6] bg-white p-5 sm:p-7">
        {submitState === 'success' ? (
          <div className="py-4 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 mx-auto mb-3 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-base font-semibold text-[#1A1A1A] mb-1">Thanks for your recommendation.</h2>
            <p className="text-sm text-[#6B6B6B] mb-4">
              We sent your submission to our{' '}
              <a
                href="mailto:jon.waite@sales.movement.college"
                className="inline-flex items-center h-7 px-3 rounded-full bg-uw-purple text-white font-semibold hover:bg-uw-purple-light transition-colors"
              >
                Webmaster
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setSubmitState('idle')}
              className="h-10 px-5 rounded-full bg-uw-purple text-white text-sm font-semibold hover:bg-uw-purple-light transition-colors"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">Business name</label>
              <input
                type="text"
                required
                value={form.businessName}
                onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                placeholder="Ex: Thai Tom"
                className="w-full h-10 px-3 rounded-lg border border-[#E8E8E6] text-sm focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">Neighborhood</label>
              <input
                type="text"
                required
                value={form.neighborhood}
                onChange={(e) => setForm({ ...form, neighborhood: e.target.value })}
                placeholder="Ex: The Ave, Wallingford, Montlake"
                className="w-full h-10 px-3 rounded-lg border border-[#E8E8E6] text-sm focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">Contact info for the business (if known)</label>
              <input
                type="text"
                value={form.contactInfo}
                onChange={(e) => setForm({ ...form, contactInfo: e.target.value })}
                placeholder="Phone, website, IG, or email"
                className="w-full h-10 px-3 rounded-lg border border-[#E8E8E6] text-sm focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">Offer idea</label>
              <textarea
                rows={3}
                required
                value={form.offerIdea}
                onChange={(e) => setForm({ ...form, offerIdea: e.target.value })}
                placeholder="Ex: 15% off for verified students"
                className="w-full px-3 py-2 rounded-lg border border-[#E8E8E6] text-sm resize-none focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">Your name (optional)</label>
                <input
                  type="text"
                  value={form.studentName}
                  onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg border border-[#E8E8E6] text-sm focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">Your email (optional)</label>
                <input
                  type="email"
                  value={form.studentEmail}
                  onChange={(e) => setForm({ ...form, studentEmail: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg border border-[#E8E8E6] text-sm focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20"
                />
              </div>
            </div>

            <div className="pt-1 flex items-center gap-3">
              <button
                type="submit"
                disabled={submitState === 'submitting'}
                className="h-10 px-5 rounded-full bg-uw-purple text-white text-sm font-semibold hover:bg-uw-purple-light disabled:opacity-60 transition-colors inline-flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                {submitState === 'submitting' ? 'Sending...' : 'Send Recommendation'}
              </button>
              <Link to="/u-district" className="text-sm text-uw-purple hover:underline">
                Back to U-District
              </Link>
            </div>

            <div className="rounded-lg border border-[#E8E8E6] bg-[#F9F9F7] px-3 py-3">
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Our activation team reviews recommendations within 1-2 business days. Contact details are optional and only used if we need follow-up details about your submission.
              </p>
            </div>

            {submitState === 'error' && (
              <p className="text-xs text-red-600">Could not send right now. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
