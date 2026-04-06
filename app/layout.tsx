import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: [ //"/favicon.ico",
      { url: "/favicon.v1.ico", type: "image/x-icon" }
    ]
  },
  title: "Langphy",
  description: "Learn German with smart ways. Langphy is an AI-powered language learning app that helps you learn German effectively",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white color-zinc-900">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
