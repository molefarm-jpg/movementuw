import { useState, useMemo, useCallback } from 'react';
import {
  Search,
  Tag,
  MapPin,
  X,
  Clock,
  TrendingUp,
  ArrowRight,
  Smartphone,
  Store,
  ShieldCheck,
  Megaphone,
  BarChart3,
  Phone,
  UserPlus,
  Rocket,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
} from 'lucide-react';
import {
  ACTIVE_MERCHANTS,
  COMING_SOON_MERCHANTS,
  CATEGORIES,
} from '@/data/businesses';
import type { CategoryKey, Merchant } from '@/data/businesses';
import { useModal } from '@/hooks/useModal';
import { SITE_NAME, APP_DOWNLOAD_URL } from '@/lib/siteConfig';


const CATEGORY_DOT: Record<string, string> = {
  food: 'bg-uw-purple',
  cafe: 'bg-uw-gold',
  services: 'bg-[#6B6B6B]',
};

/* ───── VALUE PROPS ───── */
const VALUE_PROPS = [
  {
    icon: Store,
    title: 'Free merchant profile',
    description: `List your business on ${SITE_NAME} at no cost. Your profile includes photos, hours, menu, and your student offer.`,
  },
  {
    icon: ShieldCheck,
    title: 'Verified redemption',
    description: 'Our app verifies each student with their enrollment status, so you know every discount goes to a verified UofW student.',
  },
  {
    icon: Megaphone,
    title: 'Campus marketing',
    description: 'We promote your deal across campus social channels, student orgs, and email lists to drive foot traffic from day one.',
  },
  {
    icon: BarChart3,
    title: 'Performance dashboard',
    description: 'Track redemptions, peak hours, and student engagement in real time through your merchant analytics dashboard.',
  },
];

/* ───── PROCESS STEPS ───── */
const PROCESS_STEPS = [
  {
    step: '1',
    icon: Phone,
    title: 'Schedule a Free Call',
    description: 'Tell us about your business and the student offer you want to activate.',
  },
  {
    step: '2',
    icon: UserPlus,
    title: 'Create Your Profile',
    description: 'We build your merchant profile in the app with photos, hours, and your deal.',
  },
  {
    step: '3',
    icon: Rocket,
    title: 'Go Live & Get Discovered',
    description: '`Your deal goes live to thousands of UofW students browsing the ${SITE_NAME} app.`',
  },
  {
    step: '4',
    icon: TrendingUp,
    title: 'Track & Grow',
    description: 'Monitor redemptions and engagement, then optimize your offer over time.',
  },
];

/* ───── FAQ ───── */
const FAQS = [
  {
    q: 'How much does it cost to list my business?',
    a: '`Nothing. Listing your business and activating a student discount on ${SITE_NAME} is completely free for merchants.`',
  },
  {
    q: 'How quickly can I go live?',
    a: 'Most merchants go live within 24–48 hours of their onboarding call. We handle the profile setup and app integration for you.',
  },
  {
    q: 'What kind of discount should I offer?',
    a: 'Most merchants offer 10–20% off or a free item with purchase. We will help you choose an offer that drives traffic while protecting your margins.',
  },
  {
    q: 'How do students redeem the discount?',
    a: '`Students show their digital student ID through the ${SITE_NAME} app at checkout. You verify it in seconds — no paper coupons needed.`',
  },
];

