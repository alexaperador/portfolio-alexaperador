import es from './es.json';
import en from './en.json';

const translations = { es, en } as const;
export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof es;

export function useTranslations(lang: string | undefined) {
  const currentLang: Locale = lang && lang in translations ? (lang as Locale) : 'es';
  return function t(key: TranslationKey): string {
    return translations[currentLang][key] ?? translations.es[key];
  };
}

export const languages = {
  es: 'Español',
  en: 'English',
} as const;