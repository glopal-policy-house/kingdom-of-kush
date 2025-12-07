import { useTranslation } from 'react-i18next';
import { useEffect, useState, useCallback } from 'react';

/**
 * Custom hook that provides translation function with automatic ready state
 * Prevents rendering before translations are loaded
 */
export const useTranslationSafe = () => {
  const { t, i18n, ready } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(ready);

  useEffect(() => {
    if (ready) {
      setIsLoaded(true);
    }
  }, [ready]);

  // Return a safe translation function that handles missing keys gracefully
  const safeT = useCallback(
    (key, defaultValue = key) => {
      if (!isLoaded || !t) return defaultValue;
      try {
        const result = t(key);
        // Check if translation key was not found (returns key as fallback)
        return result === key ? defaultValue : result;
      } catch (error) {
        console.warn(`Translation key not found: ${key}`, error);
        return defaultValue;
      }
    },
    [t, isLoaded]
  );

  return { t: safeT, i18n, ready: isLoaded, tFunc: t };
};

/**
 * Hook to detect RTL/LTR based on current language
 */
export const useLanguageDirection = () => {
  const { i18n, ready } = useTranslation();
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    if (ready && i18n.language) {
      const rtlLanguages = ['ar', 'he', 'ur', 'fa'];
      const isRTL = rtlLanguages.includes(i18n.language.split('-')[0]);
      setDirection(isRTL ? 'rtl' : 'ltr');
    }
  }, [i18n.language, ready]);

  return direction;
};
