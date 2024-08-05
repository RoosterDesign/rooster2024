import 'normalize.css/normalize.css';
import '@/app/styles/global.scss';
import '@/app/styles/mixins.scss';
import { poppins, permanent_marker } from '@/app/fonts'
import Header from '@/app/components/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${permanent_marker.variable}`}>
        <body>
          <Header />
          {children}
        </body>
    </html>
  );
}