import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Kemax s.r.o.",
  description:
    "Kemax s.r.o. - náš výrobný sortiment zahŕňa hladké plechy, vlnité plechy a trapézové profily, klampiarské výrobky",
  keywords: "Kemax s.r.o., Košice, hladké, vlnité a trapézové plechy",
  authors: [{ name: "Jaroslav Barabáš" }],
  openGraph: {
    locale: "sk_SK",
    type: "website",
    url: "https://www.kemax.sk/",
    title: "Úvod Kemax s.r.o.",
    description:
      "Kemax s.r.o. - náš výrobný sortiment zahŕňa hladké plechy, vlnité plechy a trapézové profily, klampiarské výrobky",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10943167746"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10943167746');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-10943167746/KaQFCM_YzLcaEIL6jeIo'});
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-10943167746/KaQFCM_YzLcaEIL6jeIo',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <Analytics />
        {children}
        <CookieConsent></CookieConsent>
        <Footer />
      </body>
    </html>
  );
}