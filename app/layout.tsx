import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DASYNOMA Technology - Innovative Software Solutions",
  description: "Transform your business with cutting-edge technology solutions.",
  keywords: "software, technology, development, AI, cloud, web development",

  // ✅ FAVICON/BROWSER LOGO - WORKING VERSION
  icons: {
    // Main browser tab icon (works with JPEG)
    icon: "/das.jpeg", 
    
    // Apple devices
    apple: "/das.jpeg",
    
    // Shortcut icon
    shortcut: "/das.jpeg",
  },

  // Open Graph (Social media preview)
  openGraph: {
    type: "website",
    url: "https://yourdomain.com",
    title: "DASYNOMA Technology",
    description: "Innovative Software Solutions",
    siteName: "DASYNOMA Technology",
    images: [
      {
        url: "/das.jpeg", // यहाँ भी same image use कर सकते हैं
        width: 1200,
        height: 630,
      },
    ],
  },

  // Twitter Card (Optional)
  twitter: {
    card: "summary_large_image",
    title: "DASYNOMA Technology",
    description: "Innovative Software Solutions",
    images: ["/das.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ MANUAL LINK TAG - EXTRA SECURITY */}
        <link rel="icon" href="/das.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/das.jpeg" />
        <link rel="shortcut icon" href="/das.jpeg" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        
        {/* Extra tags for PWA */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>

      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}