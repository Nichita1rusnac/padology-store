import { useEffect } from 'react';
import { Outlet, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LanguageLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const supportedLanguages = ['ru', 'ro', 'en'];

  useEffect(() => {
    if (lang && supportedLanguages.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
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
