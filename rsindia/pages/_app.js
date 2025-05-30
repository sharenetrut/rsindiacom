import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/all.min.css';
import '../styles/aos.css';
import '../styles/owl.carousel.min.css';
import '../styles/select2.min.css';
import '../styles/style.css';
import '../styles/color-1.css';
import '../styles/color-2.css';
import '../styles/style.css';
import { useEffect } from 'react';
import AOS from 'aos';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
