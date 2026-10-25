import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Menu,
  X,
  Send,
  Check,
  ArrowRight
} from 'lucide-react';

/* ==========================================================================
   BUSINESS CONFIGURATION (EASY TO EDIT IN ONE PLACE)
   Update details here to instantly reflect across the entire website.
   ========================================================================== */
export const BUSINESS_CONFIG = {
  name: 'NT Windows and Solar',
  phone: '+61 404 896 910',
  phoneTel: '+61404896910',
  email: 'ntwindowsandsolar@gmail.com',

  // Service Area: Darwin and the Top End, NT
  serviceArea: 'Darwin and the Top End, NT',

  // Rating & Social Proof
  rating: '4.9',
  reviewsCount: 11,

  /* OPENING HOURS CONFIGURATION:
     Currently no set hours are provided, so the website displays:
     "Call or email for a free quote"
     To add set business hours later, you can update 'hoursDisplayText' or 
     uncomment and edit the schedule below. */
  hoursDisplayText: 'Call or email for a free quote',
  /* Example for future use:
  regularHours: [
    { days: 'Monday – Friday', hours: '7:00 am – 5:00 pm' },
    { days: 'Saturday', hours: '8:00 am – 2:00 pm' },
    { days: 'Sunday', hours: 'By appointment' }
  ],
  */

  // SERVICES LIST (Easy to edit, reorder, or add descriptions)
  services: [
    {
      id: 'residential-windows',
      title: 'Residential Window Cleaning',
      description: 'Streak-free windows inside and out for your home.',
      detail: 'Tailored for Darwin houses, apartments, and elevated tropical homes.',
      icon: 'window',
    },
    {
      id: 'commercial-windows',
      title: 'Commercial Window Cleaning',
      description: 'Reliable, professional cleaning for shopfronts and offices.',
      detail: 'Maintain an immaculate first impression for your clients and staff.',
      icon: 'commercial',
    },
    {
      id: 'solar-panels',
      title: 'Solar Panel Cleaning',
      description: 'Remove dust, grime, and build-up to keep your panels looking their best.',
      detail: 'Gentle, pure-water rinse designed specifically for Top End wet and dry seasons.',
      icon: 'solar',
    },
    {
      id: 'flyscreens-tracks',
      title: 'Fly Screen & Track Cleaning',
      description: 'The finishing touch for fresh, tidy windows.',
      detail: 'We clear out accumulated red dust, grit, and bugs from tracks and mesh.',
      icon: 'screen',
    },
  ],

  // WHY CHOOSE US REASONS
  features: [
    {
      title: 'Highly Rated Locally',
      description: 'Proud 4.9-star average from verified local Darwin clients.',
    },
    {
      title: 'Streak-Free Finish',
      description: 'Crystal-clear glass utilizing pure water and professional gear.',
    },
    {
      title: 'Reliable & Professional',
      description: 'Punctual, friendly, and respectful of your home and premises.',
    },
    {
      title: 'Free Quotes',
      description: 'Quick, honest, and obligation-free quotes via phone or email.',
    },
  ],
};

/* ==========================================================================
   CUSTOM SVG ICONS & LOGO
   ========================================================================== */

/**
 * Combined Window Pane + Sun Logo
 * Features a window pane with diagonal glass reflection and a warm golden sun
 * peeking over the top corner.
 */
function LogoIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sun peeking over top-right */}
      <circle cx="48" cy="16" r="12" fill="#F7B32B" />
      <path
        d="M48 0V6M48 26V32M64 16H58M38 16H32M59.3 5.7L55 10M41 24L36.7 28.3M59.3 26.3L55 22M41 8L36.7 3.7"
        stroke="#F7B32B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Outer Window Frame */}
      <rect
        x="6"
        y="14"
        width="42"
        height="44"
        rx="5"
        fill="#1E88D6"
        stroke="#0D3558"
        strokeWidth="2.5"
      />

      {/* 4 Glass Panes */}
      <rect x="10" y="18" width="15" height="16" rx="2" fill="#FFFFFF" fillOpacity="0.9" />
      <rect x="29" y="18" width="15" height="16" rx="2" fill="#FFFFFF" fillOpacity="0.9" />
      <rect x="10" y="38" width="15" height="16" rx="2" fill="#FFFFFF" fillOpacity="0.9" />
      <rect x="29" y="38" width="15" height="16" rx="2" fill="#FFFFFF" fillOpacity="0.9" />

      {/* Diagonal Glass Reflection Streak */}
      <path
        d="M12 48L38 18"
        stroke="#7CCBEA"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
      <path
        d="M20 52L42 28"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.9"
      />
    </svg>
  );
}

