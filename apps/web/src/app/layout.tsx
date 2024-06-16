import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Poly, Work_Sans } from 'next/font/google';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const poly = Poly({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poly",
})

// export const work_sans = Work_Sans({
//   subsets: ["latin"],
//   weight: ["400"],
// })

export const metadata: Metadata = {
  title: 'Patera Pottery',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poly.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