/* ───── MERCHANT CARD ───── */
function MerchantCard({
  merchant,
  index,
  variant,
}: {
  merchant: Merchant;
  index: number;
  variant: 'active' | 'coming-soon';
}) {
  const isActive = variant === 'active';

  return (
    <div
      className={`rounded-xl border p-6 transition-all duration-200 animate-card-enter ${
        isActive
          ? 'bg-white border-[#E8E8E6] hover:border-uw-purple/40 hover:-translate-y-0.5'
          : 'bg-[#FAFAFA] border-[#E8E8E6]/60 hover:border-uw-gold/40'
      }`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${CATEGORY_DOT[merchant.category]}`} />
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#9E9E9E]">
            {merchant.category}
          </span>
        </div>
        {isActive ? (
          <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Active
          </span>
        ) : (
          <span className="flex items-center gap-1 text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
            <Clock className="w-3 h-3" />
            Coming Soon
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-[#1A1A1A] leading-snug mb-1">
        {merchant.name}
      </h3>
      <div className="flex items-center gap-1 mb-3">
        <MapPin className="w-3 h-3 text-[#C4C4C4] shrink-0" />
        <span className="text-xs text-[#9E9E9E]">{merchant.address}</span>
      </div>
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
        {merchant.description}
      </p>
      <div className={`flex items-center gap-2 pt-3 border-t ${isActive ? 'border-[#E8E8E6]' : 'border-[#E8E8E6]/50'}`}>
        <Tag className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-uw-purple' : 'text-uw-gold'}`} />
        <span className={`text-sm font-semibold ${isActive ? 'text-uw-purple' : 'text-[#9E9E9E]'}`}>
          {merchant.discount}
        </span>
      </div>
      {isActive && merchant.activatedDate && (
        <p className="text-[10px] text-[#C4C4C4] mt-2 mb-3">Activated {merchant.activatedDate}</p>
      )}
      <a
        href={APP_DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full mt-3 flex items-center justify-center gap-2 h-9 rounded-full text-xs font-semibold transition-all active:scale-[0.97] ${
          isActive
            ? 'bg-uw-purple text-white hover:bg-uw-purple-light'
            : 'bg-[#F0F0EE] text-[#6B6B6B] hover:bg-uw-gold/20 hover:text-uw-purple'
        }`}
        onClick={() => console.log(`[CLICK TRACK] View & Redeem: ${merchant.name}`)}
      >
        <Smartphone className="w-3.5 h-3.5" />
        {`Redeem via ${SITE_NAME} App`}
        <ArrowRight className="w-3 h-3" />
      </a>
    </div>
  );
}

/* ───── FAQ ITEM ───── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#E8E8E6] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#FAFAFA] transition-colors"
      >
        <span className="text-sm font-medium text-[#1A1A1A]">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-[#9E9E9E] shrink-0 ml-3" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#9E9E9E] shrink-0 ml-3" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-sm text-[#6B6B6B] leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ───── MAIN PAGE ───── */
export default function Merchants() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { openPartner } = useModal();

  const filterMerchants = useCallback(
    (merchants: Merchant[]) => {
      let results = merchants;
      if (activeCategory !== 'all') results = results.filter((m) => m.category === activeCategory);
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        results = results.filter(
          (m) =>
            m.name.toLowerCase().includes(q) ||
            m.description.toLowerCase().includes(q) ||
            m.discount.toLowerCase().includes(q)
        );
      }
      return results;
    },
    [activeCategory, searchQuery]
  );

  const filteredActive = useMemo(() => filterMerchants(ACTIVE_MERCHANTS), [filterMerchants]);
  const filteredComingSoon = useMemo(() => filterMerchants(COMING_SOON_MERCHANTS), [filterMerchants]);

  const clearSearch = useCallback(() => setSearchQuery(''), []);
  const allCount = ACTIVE_MERCHANTS.length + COMING_SOON_MERCHANTS.length;

  return (
    <div>
      {/* ═══════════ APP NOTICE ═══════════ */}
      <div className="bg-amber-50 border-b border-amber-200/60 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-start sm:items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-amber-700 leading-relaxed">
            <span className="font-semibold">Attention:</span> {`All student discounts listed below are exclusively available and redeemable through the ${SITE_NAME} social app.`}{' '}
            <a
              href={APP_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-uw-purple transition-colors"
              onClick={() => console.log('[CLICK TRACK] Merchants Notice: Download')}
            >
              Download now to access your offers.
            </a>
          </p>
        </div>
      </div>

      {/* ═══════════ HERO ═══════════ */}
      <section className="pt-10 pb-4 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-uw-purple mb-3 block">
          For Merchants
        </span>
        <h1 className="text-[32px] sm:text-[48px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight mb-3">
          Grow Your Business with <span className="text-uw-purple">UofW Students.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-lg mx-auto mb-6">
          Join the fastest-growing student marketplace on The Ave. List your business for free and connect with thousands of UofW students.
        </p>
        <button
          onClick={openPartner}
          className="inline-flex items-center gap-2 px-6 py-3 bg-uw-purple text-white font-bold text-sm rounded-full hover:bg-uw-purple-light active:scale-[0.97] transition-all"
        >
          List Your Business
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* ═══════════ VALUE PROPS ═══════════ */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto py-12">
        <h2 className="text-sm font-semibold text-[#1A1A1A] text-center mb-6">
          {`Why Join ${SITE_NAME}`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VALUE_PROPS.map((vp) => (
            <div
              key={vp.title}
              className="rounded-xl border border-[#E8E8E6] p-5 hover:border-uw-purple/30 transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-uw-purple/10 flex items-center justify-center mb-3">
                <vp.icon className="w-4 h-4 text-uw-purple" />
              </div>
              <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{vp.title}</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">{vp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ PROCESS STEPS ═══════════ */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-12">
        <div className="bg-[#F9F9F7] rounded-2xl p-6 sm:p-8">
          <h2 className="text-sm font-semibold text-[#1A1A1A] text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className={`w-10 h-10 rounded-full ${s.step === '1' ? 'bg-uw-purple/10' : s.step === '2' ? 'bg-uw-gold/20' : s.step === '3' ? 'bg-emerald-50' : 'bg-blue-50'} flex items-center justify-center mb-3`}>
                  <s.icon className={`w-4 h-4 ${s.step === '1' ? 'text-uw-purple' : s.step === '2' ? 'text-uw-gold-dark' : s.step === '3' ? 'text-emerald-600' : 'text-blue-600'}`} />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${s.step === '1' ? 'text-uw-purple' : s.step === '2' ? 'text-uw-gold-dark' : s.step === '3' ? 'text-emerald-600' : 'text-blue-600'}`}>
                  Step {s.step}
                </span>
                <p className="text-xs font-semibold text-[#1A1A1A] mb-1">{s.title}</p>
                <p className="text-[11px] text-[#6B6B6B] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MERCHANT DIRECTORY ═══════════ */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A1A]">
              {allCount}+ Local Businesses
            </h2>
            <p className="text-xs text-[#9E9E9E] mt-0.5">
              Discover and support merchants on The Ave
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-5">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E9E9E]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search merchants..."
            className="w-full h-10 pl-10 pr-9 text-sm rounded-full border border-[#E8E8E6] bg-[#F9F9F7] text-[#1A1A1A] placeholder:text-[#C4C4C4] focus:outline-none focus:border-uw-purple focus:bg-white focus:ring-1 focus:ring-uw-purple/10 transition-all"
          />
          {searchQuery && (
            <button onClick={clearSearch} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="w-3.5 h-3.5 text-[#9E9E9E] hover:text-[#6B6B6B]" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-6">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-uw-purple text-white border-uw-purple'
                    : 'bg-white text-[#6B6B6B] border-[#E8E8E6] hover:border-uw-purple/40 hover:text-uw-purple'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Active */}
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-4 h-4 text-emerald-500" />
          <h3 className="text-sm font-semibold text-[#1A1A1A]">Activated</h3>
          <span className="text-xs text-[#9E9E9E]">({filteredActive.length})</span>
        </div>
        {filteredActive.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {filteredActive.map((m, i) => (
              <MerchantCard key={m.id} merchant={m} index={i} variant="active" />
            ))}
          </div>
        ) : (
          <div className="py-6 text-center mb-10">
            <p className="text-xs text-[#9E9E9E]">No active merchants match your search.</p>
          </div>
        )}

        {/* Coming Soon */}
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-semibold text-[#1A1A1A]">Coming Soon</h3>
          <span className="text-xs text-[#9E9E9E]">({filteredComingSoon.length} pending)</span>
        </div>

        <div className="mb-4 p-4 bg-amber-50/60 rounded-xl border border-amber-200/50">
          <p className="text-xs text-[#6B6B6B] leading-relaxed">
            {`These merchants are on ${SITE_NAME}'s activation roadmap.`}{' '}
            <button onClick={openPartner} className="font-semibold text-uw-purple hover:underline">
              Help us activate them.
            </button>
          </p>
        </div>

        {filteredComingSoon.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
            {filteredComingSoon.map((m, i) => (
              <MerchantCard key={m.id} merchant={m} index={i} variant="coming-soon" />
            ))}
          </div>
        ) : (
          <div className="py-6 text-center">
            <p className="text-xs text-[#9E9E9E]">No pending merchants match your search.</p>
          </div>
        )}
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <div className="bg-gradient-to-br from-uw-purple to-uw-purple-dark rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {`Ready to grow with ${SITE_NAME}?`}
          </h2>
          <p className="text-sm text-white/70 max-w-md mx-auto mb-5">
            List your business for free and start reaching thousands of UofW students today.
          </p>
          <button
            onClick={openPartner}
            className="inline-flex items-center gap-2 px-6 py-3 bg-uw-gold text-uw-purple font-bold text-sm rounded-full hover:bg-uw-gold-light active:scale-[0.97] transition-all"
          >
            List Your Business
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="px-4 sm:px-6 max-w-3xl mx-auto pb-16">
        <h2 className="text-base font-semibold text-[#1A1A1A] mb-5 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 max-w-lg mx-auto">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </div>
  );
}
