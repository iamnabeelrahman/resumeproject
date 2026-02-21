'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { defaultLocale, locales } from '@/i18n.config';
import messages from '@/messages/en.json';

export function useLocale() {
  const searchParams = useSearchParams();
  const [locale, setLocale] = useState(defaultLocale);
  const [translations, setTranslations] = useState(messages);

  useEffect(() => {
    const localeParam = searchParams?.get('locale') || defaultLocale;
    if (locales.includes(localeParam)) {
      setLocale(localeParam);
      // Dynamically import translations
      import(`@/messages/${localeParam}.json`).then((module) => {
        setTranslations(module.default);
      });
    }
  }, [searchParams]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { locale, t, locales };
}
