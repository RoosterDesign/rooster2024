import 'normalize.css/normalize.css';
import '@/app/globals.scss';
import { poppins, permanent_marker } from '@/app/fonts'
import type { Metadata } from "next";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: "Freelance Front End Developer and UI/UX Designer based in Leamington Spa, Warwickshire",
  description: "Freelance Front End Developer and UI/UX Designer offering outsourcing and contracting services across Warwickshire and West Midlands.",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={`${poppins.variable} ${permanent_marker.variable}`}>
      <body>
          <Header />
          {children}
          <Footer />

          <div className="bp-helper bp-helper--base">BASE</div>
          <div className="bp-helper bp-helper--sm">SM</div>
          <div className="bp-helper bp-helper--md">MD</div>
          <div className="bp-helper bp-helper--lg">LG</div>
          <div className="bp-helper bp-helper--xl">XL</div>
          <div className="bp-helper bp-helper--xxl">XXL</div>
          <div className="bp-helper bp-helper--xxxl">XXXL</div>

        </body>
    </html>
  );
}
