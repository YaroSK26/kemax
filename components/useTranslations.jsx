"use client";
import { useState, useEffect } from "react";

export const useTranslations = () => {
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    // Load initial translations
    const language = localStorage.getItem("language") || "sk";
    fetch(`/locales/${language}.json`)
      .then((res) => res.json())
      .then((data) => setTranslations(data))
      .catch((err) => console.error("Error loading translations:", err));

    // Listen for language changes
    const handleLanguageChange = (event) => {
      setTranslations(event.detail.translations);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  return translations;
};
