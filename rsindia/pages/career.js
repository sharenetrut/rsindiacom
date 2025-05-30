import Layout from '../components/Layout';
import Head from 'next/head';

export default function Career() {
  return (
    <Layout>
      <Head>
        <title>Career | RS-INDIA</title>
        <meta name="description" content="Career at RS India" />
      </Head>
      {/* HEADER and NAVBAR are included via Layout */}
      {/* TODO: Migrate the main content of career.html here as JSX, updating all image paths to /images/ and using <Image> and <Link> as appropriate. Footer is included via Layout. */}
      <main>
        {/* CAREER BANNER SECTION */}
        <section className="career_back">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">
                <h1>Start doing work that matters</h1>
                <p>Our philosophy is simple - hire a team of passionate people and foster a culture that empowers you to do your best work</p>
              </div>
              <div className="col-12 col-lg-8"></div>
            </div>
          </div>
        </section>
        {/* CAREER SECTION */}
        <section className="career">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Start doing work that matters</h1>
                <p>Our philosophy is simple - hire a team of passionate people and foster a culture that empowers you to do your best work</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <div className="card" style={{filter: 'drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.5))'}}>
                  <h4>Bending Operator</h4>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSekwa7as0_yEpuheJmRXjBLayt_e1UuoYZwaCb9JxZP1Sd9oQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                    <button style={{backgroundColor: '#078FCA', color: '#fff', width: '200px'}}>Apply Now</button>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" style={{filter: 'drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.5))'}}>
                  <h4>Quality Manager</h4>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSekwa7as0_yEpuheJmRXjBLayt_e1UuoYZwaCb9JxZP1Sd9oQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                    <button style={{backgroundColor: '#078FCA', color: '#fff', width: '200px'}}>Apply Now</button>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" style={{filter: 'drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.5))'}}>
                  <h4>Laser Cutting Operator</h4>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSekwa7as0_yEpuheJmRXjBLayt_e1UuoYZwaCb9JxZP1Sd9oQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                    <button style={{backgroundColor: '#078FCA', color: '#fff', width: '200px'}}>Apply Now</button>
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <p className="text-center" style={{fontSize: '1.8rem', color: '#000'}}>
                  CV email addresses: <a style={{color: '#000'}} href="mailto:hr@rs-india.com">hr@rs-india.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
