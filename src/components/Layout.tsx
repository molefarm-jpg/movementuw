import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Handshake, Download, Menu, X, AlertTriangle } from 'lucide-react';
import { useModal } from '@/hooks/useModal';
import { APP_DOWNLOAD_URL, APP_STORE_URLS, UDISTRICT_COLORS } from '@/lib/siteConfig';
import PartnerModal from './PartnerModal';
import RouteSeo from './RouteSeo';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/u-district', label: 'U-District' },
  { to: '/merchants', label: 'Merchants' },
  { to: '/students', label: 'Students' },
  { to: '/community', label: 'Community' },
];

const HEADER_ROW_CLASS = 'max-w-6xl mx-auto pl-0 pr-3 sm:pl-1 sm:pr-4 lg:pl-2 lg:pr-6 h-[68px] sm:h-16 flex items-center gap-3';
const BRAND_LINK_CLASS = '-ml-8 sm:-ml-9 md:-ml-12 lg:-ml-14 xl:-ml-[4.5rem] mr-auto flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0 max-w-[180px] sm:max-w-[240px] md:max-w-[340px] lg:max-w-[400px] rounded-lg px-1 py-1';
const BRAND_TEXT_WRAP_CLASS = 'ml-0.5 sm:ml-1 min-w-0 text-left';
const DESKTOP_NAV_CLASS = 'hidden 2xl:flex items-center justify-start gap-2 ml-8';
const HEADER_ACTIONS_CLASS = 'ml-2 sm:ml-3 flex items-center gap-2 shrink-0';

