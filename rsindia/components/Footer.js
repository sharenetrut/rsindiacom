import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="footer_menu">
              <h3 className="text-white">CONTACT US</h3>
              <p className="text-white">Reach out to discuss how RS India can meet your precision machining needs.</p>
              <ul>
                <li><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:+91-141-6688888">+91-141-6688888</a></li>
                <li><i className="fa fa-mobile" aria-hidden="true"></i> <a href="tel:+91 7300071621">+91 7300071621</a></li>
                <li><i className="fa fa-map-marker" aria-hidden="true"></i>DTA 003: 006-007 & 012-013, Mahindra World City, Off Ajmer Road, Jaipur 302042.</li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:sales@rs-india.com">sales@rs-india.com</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_menu">
              <h3 className="text-white">QUICK LINKS</h3>
              <ul className="quick">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">What we offer</Link></li>
                <li><Link href="/career">Career</Link></li>
                <li><Link href="/news&events">News & Events</Link></li>
                <li><Link href="/contactus">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer_menu">
              <Image src="/images/rs-logo.png" alt="Logo" width={299} height={54} />
              <ul className="social">
                <li><a href="#"><Image src="/images/fb.png" alt="Facebook" width={32} height={32} /></a></li>
                <li><a href="#"><Image src="/images/x.png" alt="X" width={32} height={32} /></a></li>
                <li><a href="#"><Image src="/images/insta.png" alt="Instagram" width={32} height={32} /></a></li>
                <li><a href="#"><Image src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
