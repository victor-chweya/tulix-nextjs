export default function FaqsGettingStarted() {
  return (
    <>
      <div className="accordion" id="gettingStartedFAQs">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block btn-lg text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#hOne"
                aria-expanded="true"
                aria-controls="hOne"
              >
                How do I know my funds are safe on my Tulix wallet?
              </button>
            </h2>
          </div>
          <div
            id="hOne"
            className="collapse "
            aria-labelledby="headingOne"
            data-parent="#gettingStartedFAQs"
          >
            <div className="card-body">
              <p>
                We work with licensed institutions to credit and debit funds on
                your Tulix account. Together with these regulated 3rd parties,
                we've built in the necessary safeguards in place to guarantee
                the safety of your funds at all times.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block btn-lg text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#hTwo"
                aria-expanded="false"
                aria-controls="hTwo"
              >
                How do you load your Tulix wallet?
              </button>
            </h2>
          </div>
          <div
            id="hTwo"
            className="collapse "
            aria-labelledby="headingTwo"
            data-parent="#gettingStartedFAQs"
          >
            <div className="card-body">
              <p>
                We currently support mobile money and bank cards as topup
                options. Just hit Top-Up on the app to use any of them.
              </p>
              <p>
                For M-PESA, Simply enter your M-PESA number to get an automated
                push to key in your M-PESA pin. This will be automatically
                processed and your wallet will be loaded with the amount you
                entered.
              </p>
              <p>
                For bank cards, we currently support VISA, MasterCard & American
                Express carsds. Using the Bank Card option will redirect you to
                a secure payment screen where you'll be prompted with next
                steps.
              </p>
              <p>Now you’re ready to start making payments!</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block btn-lg text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#hThree"
                aria-expanded="false"
                aria-controls="hThree"
              >
                What do I need to sign up/register to use Tulix?
              </button>
            </h2>
          </div>
          <div
            id="hThree"
            className="collapse "
            aria-labelledby="headingThree"
            data-parent="#gettingStartedFAQs"
          >
            <div className="card-body">
              <p>
                You need an Android or iOS smartphone to download the Tulix App.
                You'll need to have a valid email address and phone number that
                can receive SMS notifications in order to sign up.
              </p>
              <p>
                You also need to provide a valid government issued
                identification document (ID) e.g. ID card, passport, drivers
                license or residence permit for identity verification as per KYC
                requirements.
              </p>
              <p>
                For bank cards, we currently support VISA, MasterCard & American
                Express carsds. Using the Bank Card option will redirect you to
                a secure payment screen where you'll be prompted with next
                steps.
              </p>
              <p>Now you’re ready to start making payments!</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block btn-lg text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#hFour"
                aria-expanded="false"
                aria-controls="hFour"
              >
                Where can I download the Tulix App from?
              </button>
            </h2>
          </div>
          <div
            id="hFour"
            className="collapse "
            aria-labelledby="headingFour"
            data-parent="#gettingStartedFAQs"
          >
            <div className="card-body">
              <p>
                The Tulix App is currently avaialable on the Apple App Store and
                Google Play Store.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFive">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block btn-lg text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#hFive"
                aria-expanded="false"
                aria-controls="hFive"
              >
                Can I change my email address or other information on the app?
              </button>
            </h2>
          </div>
          <div
            id="hFive"
            className="collapse "
            aria-labelledby="headingFive"
            data-parent="#gettingStartedFAQs"
          >
            <div className="card-body">
              <p>
                Yes. You can update your personal information in the App
                Settings.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingSix">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block btn-lg text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#hSix"
                aria-expanded="false"
                aria-controls="hSix"
              >
                How can I pay businesses?
              </button>
            </h2>
          </div>
          <div
            id="hSix"
            className="collapse "
            aria-labelledby="headingSix"
            data-parent="#gettingStartedFAQs"
          >
            <div className="card-body">
              <ol className="pl-2">
                <li>
                  On the homepage click on 'Pay' on the tab at the bottom.
                </li>
                <li>
                  Select 'mobile money payment' and fill in the relevant till
                  number or paybill number details to make a payment.
                </li>
                <li>
                  Add the payment as a favorite or recurring to quickly make
                  future payments
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
