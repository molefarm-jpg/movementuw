import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star, Smartphone, ArrowUpRight } from 'lucide-react';
import { ACTIVE_MERCHANTS } from '@/data/businesses';
import { APP_DOWNLOAD_URL } from '@/lib/siteConfig';


const CATEGORY_LABEL: Record<string, string> = {
  food: 'Food',
  cafe: 'Cafe',
  services: 'Services',
  health: 'Health',
  retail: 'Retail',
};

export default function MerchantCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const autoPlayRef = useRef<number | undefined>(undefined);

  const merchants = ACTIVE_MERCHANTS;
  const total = merchants.length;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total);
  }, [current, total, goTo]);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
  }, [total]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = undefined;
    }
  }, []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (total > 0) startAutoPlay();
    return () => stopAutoPlay();
  }, [total, startAutoPlay, stopAutoPlay]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoPlay();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    // Restart autoplay
    startAutoPlay();
  };

  // Pause on hover
  const handleMouseEnter = () => {
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    startAutoPlay();
  };

  if (total === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">No merchants available.</div>
    );
  }

  const isPurpleTheme = current % 2 === 0;
  const gradient = isPurpleTheme
    ? 'from-uw-purple to-uw-purple-light'
    : 'from-uw-gold/90 to-[#8C7A52]/95';

  return (
    <div
      className="w-full max-w-3xl mx-auto px-4 sm:px-6"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} min-h-[280px] sm:min-h-[240px]`}>
        {/* Slide Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-all duration-500`} />

        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Slides Wrapper */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {merchants.map((m, i) => {
              const isPurpleCard = i % 2 === 0;
              const cardFrame = isPurpleCard
                ? 'border-uw-purple-light/70 bg-gradient-to-br from-uw-purple to-uw-purple-light'
                : 'border-uw-gold/70 bg-gradient-to-br from-[#9B7A34] to-[#7A5E26]';

              return (
                <div
                  key={m.id}
                  className={`relative w-full flex-shrink-0 p-6 sm:p-8 flex flex-col justify-between rounded-xl border-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] ${cardFrame}`}
                  style={{ minHeight: '280px' }}
                >
                {/* Top Row: Badge + Nav */}
                <div className="flex items-start justify-between mb-4">
                  {/* Featured Partner Badge */}
                  <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                    <Star className="w-3 h-3 text-uw-gold fill-uw-gold" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                      Featured Partner
                    </span>
                  </div>

                  {/* Slide counter */}
                  <span className="text-[10px] font-medium text-white/40">
                    {current + 1} / {total}
                  </span>
                </div>

                {m.imageUrl && (
                  <div className="absolute right-6 top-14 overflow-hidden rounded-lg border border-white/40 bg-black/20 shadow-[0_8px_18px_rgba(0,0,0,0.3)] sm:right-8 sm:top-16">
                    <img
                      src={m.imageUrl}
                      alt={`${m.name} thumbnail`}
                      className="h-20 w-20 object-cover sm:h-24 sm:w-24"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content */}
                <div className={`flex-1 ${m.imageUrl ? 'pr-24 sm:pr-28' : ''}`}>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 block">
                    {CATEGORY_LABEL[m.category] || m.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
                    {m.name}
                  </h2>
                  <p className="text-sm text-white/70 leading-relaxed max-w-md mb-2">
                    {m.description}
                  </p>
                  <p className="text-xs text-white/40">
                    Activated {m.activatedDate}
                  </p>
                </div>

                {/* Bottom Row: Discount + CTA */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-5 pt-5 border-t border-white/10">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">
                      Student Offer
                    </p>
                    <p className="text-lg font-bold text-uw-gold">
                      {m.discount}
                    </p>
                  </div>

                  <a
                    href={APP_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-uw-purple font-bold text-xs rounded-full hover:bg-white/90 active:scale-[0.97] transition-all"
                    onClick={() =>
                      console.log(`[CLICK TRACK] Carousel Redeem: ${m.name}`)
                    }
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    Go to their website!
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows (desktop only) */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all"
              aria-label="Previous"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all"
              aria-label="Next"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Dot Indicators */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {merchants.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-6 h-2 bg-uw-purple'
                  : 'w-2 h-2 bg-[#E8E8E6] hover:bg-[#C4C4C4]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
