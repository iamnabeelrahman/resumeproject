'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const locales = ['en', 'es'];
const localeNames: Record<string, string> = {
  en: 'English',
  es: 'Español',
};

export default function LanguageSelector() {
  const [currentLocale, setCurrentLocale] = useState('en');

  const handleChange = (locale: string) => {
    setCurrentLocale(locale);
    localStorage.setItem('locale', locale);
  };

  return (
    <Select value={currentLocale} onValueChange={handleChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {localeNames[locale]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
