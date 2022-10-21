import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import HeroImage from "../public/img/jars-cta.png";
import CtaImage from "../public/img/jars-hero.png";
import IntroImage from "../public/img/jars-intro.png";
import CreateImage from "../public/img/jars-create.png";
import ShareImage from "../public/img/jars-share.png";
import DailyImage from "../public/img/jars-daily.png";

export default function Jars() {
  const pageTitle = "About Us - Support your loved ones from wherever you are.";
  const pageDescription =
    "Share, split, spend money with anyone in Kenya, from anywhere in the world.";
  const pageImage =
    "https://res.cloudinary.com/tulix/image/upload/v1660840952/blog/Media-Link-Preview-Image_ihuwfk.png";
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
      <section className="hero mb-5 ">
        <div className="container hero-bg bg-success">
          <div className="row justify-content-between">
            <div className="col-lg-5  d-flex flex-column justify-content-center mb-5 mb-md-0">
              <h1 className="hero-title mt-4 mb-3">Introducing Jars</h1>
              <p className="lead mb-5 text-white">
                Don’t you just hate having money for vastly different things in
                one place? Think of a Jar as a separate place to set aside money
                for specific uses like utilities or enjoyment, be it for
                yourself or for others.
              </p>
              <div className="hero-cta ">
                {/* <Subscribe id="email-input-1"/> */}
                <div className="row">
                  <div className="col-lg-12">
                    <p className="small text-light">Download Tulix</p>
                  </div>
                  <div className="col-lg-5 mb-2">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.solutions.tulix"
                      className="btn btn-outline-light btn-lg btn-block"
                      role="button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="mr-2  bi-google-play"></i>
                      Google Play
                    </a>
                  </div>
                  <div className="col-lg-5 mb-2">
                    <a
                      href="https://apps.apple.com/ke/app/tulix/id1587163986"
                      className="btn btn-outline-light btn-lg btn-block"
                      role="button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="mr-2 bi-apple"></i>
                      App Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-center hero-img">
              {/* <Image 
								src={HeroImage} 
								alt="tulix" 
								className="img-fluid pl-lg-5" 
								priority 
								placeholder="blur"
								height={455} 
								width={463}
								/> */}
              <Image
                src={CtaImage}
                alt="tulix dashboard-mockup"
                className="img-fluid"
                placeholder="blur"
                // layout="intrinsic"
                width={321.28}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="jars pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div
                className="card  border-0 mb-4 p-3 pb-0"
                style={{ background: "rgb(255, 193, 7, 0.2) " }}
              >
                <div className="card-body">
                  <div className="mb-2">
                    <i className="bi bi-person h2 text-warning"></i>
                  </div>
                  <h3 className=" h4 ">Jars For You</h3>
                  <p className="small">
                    Do you ever get stuck wondering where your money went at the
                    end of every month? Jars are an easy way to split your money
                    for different things like utilities and recurring expenses.
                  </p>
                  <p className="small">
                    A bit like mason jars in the kitchen, Tulix Jars provide a
                    clearer way to manage your money so you get more bang for
                    your buck.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="card border-0 mb-4  p-3 pb-0"
                style={{ background: "rgb(140, 198, 63, 0.2) " }}
              >
                <div className="card-body ">
                  <div className="mb-2">
                    <i className="bi bi-people h2 text-success"></i>
                  </div>
                  <h3 className=" h4 ">Jars for You & Others</h3>
                  <p className="small">
                    There are many scenarios where collective spending is a
                    reality. Our Jars were created with this in mind.
                  </p>
                  <p className="small">
                    Jars on Tulix allow multiple users to collaborate on
                    contributing, spending or both, for shared expenses. Be it
                    pooling funds for a trip, a joint purchase or simply sharing
                    your money with someone else for something they need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-2 pb-0">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-lg-8 text-center">
              <h2 className=" h1 mb-4 ">Twende Kazi</h2>
              <p>A better way to manage your money</p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 ">
              <h3 className="h3">Jars are all you need</h3>

              <p className="small mb-4">
                Tulix offers different types of Jars to help you stay on top of
                all your money.
              </p>
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="mb-2">
                    <i className="bi bi-wallet2 h4 text-success"></i>
                  </div>
                  <h6>Open Jars</h6>
                  <p className="small mb-0">
                    Jar members are able to make payments to any merchant using
                    funds in the Jar. Useful for everyday payments that have no
                    deadlines like store runs.
                  </p>
                </div>
              </div>
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="mb-2">
                    <i className="bi bi-shop h4 text-success"></i>
                  </div>
                  <h6>Merchant Jars</h6>
                  <p className="small mb-0">
                    Specify up to 10 merchants that can be paid using the funds
                    in the Jar. Useful for recurring payments like water,
                    electricity and rent.
                  </p>
                </div>
              </div>
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="mb-2">
                    <i className="bi bi-piggy-bank h4 text-success"></i>
                  </div>
                  <h6>Goal Jars</h6>
                  <p className="small mb-0">
                    Set aside funds in this Jar for a specific long-term goal
                    like saving up for a new laptop or phone and let your money
                    grow until you’re ready to use it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-right offset-lg-1">
              <Image
                src={IntroImage}
                alt="tulix dashboard-mockup"
                className="img-fluid"
                placeholder="blur"
                // layout="intrinsic"
                width={321.28}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="hero-2 pb-0">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-lg-8 text-center">
              <h2 className=" h1 mb-4 ">It’s time to “jars” it up</h2>
              <p>First, Download Tulix on</p>
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.solutions.tulix"
                  className="btn btn-outline-primary btn-lg mr-2 "
                  target="_blank"
                  role="button"
                  rel="noreferrer"
                >
                  <i className="bi-google-play mr-2"></i>
                  Google Play
                </a>
                <a
                  href="https://apps.apple.com/ke/app/tulix/id1587163986"
                  className="btn btn-outline-primary btn-lg ml-2"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="mr-2 bi-apple"></i>
                  App Store
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-5 pb-5">
            <div className="col-lg-4 text-right">
              <Image
                src={CreateImage}
                alt="tulix dashboard-mockup"
                className="img-fluid"
                placeholder="blur"
                // layout="intrinsic"
                width={321.28}
                height={600}
              />
            </div>
            <div className="col-lg-5 offset-lg-2">
              <h3 className="mb-4">Create a Jar</h3>
              <div className="counter mb-5">
                <p className="small">
                  Tap on “Jars” at the bottom right of the home screen. <br />
                  &nbsp;
                </p>
                <p className="small">
                  Choose the type of Jar you want to create and select the
                  maximum amount.
                </p>
                <p className="small">
                  Add a personal touch by selecting the colour and name of your
                  maximum amount. Jar. <br /> &nbsp;
                </p>
                <p className="small">
                  Load your Jar using money from your main wallet and you’re
                  ready to go.
                </p>
              </div>
              <p className="small">
                If you want to pay for medication using your health Jar, just
                select it on the relevant prompt when making a payment.
              </p>
              <p className="small">
                The money comes from that Jar and you’ll see all your
                health-related transactions in the same Jar.
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-5">
            <div className="col-lg-5 ">
              <h3 className="mb-4">Spread the Jars</h3>
              <p className="small">
                Spending with other people is a huge part of managing money;
                from shared bills to baby shower contributions or just a random
                night out with friends.
              </p>
              <p className="small">
                A shared Jar is your instant hassle-free joint account where you
                can split, spend and share money with your people.
              </p>
              <p className="h6 mb-4">To add people to a Jar:</p>
              <div className="counter">
                <p className="small">
                  Tap on Jar Settings at the top right of your Jar. <br />{" "}
                  &nbsp;
                </p>
                <p className="small">
                  Click on “Members”, select up to 10 members from your contact
                  list and press “Invite”.
                </p>
                <p className="small">
                  Alternatively you can choose “Link” on the tab at the top,
                  copy the link and share it with your people.
                </p>
                <p className="small">
                  Through “Member Settings”, you as the Jar Owner can determine
                  what the people you invite to your Jar can do.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src={ShareImage}
                alt="tulix dashboard-mockup"
                className="img-fluid"
                placeholder="blur"
                layout="responsive"
                width={1058.58}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="hero-2 pb-0">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-lg-8 text-center">
              <h2 className=" h1 mb-4 ">That’s not all…</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="icons">
                    <i className="bi bi-5-circle h4 text-success"></i>
                  </div>
                  <p className="small mb-0 font-weight-bold">
                    Create up to five Jars for different needs <br /> &nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="icons">
                    <i className="bi bi-shop h4 text-success"></i>
                  </div>
                  <p className="small mb-0 font-weight-bold">
                    Tag your favourite merchants for easier & quicker payments
                    using your merchant Jars
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="icons">
                    <i className="bi bi-gear h4 text-success"></i>
                  </div>
                  <p className="small mb-0 font-weight-bold">
                    Automate recurring expenses that can be paid straight from
                    your Jars
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="icons">
                    <i className="bi bi-clipboard-data h4 text-success"></i>
                  </div>
                  <p className="small mb-0 font-weight-bold">
                    Get monthly summaries of all your Jar expenses <br /> &nbsp;{" "}
                    <br /> &nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="icons">
                    <i className="bi bi-percent h4 text-success"></i>
                    {/* <i className="bi bi-envelope-paper"></i>
                    <i className="bi bi-alarm"></i> */}
                  </div>
                  <p className="small mb-0 font-weight-bold">
                    Opt in to earn interest on your goal Jars as you save up
                    through our partnership with Ndovu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-2">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-lg-8 text-center">
              <h2 className=" h1 mb-4 ">Tulix Jars are for everyday life</h2>
              <p>Take a look at how Jars work in daily scenarios. </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center ">
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="mb-2">
                    <i className="bi bi-clipboard2-check h4 text-success"></i>
                  </div>
                  <h6>Budgeting</h6>
                  <p className="small mb-0">
                    There are so many bills to pay that little expenses can slip
                    by. Jars make it easier to see where you could be spending
                    less or more. Could you swap the gym membership you don’t
                    use for home workouts? Only the Jar Analytics will tell…
                  </p>
                </div>
              </div>
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="mb-2">
                    <i className="bi bi-receipt-cutoff h4 text-success"></i>
                  </div>
                  <h6>Bill-Splitting</h6>
                  <p className="small mb-0">
                    “Who hasn’t sent their portion of the bill?” Ever been the
                    one asking this question? Simply add everyone involved to
                    your Jar and request them to automate this payment.
                  </p>
                </div>
              </div>
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="mb-2">
                    <i className="bi bi-balloon-heart h4 text-success"></i>
                  </div>
                  <h6>Milestones</h6>
                  <p className="small mb-0">
                    Jars are also made for the special once-in-a-lifetime
                    moments that bring loved ones together. Create Jars for baby
                    showers, housewarmings or graduation parties to easily pool
                    money for these events.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <Image
                src={DailyImage}
                alt="tulix dashboard-mockup"
                className="img-fluid"
                placeholder="blur"
                layout="responsive"
                width={445}
                height={900}
              />
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center ">
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="mb-2">
                    <i className="bi bi-cup-straw h4 text-success"></i>
                  </div>
                  <h6>Enjoyment</h6>
                  <p className="small mb-0">
                    Everyone deserves to have a good time and with the concert
                    coming up it’s time to start planning. Create a Jar with
                    your friends for the tickets, ngata and food and drinks.
                    Changa together, enjoy together.
                  </p>
                </div>
              </div>
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="mb-2">
                    <i className="bi bi-airplane-engines h4 text-success"></i>
                  </div>
                  <h6>Travel</h6>
                  <p className="small">
                    It’s time to travel. And it doesn’t always have to be a
                    major trip—create Jars for staycations and road trips with
                    your friends and have a single place to spend from that’s
                    accessible to you all at the same time.
                  </p>
                </div>
              </div>
              <div className="card bg-light border-0 p-2 mb-4">
                <div className="card-body">
                  <div className="mb-2">
                    <i className="bi bi-umbrella h4 text-success"></i>
                  </div>
                  <h6>Rainy Days</h6>
                  <p className="small mb-0">
                    It stings to have to dig into your wallet when something
                    unexpected happens (especially in this economy). Why not
                    plan for it in advance? Putting some money aside in an
                    “Emergency Jar” could make all the difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-3 text-light mb-0 bg-success">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-lg-8 text-center">
              <h3 className="h1">Put your money where your Jar is</h3>
              <p>
                Take the guesswork out of budgeting so you can really start
                enjoying your money. Ready to take charge of your finances?
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="cta">
        <div className="container ">
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
                Join lots of other
                <span className="text-success">“Tulixers” </span> today and{" "}
                <span className="text-success">“Jars” </span>your way to
                financial freedom.
              </h2>

              <div className="row">
                <div className="col-lg-12">
                  <p className="small">Download Tulix On</p>
                </div>
                <div className="col-lg-5 mb-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.solutions.tulix"
                    className="btn btn-outline-primary btn-lg btn-block"
                    target="_blank"
                    role="button"
                    rel="noreferrer"
                  >
                    <i className="bi-google-play mr-2"></i>
                    Google Play
                  </a>
                </div>
                <div className="col-lg-5 mb-22">
                  <a
                    href="https://apps.apple.com/ke/app/tulix/id1587163986"
                    className="btn btn-outline-primary btn-lg btn-block"
                    role="button"
                    rel="noreferrer"
                    targe="_blank"
                  >
                    <i className="bi-apple mr-2"></i>
                    App Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
