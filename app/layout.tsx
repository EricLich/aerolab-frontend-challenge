import "./globals.css";
import { Montserrat } from "@next/font/google";

const monserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={monserrat.className}>{children}</body>
    </html>
  );
}
