import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import HeroImage from "../public/img/main-image.png";
import CtaImage from "../public/img/cta-wise-temporary.png";
import Diaspora3 from "../public/img/diaspora-3.jpg";
import Diaspora1 from "../public/img/diaspora-1.jpg";
import Diaspora2 from "../public/img/diaspora-2.jpg";
import Diaspora4 from "../public/img/diaspora-4.jpg";
// import DashboardMockup from '../public/img/dashboard-mockup.png'
// import BeneficiaryMockup from '../public/img/beneficiary-mockup.png'
// import PaybillMockup from '../public/img/paybill-mockup.png'
// import TransactionMockup from '../public/img/transaction-mockup.png'
// import ReceiptMockup from '../public/img/receipt-mockup.png'
// import Subscribe from '../components/Subscribe'

export default function Diaspora() {
  const pageTitle = "Tulix - Support Your Loved Ones, Wherever You Are";
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
      <div>
        <section className="hero mb-5">
          <div className="container hero-bg bg-primary">
            <div className="row justify-content-between">
              <div className="col-lg-5  d-flex flex-column justify-content-center mb-5 mb-md-0">
                <h1 className="hero-title mt-4 mb-3 text-light">
                  Send money for <span>Airtime</span> to Kenya
                </h1>
                <p className="lead mb-5 text-white">
                  Whether you need to pay for urgent expenses or simply want to
                  send a gift, Tulix makes it easy, secure and affordable to
                  stay connected with your family in Kenya.*
                </p>
                <div className="hero-cta ">
                  {/* <Subscribe id="email-input-1"/> */}
                  <div className="row">
                    <div className="col-lg-5 mb-2">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.solutions.tulix"
                        className="btn btn-success btn-lg btn-block text-light"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="mr-2 bi-google-play"></i>
                        Learn More
                      </a>
                    </div>
                    <div className="col-lg-5 mb-2">
                      <a
                        href="https://apps.apple.com/ke/app/tulix/id1587163986"
                        className="btn btn-success text-light btn-lg btn-block"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="mr-2 bi-apple"></i>
                        Get Started
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
                  // layout="responsive"
                  width={321.28}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className=" h1 mb-4 ">Why you'll love Tulix </h2>
                <p>
                  Because we've built it with you, your people and your money in
                  mind.
                </p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mb-5 pb-0 pb-lg-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <Image
                  src={Diaspora1}
                  alt="Happy family shopping online."
                  className="img-fluid rounded"
                  placeholder="blur"
                  layout="intrinsic"
                />
              </div>
              <div className="col-lg-5 offset-lg-1">
                <h3 className="mb-4">
                  Pay for the things that matter most to your people
                </h3>

                <p className="lead mb-0">
                  As a Kenyan abroad, we know that taking care of your loved
                  ones is a top priority and we understand the challenge of
                  providing essentials like groceries from far away. That's why
                  we've made it fast, convenient and easy for you to share money
                  with your friends and family for everyday needs such as
                  airtime and groceries.
                </p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mb-5  pb-0 pb-lg-5">
              <div className="col-lg-5 order-2 order-md-1">
                <h3 className="mb-4">Keep the conversations going</h3>

                <p className="lead  mb-0">
                  Buying airtime has never been easier! Just key in the phone
                  number you want to top up, enter the amount you want to
                  purchase and make the payment. Your loved ones will get the
                  airtime instantly, so they can stay connected with you no
                  matter where they are in Kenya.
                </p>
              </div>
              <div className="col-lg-4 offset-lg-1  order-1 order-md-2  mb-5 mb-lg-0">
                <Image
                  src={Diaspora2}
                  alt="African woman on a video call."
                  className="img-fluid rounded"
                  placeholder="blur"
                  layout="intrinsic"
                />
              </div>
            </div>
            <div className="row justify-content-center align-items-center mb-5  pb-0 pb-lg-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <Image
                  src={Diaspora3}
                  alt="Happy young woman with full shopping basket."
                  className="img-fluid rounded"
                  placeholder="blur"
                  layout="intrinsic"
                />
              </div>
              <div className="col-lg-5 offset-lg-1">
                <h3 className="mb-4">Support and empower your people</h3>

                <p className="lead mb-0">
                  You know how it goes, you send money for shopping and a
                  well-meaning loved one helps someone else out with an
                  emergency and now you have to send money again. Wouldn’t it be
                  a lot better if they just used it for what it was for? Simply
                  browse our list of merchants, select the one(s) you want your
                  beneficiaries to shop from and complete the payment. This way
                  you enable your loved ones to spend wisely and cultivate
                  positive money habits.
                </p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mb-5 pb-0 pb-lg-5">
              <div className="col-lg-5 order-2 order-md-1">
                <h3 className="mb-4">
                  Whatever they need, you’ve got them covered
                </h3>

                <p className="lead mb-0">
                  Access thousands of businesses in Kenya that offer various
                  products and services for everyday needs. Select familiar
                  brands or a combination of several during the payment process
                  so that your beneficiaries can easily shop from a variety of
                  merchant outlets. If you’d just like to leave it up to them
                  where to spend, simply leave it open and they’ll do the rest
                  after receiving the funds.
                </p>
              </div>
              <div className="col-lg-4 offset-lg-1  order-1 order-md-2 mb-5 mb-lg-0">
                <Image
                  src={Diaspora4}
                  alt="Smiling man on a phonecall seated outdoors"
                  className="img-fluid rounded"
                  placeholder="blur"
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="hero-3 mb-5">
          <div className="container">
            <div className="row justify-content-center py-0 py-lg-5">
              <div className="col-lg-8 text-center">
                <h2 className="h1 mb-4">Your convenience, our priority </h2>
                <p className="lead mb-5 text-white">
                  No more back and forth with detailed instructions on where the
                  money you send should be spent. Once you’ve completed the
                  payment process, your recipients will instantly receive a text
                  message confirming receipt of your funds.
                </p>
              </div>
              <div className="row justify-content-center px-3">
                <div className="col-lg-12 text-center">
                  <p className="small text-light">
                    Explore and see all you can do through Tulix.
                  </p>
                </div>
                <div className="col-lg-5 mb-2">
                  <a
                    href="/how-it-works"
                    className="btn btn-success text-light btn-lg btn-block"
                    target="_blank"
                    role="button"
                    rel="noreferrer"
                  >
                    <i className="bi bi-rocket-takeoff-fill mr-2"></i>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h2 className=" h1 mb-4">Frequently asked questions</h2>
                    <p>
                      If you have anything else you want to ask,{" "}
                      <a href="mailto:support@tulix.app">reach out to us.</a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  {/* */}
                  <div className="col-lg-12 mb-5">
                    <div className="accordion" id="accordionFAQs">
                      <div className="card">
                        <div className="card-header " id="headingOne">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 btn-lg text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              What is the Tulix Web App?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse "
                          aria-labelledby="headingOne"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body">
                            <p>
                              We’ve built the Tulix Web App for our customers to
                              easily access Tulix using a browser to make
                              instant payments & fund everyday needs for their
                              beneficiaries. This makes it convenient and easily
                              accessible from anywhere in the world.
                            </p>
                            <p>
                              Users are able to share money on the app with
                              their friends and family for specific needs such
                              as school fees, rent and groceries, etc. without
                              losing visibility over how and where money is
                              used.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card ">
                        <div className="card-header " id="headingTwo">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              How long does it take for my recipient to get the
                              money?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body">
                            <p>
                              Transactions made on Tulix are instant so your
                              loved ones will have access to the funds as soon
                              as you complete your payment.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              How do I know that my purchase was successful?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body">
                            <p>
                              You will receive a confirmation email from Tulix
                              once your payment has been processed successfully
                              and your recipient will receive a text message
                              with next steps.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header " id="headingFour">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              Can I send money to different countries using
                              Tulix?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body">
                            <p>
                              Currently, Tulix only supports payments to
                              businesses in Kenya. However, we are working on
                              expanding our services to other African countries.
                              Email us hello@tulix.app and tell us where we
                              should go next.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingFive">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              Is Tulix safe?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse bg-light"
                          aria-labelledby="headingFive"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body bg-light">
                            <p>
                              Yes. We work with trusted third-party payment
                              providers and banks to ensure that your
                              transactions are processed securely. We also
                              regularly update our security measures to ensure
                              your data is safe and secure.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="card">
                        <div className="card-header bg-primary" id="headingSix">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-primary btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              Can I use Tulix if I’m in Kenya? (Is Tulix only
                              for people in the diaspora)
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseSix"
                          className="collapse bg-light"
                          aria-labelledby="headingSix"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body bg-light">
                            <p>
                              Yes. Tulix is a Kenyan product for all Kenyans
                              globally whether at home or abroad.
                            </p>
                          </div>
                        </div>
                      </div> */}
                      <div className="card">
                        <div className="card-header" id="headingSeven">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block border-0 text-left font-weight-bold py-md-3 collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                            >
                              Random question?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseSeven"
                          className="collapse bg-light"
                          aria-labelledby="headingSeven"
                          data-parent="#accordionFAQs"
                        >
                          <div className="card-body bg-light">
                            <p>
                              We work with licensed institutions to credit and
                              debit funds on your Tulix account. Together with
                              these regulated 3rd parties, we've built in the
                              necessary safeguards in place to guarantee the
                              safety of your funds at all times
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  Do even more with{" "}
                  <span className="text-success">Tulix on mobile</span>
                </h2>
                <p className="lead mb-5">
                  Our mobile app is packed with features that allow you to
                  split, spend, save and share your money. Keep your money
                  organized separately by using the Jars for different things
                  like groceries, health, and rent. You can also share money
                  with friends and family for joint expenses like trips.
                </p>
                {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subscribeModal">Get Early Access</button>
										<a href="https://forms.gle/C5ewxia2fmLKmiWp6" class="btn btn-outline-primary" target="_blank">Take Our Survey</a>  */}
                {/* <Subscribe id="email-input-2" /> */}
                <div className="row">
                  <div className="col-lg-12">
                    <p className="small text-light">Download Tulix On</p>
                  </div>
                  <div className="col-lg-5 mb-2">
                    <a
                      href="/how-it-works"
                      className="btn btn-success text-white btn-lg btn-block"
                      role="button"
                      rel="noreferrer"
                    >
                      <i className="bi-google-play mr-2"></i>
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
