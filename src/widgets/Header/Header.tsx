import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Send, Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

import { useBookingPath } from '@/shared/lib/hooks/useBookingPath';

const languages = ['ru', 'ro', 'en'];
const langLabels: Record<string, string> = {
  ru: 'Русский',
  ro: 'Română',
  en: 'English',
};

export const Header = () => {
  const { t, i18n } = useTranslation('common');
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = i18n.resolvedLanguage || i18n.language || 'ru';
  const [mobileOpen, setMobileOpen] = useState(false);

  const bookingPath = useBookingPath();

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [telegramOpen, setTelegramOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const telegramRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        
        if (
          phoneRef.current &&
          !phoneRef.current.contains(target) &&
          (!mobileMenuRef.current || !mobileMenuRef.current.contains(target))
        ) {
          setDropDownOpen(false);
        }
        if (langRef.current && !langRef.current.contains(target)) {
          setLangOpen(false);
        }
        if (
          telegramRef.current &&
          !telegramRef.current.contains(target) &&
          (!mobileMenuRef.current || !mobileMenuRef.current.contains(target))
        ) {
          setTelegramOpen(false);
        }
      };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropDownOpen = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const navItems = [
    { label: t('nav.specialists'), path: `/${currentLang}/specialists` },
    { label: t('nav.price'), path: `/${currentLang}/pricing` },
    { label: t('nav.products'), path: `/${currentLang}/products` },
    { label: t('nav.contacts'), path: `/${currentLang}/contacts` },
  ];

  const handleLanguageChange = (lang: string) => {
    if (lang === currentLang) return;
    const pathParts = location.pathname.split('/');
    if (pathParts.length > 1 && languages.includes(pathParts[1])) {
      pathParts[1] = lang;
      navigate(pathParts.join('/') + location.search + location.hash);
    } else {
      navigate(`/${lang}`);
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-[clamp(1rem,4vw,2rem)]',
          isScrolled || mobileOpen
            ? 'bg-nav border-b border-primary/10 py-1'
            : 'bg-transparent py-3'
        )}
      >
        <div
          className={cn(
            'mx-auto max-w-9xl flex items-center justify-between gap-2 transition-all duration-300',
            isScrolled ? 'py-2' : 'py-3'
          )}
        >
          {/* Logo + Nav */}
          <div className="flex min-w-0 items-center gap-0 bg-nav rounded-full px-[1px] py-[1px] lg:px-2 lg:py-2">
            {/* Logo placeholder */}
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-lg font-bold shrink-0 cursor-pointer">
              <Link className="w-full h-full" to={`/${currentLang}`}>
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="/logo.webp"
                  alt="Podiatric Studios Logo"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex min-w-0 items-center gap-1 ml-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-[clamp(0.75rem,1.2vw,1rem)] py-2 text-nav-foreground text-sm-fluid font-body font-medium rounded-full transition-colors hover:bg-primary/20 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}

              {/* Language dropdown */}
              <div className="relative ml-1" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 px-[clamp(0.75rem,1.2vw,1rem)] py-2 text-nav-foreground text-sm-fluid font-body rounded-full hover:bg-primary/20 transition-colors whitespace-nowrap"
                >
                  {langLabels[currentLang]}
                  <ChevronDown className="size-3.5" />
                </button>
                {langOpen && (
                  <div className="absolute top-full mt-1 right-0 bg-card rounded-xl shadow-lg border border-border overflow-hidden min-w-[140px]">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          handleLanguageChange(lang);
                          setLangOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2.5 text-sm-fluid font-body transition-colors hover:bg-secondary ${currentLang === lang ? 'text-primary font-semibold' : 'text-foreground'}`}
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
          <div className="flex min-w-0 items-center gap-2">
            <div className="hidden lg:block relative" ref={phoneRef}>
              <button
                onClick={handleDropDownOpen}
                className="flex w-10 h-10 rounded-full bg-card border border-border items-center justify-center text-foreground hover:bg-secondary transition-colors"
              >
                <Phone className="size-[clamp(1rem,1.1vw,1.125rem)]" />
              </button>
              {dropDownOpen && (
                <div className="absolute top-full mt-1 right-0 bg-card rounded-xl shadow-lg border border-border overflow-hidden w-[min(22rem,calc(100vw-2rem))] z-50">
                  <a
                    href="tel:+37369947949"
                    className="grid grid-cols-[auto_minmax(0,1fr)] sm:grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 w-full text-left px-4 sm:px-5 py-3.5 transition-colors hover:bg-secondary group"
                  >
                    <Phone
                      className="size-[clamp(1rem,1.1vw,1.125rem)] text-muted-foreground group-hover:text-primary transition-colors"
                    />
                    <span className="text-sm-fluid font-medium text-foreground min-w-0">
                      {t('salon.center')}
                    </span>
                    <span className="text-sm-fluid font-semibold text-primary col-start-2 sm:col-start-auto">
                      +373 69 947 949
                    </span>
                  </a>
                  <div className="h-px bg-border mx-4"></div>
                  <a
                    href="tel:+37369639898"
                    className="grid grid-cols-[auto_minmax(0,1fr)] sm:grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 w-full text-left px-4 sm:px-5 py-3.5 transition-colors hover:bg-secondary group"
                  >
                    <Phone
                      className="size-[clamp(1rem,1.1vw,1.125rem)] text-muted-foreground group-hover:text-primary transition-colors"
                    />
                    <span className="text-sm-fluid font-medium text-foreground min-w-0">
                      {t('salon.buiucani')}
                    </span>
                    <span className="text-sm-fluid font-semibold text-primary col-start-2 sm:col-start-auto">
                      +373 69 639 898
                    </span>
                  </a>
                </div>
              )}
            </div>
            <div className="hidden lg:block relative" ref={telegramRef}>
              <button
                onClick={() => setTelegramOpen(!telegramOpen)}
                className="flex w-10 h-10 rounded-full bg-card border border-border items-center justify-center text-foreground hover:bg-secondary transition-colors"
              >
                <Send className="size-[clamp(1rem,1.1vw,1.125rem)]" />
              </button>
              {telegramOpen && (
                <div className="absolute top-full mt-1 right-0 bg-card rounded-xl shadow-lg border border-border overflow-hidden w-[min(18rem,calc(100vw-2rem))] z-50">
                  <a
                    href="https://t.me/Evpodolux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 w-full text-left px-4 sm:px-5 py-3.5 transition-colors hover:bg-secondary group"
                  >
                    <Send
                      className="size-[clamp(1rem,1.1vw,1.125rem)] text-muted-foreground group-hover:text-primary transition-colors"
                    />
                    <span className="text-sm-fluid font-medium text-foreground">
                      {t('salon.center')}
                    </span>
                  </a>
                  <div className="h-px bg-border mx-4"></div>
                  <a
                    href="https://t.me/PoleacovaNailStudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 w-full text-left px-4 sm:px-5 py-3.5 transition-colors hover:bg-secondary group"
                  >
                    <Send
                      className="size-[clamp(1rem,1.1vw,1.125rem)] text-muted-foreground group-hover:text-primary transition-colors"
                    />
                    <span className="text-sm-fluid font-medium text-foreground">
                      {t('salon.buiucani')}
                    </span>
                  </a>
                </div>
              )}
            </div>
            <Link
              to={bookingPath}
              className="max-w-[42vw] sm:max-w-none truncate px-[clamp(0.875rem,3vw,1.25rem)] py-2.5 bg-primary text-primary-foreground rounded-full text-sm-fluid font-body font-semibold hover:opacity-90 transition-opacity"
            >
              {t('buttons.book')}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="lg:hidden w-10 h-10 rounded-full bg-nav flex items-center justify-center text-nav-foreground"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5"/>}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div ref={mobileMenuRef} className="lg:hidden bg-nav mx-4 rounded-2xl p-4 mt-1 max-h-[calc(100svh-6rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-nav-foreground text-sm-fluid font-body rounded-xl hover:bg-primary/20 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-primary/20">
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setDropDownOpen(!dropDownOpen)}
                  className="flex items-center gap-3 px-4 py-3 text-nav-foreground text-sm-fluid font-body rounded-xl hover:bg-primary/20 transition-colors w-full text-left"
                >
                  <Phone className="size-[clamp(1rem,4vw,1.125rem)]" />
                  <span>{t('buttons.phone')}</span>
                </button>
                {dropDownOpen && (
                  <div className="flex flex-col gap-1 pl-11 mb-2">
                    <a href="tel:+37369947949" aria-label={`${t('salon.center')} Phone`} className="text-sm-fluid py-1 text-primary">
                      {t('salon.center')}: +373 69 947 949
                    </a>
                    <a href="tel:+37369639898" aria-label={`${t('salon.buiucani')} Phone`} className="text-sm-fluid py-1 text-primary">
                      {t('salon.buiucani')}: +373 69 639 898
                    </a>
                  </div>
                )}

                <button
                  onClick={() => setTelegramOpen(!telegramOpen)}
                  className="flex items-center gap-3 px-4 py-3 text-nav-foreground text-sm-fluid font-body rounded-xl hover:bg-primary/20 transition-colors w-full text-left"
                >
                  <Send className="size-[clamp(1rem,4vw,1.125rem)]" />
                  <span>Telegram</span>
                </button>
                {telegramOpen && (
                  <div className="flex flex-col gap-1 pl-11 mb-2">
                    <a
                      href="https://t.me/Evpodolux"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('salon.center')} Telegram`}
                      className="text-sm-fluid py-1 text-primary"
                    >
                      {t('salon.center')}
                    </a>
                    <a
                      href="https://t.me/PoleacovaNailStudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('salon.buiucani')} Telegram`}
                      className="text-sm-fluid py-1 text-primary"
                    >
                      {t('salon.buiucani')}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-primary/20">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    handleLanguageChange(lang);
                    setMobileOpen(false);
                  }}
                  className={`px-3 py-1.5 text-sm-fluid rounded-full font-body transition-colors ${currentLang === lang ? 'bg-primary text-primary-foreground' : 'text-nav-foreground hover:bg-primary/20'}`}
                >
                  {langLabels[lang]}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
