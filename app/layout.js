import { Inter } from "next/font/google";
import Header from './ui/components/header';
import Footer from "./ui/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WashWizards",
  description: "Discover WashWizards: Your ultimate laundry solution. Expert care, eco-friendly products, and unbeatable convenience. Experience the magic of clean clothes today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
