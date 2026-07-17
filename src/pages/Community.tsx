import { Heart, MessageCircle, Star, Users } from 'lucide-react';
import { SITE_NAME } from '@/lib/siteConfig';

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

      {/* CTA */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16 text-center">
        <div className="bg-[#F9F9F7] rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-[#1A1A1A] mb-2">
            Join the community
          </h2>
          <p className="text-sm text-[#6B6B6B] max-w-md mx-auto mb-4">
            {`Help us grow ${SITE_NAME} at UofW. Download the app, share your favorite discounts, suggest new merchants, and bring your friends along.`}
          </p>
          <p className="text-xs text-[#9E9E9E]">
            Have a story to share? Reach out — we would love to feature you.
          </p>
        </div>
      </section>
    </div>
  );
}
