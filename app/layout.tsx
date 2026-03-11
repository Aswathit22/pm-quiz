import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PM Quiz Studio",
  description: "Short, educational MCQs for product managers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-87M6RJCFF2"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-87M6RJCFF2', { anonymize_ip: true });
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}