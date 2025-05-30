import Layout from '../components/Layout';
import Head from 'next/head';

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Contact Us | RS-INDIA</title>
        <meta name="description" content="Contact RS India" />
      </Head>
      <main>
        <section className="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Get in touch</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="contact_left">
                  <div className="map-container" style={{borderRadius: '10px', overflow: 'hidden'}}>
                    <iframe
                      width="100%"
                      height="400"
                      frameBorder="0"
                      style={{border: 0, borderRadius: '10px'}}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451704.5085552545!2d75.4680119!3d26.8087021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4964c92a8dd9%3A0x3a85e48567c2047e!2sRS%20India!5e0!3m2!1sen!2sin!4v1710123456789"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact_right">
                  <h4>Call Us</h4>
                  <p>Call our team</p>
                  <p>
                    <i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:+91-141-6688888">+91-141-6688888</a>
                  </p>
                  <p>
                    <i className="fa fa-mobile" aria-hidden="true"></i> <a href="tel:+91 7300071621">+91 7300071621</a>
                  </p>
                  <h4>Email</h4>
                  <p><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:sales@rs-india.com">sales@rs-india.com</a></p>
                  <h4>Visit Us</h4>
                  <p><i className="fa fa-map-marker" aria-hidden="true"></i> DTA 003: 006-007 & 012-013,<br />
                    Mahindra World City, Off Ajmer Road, Jaipur<br />
                    302042.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
