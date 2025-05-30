import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Fabrication() {
  return (
    <Layout>
      <Head>
        <title>Fabrication | RS-INDIA</title>
        <meta name="description" content="Fabrication services at RS India" />
      </Head>
      {/* HEADER and NAVBAR are included via Layout */}
      {/* TODO: Migrate the main content of fabrication.html here as JSX, updating all image paths to /images/ and using <Image> and <Link> as appropriate. Footer is included via Layout. */}
      <main>
        {/* SLIDER */}
        <section className="machine_back">
          <Image src="/images/fabrication_back.png" alt="Fabrication Background" width={1920} height={400} />
        </section>
        {/* FINEST SECTION */}
        <section className="machine_finest">
          <div className="container">
            <div className="row">
              <div className="col-md-7 align-self-center">
                <div className="finest_left">
                  <h4>Bringing Ideas to Structure</h4>
                  <p>Our fabrication services are designed to turn raw materials into functional masterpieces. From sheet metal work to complex electromechanical assemblies, RS India ensures superior craftsmanship at every stage.</p>
                  <p>Fabrication Services Include:</p>
                  <ol>
                    <li>Sheet Metal & Laser Cutting: Precision cutting for custom designs.</li>
                    <li>Welding: Expert MIG, TIG, and spot welding services for strong, durable joints.</li>
                    <li>Assemblies: Full-service electromechanical assemblies tailored to customer needs.</li>
                    <li>MedTech Area: Specialized fabrication for medical technology components.</li>
                  </ol>
                  <h6>Every process is handled with precision and care, ensuring the final product exceeds expectations.</h6>
                </div>
              </div>
              <div className="col-md-5">
                <div className="finest_right">
                  <Image src="/images/fabrication_top.png" alt="Fabrication Top" width={400} height={300} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SHEET METAL SECTIONS */}
        <section className="sheet_metal">
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-md-7 nopadding">
                <div className="sheet_left">
                  <Image src="/images/sheet_metal2.png" alt="Sheet Metal" width={600} height={400} />
                </div>
              </div>
              <div className="col-md-5 nopadding align-self-center">
                <div className="sheet_right">
                  <h4>Sheet Metal & Laser Cutting</h4>
                  <p>Ensure high-quality raw materials through precise selection, processing, and refinement to meet industry standards. Optimize efficiency for superior end-product results.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sheet_metal">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 nopadding align-self-center">
                <div className="sheet_right">
                  <h4>Welding</h4>
                  <p>Achieve precise particle size and consistency through advanced milling techniques. Enhance material properties for optimal performance in production.</p>
                </div>
              </div>
              <div className="col-md-7 nopadding">
                <div className="sheet_left">
                  <Image src="/images/welding1.png" alt="Welding" width={600} height={400} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Assemblies section is d-none (hidden), so not included */}
        <section className="sheet_metal">
          <div className="container-fluid">
            <div className="row gx-0">
              <div className="col-md-7 nopadding">
                <div className="sheet_left">
                  <Image src="/images/washing1.png" alt="Washing & Tumbling" width={600} height={400} />
                </div>
              </div>
              <div className="col-md-5 nopadding align-self-center">
                <div className="sheet_right">
                  <h4>Washing & Tumbling</h4>
                  <p>Ensure high precision and efficiency with Swiss-type turning. Ideal for complex, small-diameter components with tight tolerances and superior surface finish.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FOOTER is included via Layout */}
      </main>
    </Layout>
  );
}
