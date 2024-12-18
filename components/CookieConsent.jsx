"use client";

import Script from "next/script";

const CookieConsent = () => {
  return (
    <Script
      id="cookieyes"
      src="https://cdn-cookieyes.com/client_data/8d13279cc0e3223b6be9237a/script.js"
      strategy="beforeInteractive"
    />
  );
};

export default CookieConsent;
