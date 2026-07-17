import { useState } from 'react';
import { CheckCircle, Heart, MessageCircle, Send, Star, Users, X } from 'lucide-react';
import { SITE_NAME } from '@/lib/siteConfig';

const WEBMASTER_EMAIL = 'jon.waite@sales.movement.college';

const INITIAL_FORM = {
  name: '',
  role: '',
  email: '',
  rating: 0,
  comment: '',
};

const INITIAL_STORY_FORM = {
  name: '',
  audience: 'student',
  email: '',
  message: '',
};

const TESTIMONIALS = [
  {
    name: 'Alex R.',
    role: 'UofW Junior',
    text: `I use ${SITE_NAME} app almost every day. The discounts at One Bite Cafe and Mama Grande's are only available through the app — I have saved over $40 this quarter alone.`,
  },
  {
    name: 'Jordan M.',
    role: 'UofW Sophomore',
    text: `As a student on a budget, every dollar counts. ${SITE_NAME} app is the only way to unlock these discounts. It makes supporting local businesses so easy.`,
  },
  {
    name: 'Priya S.',
    role: 'UofW Senior',
    text: `I love that I can just pull up ${SITE_NAME} app and show my digital student ID. No fumbling for my UofW student ID — all the discounts are right there in one place.`,
  },
];

