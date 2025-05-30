import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Assembly() {
  return (
    <Layout>
      <Head>
        <title>Assembly | RS-INDIA</title>
        <meta name="description" content="Assembly services at RS India" />
      </Head>
      {/* HEADER and NAVBAR are included via Layout */}
      {/* TODO: Migrate the main content of assembly.html here as JSX, updating all image paths to /images/ and using <Image> and <Link> as appropriate. Footer is included via Layout. */}
      <main>
        {/* SLIDER */}
        <section className="machine_back">
          <Image src="/images/assembly_back.png" alt="Assembly Background" width={1920} height={400} />
        </section>
        {/* FINEST SECTION */}
        <section className="machine_finest">
          <div className="container">
            <div className="row">
              <div className="col-md-7 align-self-center">
                <div className="finest_left">
                  <h4>Assembly Services</h4>
                  <p>At RS India, we provide precision mechanical and electromechanical assembly services tailored to your product needs. Our team assembles components into complete systems or sub-assemblies with utmost accuracy and quality. We handle mechanical fittings, electrical integration, wiring, PCB mounting, and functional testing. From basic part assemblies to complex systems, we ensure every unit is built to perform reliably.</p>
                  <p>With in-house machining, kitting, and quality checks, we offer seamless solutions under one roof. Our flexible approach suits both low and high-volume requirements, delivering cost-effective and timely results for diverse industrial applications.</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="finest_right">
                  <Image src="/images/assembly_top.png" alt="Assembly Top" width={400} height={300} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ASSEMBLY BOX 1: Mechanical Fittings */}
        <section className="assembly_box">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <Image src="/images/mechanical_fittings.png" alt="Mechanical Fittings" width={600} height={400} />
              </div>
              <div className="col-md-5 align-self-center">
                <div className="assembly_sheet">
                  <h4>Mechanical Fittings</h4>
                  <p>Heat treatment is a controlled process of heating and cooling metals to enhance their strength, hardness, and durability for industrial applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ASSEMBLY BOX 2: Wiring */}
        <section className="assembly_box">
          <div className="container">
            <div className="row">
              <div className="col-md-5 align-self-center">
                <div className="assembly_sheet">
                  <h4>Wiring</h4>
                  <p>Heat treatment is a controlled process of heating and cooling metals to enhance their strength, hardness, and durability for industrial applications.</p>
                </div>
              </div>
              <div className="col-md-7">
                <Image src="/images/wiring.png" alt="Wiring" width={600} height={400} />
              </div>
            </div>
          </div>
        </section>
        {/* ASSEMBLY BOX 3: PCB Mounting */}
        <section className="assembly_box">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <Image src="/images/pcb_mounting.png" alt="PCB Mounting" width={600} height={400} />
              </div>
              <div className="col-md-5 align-self-center">
                <div className="assembly_sheet">
                  <h4>PCB Mounting</h4>
                  <p>Surface treatment enhances a material’s durability, corrosion resistance, and appearance through processes like coating, plating, and polishing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ASSEMBLY BOX 4: Functional Testing */}
        <section className="assembly_box">
          <div className="container">
            <div className="row">
              <div className="col-md-5 align-self-center">
                <div className="assembly_sheet">
                  <h4>Functional Testing</h4>
                  <p>Heat treatment is a controlled process of heating and cooling metals to enhance their strength, hardness, and durability for industrial applications.</p>
                </div>
              </div>
              <div className="col-md-7">
                <Image src="/images/functional_testing.png" alt="Functional Testing" width={600} height={400} />
              </div>
            </div>
          </div>
        </section>
        {/* ASSEMBLY BOX 5: Electrical Integration */}
        <section className="assembly_box">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <Image src="/images/electrical_integration.png" alt="Electrical Integration" width={600} height={400} />
              </div>
              <div className="col-md-5 align-self-center">
                <div className="assembly_sheet">
                  <h4>Electrical Integration</h4>
                  <p>Surface treatment enhances a material’s durability, corrosion resistance, and appearance through processes like coating, plating, and polishing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
