import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import DownloadCTA from "../components/downloadCTA";
import HeroImage from "../public/img/main-image.png";

export default function About() {
  const pageTitle = "About Us - Built in Kenya for the World";
  const pageDescription =
    "Split, spend, save & share money with anyone in Kenya, from anywhere in the world.";
  const pageImage =
    "https://res.cloudinary.com/tulix/image/upload/v1678217415/blog/Media-Link-Preview-Image_March2023_b3soic.png";
  return (
    <Layout>
      <Head>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://tulix.app" />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <title>{pageTitle}</title>
      </Head>
      <section className="hero mb-5">
        <div className="container hero-bg hero-about">
          <div className="row justify-content-center">
            <div className="col-lg-10  d-flex flex-column text-center my-5 mb-md-0">
              <h1 className="hero-title mt-4 mb-3 ">
                It’s easy to move money, but money relationships are very
                complex.
              </h1>
              <p className="lead mb-5 text-white">
                Tulix is a new, smart way for Kenyans anywhere to share money,
                budget and manage finances together with the people that matter
                to them without losing visibility over how and where money is
                used.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-6">
                  {/* <h6 className="text-success">How It's Going</h6> */}
                  <h2 className="section-title mb-5">
                    Built in Kenya for the World
                  </h2>
                </div>

                <div className="col-lg-6 pr-lg-5">
                  <p className="font-weight-bold">
                    74% of Africans worldwide are willing to share more money
                    with their friends and family if they could have more
                    convenient ways to make payments and manage finances with
                    the people that matter to them.
                  </p>
                  <p>
                    Tulix was built to empower Africans everywhere by enabling
                    them to share money and collaborate on payments for specific
                    needs. Our app allows users to build healthier money
                    relationships with their people.
                  </p>
                  <p>
                    People share money every day for different reasons: from
                    supporting their families at home to purchasing food and
                    household goods to medical and education expenses. Our
                    innovative solution allows them to manage all these
                    different spending needs together from just one digital
                    wallet. With Tulix, they can share money and make payments
                    to local businesses instantly from anywhere in the world
                    using mobile money.
                  </p>
                </div>
                <div className="container hero-about-section rounded my-5"></div>
                <div className="col-lg-6 pr-lg-5">
                  <p>
                    While several operators offer fast and affordable payments,
                    none provide transparency or the ability to collaborate with
                    beneficiaries on the usage of the money. Tulix provides this
                    value by allowing users to see, co-determine with their
                    people, or determine directly how funds will be spent,
                    thereby increasing accountability and transparency to unlock
                    the full potential of local and international remittances.
                  </p>
                </div>
                <div className="col-lg-6 pr-lg-5">
                  <p>
                    Tulix offers value to both senders and receivers on a single
                    platform. We allow users to create “jars” for collaborative
                    budgeting, increased visibility, and better management of
                    funds. These jars can also be used for goal-based savings,
                    which help to improve the financial health of households
                    that use our solution.
                  </p>
                </div>
              </div>
              <hr className="mt-5" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row mb-4">
                <div className="col-lg-8">
                  {/* <h6 className="text-success">Our Vision Of The Future</h6> */}
                  <h2 className="section-title mb-5">Our Team</h2>
                </div>
                <div className="w-100" />

                <div className="col-lg-12 d-flex flex-column justify-content-center">
                  <p>
                    Our team is led by passionate, experienced founders
                    supported by talented professionals creating exceptional
                    products and delivering exceptional value. Together, we are
                    aligned toward creating innovative and inclusive solutions
                    that will fundamentally improve our continent and the world.
                  </p>
                  <p>
                    We are ambitious. We encourage innovation. We believe in
                    continuous learning and iteration. We want to build a
                    company that will outlast us. If this sounds like you, come
                    and build with us.
                  </p>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-8">
                  {/* <h6 className="text-success">Our Vision Of The Future</h6> */}
                  <h2 className="mb-5">Our Culture</h2>
                </div>
                <div className="w-100" />
                <div className="col-lg-3 mb-4">
                  <div className="card values h-100">
                    <div className="card-body">
                      <h3 className="mb-3 mt-4 h6">Empathy at the Front</h3>
                      <p>
                        When you talk we actually listen. We cultivate
                        psychological safety so that team members feel safe
                        enough to speak freely about anything impacting their
                        performance — in or out of the office.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="card values h-100">
                    <div className="card-body">
                      <h3 className="mb-3 mt-4 h6">
                        Teamwork Makes The Dream Work
                      </h3>
                      <p>
                        We are all equals. When everyone understands and
                        respects each other’s roles it leads to better cohesion
                        which translates into the broader experience we strive
                        to create for our customers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="card values h-100">
                    <div className="card-body">
                      <h3 className="mb-3 mt-4 h6">
                        Collaboration for Continuous Innovation
                      </h3>
                      <p>
                        There is no bad idea, there are just ideas. Whether
                        you’re a team member or a customer we always want to
                        hear from you so we can learn and build Tulix together.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="card values h-100">
                    <div className="card-body">
                      <h3 className="mb-3 mt-4 h6">No “Code Switching”</h3>
                      <p>
                        At Tulix we encourage you to show up fully as yourself.
                        You get to decide what professionalism looks like for
                        you without sacrificing your personality, your interests
                        and your values.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us about-us__advisors">
        <div className="container">
          <div className="row justify-content-lg-center text-lg-center mb-5">
            <div className="col-lg-10">
              <h2 className="section-title my-5">Our Investors </h2>
              <p>
                So far, we're backed by global institutions as well as
                individual angel investors to help us achieve our vision.
                Together, we are aligned toward creating innovative and
                inclusive solutions that will fundamentally improve our
                continent and the world.
              </p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-3 mb-4 d-flex align-items-center">
              <Image
                src="/img/team/antlerlogo.png"
                alt="Antler"
                className="img-fluid"
                width={563.11}
                height={145}
              />
            </div>
            <div className="col-lg-3 mb-4 d-flex align-items-center px-4">
              <Image
                src="/img/team/catalystfund.png"
                alt="Catalyst Fund"
                className="img-fluid"
                width={1025.25}
                height={145}
              />
            </div>
            <div className="col-lg-3 mb-4 align-items-center px-4">
              <Image
                src="/img/team/simple.png"
                alt="Simple Capital"
                target="_blank"
                rel="noreferrer"
                className="img-fluid"
                width={350}
                height={145}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="cta">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-5 d-flex justify-content-center mb-5 mb-md-0">
              <Image
                src={HeroImage}
                alt="tulix dashboard-mockup"
                className="img-fluid"
                placeholder="blur"
                width={600}
                height={600}
              />
            </div>
            <div className="col-lg-5 offset-md-1 d-flex flex-column justify-content-center ">
              <h2 className="mb-5">
                Join The <span className="text-success">#TulixTribe </span>Today
              </h2>
              <p className="lead mb-5">
                We’re already making it possible for Kenyans all over the world
                to stay connected through Tulix.
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <p className="small">Download Tulix On</p>
                </div>
                <div className="col-auto">
                  <DownloadCTA />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
