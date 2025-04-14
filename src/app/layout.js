import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const nunito = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Best Laproscopic Surgeon in India | Top Physiotherapist | Dr Yash Pandey",
  description: `Dr. Yash Pandey is a medical professional with multiple specialties and practices. He is a General Surgeon practicing at Priya Hospital in Sigra, Varanasi, with over 11 years of experience.
 He has qualifications including MBBS and MS in General Surgery. Dr. Yash Pandey also specializes in laparoscopic surgery and bariatric surgery.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
