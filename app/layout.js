import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}