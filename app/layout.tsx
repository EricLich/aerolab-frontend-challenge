import "./globals.css";
import { Montserrat } from "@next/font/google";

import Footer from "../components/Footer";
import Header from "../components/Header";

const monserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${monserrat.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