export default function Community() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [storyDialogOpen, setStoryDialogOpen] = useState(false);
  const [storyForm, setStoryForm] = useState(INITIAL_STORY_FORM);
  const [storySubmitState, setStorySubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('submitting');

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('role', form.role);
    formData.append('email', form.email);
    formData.append('rating', `${form.rating} / 5`);
    formData.append('comment', form.comment);
    formData.append('_subject', 'Pending student comment submission for movementuw.college');
    formData.append('_template', 'table');
    formData.append('_captcha', 'true');
    formData.append('_honey', '');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${WEBMASTER_EMAIL}`, {
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

  const handleStorySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStorySubmitState('submitting');

    const formData = new FormData();
    formData.append('name', storyForm.name);
    formData.append('audience', storyForm.audience);
    formData.append('email', storyForm.email);
    formData.append('message', storyForm.message);
    formData.append('_subject', 'Community story submission for MovementUW webmaster');
    formData.append('_template', 'table');
    formData.append('_captcha', 'true');
    formData.append('_honey', '');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${WEBMASTER_EMAIL}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStoryForm(INITIAL_STORY_FORM);
      setStorySubmitState('success');
    } catch {
      setStorySubmitState('error');
    }
  };

  const handleStoryDialogClose = () => {
    setStoryDialogOpen(false);
    setTimeout(() => {
      setStorySubmitState('idle');
      setStoryForm(INITIAL_STORY_FORM);
    }, 200);
  };

  const handleStoryDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      handleStoryDialogClose();
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-10 pb-6 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-uw-purple mb-3 block">
          Community
        </span>
        <h1 className="text-[32px] sm:text-[48px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight mb-4">
          A movement built by <span className="text-uw-purple">students</span>, for <span className="text-uw-purple">students.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-lg mx-auto">
          {`${SITE_NAME} is more than discounts — it is a community of UofW students supporting local businesses through one shared app. Join thousands of UofW students already saving on The Ave. Download the app to be part of it.`}
        </p>
      </section>

      {/* Pillars */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Heart,
              title: 'Support Local',
              desc: `Every discount redeemed through ${SITE_NAME} app keeps dollars flowing into our neighborhood businesses.`,
            },
            {
              icon: Users,
              title: 'Student-Led',
              desc: `${SITE_NAME} app is built with student input at every step. Your voice shapes what we build.`,
            },
            {
              icon: MessageCircle,
              title: 'Spread the Word',
              desc: `Tell your friends, roommates, and classmates to download ${SITE_NAME} app. The more students join, the more merchants we activate.`,
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-[#E8E8E6] p-6 text-center hover:border-uw-purple/30 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-uw-purple/10 flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-5 h-5 text-uw-purple" />
              </div>
              <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">{p.title}</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <h2 className="text-base font-semibold text-[#1A1A1A] mb-5 text-center">
          What UofW students are saying
        </h2>
        <div className="space-y-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-[#E8E8E6] p-5 hover:border-uw-gold/40 transition-all"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-uw-gold fill-uw-gold" />
                ))}
              </div>
              <p className="text-sm text-[#1A1A1A] leading-relaxed mb-3">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-uw-purple/10 flex items-center justify-center text-xs font-bold text-uw-purple">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1A1A1A]">{t.name}</p>
                  <p className="text-[10px] text-[#9E9E9E]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comment Submission */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <div className="rounded-2xl border border-uw-gold/60 bg-gradient-to-br from-uw-purple via-uw-purple-light to-uw-gold/80 p-6 sm:p-8 shadow-[0_18px_45px_rgba(57,39,91,0.18)]">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-white mb-2">
              Share your comment
            </h2>
            <p className="text-sm text-white/85 max-w-xl mx-auto">
              Submit your experience with {SITE_NAME}. Comments are not published automatically. Please note - every submission is emailed to the MovementUW webmaster and held for review before approval.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="_honey" value="" onChange={() => undefined} className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Your first name and last initial"
                  className="w-full h-11 px-3 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                  Role
                </label>
                <input
                  type="text"
                  required
                  value={form.role}
                  onChange={(event) => setForm((current) => ({ ...current, role: event.target.value }))}
                  placeholder="Example: UofW Junior"
                  className="w-full h-11 px-3 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                placeholder="Your UofW or preferred contact email"
                className="w-full h-11 px-3 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-2">
                Rating
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                {Array.from({ length: 5 }).map((_, index) => {
                  const value = index + 1;
                  const isSelected = value <= form.rating;

                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setForm((current) => ({ ...current, rating: value }))}
                      className="inline-flex items-center gap-1 rounded-full border px-3 py-2 text-sm font-medium transition-all"
                      style={{
                        borderColor: isSelected ? '#B7A57A' : '#E8E8E6',
                        backgroundColor: isSelected ? 'rgba(183,165,122,0.12)' : '#FFFFFF',
                        color: isSelected ? '#8E632A' : '#6B6B6B',
                      }}
                      aria-pressed={isSelected}
                    >
                      <Star className={`w-4 h-4 ${isSelected ? 'fill-current' : ''}`} />
                      {value}
                    </button>
                  );
                })}
              </div>
              <p className="mt-1 text-[11px] text-white/75">
                Choose from 1 to 5 stars, with 5 being the best.
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                Comment
              </label>
              <textarea
                required
                rows={5}
                maxLength={600}
                value={form.comment}
                onChange={(event) => setForm((current) => ({ ...current, comment: event.target.value }))}
                placeholder="Tell us how The Movement helped you save or support local businesses."
                className="w-full px-3 py-3 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all resize-none"
              />
              <p className="mt-1 text-[11px] text-white/75 text-right">
                {form.comment.length}/600
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
              <p className="text-xs text-white/85">
                Submissions are emailed for manual approval and may be edited lightly for clarity before publication.
              </p>

              <button
                type="submit"
                disabled={submitState === 'submitting' || form.rating === 0}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-uw-purple text-sm font-semibold rounded-full hover:bg-[#F9F9F7] disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
                {submitState === 'submitting' ? 'Submitting...' : 'Submit for Review'}
              </button>
            </div>

            {form.rating === 0 && (
              <p className="text-xs text-white/75">
                Please choose a star rating before submitting your comment.
              </p>
            )}

            {submitState === 'success' && (
              <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
                Thanks. Your comment was sent to the webmaster for review and approval.
              </p>
            )}

            {submitState === 'error' && (
              <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                Your comment could not be submitted right now. Please try again in a moment.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16 text-center">
        <div className="bg-[#F9F9F7] rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-[#1A1A1A] mb-2">
            Join the community
          </h2>
          <p className="text-sm text-[#6B6B6B] max-w-md mx-auto mb-4">
            {`Help us grow ${SITE_NAME} at UofW. Download the app, share your favorite discounts, suggest new merchants, and bring your friends along.`}
          </p>
          <p className="text-sm font-bold text-[#1A1A1A]">
            Have a story to share? Reach out{' '}
            <button
              type="button"
              onClick={() => setStoryDialogOpen(true)}
              className="text-base font-bold text-uw-purple underline hover:text-uw-purple-light transition-colors"
            >
              HERE
            </button>{' '}
            — we would love to feature you.
          </p>
        </div>
      </section>

      {storyDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" onKeyDown={handleStoryDialogKeyDown}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={handleStoryDialogClose} />

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E8E6]">
              <h2 className="text-base font-semibold text-[#1A1A1A]">
                {storySubmitState === 'success' ? 'Thanks for sharing' : 'Share your story'}
              </h2>
              <button
                onClick={handleStoryDialogClose}
                className="p-1.5 rounded-lg hover:bg-[#F9F9F7] transition-colors"
              >
                <X className="w-4 h-4 text-[#9E9E9E]" />
              </button>
            </div>

            {storySubmitState === 'success' ? (
              <div className="px-6 py-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                </div>
                <p className="text-sm font-medium text-[#1A1A1A] mb-1">
                  Your message was sent
                </p>
                <p className="text-xs text-[#6B6B6B] max-w-xs">
                  The MovementUW webmaster received your story submission and can review it for a possible feature.
                </p>
                <button
                  onClick={handleStoryDialogClose}
                  className="mt-5 px-5 py-2 bg-uw-purple text-white text-xs font-medium rounded-full hover:bg-uw-purple-light transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleStorySubmit} className="px-6 py-5 space-y-4">
                <input type="text" name="_honey" value="" onChange={() => undefined} className="hidden" tabIndex={-1} autoComplete="off" />

                <p className="text-xs text-[#6B6B6B] leading-relaxed -mt-1 mb-1">
                  Tell us what you want featured. Students and merchants can both use this form, and your message will be sent directly to the MovementUW webmaster for review.
                </p>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={storyForm.name}
                    onChange={(event) => setStoryForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Your name"
                    className="w-full h-10 px-3 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                    I am a
                  </label>
                  <select
                    value={storyForm.audience}
                    onChange={(event) => setStoryForm((current) => ({ ...current, audience: event.target.value }))}
                    className="w-full h-10 px-3 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all"
                  >
                    <option value="student">Student</option>
                    <option value="merchant">Merchant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={storyForm.email}
                    onChange={(event) => setStoryForm((current) => ({ ...current, email: event.target.value }))}
                    placeholder="Your contact email"
                    className="w-full h-10 px-3 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E] mb-1.5">
                    Story or comment
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={storyForm.message}
                    onChange={(event) => setStoryForm((current) => ({ ...current, message: event.target.value }))}
                    placeholder="Type what you would like to share with the webmaster."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E8E8E6] bg-white text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:ring-1 focus:ring-uw-purple/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={storySubmitState === 'submitting'}
                  className="w-full h-10 flex items-center justify-center gap-2 bg-uw-purple text-white text-sm font-medium rounded-full hover:bg-uw-purple-light active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5" />
                  {storySubmitState === 'submitting' ? 'Sending...' : 'Send to Webmaster'}
                </button>

                {storySubmitState === 'error' && (
                  <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    Your message could not be sent right now. Please try again in a moment.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
