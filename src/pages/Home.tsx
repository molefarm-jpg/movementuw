import { Download, Store, QrCode, ArrowRight } from 'lucide-react';
import { useModal } from '@/hooks/useModal';
import MerchantCarousel from '@/components/MerchantCarousel';
import { SITE_NAME, UDISTRICT_COLORS } from '@/lib/siteConfig';

const STEPS = [
  {
    icon: Download,
    iconColor: UDISTRICT_COLORS.purple,
    iconBg: 'rgba(57,39,91,0.12)',
    step: 'Step 1',
    stepColor: 'text-uw-purple',
    title: `Download ${SITE_NAME} Social App`,
    description: 'Get the free app on iOS or Android and create your student profile.',
  },
  {
    icon: Store,
    iconColor: UDISTRICT_COLORS.gold,
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
    description: 'Show your digital U-District student ID at checkout and save every time.',
  },
];

const FEATURES = [
  {
    title: 'For Students',
    description: `Unlock exclusive discounts at your favorite spots on The Ave. From coffee to haircuts, save every day with ${SITE_NAME} Social App.`,
    note: 'Use the persistent download button at the bottom of the screen to install the app.',
  },
  {
    title: 'For Merchants',
    description: `Drive foot traffic from thousands of U-District students. Join ${SITE_NAME} and activate your student discount in minutes.`,
    cta: 'Partner with Us',
    action: 'partner',
  },
];

export default function Home() {
  const { openPartner } = useModal();
  return (
    <div>
      <section className="px-4 sm:px-6 pt-5">
        <div className="mx-auto max-w-3xl rounded-xl border border-[#E8E8E6] bg-[#F9F9F7] px-4 py-2.5 text-center">
          <p className="text-[12px] sm:text-[13px] leading-relaxed" style={{ color: '#4A4A4A' }}>
            The Movement is an independent student discount directory for the U-District community &mdash; not affiliated with or endorsed by the University of Washington.
          </p>
        </div>
      </section>

      {/* ========== HERO + CAROUSEL ========== */}
      <section className="pt-10 pb-8 max-w-3xl mx-auto">
        {/* Title */}
        <div className="px-4 sm:px-6 text-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-widest mb-3 block" style={{ color: UDISTRICT_COLORS.gold }}>
            Featured Partners
          </span>
          <h1 className="text-[32px] sm:text-[48px] font-bold leading-[1.15] tracking-tight mb-3" style={{ color: UDISTRICT_COLORS.purple }}>
            Save on The Ave
          </h1>
          <p className="text-sm sm:text-base leading-relaxed max-w-md mx-auto" style={{ color: '#666' }}>
            {`Exclusive student discounts activated by The Movement in the U-District - The Ave, Wallingford, Montlake, University Village, and Roosevelt.`}
          </p>
        </div>

        {/* Merchant Carousel */}
        <MerchantCarousel />

        {/* QR card below carousel */}
        <div className="flex flex-col items-center justify-center gap-4 mt-6">
          <a
            href="https://movementuw.college/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-[#E8E8E6] bg-white px-4 py-3 shadow-sm transition-all hover:shadow-md"
            aria-label="Open The Movement website"
          >
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&format=png&data=https%3A%2F%2Fmovementuw.college%2F"
              alt="QR code to open The Movement website"
              className="h-16 w-16 rounded-lg border border-[#E8E8E6] bg-white p-1"
            />
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: UDISTRICT_COLORS.gold }}>
                Scan to visit
              </p>
              <p className="text-sm font-semibold" style={{ color: UDISTRICT_COLORS.purple }}>
                The Movement
              </p>
              <p className="text-[11px]" style={{ color: '#666' }}>
                movementuw.college
              </p>
            </div>
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
              {'action' in f && f.action === 'partner' ? (
                <button
                  onClick={openPartner}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-uw-purple hover:underline"
                >
                  {f.cta} <ArrowRight className="w-3 h-3" />
                </button>
              ) : (
                <p className="text-xs text-[#6B6B6B]">{f.note}</p>
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
            {`Join thousands of U-District students already saving on The Ave with ${SITE_NAME}.`}
          </p>
          <button
            onClick={openPartner}
            className="inline-flex items-center gap-2 px-6 py-3 bg-uw-gold text-uw-purple font-bold text-sm rounded-full hover:bg-uw-gold-light active:scale-[0.97] transition-all"
          >
            Partner with Us
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

