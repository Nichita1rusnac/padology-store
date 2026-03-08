import { useState } from 'react';
import { Phone, Send, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguageStore, Language } from '@/shared/store/language';
import { BookingDrawer } from '@/widgets/BookingDrawer/BookingDrawer';

const languages: Language[] = ['ru', 'ro', 'en'];

export const Header = () => {
  const { language, t, setLanguage, langLabels } = useLanguageStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { label: t.about, href: '#about' },
    { label: t.services, href: '#services' },
    { label: t.specialists, href: '#specialists' },
    { label: t.pricing, href: '#pricing' },
    { label: t.contacts, href: '#contacts' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          {/* Logo + Nav */}
          <div className="flex items-center gap-0 bg-nav rounded-full px-2 py-2">
            {/* Logo placeholder */}
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-lg font-bold shrink-0">
              S
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 ml-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-nav-foreground text-sm font-body font-medium rounded-full transition-colors hover:bg-primary/20"
                >
                  {item.label}
                </a>
              ))}

              {/* Language dropdown */}
              <div className="relative ml-1">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-nav-foreground text-sm font-body rounded-full hover:bg-primary/20 transition-colors"
                >
                  {langLabels[language]}
                  <ChevronDown size={14} />
                </button>
                {langOpen && (
                  <div className="absolute top-full mt-1 right-0 bg-card rounded-xl shadow-lg border border-border overflow-hidden min-w-[140px]">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setLangOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2.5 text-sm font-body transition-colors hover:bg-secondary ${language === lang ? 'text-primary font-semibold' : 'text-foreground'}`}
                      >
                        {langLabels[lang]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+37300000000"
              className="hidden sm:flex w-10 h-10 rounded-full bg-card border border-border items-center justify-center text-foreground hover:bg-secondary transition-colors"
            >
              <Phone size={18} />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-10 h-10 rounded-full bg-card border border-border items-center justify-center text-foreground hover:bg-secondary transition-colors"
            >
              <Send size={18} />
            </a>
            <button
              onClick={() => setDrawerOpen(true)}
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-semibold hover:opacity-90 transition-opacity"
            >
              {t.book}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-nav flex items-center justify-center text-nav-foreground"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-nav mx-4 rounded-2xl p-4 mt-1">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-nav-foreground text-sm font-body rounded-xl hover:bg-primary/20 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-2 mt-3 pt-3 border-t border-primary/20">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setMobileOpen(false);
                  }}
                  className={`px-3 py-1.5 text-sm rounded-full font-body transition-colors ${language === lang ? 'bg-primary text-primary-foreground' : 'text-nav-foreground hover:bg-primary/20'}`}
                >
                  {langLabels[lang]}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <BookingDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};
