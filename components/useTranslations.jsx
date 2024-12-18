"use client";

import { useState, useEffect } from "react";

export const useTranslations = () => {
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    // Kontrola len na klientskej strane
    if (typeof window !== "undefined") {
      const loadTranslations = async () => {
        try {
          // Použite bezpečnú metódu na zistenie jazyka
          const language =
            typeof window !== "undefined"
              ? localStorage.getItem("language") || "sk"
              : "sk";

          const response = await fetch(`/locales/${language}.json`);
          const data = await response.json();
          setTranslations(data);
        } catch (err) {
          console.error("Error loading translations:", err);
        }
      };

      loadTranslations();

      const handleLanguageChange = (event) => {
        if (event.detail && event.detail.translations) {
          setTranslations(event.detail.translations);
        }
      };

      // Pridajte len ak je window definované
      if (typeof window !== "undefined") {
        window.addEventListener("languageChange", handleLanguageChange);
        return () =>
          window.removeEventListener("languageChange", handleLanguageChange);
      }
    }
  }, []);

  return translations;
};
