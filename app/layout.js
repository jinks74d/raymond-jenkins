import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raymond Jenkins - Web Developer",
  description:
    "Portfolio of Raymond Jenkins, a professional web developer specializing in Webflow and WordPress",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raymond Jenkins",
    jobTitle: "Web Developer",
    url: "https://raymondjenkins.com",
    image: "https://raymondjenkins.com/images/raymond-jenkins.jpg",
    sameAs: [
      "https://www.linkedin.com/in/raymondjenkins1/",
      "https://twitter.com/raymondjenkins",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/images/fwd-fav.png" />
      </Head>
      <Script
        id="json-ld-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body
        className={`${inter.className} bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
