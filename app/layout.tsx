"use client";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Montserrat } from "@next/font/google";
import { ToastContainer } from "react-toastify";

import Footer from "../components/Footer";
import Header from "../components/Header";

const monserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${monserrat.className} bg-neutral0`}>
        <Header />
        {children}
        <ToastContainer
          position="bottom-left"
          autoClose={300000}
          hideProgressBar={true}
          newestOnTop
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
          closeButton={false}
        />
        <Footer />
      </body>
    </html>
  );
}
