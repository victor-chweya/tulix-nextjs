import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import HeroImage from "../public/img/jars-cta2.png";
import createImage from "../public/img/create-account.png";
import knowImage from "../public/img/know-you.png";
import topUpImage from "../public/img/topup.png";
import notifications from "../public/img/notifications.png";
import merchants from "../public/img/merchants.png";
import categorise from "../public/img/categorise.png";
import hasstleFree from "../public/img/hasstle-free.png";
import spendingInsights from "../public/img/spending-insights.png";
import spendJars from "../public/img/spend-jars.png";
import recurringPayments from "../public/img/recurring-payments.png";
import Link from "next/link";

export default function Jars() {
  const pageTitle = "How It Works - The Smart Way to Manage Money";
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
      <section className="hero mb-0 mb-lg-5">
        <div className="container hero-bg hero-about">
          <div className="row justify-content-center my-3">
            <div className="col-lg-10  d-flex flex-column text-center">
              <h1 className="hero-title mt-4 mb-3 ">
                Getting Started With Tulix
              </h1>
              <p className="lead text-white">
                This is the page where most companies tell you why their app is
                the best ever. Here’s our take on ours. First, follow these
                steps to set up your Tulix account
              </p>
            </div>
            <div className="row justify-content-center px-3">
              <div className="col-lg-12 text-center">
                <p className="small text-light">Download Tulix On</p>
              </div>
              <div className="col-lg-5 mb-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.solutions.tulix"
                  className="btn btn-primary text-light btn-lg btn-block"
                  target="_blank"
                  role="button"
                  rel="noreferrer"
                >
                  <i className="bi-google-play mr-2"></i>
                  Google Play
                </a>
              </div>
              <div className="col-lg-5 mb-2">
                <a
                  href="https://apps.apple.com/ke/app/tulix/id1587163986"
                  className="btn btn-primary text-light btn-lg btn-block"
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
      </section>

      <section className="pb-0 pt-5">
        <div className="container">
          <div className="row mb-5 justify-content-around">
            <div className="col-lg-3 ">
              <div className="d-flex justify-content-center">
                <Image
                  src={createImage}
                  alt="tulix dashboard-mockup"
                  className="img-fluid"
                  placeholder="blur"
                  // layout="intrinsic"
                  width={321.28}
                  height={600}
                />
              </div>
              <h2 className="mb-4 h3">01. Create Your Account!</h2>
              <p>
                Enter your phone number, personal details to follow the prompts
              </p>
            </div>
            <div className="col-lg-3">
              <div className="d-flex justify-content-center">
                <Image
                  src={knowImage}
                  alt="tulix dashboard-mockup"
                  className="img-fluid"
                  placeholder="blur"
                  // layout="intrinsic"
                  width={321.28}
                  height={600}
                />
              </div>
              <h2 className="mb-4 h3">02. Let us know who you are</h2>
              <p>
                Click on your profile avatar on the home screen and enter your
                KYC details to get verified.
              </p>
            </div>
            <div className="col-lg-3 ">
              <div className="d-flex justify-content-center">
                <Image
                  src={topUpImage}
                  alt="tulix dashboard-mockup"
                  className="img-fluid"
                  placeholder="blur"
                  // layout="intrinsic"
                  width={321.28}
                  height={600}
                />
              </div>
              <h2 className="mb-4 h3">03. Add funds to your Tulix wallet</h2>
              <p>
                On the home screen select “Add funds” then select a top-up
                option and follow the prompts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-lg-5">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-0 pb-lg-5">
            <div className="col-lg-8 text-center">
              <h2 className=" h1 mb-4 ">So what can you do on Tulix?</h2>
              <p className="lead">Here’s why we think our app is so cool</p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-5 pb-0 pb-lg-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <Image
                src={hasstleFree}
                alt="tulix dashboard-mockup"
                className="img-fluid rounded"
                placeholder="blur"
                layout="intrinsic"
              />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h3 className="mb-4">Hassle-free payments</h3>

              <p className="lead">
                Simply make payments to till numbers, paybills and bank accounts
                from wherever you are without needing a Kenyan bank or mobile
                money account.
              </p>
              <p className="lead mb-0">
                Pay for your TV, Internet and other utilities and keep the
                conversation going.
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center pb-5">
            <div className="col-lg-5 order-2 order-md-1">
              <h3 className="mb-4">Notifications to keep you in the loop</h3>

              <p className="lead">
                Receive instant-app and e-mail notifications every time you
                transact with your account.
              </p>
              <p className="lead  mb-0">
                No more slow transactions and delayed payment notifications.
              </p>
            </div>
            <div className="col-lg-4 offset-lg-1 order-1 order-md-2 mb-5 mb-lg-0">
              <Image
                src={notifications}
                alt="tulix dashboard-mockup"
                className="img-fluid rounded"
                placeholder="blur"
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-5  pb-0 pb-lg-5">
            <div className="col-lg-4  mb-5 mb-lg-0">
              <Image
                src={recurringPayments}
                alt="tulix dashboard-mockup"
                className="img-fluid rounded"
                placeholder="blur"
                layout="intrinsic"
              />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h3 className="mb-4">Automate your payments</h3>

              <p className="lead mb-0">
                Automate regular payments on a weekly, bi-weekly or monthly
                basis. Once you set up recurring payments, you don’t need to
                worry about them again. Just set it and forget it.
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-5 pb-0 pb-lg-5">
            <div className="col-lg-5 order-2 order-md-1 ">
              <h3 className="mb-4">Save your favourite merchants</h3>

              <p className="lead  mb-0">
                No need to squint your eyes keying in the merchant details every
                time you’re making a payment. Once you’ve made a payment, save
                them as a favourite for easy retrieval in the future.
              </p>
            </div>
            <div className="col-lg-4 offset-lg-1 order-1 order-md-2 mb-5 mb-lg-0">
              <Image
                src={merchants}
                alt="tulix dashboard-mockup"
                className="img-fluid rounded"
                placeholder="blur"
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-5  pb-0 pb-lg-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <Image
                src={categorise}
                alt="tulix dashboard-mockup"
                className="img-fluid rounded"
                placeholder="blur"
                layout="intrinsic"
              />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h3 className="mb-4">Tag and categorise all your payments</h3>

              <p className="lead">
                “Where does all my money go?” Here’s how you can answer this
                question every month.
              </p>
              <p className="lead mb-0">
                Whether it's education, utility bills or entertainment,
                categorise your payments to get a clear summary of where you
                spend your money for better budgeting.
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-5  pb-0 pb-lg-5">
            <div className="col-lg-5 order-2 order-md-1">
              <h3 className="mb-4">Get detailed insights on your spending</h3>

              <p className="lead">
                Look no further than your analytics page for visual summaries of
                all your weekly or monthly payments.
              </p>
              <p className="lead">
                Remember, the more you use the app the more data you have to
                create better budgets.
              </p>
              <p className="lead mb-0">
                So work hard, chop life and document the journey.
              </p>
            </div>
            <div className="col-lg-4 offset-lg-1 order-1 order-md-2 mb-5 mb-lg-0">
              <Image
                src={spendingInsights}
                alt="tulix dashboard-mockup"
                className="img-fluid rounded"
                placeholder="blur"
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-5  pb-0 pb-lg-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <Image
                src={spendJars}
                alt="tulix dashboard-mockup"
                className="img-fluid rounded"
                placeholder="blur"
                layout="intrinsic"
              />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h3 className="mb-4">Spend smartly using Jars</h3>

              <p className="lead">
                We all know how easy it is to spend rent money on fun stuff
                whenever your money is all in one place.
              </p>
              <p className="lead">
                Jars are a new way of sorting your money to ensure you have
                adequate cash for both.
              </p>
              <p className="lead mb-0">
                Learn how you can “Jars” your way to financial freedom{" "}
                <Link href="/jars">here</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-3 text-light mb-0 bg-success">
        <div className="container">
          <div className="row justify-content-center py-4">
            <div className="col-lg-8 text-center">
              <h3 className="h1">Mobile money was made for the world</h3>
              <p className="lead">
                No local number? No problem! Pay any business in Kenya with
                Tulix, no matter where you are.
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
                layout="intrinsic"
              />
            </div>
            <div className="col-lg-5 offset-md-1 d-flex flex-column justify-content-center ">
              <h2 className="mb-5">
                <span className="text-primary">
                  Split, spend, save & share{" "}
                </span>{" "}
                money on Tulix from anywhere in the world
              </h2>

              <div className="row">
                <div className="col-lg-12">
                  <p className="small">Download Tulix On</p>
                </div>
                <div className="col-lg-5 mb-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.solutions.tulix"
                    className="btn btn-primary text-light btn-lg btn-block"
                    target="_blank"
                    role="button"
                    rel="noreferrer"
                  >
                    <i className="bi-google-play mr-2"></i>
                    Google Play
                  </a>
                </div>
                <div className="col-lg-5 mb-2">
                  <a
                    href="https://apps.apple.com/ke/app/tulix/id1587163986"
                    className="btn btn-primary text-light btn-lg btn-block"
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
