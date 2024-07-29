import 'normalize.css/normalize.css';
import '@/app/styles/global.scss';
import '@/app/styles/mixins.scss';
import { poppins, permanent_marker } from '@/app/fonts'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${permanent_marker.variable}`}>
    {/* <html lang="en"> */}
        {/* <body className={`${poppins.className} antialiased`}>{children}</body> */}
        <body>{children}</body>
    </html>
  );
}