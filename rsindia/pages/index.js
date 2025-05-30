import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>RS-INDIA</title>
        <meta name="description" content="RS India - Precision Machining Excellence" />
      </Head>
      {/* SLIDER */}
      <div className="slider">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src="/images/slider-rs1.png" className="d-block w-100" alt="..." width={1920} height={700} />
              <div className="container">
                <div className="carousel-caption d-md-block">
                  <h2> <span>RS India</span>  :  Precision Machining Excellence</h2>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Image src="/images/slider-rs2.png" className="d-block w-100" alt="..." width={1920} height={700} />
              <div className="container">
                <div className="carousel-caption d-md-block">
                  <h2 className="text-white"> Crafting Excellence with Precision Engineering</h2>
                  <p>Delivering world-class precision machine parts and assemblies, designed to meet the most demanding standards.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Image src="/images/slider-rs3.png" className="d-block w-100" alt="..." width={1920} height={700} />
              <div className="container">
                <div className="carousel-caption d-md-block">
                  <h2> Quality Beyond <span>Compare</span></h2>
                  <p style={{color:'#000'}}>Adhering to international quality standards to exceed customer expectations.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Image src="/images/slider-rs6.png" className="d-block w-100" alt="..." width={1920} height={700} />
              <div className="container">
                <div className="carousel-caption1 d-md-block">
                  <h2>Your Success, <span>Our Priority</span></h2>
                  <p style={{color:'#000'}}>Delivering solutions that are not just precise but also aligned with your unique goals.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <Image src="/images/slider-rs5.png" className="d-block w-100" alt="..." width={1920} height={700} />
              <div className="container">
                <div className="carousel-caption1 d-md-block">
                  <h2 className="text-white">Building a Sustainable Future</h2>
                  <p style={{color:'#fff'}}>Integrating eco-friendly practices into precision manufacturing.</p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* VISION SECTION */}
      <section className="vision">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <h1 className="title">Vision and Values: </h1>
              <h5>The Driving Force Behind RS India</h5>
              <p>RS India was founded by Dr. Rajendra Kumar Joshi and Mrs. Ursula Joshi, a visionary duo committed to transforming India&apos;s manufacturing landscape. Dr. Joshi, social entrepreneur, is dedicated to addressing skill gaps and enhancing youth employability through innovative education models like the Swiss Dual System of Skill Development. Our vision focuses on fostering a skilled workforce capable of meeting global industry standards, positioning India as a leader in precision manufacturing. This approach not only aims at economic growth but also emphasizes social responsibility and community development, creating a lasting impact on the country&apos;s industrial and social fabric.</p>
            </div>
            <div className="col-md-6 col-lg-6 align-self-center">
              <Image src="/images/vision2.png" alt="Vision" width={500} height={350} />
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT RS SECTION */}
      <section className="about-rs">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-white">About RS India</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <h3 className="text-white">Incorporation</h3>
                  <p className="text-white">RS India was established on 10th June 2016, marking the beginning of a new era in precision machining.</p>
                </li>
                <li>
                  <h3 className="text-white">Strategic Partnership</h3>
                  <p className="text-white">A joint venture with SRM AG Switzerland brings global expertise to the Indian manufacturing landscape.</p>
                </li>
                <li>
                  <h3 className="text-white">Expansion</h3>
                  <p className="text-white">Situated in Mahindra World City, Jaipur, RS India has grown to serve diverse industries nationwide.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <section className="services">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Comprehensive Services</h1>
              <p>Situated in Mahindra World City, Jaipur, RS India has grown to serve diverse industries nationwide.</p>
            </div>
          </div>
          <div className="row">
            {/* Machining Card */}
            <div className="col-md-3 col-lg-3">
              <div className="service-box">
                <div className="card">
                  <Image src="/images/machining.png" className="card-img-top" alt="Machining" width={300} height={200} />
                  <div className="card-body">
                    <h5 className="card-title">Machining</h5>
                    <ul>
                      <li>Raw Material Preparation</li>
                      <li>Milling</li>
                      <li>Turning</li>
                      <li>Swiss Type Turning</li>
                      <li>Grinding</li>
                    </ul>
                    <p className="card-text">Our state-of-the-art machining capabilities include raw material preparation, milling, turning, Swiss-type turning, and precision grinding to create complex, high-quality components.</p>
                    <div className="col-md-12 ">
                      <div className="arrow-btn">
                        <Link href="/machining" className="text-end"><i className="fa fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fabrication Card */}
            <div className="col-md-3 col-lg-3">
              <div className="service-box">
                <div className="card">
                  <Image src="/images/fabrication.png" className="card-img-top" alt="Fabrication" width={300} height={200} />
                  <div className="card-body">
                    <h5 className="card-title">Fabrication</h5>
                    <ul>
                      <li>Sheet Metal & Laser Cutting</li>
                      <li>Welding</li>
                      <li>Washing & Tumbling</li>
                    </ul>
                    <p className="card-text">Our advanced fabrication capabilities include sheet metal fabrication, laser cutting, precision welding, and thorough washing and tumbling processes — all designed to deliver complex, high-quality components with exceptional accuracy and finish.</p>
                    <div className="col-md-12 ">
                      <div className="arrow-btn">
                        <Link href="/fabrication" className="text-end"><i className="fa fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Surface Treatment Card */}
            <div className="col-md-3 col-lg-3">
              <div className="service-box">
                <div className="card">
                  <Image src="/images/finishing.png" className="card-img-top" alt="Surface Treatment" width={300} height={200} />
                  <div className="card-body">
                    <h5 className="card-title">Surface Treatment</h5>
                    <ul>
                      <li>Heat Treatment</li>
                      <li>Powder & Paint Coating</li>
                      <li>Laser Engraving & UV Printing</li>
                    </ul>
                    <p className="card-text">Our finishing capabilities span heat treatment, surface treatment, powder and paint coating, as well as laser engraving and UV printing to ensure the highest standards of quality and aesthetics.</p>
                    <div className="col-md-12 ">
                      <div className="arrow-btn">
                        <Link href="/finishing" className="text-end"><i className="fa fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Assembly Card */}
            <div className="col-md-3 col-lg-3">
              <div className="service-box">
                <div className="card">
                  <Image src="/images/assembly.png" className="card-img-top" alt="Assembly" width={300} height={200} />
                  <div className="card-body">
                    <h5 className="card-title">Assembly</h5>
                    <ul>
                      <li>Mechanical Fittings</li>
                      <li>Electrical Integration</li>
                      <li>Wiring</li>
                      <li>PCB Mounting</li>
                      <li>Functional Testing</li>
                    </ul>
                    <p className="card-text">Our comprehensive assembly capabilities cover mechanical fittings, electrical integration, wiring, PCB mounting, and functional testing — ensuring fully integrated, reliable, and performance-ready assemblies tailored to customer specifications.</p>
                    <div className="col-md-12 ">
                      <div className="arrow-btn">
                        <Link href="/assembly" className="text-end"><i className="fa fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MATERIALS EXPERTISE SECTION */}
      <section className="materials" id="materials-expertise">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Materials <span>Expertise</span></h1>
              <h5 className="text-center">The Core of RS India&apos;s Operations</h5>
            </div>
          </div>
        </div>
        <div className="material_box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-lg-3">
                <div className="material-card">
                  <div className="card">
                    <Image src="/images/steel.png" className="card-img-top" alt="Steel" width={300} height={200} />
                    <div className="card-body">
                      <h5 className="card-title">Steel Precision<hr /></h5>
                      <p className="card-text">Expertly crafting components from high-grade steel, ensuring uncompromising quality and durability.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="material-card">
                  <div className="card">
                    <Image src="/images/aluminium.png" className="card-img-top" alt="Aluminum" width={300} height={200} />
                    <div className="card-body">
                      <h5 className="card-title">Aluminum Mastery<hr /></h5>
                      <p className="card-text">Meticulously working with lightweight yet strong aluminum alloys to deliver innovative solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="material-card">
                  <div className="card">
                    <Image src="/images/titanium.png" className="card-img-top" alt="Titanium" width={300} height={200} />
                    <div className="card-body">
                      <h5 className="card-title">Titanium Precision<hr /></h5>
                      <p className="card-text">Pushing the boundaries of precision engineering with advanced techniques for titanium components.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="material-card">
                  <div className="card">
                    <Image src="/images/plastic.png" className="card-img-top" alt="Gun Metal" width={300} height={200} />
                    <div className="card-body">
                      <h5 className="card-title">Gun Metal<hr /></h5>
                      <p className="card-text">Delivering robust, corrosion-resistant components with precision machining of gun metal — a trusted alloy renowned for its strength, durability, and excellent machinability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* VIDEO SECTION */}
      <section className="video_over">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="video_left">
                <div className="video-container">
                  <video id="myVideo" controls width="100%">
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="overlay" id="videoOverlay">Click to Play</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 self-align-center">
              <div className="video_right">
                <h4>RS India: A Legacy of Precision & Innovation</h4>
                <p>Step inside RS India with our exclusive visual showcase—an immersive journey through our state-of-the-art infrastructure, advanced machinery, and world-class manufacturing & electroplating facilities. From our high-tech production units to the dedicated workforce driving excellence, witness how we engineer precision machine parts and assemblies with cutting-edge technology and stringent quality standards. Explore how innovation meets efficiency to power industries across automotive, aerospace, medical, and industrial sectors.</p>
                <p className="mt-2">Watch now and discover the future of precision engineering at RS India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MACHINING CAPABILITIES SECTION */}
      <section className="machining">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Advanced Machining Capabilities</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="machining_box1">
                <h1>5-Axis Milling</h1>
                <p>Our state-of-the-art Mazak 5-axis CNC milling machines with Palletech high-rise system deliver unparalleled precision and versatility for complex parts.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="machining_box2">
                <h1>Turn-Mill Automation</h1>
                <p>Equipped with DMG MORI turn-mill centers featuring double spindle and turret systems, we achieve remarkable efficiency and part accuracy.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="machining_box3">
                <h1>Precision Press Braking</h1>
                <p>Our Amada press brakes allow us to shape and form high-quality sheet metal components with exceptional accuracy and consistency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* QUALITY SECTION */}
      <section className="quality">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <Image src="/images/quality1.png" alt="Quality" width={400} height={300} />
            </div>
            <div className="col-md-7 align-self-center">
              <h2>QUALITY ASSURANCE</h2>
              <div className="row mt-4">
                <div className="col-md-6">
                  <h4>ISO 9001:2015</h4>
                  <p>Our quality management system ensures consistent, high-quality products and services that meet customer expectations.</p>
                </div>
                <div className="col-md-6">
                  <h4>ISO 14001:2015</h4>
                  <p>We are committed to environmental management, minimizing our ecological footprint in all operations.</p>
                </div>
                <div className="col-md-12">
                  <h4>DNV GL Certification</h4>
                  <p>Certified by DNV GL in May 2020, validating our commitment to international quality standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CLIENTS SECTION */}
      <section className="clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Our Esteemed Clients</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="clients_box">
                <Image src="/images/world.png" alt="World" width={120} height={120} />
                <p>Our client base <br /> extends across Europe, with partners like SRM AG in Switzerland, Apium AG in Germany,<br /> and Krones AG, also  <br />in Germany.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="clients_box">
                <Image src="/images/sector.png" alt="Sector" width={120} height={120} />
                <p>We proudly serve clients in a wide range of sectors, including automotive (JCB India), medical technology (SOTAX India), and cable manufacturing (Shree Ambika Cable).</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="clients_box">
                <Image src="/images/partner.png" alt="Partner" width={120} height={120} />
                <p>We collaborate closely with leading Indian companies such as Trafag Controls, Buchi Operations India, Perto India, Vibrant Technik, and Indo Auto Tech.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BLOGS SECTION */}
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="blog_box">
                <Image src="/images/blog1.png" alt="Blog 1" width={350} height={200} />
              </div>
              <div className="blog_text">
                <h3>RS India’s Quality Through Testing</h3>
                <div className="row">
                  <div className="col-md-8">
                    <p>How RS India Ensures Quality Through Advanced Inspection and Testing</p>
                  </div>
                  <div className="col-md-2 align-self-center">
                    <Link href="/blog1" className="fa fa-arrow-right"></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_box">
                <Image src="/images/blog2.png" alt="Blog 2" width={350} height={200} />
              </div>
              <div className="blog_text">
                <h3>Minimizing Downtime with Precision Parts</h3>
                <div className="row">
                  <div className="col-md-8">
                    <p>Reducing Downtime with Precision Spare Parts: A Guide for Industrial Clients</p>
                  </div>
                  <div className="col-md-2 align-self-center">
                    <Link href="/blog2" className="fa fa-arrow-right"></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_box">
                <Image src="/images/blog3.png" alt="Blog 3" width={350} height={200} />
              </div>
              <div className="blog_text">
                <h3>Tolerance & Accuracy in Manufacturing</h3>
                <div className="row">
                  <div className="col-md-8">
                    <p>The Importance of Tolerance and Accuracy in Precision Parts Manufacturing</p>
                  </div>
                  <div className="col-md-2 align-self-center">
                    <Link href="/blog3" className="fa fa-arrow-right"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
