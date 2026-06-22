import { Download, Store, QrCode, ArrowRight } from 'lucide-react';
import { useModal } from '@/hooks/useModal';
import MerchantCarousel from '@/components/MerchantCarousel';
import { SITE_NAME, APP_DOWNLOAD_URL, UOFW_COLORS } from '@/lib/siteConfig';

const STEPS = [
  {
    icon: Download,
    iconColor: UOFW_COLORS.purple,
    iconBg: 'rgba(57,39,91,0.12)',
    step: 'Step 1',
    stepColor: 'text-uw-purple',
    title: `Download the ${SITE_NAME} App`,
    description: 'Get the free app on iOS or Android and create your student profile.',
  },
  {
    icon: Store,
    iconColor: UOFW_COLORS.gold,
    iconBg: 'rgba(142,99,42,0.12)',
    step: 'Step 2',
    stepColor: 'text-uw-gold-dark',
    title: 'Find merchants on The Ave',
    description: 'Browse 8+ local businesses with exclusive student discounts.',
  },
  {
    icon: QrCode,
    iconColor: '#16A34A',
    iconBg: 'rgba(22,163,74,0.08)',
    step: 'Step 3',
    stepColor: 'text-emerald-600',
    title: 'Scan & redeem instantly',
    description: 'Show your digital UofW student ID at checkout and save every time.',
  },
];

const FEATURES = [
  {
    title: 'For Students',
    description: `Unlock exclusive discounts at your favorite spots on The Ave. From coffee to haircuts, save every day with the ${SITE_NAME} app.`,
    cta: 'Download the App',
    href: APP_DOWNLOAD_URL,
  },
  {
    title: 'For Merchants',
    description: `Drive foot traffic from thousands of UofW students. Join ${SITE_NAME} and activate your student discount in minutes.`,
    cta: 'Partner with Us',
    action: 'partner',
  },
];

export default function Home() {
  const { openPartner } = useModal();
  return (
    <div>
      {/* ========== HERO + CAROUSEL ========== */}
      <section className="pt-10 pb-8 max-w-3xl mx-auto">
        {/* Title */}
        <div className="px-4 sm:px-6 text-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-widest mb-3 block" style={{ color: UOFW_COLORS.gold }}>
            Featured Partners
          </span>
          <h1 className="text-[32px] sm:text-[48px] font-bold leading-[1.15] tracking-tight mb-3" style={{ color: UOFW_COLORS.purple }}>
            Save on The Ave
          </h1>
          <p className="text-sm sm:text-base leading-relaxed max-w-md mx-auto" style={{ color: '#666' }}>
            {`Exclusive student discounts activated by The Movement in the UofW University District - The Ave, Wallingford, Montlake, University Village, and Roosevelt.`}
          </p>
        </div>

        {/* Merchant Carousel */}
        <MerchantCarousel />

        {/* App download pill below carousel */}
        <div className="flex justify-center mt-6">
          <a
            href={APP_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-uw-purple text-white text-xs font-bold rounded-full hover:bg-uw-purple-light active:scale-[0.97] transition-all"
            onClick={() => console.log('[CLICK TRACK] Home: Download App')}
          >
            <Download className="w-3.5 h-3.5" />
            {`Download the ${SITE_NAME} App`}
          </a>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-16">
        <div className="bg-[#F9F9F7] rounded-2xl p-6 sm:p-8">
          <h2 className="text-sm font-semibold text-[#1A1A1A] text-center mb-8">
            How to Save
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: s.iconBg }}>
                  <s.icon className="w-5 h-5" style={{ color: s.iconColor }} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: s.iconColor }}>
                  {s.step}
                </span>
                <p className="text-sm font-semibold text-[#1A1A1A] mb-1">{s.title}</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURE CARDS ========== */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-[#E8E8E6] p-6 hover:border-uw-purple/30 transition-all"
            >
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">{f.title}</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{f.description}</p>
              {'href' in f && f.href ? (
                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-uw-purple hover:underline"
                >
                  {f.cta} <ArrowRight className="w-3 h-3" />
                </a>
              ) : (
                <button
                  onClick={openPartner}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-uw-purple hover:underline"
                >
                  {f.cta} <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-uw-purple to-uw-purple-dark rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Ready to start saving?
          </h2>
          <p className="text-sm text-white/70 max-w-md mx-auto mb-5">
            {`Join thousands of UofW students already saving on The Ave with ${SITE_NAME}.`}
          </p>
          <a
            href={APP_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-uw-gold text-uw-purple font-bold text-sm rounded-full hover:bg-uw-gold-light active:scale-[0.97] transition-all"
            onClick={() => console.log('[CLICK TRACK] CTA Banner: Download')}
          >
            <Download className="w-4 h-4" />
            Get the App
          </a>
        </div>
      </section>
    </div>
  );
}
