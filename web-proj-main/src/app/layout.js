import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import "@/styles/globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata = {
  title: "The Hustlers Campus",
  description: "India's Greatest Community of Hustlers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexSans.className} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