/**
 * Service-specific line icons matching brand aesthetics
 */
function ServiceIcon({ type }: { type: string }) {
  if (type === 'window') {
    return (
      <svg
        className="w-8 h-8 text-[#1E88D6]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="3" y1="12" x2="21" y2="12" />
        {/* Subtle glass gleam */}
        <line x1="6" y1="6" x2="9" y2="9" stroke="#7CCBEA" strokeWidth="2" />
      </svg>
    );
  }
  if (type === 'commercial') {
    return (
      <svg
        className="w-8 h-8 text-[#1E88D6]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="9" y1="22" x2="9" y2="18" />
        <line x1="15" y1="22" x2="15" y2="18" />
        <line x1="8" y1="6" x2="10" y2="6" stroke="#7CCBEA" />
        <line x1="14" y1="6" x2="16" y2="6" stroke="#7CCBEA" />
        <line x1="8" y1="10" x2="10" y2="10" stroke="#7CCBEA" />
        <line x1="14" y1="10" x2="16" y2="10" stroke="#7CCBEA" />
        <line x1="8" y1="14" x2="10" y2="14" stroke="#7CCBEA" />
        <line x1="14" y1="14" x2="16" y2="14" stroke="#7CCBEA" />
      </svg>
    );
  }
  if (type === 'solar') {
    return (
      <svg
        className="w-8 h-8 text-[#1E88D6]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="5" r="2.5" fill="#F7B32B" stroke="#F7B32B" />
        <rect x="3" y="10" width="18" height="11" rx="2" />
        <line x1="9" y1="10" x2="9" y2="21" />
        <line x1="15" y1="10" x2="15" y2="21" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    );
  }
  // Fly Screen / Track icon
  return (
    <svg
      className="w-8 h-8 text-[#1E88D6]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7" y1="3" x2="7" y2="21" strokeDasharray="2 2" stroke="#7CCBEA" />
      <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="2 2" stroke="#7CCBEA" />
      <line x1="17" y1="3" x2="17" y2="21" strokeDasharray="2 2" stroke="#7CCBEA" />
      <line x1="3" y1="8" x2="21" y2="8" strokeDasharray="2 2" stroke="#7CCBEA" />
      <line x1="3" y1="13" x2="21" y2="13" strokeDasharray="2 2" stroke="#7CCBEA" />
      <line x1="3" y1="18" x2="21" y2="18" strokeDasharray="2 2" stroke="#7CCBEA" />
    </svg>
  );
}

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(BUSINESS_CONFIG.services[0].title);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: BUSINESS_CONFIG.services[0].title,
    suburb: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelectAndScroll = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      return;
    }
    // Front-end state feedback (no backend required per brief)
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: BUSINESS_CONFIG.services[0].title,
      suburb: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#14283A] font-sans antialiased">
      {/* ----------------------------------------------------------------------
          1. STICKY HEADER (White, responsive, accessible)
          ---------------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo with window icon, sun, NT and WINDOWS & SOLAR */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#1E88D6] rounded-lg p-1"
            aria-label="NT Windows and Solar - Home"
          >
            <LogoIcon className="w-11 h-11 transform group-hover:scale-105 transition-transform duration-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-[#1E88D6] leading-none">
                NT
              </span>
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#0D3558] uppercase mt-1">
                Windows & Solar
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#14283A]">
            <a
              href="#services"
              className="hover:text-[#1E88D6] transition-colors py-1 focus:outline-hidden focus:ring-2 focus:ring-[#1E88D6] rounded-sm"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-[#1E88D6] transition-colors py-1 focus:outline-hidden focus:ring-2 focus:ring-[#1E88D6] rounded-sm"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-[#1E88D6] transition-colors py-1 focus:outline-hidden focus:ring-2 focus:ring-[#1E88D6] rounded-sm"
            >
              Contact
            </a>
          </nav>

          {/* Header Action: Phone CTA & Hamburger button */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-2 bg-[#F7B32B] hover:bg-[#e5a21e] active:scale-95 text-[#0D3558] font-bold text-sm sm:text-base px-4 sm:px-5 py-2.5 rounded-[10px] shadow-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#F7B32B]"
              aria-label={`Call now at ${BUSINESS_CONFIG.phone}`}
            >
              <Phone className="w-4 h-4 text-[#0D3558]" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="font-extrabold tracking-wide sm:text-sm">{BUSINESS_CONFIG.phone}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-[10px] text-[#14283A] hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#1E88D6]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 font-semibold text-[#14283A]">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F2F9FD] hover:text-[#1E88D6] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F2F9FD] hover:text-[#1E88D6] transition-colors"
              >
                About & Why Choose Us
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#F2F9FD] hover:text-[#1E88D6] transition-colors"
              >
                Contact & Free Quote
              </a>
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <span className="text-xs text-slate-500 font-medium px-3">
                  Service Area: {BUSINESS_CONFIG.serviceArea}
                </span>
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                  className="w-full text-center bg-[#F7B32B] text-[#0D3558] font-bold py-3 rounded-[10px] shadow-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call {BUSINESS_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ----------------------------------------------------------------------
          2. HERO SECTION
          Sky blue to deep navy gradient with sparkle accents, trust badge,
          clear CTAs and bottom curved divider.
          ---------------------------------------------------------------------- */}
      <section className="relative bg-gradient-to-br from-[#1E88D6] via-[#1568A8] to-[#0D3558] text-white pt-16 sm:pt-20 pb-28 md:pb-36 overflow-hidden">
        {/* Subtle Decorative Sparkle & Light Rays Motifs */}
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
          {/* Diagonal light rays */}
          <div className="absolute -top-32 -left-32 w-96 h-[800px] bg-gradient-to-r from-transparent via-white to-transparent rotate-45 transform-gpu blur-2xl"></div>
          <div className="absolute top-20 right-0 w-80 h-[600px] bg-gradient-to-r from-transparent via-[#7CCBEA] to-transparent -rotate-30 transform-gpu blur-xl"></div>
        </div>

        {/* Floating Sparkles Motif */}
        <div className="absolute top-12 left-10 text-[#7CCBEA] opacity-60 animate-sparkle-slow pointer-events-none hidden sm:block">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-28 right-16 text-[#F7B32B] opacity-70 animate-sparkle-fast pointer-events-none">
          <Sparkles className="w-10 h-10" />
        </div>
        <div className="absolute bottom-40 left-1/4 text-white opacity-40 animate-sparkle-slow pointer-events-none hidden lg:block">
          <Sparkles className="w-6 h-6" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trust Badge: Rating */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-8 shadow-sm">
            <div className="flex text-[#F7B32B] text-sm tracking-wider" aria-hidden="true">
              ★★★★★
            </div>
            <span className="font-bold text-white text-sm">
              {BUSINESS_CONFIG.rating}
            </span>
            <span className="text-white/40 text-xs">·</span>
            <span className="text-white/90 text-sm font-medium">
              {BUSINESS_CONFIG.reviewsCount} reviews
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.12]">
            Crystal Clear Windows. <br />
            <span className="text-[#7CCBEA]">Sparkling Solar Panels.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Professional window and solar panel cleaning across {BUSINESS_CONFIG.serviceArea}. Call
            or email for a free quote.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F7B32B] hover:bg-[#e5a21e] active:scale-98 text-[#0D3558] font-bold text-lg px-8 py-4 rounded-[10px] shadow-lg hover:shadow-xl transition-all focus:outline-hidden focus:ring-4 focus:ring-[#F7B32B]/50"
            >
              <Phone className="w-5 h-5 text-[#0D3558]" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-98 text-white font-semibold text-lg px-8 py-4 rounded-[10px] border-2 border-white backdrop-blur-xs transition-all focus:outline-hidden focus:ring-4 focus:ring-white/40"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Sunny Top End Quality Banner */}
          <div className="mt-12 flex items-center justify-center gap-6 text-xs sm:text-sm text-white/80 font-medium">
            <span className="flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-[#F7B32B]" /> Tropical Top End Specialists
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#7CCBEA]" /> Streak-Free Guarantee
            </span>
          </div>
        </div>

        {/* Gentle Curved Divider at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            className="relative block w-full h-12 sm:h-16 lg:h-20 text-[#F2F9FD]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          3. SERVICES + ABOUT SECTION
          Light blue-tinted off-white background (#F2F9FD), 4 cards with icons,
          and "Why Choose NT Windows and Solar" strip below.
          ---------------------------------------------------------------------- */}
      <section id="services" className="bg-[#F2F9FD] py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E88D6]/10 text-[#1E88D6] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#1E88D6]" /> Our Cleaning Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14283A] tracking-tight">
              Specialised Care for Darwin Homes & Businesses
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              From tropical humidity and wet season grime to dry season red dust, our professional
              equipment delivers sparkling results every time.
            </p>
          </div>

          {/* 4 Attractive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BUSINESS_CONFIG.services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-[10px] p-7 shadow-xs hover:shadow-xl border border-slate-100 hover:border-[#7CCBEA]/60 transition-all duration-300 flex flex-col justify-between glass-shine"
              >
                <div>
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-xl bg-[#F2F9FD] group-hover:bg-[#1E88D6]/10 flex items-center justify-center mb-6 transition-colors duration-200">
                    <ServiceIcon type={service.icon} />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-[#14283A] group-hover:text-[#1E88D6] transition-colors">
                    {service.title}
                  </h3>

                  {/* Main Description */}
                  <p className="mt-3 text-slate-600 text-sm font-medium leading-relaxed">
                    {service.description}
                  </p>

                  {/* Detail note */}
                  <p className="mt-2 text-xs text-slate-500 italic">
                    {service.detail}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleServiceSelectAndScroll(service.title)}
                    className="inline-flex items-center text-sm font-bold text-[#1E88D6] group-hover:text-[#1568A8] transition-colors focus:outline-hidden"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* "Why Choose NT Windows and Solar" Strip */}
          <div
            id="about"
            className="mt-20 pt-16 border-t border-slate-200/80 scroll-mt-24"
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14283A] tracking-tight">
                Why Choose NT Windows and Solar?
              </h3>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Local expertise and dedicated customer care you can rely on across the Top End.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BUSINESS_CONFIG.features.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-xs rounded-[10px] p-6 border border-slate-200/60 shadow-2xs flex items-start gap-4 hover:border-[#1E88D6]/30 transition-all"
                >
                  <div className="mt-0.5 p-2 rounded-full bg-[#7CCBEA]/15 text-[#1E88D6] shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#1E88D6]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#14283A] text-base">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          4. CONTACT + FOOTER SECTION
          Two-column layout on pure white (#FFFFFF), contact form on the left,
          phone/email/service area on the right, followed by slim dark navy footer.
          ---------------------------------------------------------------------- */}
      <section id="contact" className="bg-white py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E88D6] bg-[#1E88D6]/10 px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14283A] mt-3 tracking-tight">
              Ready for a Crystal Clear Finish?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Get in touch today for an obligation-free quote. We are proud to service residential and
              commercial properties across Darwin and the Top End.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 bg-[#F2F9FD] rounded-[10px] p-6 sm:p-10 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#14283A] mb-2">
                Request a Free Quote
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Fill in your details and we will get back to you promptly with an honest, upfront price.
              </p>

              {formSubmitted ? (
                <div
                  className="bg-white p-8 rounded-[10px] border border-emerald-200 text-center shadow-xs animate-in fade-in duration-300"
                  role="status"
                >
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-[#14283A]">
                    Thank You, {formData.name || 'there'}!
                  </h4>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Your quote request for <strong>{formData.service}</strong> has been received. We will contact you at <strong>{formData.phone || formData.email}</strong> shortly.
                  </p>
                  <p className="text-xs text-slate-500 mt-4">
                    Need immediate assistance? Call us directly on{' '}
                    <a
                      href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                      className="text-[#1E88D6] font-bold underline"
                    >
                      {BUSINESS_CONFIG.phone}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-6 px-6 py-2.5 bg-[#1E88D6] hover:bg-[#1568A8] text-white text-sm font-semibold rounded-[10px] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#14283A] mb-1.5"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Mitchell"
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[10px] text-sm text-[#14283A] focus:outline-hidden focus:ring-2 focus:ring-[#1E88D6] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#14283A] mb-1.5"
                      >
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 0404 896 910"
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[10px] text-sm text-[#14283A] focus:outline-hidden focus:ring-2 focus:ring-[#1E88D6] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#14283A] mb-1.5"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. name@example.com.au"
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[10px] text-sm text-[#14283A] focus:outline-hidden focus:ring-2 focus:ring-[#1E88D6] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Suburb */}
                    <div>
                      <label
                        htmlFor="suburb"
                        className="block text-xs font-bold uppercase tracking-wider text-[#14283A] mb-1.5"
                      >
                        Darwin Suburb / Location
                      </label>
                      <input
                        type="text"
                        id="suburb"
                        name="suburb"
                        value={formData.suburb}
                        onChange={handleInputChange}
                        placeholder="e.g. Nightcliff, Palmerston, Cullen Bay"
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[10px] text-sm text-[#14283A] focus:outline-hidden focus:ring-2 focus:ring-[#1E88D6] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-bold uppercase tracking-wider text-[#14283A] mb-1.5"
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[10px] text-sm text-[#14283A] focus:outline-hidden focus:ring-2 focus:ring-[#1E88D6] focus:border-transparent transition-all"
                    >
                      {BUSINESS_CONFIG.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#14283A] mb-1.5"
                    >
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about the property (number of storeys, number of solar panels, screen condition, etc.)..."
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-[10px] text-sm text-[#14283A] focus:outline-hidden focus:ring-2 focus:ring-[#1E88D6] focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#F7B32B] hover:bg-[#e5a21e] active:scale-98 text-[#0D3558] font-bold text-base rounded-[10px] shadow-sm transition-all flex items-center justify-center gap-2 focus:outline-hidden focus:ring-4 focus:ring-[#F7B32B]/40"
                  >
                    <Send className="w-4 h-4 text-[#0D3558]" />
                    <span>Request Free Quote</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    Obligation-free estimates. We never share your contact details.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Direct Contact & Business Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Call card */}
              <a
                href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                className="group block p-6 rounded-[10px] border border-slate-200 hover:border-[#1E88D6] bg-white hover:bg-[#F2F9FD] transition-all shadow-2xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E88D6]/10 text-[#1E88D6] group-hover:bg-[#1E88D6] group-hover:text-white flex items-center justify-center transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                      Give Us a Call
                    </div>
                    <div className="text-xl font-extrabold text-[#14283A] group-hover:text-[#1E88D6] transition-colors">
                      {BUSINESS_CONFIG.phone}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Tap to call directly from your device
                    </div>
                  </div>
                </div>
              </a>

              {/* Email card */}
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="group block p-6 rounded-[10px] border border-slate-200 hover:border-[#1E88D6] bg-white hover:bg-[#F2F9FD] transition-all shadow-2xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#7CCBEA]/20 text-[#1E88D6] group-hover:bg-[#1E88D6] group-hover:text-white flex items-center justify-center transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                      Send an Email
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#14283A] group-hover:text-[#1E88D6] transition-colors truncate">
                      {BUSINESS_CONFIG.email}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Send photos or details for a quote
                    </div>
                  </div>
                </div>
              </a>

              {/* Service Area Card */}
              <div className="p-6 rounded-[10px] border border-slate-200 bg-white shadow-2xs">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0D3558] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#1E88D6]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                      Service Area
                    </div>
                    <div className="text-lg font-bold text-[#14283A]">
                      Servicing {BUSINESS_CONFIG.serviceArea}
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Prompt on-site visits across Darwin City, Northern Suburbs, Palmerston, and surrounding Top End localities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours Placeholder Card */}
              <div className="p-6 rounded-[10px] border border-slate-200 bg-[#F2F9FD] shadow-2xs">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#1E88D6] flex items-center justify-center shrink-0 border border-slate-200">
                    <Clock className="w-6 h-6 text-[#1E88D6]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                      Availability & Hours
                    </div>
                    <div className="text-base font-bold text-[#14283A]">
                      {BUSINESS_CONFIG.hoursDisplayText}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Flexible appointments arranged to suit your work schedule and weather conditions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Summary Box */}
              <div className="p-5 rounded-[10px] bg-[#0D3558] text-white flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[#F7B32B] text-sm">
                    ★★★★★
                    <span className="text-white font-bold text-xs ml-1">
                      {BUSINESS_CONFIG.rating} / 5.0
                    </span>
                  </div>
                  <div className="text-xs text-white/80 mt-1">
                    Based on {BUSINESS_CONFIG.reviewsCount} verified customer reviews
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-white/10 rounded-full text-[#7CCBEA]">
                    Top End NT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------
            SLIM DARK NAVY FOOTER (#0D3558)
            Logo, business name, phone, email, and copyright.
            ---------------------------------------------------------------------- */}
        <footer className="mt-20 pt-12 pb-16 bg-[#0D3558] text-white border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
              {/* Logo in footer */}
              <div className="flex items-center gap-3">
                <LogoIcon className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight text-[#7CCBEA] leading-none">
                    NT
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white/90 uppercase mt-1">
                    Windows & Solar
                  </span>
                </div>
              </div>

              {/* Direct links */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                  className="hover:text-[#F7B32B] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F7B32B]" />
                  <span>{BUSINESS_CONFIG.phone}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="hover:text-[#7CCBEA] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#7CCBEA]" />
                  <span>{BUSINESS_CONFIG.email}</span>
                </a>
                <span className="flex items-center gap-1.5 text-white/60">
                  <MapPin className="w-4 h-4 text-[#7CCBEA]" />
                  <span>{BUSINESS_CONFIG.serviceArea}</span>
                </span>
              </div>
            </div>

            {/* Copyright & Disclaimer */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
              <p>
                © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved. Servicing Darwin and the Top End, Northern Territory.
              </p>
              <p className="text-white/40">
                Window Cleaning & Solar Panel Cleaning Specialists
              </p>
            </div>
          </div>
        </footer>
      </section>

      {/* ----------------------------------------------------------------------
          FLOATING GOLD "CALL" BUTTON ON MOBILE
          Fixed at bottom-right of mobile screen for instant 1-tap dialling.
          ---------------------------------------------------------------------- */}
      <div className="fixed bottom-5 right-5 z-40 md:hidden">
        <a
          href={`tel:${BUSINESS_CONFIG.phoneTel}`}
          className="flex items-center gap-2.5 bg-[#F7B32B] active:bg-[#e5a21e] text-[#0D3558] font-extrabold py-3.5 px-5 rounded-full shadow-2xl border-2 border-white focus:outline-hidden focus:ring-4 focus:ring-[#F7B32B]/50"
          aria-label={`Call ${BUSINESS_CONFIG.phone}`}
        >
          <Phone className="w-5 h-5 fill-current" />
          <span className="text-sm tracking-wide">Call Now</span>
        </a>
      </div>
    </div>
  );
}
