import { useEffect } from 'react';
import { Outlet, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LanguageLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const supportedLanguages = ['ru', 'ro', 'en'];

  useEffect(() => {
    if (!lang || !supportedLanguages.includes(lang)) {
      document.documentElement.removeAttribute('data-i18n-ready');
      return;
    }

    const markReady = () => {
      document.documentElement.lang = lang;
      document.documentElement.dataset.i18nReady = 'true';
    };

    if (i18n.isInitialized && i18n.language === lang) {
      markReady();
      return;
    }

    void i18n.changeLanguage(lang).then(markReady);
  }, [lang, i18n]);

  if (!lang || !supportedLanguages.includes(lang)) {
    return <Navigate to={`/${i18n.resolvedLanguage || i18n.language || 'ru'}`} replace />;
  }

  return <Outlet />;
};

export const RootRedirect = () => {
  const { i18n } = useTranslation();
  return <Navigate to={`/${i18n.resolvedLanguage || i18n.language || 'ru'}`} replace />;
};
