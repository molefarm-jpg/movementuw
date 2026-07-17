import { Smartphone, Tag, QrCode, Bell, Shield } from 'lucide-react';
import { APP_DISPLAY_NAME, APP_STORE_URLS, SITE_NAME, APP_DOWNLOAD_URL } from '@/lib/siteConfig';

const BENEFITS = [
  {
    icon: Tag,
    title: 'Exclusive Discounts',
    description: `${SITE_NAME} app is the only way to access and redeem the student discounts listed on this hub. Download to unlock every deal.`,
  },
  {
    icon: QrCode,
    title: 'Digital UofW Student ID',
    description: `Verify your student status once inside ${SITE_NAME} app, then show your digital ID at any partner merchant to redeem instantly.`,
  },
  {
    icon: Bell,
    title: 'New Deal Alerts',
    description: `Get notified inside the app when new merchants join ${SITE_NAME} on The Ave. Be the first to know about fresh discounts.`,
  },
  {
    icon: Shield,
    title: 'Always Free',
    description: `${SITE_NAME} app is 100% free for students. No subscriptions, no fees, no catches — just verified savings on The Ave.`,
  },
];

export default function Students() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-10 pb-6 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-uw-purple mb-3 block">
          For Students
        </span>
        <h1 className="text-[32px] sm:text-[48px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight mb-4">
          Your student ID just got <span className="text-uw-purple">more valuable.</span>
        </h1>
          <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-lg mx-auto mb-6">
          {`${SITE_NAME} app is the only way to verify your student status and claim the merchant offers on this hub. Download the app, verify your enrollment, and start saving on The Ave today.`}
        </p>
        <a
          href={APP_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-uw-purple text-white font-bold text-sm rounded-full hover:bg-uw-purple-light active:scale-[0.97] transition-all"
        >
          <Smartphone className="w-4 h-4" />
          {`Get ${APP_DISPLAY_NAME}`}
        </a>
      </section>

      {/* Download links */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-12">
        <div className="bg-[#F9F9F7] rounded-2xl p-6 sm:p-8">
          <h2 className="text-base font-semibold text-[#1A1A1A] mb-3">
            Download {APP_DISPLAY_NAME}
          </h2>
          <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
            Students can download {APP_DISPLAY_NAME} through the official app stores for iOS and Android:
          </p>
          <ul className="space-y-2 text-sm text-[#6B6B6B]">
            <li>
              <strong>Apple App Store:</strong>{' '}
              <a
                href={APP_STORE_URLS.apple}
                target="_blank"
                rel="noopener noreferrer"
                className="text-uw-purple font-semibold hover:underline"
              >
                here
              </a>
              .
            </li>
            <li>
              <strong>Google Play Store:</strong>{' '}
              <a
                href={APP_STORE_URLS.google}
                target="_blank"
                rel="noopener noreferrer"
                className="text-uw-purple font-semibold hover:underline"
              >
                here
              </a>
              .
            </li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-[#E8E8E6] p-6 hover:border-uw-purple/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-uw-purple/10 flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-uw-purple" />
              </div>
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">{b.title}</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <h2 className="text-base font-semibold text-[#1A1A1A] mb-5">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {[
            {
              q: `Is ${SITE_NAME} app free?`,
              a: 'Yes — 100% free for all currently enrolled students. Just verify your status with your .edu email inside the app.',
            },
            {
              q: 'Is the app the only way to redeem discounts?',
              a: `Yes. All student discounts on this hub are exclusively available and redeemable through ${SITE_NAME} app. Download is required to verify your student status and claim offers.`,
            },
            {
              q: 'Which merchants are included?',
              a: `We are continuously activating merchants on The Ave. Every offer listed on this hub requires ${SITE_NAME} app to redeem. Check the Merchants page for the full directory.`,
            },
            {
              q: 'Can I suggest a merchant?',
              a: 'Absolutely. Use the Submit a Deal button on our site to recommend your favorite local spot for activation.',
            },
          ].map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-[#E8E8E6] p-4 hover:border-uw-purple/20 transition-all"
            >
              <p className="text-sm font-semibold text-[#1A1A1A] mb-1">{faq.q}</p>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
