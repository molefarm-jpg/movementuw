import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Handshake, Download, Menu, X, AlertTriangle } from 'lucide-react';
import { useModal } from '@/hooks/useModal';
import { SITE_NAME, APP_DOWNLOAD_URL, UOFW_COLORS } from '@/lib/siteConfig';
import PartnerModal from './PartnerModal';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/uofw', label: 'UofW' },
  { to: '/merchants', label: 'Merchants' },
  { to: '/students', label: 'Students' },
  { to: '/community', label: 'Community' },
];

export default function Layout() {
  const { isPartnerOpen, openPartner, closePartner } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-40" style={{ backgroundColor: UOFW_COLORS.purple, borderBottom: `3px solid ${UOFW_COLORS.gold}` }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <img src="/media/Washington-Huskies-logo-500x300.png" alt="Movement logo" className="shrink-0 w-10 h-6 object-contain" />
            <div className="leading-tight">
              <span className="text-sm font-bold" style={{ color: UOFW_COLORS.gold }}>The Movement at the UofW</span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white/20'
                      : 'text-white/70 hover:text-white'
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? UOFW_COLORS.gold : 'rgba(255,255,255,0.7)'
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTAs + Hamburger */}
          <div className="flex items-center gap-2">
            <a
              href={APP_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 h-8 px-3 text-xs font-medium rounded-full transition-all"
              style={{ color: UOFW_COLORS.gold, border: `1.5px solid ${UOFW_COLORS.gold}`, backgroundColor: 'rgba(255,255,255,0.1)' }}
              onClick={() => console.log('[CLICK TRACK] Nav: Get the App')}
            >
              <Download className="w-3.5 h-3.5" />
              Get the App
            </a>
            <button
              onClick={openPartner}
              className="hidden sm:flex items-center gap-1.5 h-8 px-4 text-white text-xs font-medium rounded-full active:scale-[0.97] transition-all"
              style={{ backgroundColor: UOFW_COLORS.gold }}
            >
              <Handshake className="w-3.5 h-3.5" />
              Partner
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" style={{ color: UOFW_COLORS.gold }} /> : <Menu className="w-5 h-5" style={{ color: UOFW_COLORS.gold }} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 py-3" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderTop: `1px solid ${UOFW_COLORS.gold}` }}>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : undefined,
                    color: isActive ? UOFW_COLORS.gold : 'rgba(255,255,255,0.7)'
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex gap-2 mt-3 pt-3" style={{ borderTop: `1px solid ${UOFW_COLORS.gold}` }}>
              <a
                href={APP_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 h-9 text-white text-xs font-medium rounded-full"
                style={{ backgroundColor: UOFW_COLORS.gold }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="w-3.5 h-3.5" />
                Get the App
              </a>
              <button
                onClick={() => { openPartner(); setMobileMenuOpen(false); }}
                className="flex-1 flex items-center justify-center gap-2 h-9 text-xs font-medium rounded-full"
                style={{ color: UOFW_COLORS.gold, border: `1.5px solid ${UOFW_COLORS.gold}`, backgroundColor: 'rgba(255,255,255,0.05)' }}
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
        <div className="px-4 py-2.5" style={{ backgroundColor: UOFW_COLORS.purple, borderBottom: `3px solid ${UOFW_COLORS.gold}` }}>
          <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-center">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" style={{ color: UOFW_COLORS.gold }} />
            <p className="text-[11px] sm:text-xs" style={{ color: UOFW_COLORS.gold }}>
              <span className="font-semibold">{`All discounts are exclusively redeemable through the ${SITE_NAME} app.`}</span>{' '}
              <a
                href={APP_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline transition-colors hover:opacity-80"
                style={{ color: UOFW_COLORS.gold }}
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
      <footer style={{ backgroundColor: UOFW_COLORS.purple, borderTop: `3px solid ${UOFW_COLORS.gold}` }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img src="/media/Washington-Huskies-logo-500x300.png" alt="Movement logo" className="w-5 h-5 object-contain" />
                <span className="text-sm font-bold" style={{ color: UOFW_COLORS.gold }}>The Movement at the UofW</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Support Local, Save Daily: The Movement's UofW Student Guide to The District
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: UOFW_COLORS.gold }}>Explore</h4>
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
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: UOFW_COLORS.gold }}>Get Started</h4>
              <div className="flex flex-col gap-2">
                <a
                  href={APP_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium hover:underline"
                  style={{ color: UOFW_COLORS.gold }}
                  onClick={() => console.log('[CLICK TRACK] Footer: Get the App')}
                >
                  Download the App
                </a>
                <button
                  onClick={openPartner}
                  className="text-xs font-medium hover:underline text-left"
                  style={{ color: UOFW_COLORS.gold }}
                >
                  Partner with Us
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center text-[11px]" style={{ borderTop: `1px solid ${UOFW_COLORS.gold}`, color: 'rgba(255,255,255,0.6)' }}>
            {`The Movement at the UofW — Built for UofW students. Not officially affiliated with UofW.`}
          </div>
        </div>
      </footer>

      {/* ========== MOBILE PINNED BOTTOM BAR ========== */}
        <div
          className="sm:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-3 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
          style={{ backgroundColor: UOFW_COLORS.purple, borderTop: `3px solid ${UOFW_COLORS.gold}` }}
        >
          <a
            href={APP_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 h-10 text-white text-xs font-bold rounded-full active:scale-[0.97] transition-all"
            style={{ backgroundColor: UOFW_COLORS.gold }}
            onClick={() => console.log('[CLICK TRACK] Mobile Bar: Get the App')}
          >
            <Download className="w-4 h-4" />
            Get the App
          </a>
          <button
            onClick={openPartner}
            className="flex items-center justify-center gap-2 h-10 px-4 text-xs font-medium rounded-full active:scale-[0.97] transition-all"
            style={{ color: UOFW_COLORS.gold, border: `1.5px solid ${UOFW_COLORS.gold}`, backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <Handshake className="w-3.5 h-3.5" />
            Partner
          </button>
        </div>

      {/* Modals */}
      <PartnerModal open={isPartnerOpen} onClose={closePartner} />
    </div>
  );
}
