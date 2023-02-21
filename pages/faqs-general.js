import Link from "next/link";

export default function FaqsGeneral() {
  return (
    <>
      <div className="accordion" id="generalFAQs">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block btn-lg text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is Tulix?
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            className="collapse "
            aria-labelledby="headingOne"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                Tulix is a smart, new way for Kenyans anywhere to share money,
                budget and manage finances better.
              </p>
              <p>
                The app enables users globally to instantly pay a business in
                Kenya from anywhere in the world using mobile money.
              </p>
              <p>
                Users are able to share money on the app with their friends and
                family for specific needs such as school fees, rent and
                groceries, etc. without losing visibility over how and where
                money is used.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What can I use the Tulix app for?
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                Tulix enables you to pay for day-to-day things like airtime,
                groceries and bigger expenses like school fees and medical bills
                from anywhere in the world.
              </p>
              <p>
                Create multiple jars as an easy way to help you budget and make
                sure there’s always money for the important stuff. Once those
                are out of the way it’s time to have fun.{" "}
              </p>
              <p>
                Use Tulix to pay for dinner and drinks on a night out and even
                create a jar to plan for a vacation with your friends.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What makes Tulix so awesome?
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                Our app makes it possible for Kenyans abroad to access mobile
                money (M-PESA) from anywhere.
              </p>
              <p>
                Our most exciting feature is the Tulix Jars that enables users
                to split expenses, manage finances and budget together for
                various needs.
              </p>
              <p>
                Beyond all this, Tulix is built by an amazing African team
                that's backed by global investors.
                <Link href="/about-us">Learn more here</Link> .
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Do I need a Kenyan mobile phone line to use Tulix?
              </button>
            </h2>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                No. You can register on Tulix using any number that you're able
                to receive SMS messages on.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFive">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Can I use Tulix if I’m in Kenya? (Is Tulix only for people in
                the diaspora)
              </button>
            </h2>
          </div>
          <div
            id="collapseFive"
            className="collapse"
            aria-labelledby="headingFive"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                Yes. Tulix is a Kenyan product for all Kenyans globally whether
                home or abroad.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingSix">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                What does sharing money mean?
              </button>
            </h2>
          </div>
          <div
            id="collapseSix"
            className="collapse"
            aria-labelledby="headingSix"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                On Tulix, once you create and top up your jars using money from
                your main wallet, you can add your people as members who can
                make payments to businesses using your money in the jar.
                Therefore, you'll be sharing your money with them.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading7">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse7"
                aria-expanded="false"
                aria-controls="collapse7"
              >
                What other countries can I make payments to using Tulix?
              </button>
            </h2>
          </div>
          <div
            id="collapse7"
            className="collapse"
            aria-labelledby="heading7"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                At the moment, you can only make payments to Kenya. We will be
                expanding into new African markets soon.
              </p>
              <p>
                Send us an email to{" "}
                <a href="mailto:hello@tulix.app">hello[@]tulix.app</a> to
                suggest new markets that you're interested in making payments
                to.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading8">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse8"
                aria-expanded="false"
                aria-controls="collapse8"
              >
                Who is behind Tulix and where is the company based?
              </button>
            </h2>
          </div>
          <div
            id="collapse8"
            className="collapse"
            aria-labelledby="heading8"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                Tulix is a global company founded by a team of Kenyans and
                backed by global investors such as Antler & BFA Global's
                Catalyst Fund. For more information, please check out our About
                Us page.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading9">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse9"
                aria-expanded="false"
                aria-controls="collapse9"
              >
                Can I use the app on a laptop or PC?
              </button>
            </h2>
          </div>
          <div
            id="collapse9"
            className="collapse"
            aria-labelledby="heading9"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                The app is currently only available on mobile phones. Future
                versions will support other devices.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading10">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse10"
                aria-expanded="false"
                aria-controls="collapse10"
              >
                Can I suggest a feature on the app?
              </button>
            </h2>
          </div>
          <div
            id="collapse10"
            className="collapse"
            aria-labelledby="heading10"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                Absolutely yes! We are building the app based on user needs. If
                there is a feature you'd like us to take into consideration,
                please reach out to us via email at{" "}
                <a href="mailto:hello@tulix.app">hello@tulix.app</a> and let us
                know.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading11">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse11"
                aria-expanded="false"
                aria-controls="collapse11"
              >
                Is my card information stored on the app?
              </button>
            </h2>
          </div>
          <div
            id="collapse11"
            className="collapse"
            aria-labelledby="heading11"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                No, we don't store your financial information directly on the
                app. Your information is securly managed by our card payment
                service providers as an extra security measure to ensure the
                safety of your financial information when using Tulix.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading12">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse12"
                aria-expanded="false"
                aria-controls="collapse12"
              >
                Can I get transaction statements for my Tulix payments and other
                transactions?
              </button>
            </h2>
          </div>
          <div
            id="collapse12"
            className="collapse"
            aria-labelledby="heading12"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>
                Yes, you can view your transaction statement in-app in the
                analytics page next to the notification bell on the home screen.
                We're working on an e-mail statement for our users in future.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading13">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse13"
                aria-expanded="false"
                aria-controls="collapse13"
              >
                How do I share the Tulix App
              </button>
            </h2>
          </div>
          <div
            id="collapse13"
            className="collapse"
            aria-labelledby="heading13"
            data-parent="#generalFAQs"
          >
            <div className="card-body">
              <p>Click on your profile then select "Share app"</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
