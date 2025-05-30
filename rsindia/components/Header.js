import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src="/images/rs-logo.png" alt="Logo" width={299} height={54} style={{height:'auto'}} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" href="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="whatWeOfferDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  WHAT WE OFFER?
                </a>
                <ul className="dropdown-menu" aria-labelledby="whatWeOfferDropdown">
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" href="/machining">Machining</Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/machining">Raw Material Preparation</Link></li>
                      <li><Link className="dropdown-item" href="/machining">Milling</Link></li>
                      <li><Link className="dropdown-item" href="/machining">Turning</Link></li>
                      <li><Link className="dropdown-item" href="/machining">Swiss Type Turning</Link></li>
                      <li><Link className="dropdown-item" href="/machining">Grinding</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" href="/fabrication">Fabrication</Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/fabrication">Sheet Metal & Laser Cutting</Link></li>
                      <li><Link className="dropdown-item" href="/fabrication">Welding</Link></li>
                      <li><Link className="dropdown-item" href="/fabrication">Washing & Tumbling</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item dropdown-toggle" href="/finishing">Surface Treatment</Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/finishing">Heat Treatment</Link></li>
                      <li><Link className="dropdown-item" href="/finishing">Powder & Paint Coating</Link></li>
                      <li><Link className="dropdown-item" href="/finishing">Laser Engraving & UV Printing</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <Link className="dropdown-item" href="/assembly">Assembly</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/career">CAREER</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/news&events">NEWS & EVENTS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contactus">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
