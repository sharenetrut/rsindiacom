import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Machining() {
  return (
    <Layout>
      <Head>
        <title>Machining | RS-INDIA</title>
        <meta name="description" content="Machining services at RS India" />
      </Head>
      {/* HEADER and NAVBAR are included via Layout */}
      {/* SLIDER */}
      <section className="machine_back">
        <Image src="/images/machining_back2.png" alt="Machining Background" width={1920} height={400} />
      </section>
      {/* FINEST SECTION */}
      <section className="machine_finest">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="finest_left">
                <h4>Precision Engineering at Its Finest</h4>
                <p>At RS India, we bring your ideas to life with world-class machining capabilities. Our state-of-the-art machine shop, backed by cutting-edge technology, ensures the highest precision and efficiency. Whether it’s simple components or complex geometries, our team of experts works meticulously with a wide range of materials, including steel, aluminum, titanium, plastic, and copper-based alloys.</p>
                <p>Our Machining Capabilities:</p>
                <ol>
                  <li>Milling & Turning: High-precision multi-axis milling and turning for complex parts.</li>
                  <li>Swiss-Type Turning: Perfect for small, intricate components with tight tolerances.</li>
                  <li>Grinding: Achieving ultra-smooth finishes and precise dimensions.</li>
                  <li>Laser Cutting: Clean, accurate cuts on sheet metal for all design complexities.</li>
                </ol>
                <h6>We adhere to ISO:9001:2015 standards, ensuring consistent quality in every part we produce.</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="finest_right">
                <Image src="/images/machining_top.png" alt="Machining Top" width={400} height={300} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* RAW MATERIAL SECTION */}
      <section className="raw_material">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Raw Material Preparation</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/raw4.png" alt="Raw 4" width={200} height={150} />
            </div>
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/raw5.png" alt="Raw 5" width={200} height={150} />
            </div>
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/raw6.png" alt="Raw 6" width={200} height={150} />
            </div>
          </div>
        </div>
        <div className="raw_text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="text-white text-center">Ensure high-quality raw materials through precise selection, processing, and refinement to meet industry standards. Optimize efficiency for superior end-product results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MILLING SECTION */}
      <section className="raw_material">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Milling</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/miling4.png" alt="Milling 4" width={200} height={150} />
            </div>
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/miling7.png" alt="Milling 7" width={200} height={150} />
            </div>
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/miling6.png" alt="Milling 6" width={200} height={150} />
            </div>
          </div>
        </div>
        <div className="raw_text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="text-white text-center">Achieve precise particle size and consistency through advanced milling techniques. Enhance material properties for optimal performance in production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TURNING SECTION */}
      <section className="raw_material">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Turning</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/turning1.png" alt="Turning 1" width={200} height={150} />
            </div>
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/turning2.png" alt="Turning 2" width={200} height={150} />
            </div>
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/turning3.png" alt="Turning 3" width={200} height={150} />
            </div>
          </div>
        </div>
        <div className="raw_text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="text-white text-center">Shape materials with precision using advanced turning techniques. Achieve smooth finishes and accurate dimensions for superior component quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SWISS TYPE TURNING SECTION */}
      <section className="raw_material">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Swiss Type Turning</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/swiss_type1.png" alt="Swiss Type 1" width={200} height={150} />
            </div>
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/swiss_type2.png" alt="Swiss Type 2" width={200} height={150} />
            </div>
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/swiss_type4.png" alt="Swiss Type 4" width={200} height={150} />
            </div>
          </div>
        </div>
        <div className="raw_text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="text-white text-center">Ensure high precision and efficiency with Swiss-type turning. Ideal for complex, small-diameter components with tight tolerances and superior surface finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* GRINDING SECTION */}
      <section className="raw_material">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Grinding</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/grinding1.png" alt="Grinding 1" width={200} height={150} />
            </div>
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/grinding4.png" alt="Grinding 4" width={200} height={150} />
            </div>
            <div className="col-md-3 text-center mt-2">
              <Image src="/images/grinding5.png" alt="Grinding 5" width={200} height={150} />
            </div>
          </div>
        </div>
        <div className="raw_text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="text-white text-center">Achieve ultra-fine finishes and precise dimensions with advanced grinding techniques. Enhance material quality and performance for superior end results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER is included via Layout */}
    </Layout>
  );
}
