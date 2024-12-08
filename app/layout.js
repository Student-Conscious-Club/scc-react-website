import localFont from "next/font/local";
import "./globals.css";
import NavBar from './components/navbar'
import Footer from './components/footer'
import NextTopLoader from 'nextjs-toploader';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL(
    'https://studentconsciousclub.in'
  ),
  title: "Student Conscious Club - Empowering Student Leaders",
  description: "Join the Student Conscious Club and become part of a community dedicated to developing leadership skills, fostering innovation, and making positive impact on campus.",
  keywords: "student club, leadership, community, campus organization, student development",
  openGraph: {
    title: "Student Conscious Club - Empowering Student Leaders",
    description: "Join our community of passionate students dedicated to leadership and growth",
    images: ['/ogscc.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Student Conscious Club",
    description: "Empowering Student Leaders",
    images: ['/ogscc.jpg'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased g-gradient-to-br from-warm-50 to-warm-100`}
      >
        <NextTopLoader showSpinner={false} color={'#EF5A6F'}/>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
