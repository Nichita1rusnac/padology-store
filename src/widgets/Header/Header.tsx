import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Send, Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  const phoneRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const telegramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (phoneRef.current && !phoneRef.current.contains(event.target as Node)) {
        setDropDownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
      if (telegramRef.current && !telegramRef.current.contains(event.target as Node)) {
        setTelegramOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropDownOpen = () => {
    setDropDownOpen(!dropDownOpen);
  }

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
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-9xl px-2 py-3 flex items-center justify-between">
          {/* Logo + Nav */}
          <div className="flex items-center gap-0 bg-nav rounded-full px-[1px] py-[1px] lg:px-2 lg:py-2">
            {/* Logo placeholder */}
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-lg font-bold shrink-0 cursor-pointer">
              <Link className='w-full h-full' to={`/${currentLang}`}>
                <img className='w-full h-full object-cover rounded-full' src="/logo.webp" alt="Logo" />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 ml-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-4 py-2 text-nav-foreground text-sm-fluid font-body font-medium rounded-full transition-colors hover:bg-primary/20"
                >
                  {item.label}
                </Link>
              ))}

              {/* Language dropdown */}
              <div className="relative ml-1" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-nav-foreground text-sm-fluid font-body rounded-full hover:bg-primary/20 transition-colors"
                >
                  {langLabels[currentLang]}
                  <ChevronDown size={14} />
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
          <div className="flex items-center gap-2">
            <div className="relative" ref={phoneRef}>
              <a
                onClick={handleDropDownOpen}
                className="flex w-10 h-10 rounded-full bg-card border border-border items-center justify-center text-foreground hover:bg-secondary transition-colors"
              >
                <Phone size={18} />
              </a>
              {dropDownOpen && (
                <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-card rounded-xl shadow-lg border border-border overflow-hidden w-[calc(100vw-2rem)] sm:w-[340px] max-w-[calc(100vw-1rem)]">
                  <a href="tel:+37369947949" className="grid grid-cols-[auto_1fr_auto] items-center gap-3 w-full text-left px-5 py-3.5 transition-colors hover:bg-secondary group">
                    <Phone size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm-fluid font-medium text-foreground">{t('salon.center')}</span>
                    <span className='text-sm-fluid font-semibold text-primary'>+373 69 947 949</span>
                  </a>
                  <div className="h-px bg-border mx-4"></div>
                  <a href="tel:+37369947949" className="grid grid-cols-[auto_1fr_auto] items-center gap-3 w-full text-left px-5 py-3.5 transition-colors hover:bg-secondary group">
                    <Phone size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground">{t('salon.buiucani')}</span>
                    <span className='text-sm font-semibold text-primary'>+373 69 947 949</span>
                  </a>
                </div>
              )}
            </div>
            <div className="relative" ref={telegramRef}>
              <a
                onClick={() => setTelegramOpen(!telegramOpen)}
                className="flex w-10 h-10 rounded-full bg-card border border-border items-center justify-center text-foreground hover:bg-secondary transition-colors"
              >
                <Send size={18} />
              </a>
              {telegramOpen && (
                <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-card rounded-xl shadow-lg border border-border overflow-hidden w-max">
                  <a href="https://t.me/Evpodolux" target="_blank" rel="noopener noreferrer" className="grid grid-cols-[auto_1fr_auto] items-center gap-3 w-full text-left px-5 py-3.5 transition-colors hover:bg-secondary group">
                    <Send size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground">{t('salon.center')}</span>
                  </a>
                  <div className="h-px bg-border mx-4"></div>
                  <a href="https://t.me/PoleacovaNailStudio" target="_blank" rel="noopener noreferrer" className="grid grid-cols-[auto_1fr_auto] items-center gap-3 w-full text-left px-5 py-3.5 transition-colors hover:bg-secondary group">
                    <Send size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground">{t('salon.buiucani')}</span>
                  </a>
                </div>
              )}
            </div>
            <Link
              to={bookingPath}
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-button font-body font-semibold hover:opacity-90 transition-opacity"
            >
              {t('buttons.book')}
            </Link>

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
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-nav-foreground text-sm font-body rounded-xl hover:bg-primary/20 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-2 mt-3 pt-3 border-t border-primary/20">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    handleLanguageChange(lang);
                    setMobileOpen(false);
                  }}
                  className={`px-3 py-1.5 text-sm rounded-full font-body transition-colors ${currentLang === lang ? 'bg-primary text-primary-foreground' : 'text-nav-foreground hover:bg-primary/20'}`}
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
