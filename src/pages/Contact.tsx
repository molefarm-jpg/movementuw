import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail } from 'lucide-react';

const TARGET_EMAIL = 'jon.waite@sales.movement.college';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_FORM = {
  name: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('submitting');

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('organization', form.organization);
    formData.append('subject', form.subject);
    formData.append('message', form.message);
    formData.append('_subject', `Contact Us: ${form.subject || 'New message'}`);
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
        <p className="text-[11px] font-bold uppercase tracking-widest text-uw-purple mb-2">Contact Us</p>
        <h1 className="text-[30px] sm:text-[40px] font-bold text-[#1A1A1A] leading-tight mb-2">
          Send us a message
        </h1>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">
          Have a question, partnership idea, or feedback? Fill out this form and our Webmaster will get it by email.
        </p>
      </div>

      <div className="rounded-2xl border border-[#E8E8E6] bg-white p-5 sm:p-7">
        {submitState === 'success' ? (
          <div className="py-4 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 mx-auto mb-3 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-base font-semibold text-[#1A1A1A] mb-1">Message sent.</h2>
            <p className="text-sm text-[#6B6B6B] mb-4">Thanks for reaching out. We received your note.</p>
            <button
              type="button"
              onClick={() => setSubmitState('idle')}
              className="h-10 px-5 rounded-full bg-uw-purple text-white text-sm font-semibold hover:bg-uw-purple-light transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg border border-[#E8E8E6] text-sm focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg border border-[#E8E8E6] text-sm focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">Organization (optional)</label>
              <input
                type="text"
                value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-[#E8E8E6] text-sm focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">Subject</label>
              <input
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-[#E8E8E6] text-sm focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">Message</label>
              <textarea
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E8E8E6] text-sm resize-none focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20"
              />
            </div>

            <div className="pt-1 flex items-center gap-3">
              <button
                type="submit"
                disabled={submitState === 'submitting'}
                className="h-10 px-5 rounded-full bg-uw-purple text-white text-sm font-semibold hover:bg-uw-purple-light disabled:opacity-60 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              <Link to="/" className="text-sm text-uw-purple hover:underline">Back Home</Link>
            </div>

            <div className="rounded-lg border border-[#E8E8E6] bg-[#F9F9F7] px-3 py-3">
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Our Webmaster reviews submissions within 1-2 business days. We only use your contact details to respond to your message and do not share your information.
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
