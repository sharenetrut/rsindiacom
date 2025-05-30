import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Finishing() {
  return (
    <Layout>
      <Head>
        <title>Finishing | RS-INDIA</title>
        <meta name="description" content="Finishing services at RS India" />
      </Head>
      {/* HEADER and NAVBAR are included via Layout */}
      {/* TODO: Migrate the main content of finishing.html here as JSX, updating all image paths to /images/ and using <Image> and <Link> as appropriate. Footer is included via Layout. */}
      <main>
        {/* SLIDER */}
        <section className="machine_back">
          <Image src="/images/finishing_back2.png" alt="Finishing Background" width={1920} height={400} />
        </section>
        {/* FINEST SECTION */}
        <section className="machine_finest">
          <div className="container">
            <div className="row">
              <div className="col-md-7 align-self-center">
                <div className="finest_left">
                  <h4>Where Precision Meets Perfection</h4>
                  <p>The right finish not only enhances the aesthetics but also extends the life of your products. RS India offers comprehensive finishing services that ensure your components meet the highest standards in durability and appearance.</p>
                  <p>Our Finishing Solutions:</p>
                  <ol>
                    <li>Surface Treatments: Anodizing, Hard Chrome, Nickel, Zinc, and Copper Plating.</li>
                    <li>Heat Treatment: Strengthening materials to meet performance demands.</li>
                    <li>Powder & Paint Coating: High-quality coatings for protection and aesthetics.</li>
                    <li>Laser Engraving & UV Printing: Precise marking and branding solutions.</li>
                    <li>Washing & Tumbling: Ensuring clean, polished parts ready for use.</li>
                  </ol>
                  <h6>We also comply with ISO:14001:2015 standards, ensuring eco-friendly finishing processes that reduce environmental impact.</h6>
                </div>
              </div>
              <div className="col-md-5">
                <div className="finest_right">
                  <Image src="/images/finishing_top.png" alt="Finishing Top" width={400} height={300} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* HEAT TREATMENT SECTION */}
        <section className="heat">
          <div className="heat_back">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="heat_left d-flex justify-content-center">
                    <Image src="/images/heat.png" alt="Heat Treatment" width={400} height={300} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="heat_right">
                    <h4>Heat Treatment</h4>
                    <p>Heat treatment is a controlled process of heating and cooling metals to enhance their strength, hardness, and durability for industrial applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SURFACE TREATMENT SECTION */}
        <section className="heat">
          <div className="heat_back">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="heat_right">
                    <h4>Surface Treatment</h4>
                    <p>Surface treatment enhances a material’s durability, corrosion resistance, and appearance through processes like coating, plating, and polishing</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="heat_left d-flex justify-content-center">
                    <Image src="/images/surface.png" alt="Surface Treatment" width={400} height={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* POWDER & PAINT COATING SECTION */}
        <section className="heat">
          <div className="heat_back">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="heat_left d-flex justify-content-center">
                    <Image src="/images/power.png" alt="Powder & Paint Coating" width={400} height={300} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="heat_right">
                    <h4>Powder & Paint Coating</h4>
                    <p>Powder and paint coating provide a protective and decorative finish, enhancing durability, corrosion resistance, and aesthetics of metal surfaces.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* LASER ENGRAVING & UV PRINTING SECTION */}
        <section className="heat">
          <div className="heat_back">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="heat_right">
                    <h4>Laser Engraving & UV Printing</h4>
                    <p>Laser engraving and UV printing offer precise, permanent marking solutions, enhancing product branding, customization, and durability on various surfaces.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="heat_left d-flex justify-content-center">
                    <Image src="/images/laser.png" alt="Laser Engraving & UV Printing" width={400} height={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
