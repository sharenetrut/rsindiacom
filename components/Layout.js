import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({ once: true });
      });
    }
  }, []);

  return (
    <>
      <Head>
        {/* Meta tags, favicon, and fonts are handled in _document.js */}
      </Head>
      {/* JS libraries for Bootstrap, jQuery, AOS, Owl Carousel, Select2, and custom scripts */}
      <Script src="/js/aos.js" strategy="afterInteractive" />
      <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/js/select2.min.js" strategy="afterInteractive" />
      <Script src="/js/custom.js" strategy="afterInteractive" />
      <Header />
      {children}
      <Footer />
    </>
  );
}
