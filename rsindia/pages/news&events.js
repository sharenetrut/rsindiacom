import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function NewsEvents() {
  return (
    <Layout>
      <Head>
        <title>News & Events | RS-INDIA</title>
        <meta name="description" content="News and events at RS India" />
      </Head>
      <main>
        {/* Banner */}
        <section className="machine_back">
          <Image src="/images/news_back.png" alt="News Banner" width={1920} height={400} style={{width: '100%', height: 'auto'}} />
        </section>
        {/* News Section */}
        <section className="news">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center">RS INDIA IN NEWS</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mt-2">
                <div className="news_img text-center">
                  <Image src="/images/news1.png" className="img-fluid" alt="News 1" width={350} height={220} />
                </div>
              </div>
              <div className="col-md-4 mt-2">
                <div className="news_img text-center">
                  <Image src="/images/news2.png" className="img-fluid" alt="News 2" width={350} height={220} />
                </div>
              </div>
              <div className="col-md-4 mt-2">
                <div className="news_img text-center">
                  <Image src="/images/news3.png" className="img-fluid" alt="News 3" width={350} height={220} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Events Section */}
        <section className="events">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center">EVENTS</h1>
                <p className="text-center" style={{color: '#000'}}>
                  RS India had inauguration of it’s Jaipur unit in March 2018. This event was covered by media widely. Here are some media coverage photos in different media houses.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="news_img text-center">
                  <Image src="/images/event1.png" className="img-fluid" alt="Event 1" width={500} height={350} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <div className="news_img text-center">
                      <Image src="/images/event2_1.png" className="img-fluid" alt="Event 2-1" width={500} height={160} />
                    </div>
                  </div>
                  <div className="col-md-12 mt-2">
                    <div className="news_img text-center">
                      <Image src="/images/event2-2.png" className="img-fluid" alt="Event 2-2" width={500} height={160} />
                    </div>
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