export default function Layout() {
  const { isPartnerOpen, openPartner, closePartner } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      <RouteSeo />
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-40" style={{ backgroundColor: UDISTRICT_COLORS.purple, borderBottom: `3px solid ${UDISTRICT_COLORS.gold}` }}>
        <div className={HEADER_ROW_CLASS}>
          {/* Logo */}
          <NavLink to="/" className={BRAND_LINK_CLASS} onClick={() => setMobileMenuOpen(false)}>
            <span
              aria-hidden="true"
              className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-md bg-white/20 border border-white/30 p-0.5 flex items-center justify-center"
            >
              <img
                src="/media/movement-m-logo-v2.png"
                alt=""
                className="block w-full h-full object-contain opacity-100"
              />
            </span>
            <div className={BRAND_TEXT_WRAP_CLASS}>
              <span className="block leading-none whitespace-nowrap text-[10px] sm:text-[11px] md:text-sm lg:text-[15px] xl:text-base font-extrabold tracking-tight" style={{ color: UDISTRICT_COLORS.gold }}>
                The Movement
              </span>
              <span className="block mt-0.5 leading-none whitespace-nowrap text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-[15px] font-bold tracking-tight" style={{ color: UDISTRICT_COLORS.gold }}>
                in the U-District
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className={DESKTOP_NAV_CLASS}>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white/20'
                      : 'text-white/90 hover:text-white'
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.9)'
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTAs + Hamburger */}
          <div className={HEADER_ACTIONS_CLASS}>
            <a
              href={APP_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center justify-center gap-2 h-10 min-w-[180px] px-6 text-xs font-bold leading-none whitespace-nowrap rounded-full hover:bg-white/20 active:scale-[0.98] transition-all"
              style={{ color: '#ffffff', border: `1.5px solid ${UDISTRICT_COLORS.gold}`, backgroundColor: 'rgba(255,255,255,0.1)' }}
              onClick={() => console.log('[CLICK TRACK] Nav: Get the App')}
            >
              <Download className="w-3.5 h-3.5" />
              Get the Social App - iPhone
            </a>
            <a
              href={APP_STORE_URLS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden 2xl:flex items-center justify-center gap-2 h-10 min-w-[208px] px-7 text-xs font-bold leading-none whitespace-nowrap rounded-full hover:bg-white/20 active:scale-[0.98] transition-all"
              style={{ color: '#ffffff', border: `1.5px solid ${UDISTRICT_COLORS.gold}`, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <Download className="w-3.5 h-3.5" />
              Get the Social App - Android
            </a>
            <button
              onClick={openPartner}
              className="hidden xl:flex items-center justify-center gap-1.5 h-9 px-4 text-white text-[11px] font-semibold tracking-[0.01em] whitespace-nowrap rounded-full active:scale-[0.97] transition-all"
              style={{ backgroundColor: UDISTRICT_COLORS.gold }}
            >
              <Handshake className="w-3.5 h-3.5" />
              Partner with Us
            </button>

            {/* Mobile menu toggle */}
            <button
              className="2xl:hidden p-2 rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" style={{ color: UDISTRICT_COLORS.gold }} /> : <Menu className="w-5 h-5" style={{ color: UDISTRICT_COLORS.gold }} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="2xl:hidden px-4 py-3" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderTop: `1px solid ${UDISTRICT_COLORS.gold}` }}>
            <nav className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-medium tracking-[0.01em] whitespace-nowrap transition-all ${
                      isActive
                        ? 'text-white'
                        : 'text-white/90 hover:text-white'
                    }`
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : undefined,
                    color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.9)'
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="grid grid-cols-2 gap-2 mt-3 pt-3" style={{ borderTop: `1px solid ${UDISTRICT_COLORS.gold}` }}>
              <a
                href={APP_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[1.25] flex items-center justify-center gap-2 h-10 px-4 text-white text-xs font-bold leading-none whitespace-nowrap rounded-full"
                style={{ backgroundColor: UDISTRICT_COLORS.gold }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="w-3.5 h-3.5" />
                Get the Social App - iPhone
              </a>
              <a
                href={APP_STORE_URLS.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[1.25] flex items-center justify-center gap-2 h-10 px-4 text-white text-xs font-bold leading-none whitespace-nowrap rounded-full"
                style={{ backgroundColor: UDISTRICT_COLORS.gold }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="w-3.5 h-3.5" />
                Get the Social App - Android
              </a>
              <button
                onClick={() => { openPartner(); setMobileMenuOpen(false); }}
                className="col-span-2 flex items-center justify-center gap-1.5 h-9 px-2 text-[11px] font-semibold tracking-[0.01em] whitespace-nowrap rounded-full"
                style={{ color: UDISTRICT_COLORS.gold, border: `1.5px solid ${UDISTRICT_COLORS.gold}`, backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <Handshake className="w-3.5 h-3.5" />
                Partner with Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Site-Wide App Notice (hidden on Merchants page to avoid duplicate notices) */}
      {location.pathname !== '/merchants' && (
        <div className="px-4 py-2.5" style={{ backgroundColor: UDISTRICT_COLORS.purple, borderBottom: `3px solid ${UDISTRICT_COLORS.gold}` }}>
          <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-center">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" style={{ color: UDISTRICT_COLORS.gold }} />
            <p className="text-[11px] sm:text-xs" style={{ color: UDISTRICT_COLORS.gold }}>
              <span className="font-semibold">{`All discounts are exclusively redeemable through the Social App.`}</span>{' '}
              <a
                href={APP_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline transition-colors hover:opacity-80"
                style={{ color: UDISTRICT_COLORS.gold }}
                onClick={() => console.log('[CLICK TRACK] Notice: Download')}
              >
                Download now to access.
              </a>
            </p>
          </div>
        </div>
      )}

      {/* ========== PAGE CONTENT ========== */}
      <main>
        <Outlet />
      </main>

      {/* ========== FOOTER ========== */}
      <footer style={{ backgroundColor: UDISTRICT_COLORS.purple, borderTop: `3px solid ${UDISTRICT_COLORS.gold}` }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  aria-hidden="true"
                  className="w-5 h-5 rounded-sm bg-white/10 border border-white/15 p-[1px] flex items-center justify-center"
                >
                  <img
                    src="/media/movement-m-logo-v2.png"
                    alt=""
                    className="block w-full h-full object-contain opacity-100"
                  />
                </span>
                <span className="text-sm font-bold" style={{ color: UDISTRICT_COLORS.gold }}>The Movement in the U-District</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Support Local, Save Daily: The Movement's U-District Student Guide to The District
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: UDISTRICT_COLORS.gold }}>Explore</h4>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="text-xs transition-colors hover:opacity-100" 
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* CTA Column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: UDISTRICT_COLORS.gold }}>Get Started</h4>
              <div className="flex flex-col gap-2">
                <a
                  href={APP_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium hover:underline"
                  style={{ color: UDISTRICT_COLORS.gold }}
                  onClick={() => console.log('[CLICK TRACK] Footer: Get the App')}
                >
                  Get the Social App
                </a>
                <button
                  onClick={openPartner}
                  className="text-xs font-medium hover:underline text-left"
                  style={{ color: UDISTRICT_COLORS.gold }}
                >
                  Partner with Us
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center text-[11px]" style={{ borderTop: `1px solid ${UDISTRICT_COLORS.gold}`, color: 'rgba(255,255,255,0.6)' }}>
            {`The Movement in the U-District â€” Built for U-District students. Not officially affiliated with U-District.`}
          </div>
        </div>
      </footer>

      {/* ========== MOBILE PINNED BOTTOM BAR ========== */}
        <div
          className="sm:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-3 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
          style={{ backgroundColor: UDISTRICT_COLORS.purple, borderTop: `3px solid ${UDISTRICT_COLORS.gold}` }}
        >
          <a
            href={APP_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.25] flex items-center justify-center gap-2 h-10 px-4 text-white text-xs font-bold leading-none whitespace-nowrap rounded-full active:scale-[0.97] transition-all"
            style={{ backgroundColor: UDISTRICT_COLORS.gold }}
            onClick={() => console.log('[CLICK TRACK] Mobile Bar: Get the Social App - iPhone')}
          >
            <Download className="w-4 h-4" />
            Get the Social App - iPhone
          </a>
          <button
            onClick={openPartner}
            className="flex items-center justify-center gap-1.5 h-10 px-4 text-[11px] font-semibold tracking-[0.01em] whitespace-nowrap rounded-full active:scale-[0.97] transition-all"
            style={{ color: UDISTRICT_COLORS.gold, border: `1.5px solid ${UDISTRICT_COLORS.gold}`, backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <Handshake className="w-3.5 h-3.5" />
            Partner with Us
          </button>
        </div>

      {/* Modals */}
      <PartnerModal open={isPartnerOpen} onClose={closePartner} />
    </div>
  );
}


