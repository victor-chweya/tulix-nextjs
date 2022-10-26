import Link from "next/link";

export default function FaqsSupport() {
  return (
    <>
      <div className="accordion" id="featureFAQs">
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
                How can I track the money I add to a wallet?
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            className="collapse "
            aria-labelledby="headingOne"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                On the homepage under the section "Latest activities" you'll
                always see each wallet top up
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
                What if I can’t find a merchant on the App? or What do I do if a
                merchant I want to pay is not listed on the app?
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              If the merchant you're trying to pay is not currently available,
              please use the 'Enter Merchant Details' button and manually enter
              the details. We'll verify & save the details after you
              successfully complete your transaction.
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
                How can I contact you in case I have an issue or a query?
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                Our support e-mail is support@tulix.app and you can reach us
                there in case of any queries around your transactions or other
                issues with the app.
              </p>
              <p>
                For urgent requests, please message us via WhatsApp at +1 302
                314-0099
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
                What Should I do if I paid the wrong business? (Can I cancel or
                reverse a payment once processed?)
              </button>
            </h2>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                Payment through Tulix is intended to be seamless and instant,
                with Tulix forwarding funds immediately to user-specified
                merchants once instructions are issued. This makes reversing
                transactions difficult.
              </p>
              <p>
                If you believe you've made a payment in error, you may contact
                us within thirty (30) minutes via support@tulix.app and we will
                attempt to contact the merchant and recover the funds. However,
                we can’t guarantee the same as per our Terms and Conditions.
                Please refer to our Terms and Conditions for more information on
                erroneous transactions.
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
                What are the fees/ charges associated with carrying out a
                transaction on Tulix?
              </button>
            </h2>
          </div>
          <div
            id="collapseFive"
            className="collapse"
            aria-labelledby="headingFive"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                We charge 1.5% of the total amount paid as transaction fees.
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
                I can’t log into my Tulix account. What do I do?
              </button>
            </h2>
          </div>
          <div
            id="collapseSix"
            className="collapse"
            aria-labelledby="headingSix"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                If you're having difficulty logging into your Tulix send us an
                email at support@tulix.app.
              </p>
              <p>
                For urgent requests, please message us via WhatsApp at +1 302
                314-0099
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
                Can I make an online payment using Tulix?
              </button>
            </h2>
          </div>
          <div
            id="collapse7"
            className="collapse"
            aria-labelledby="heading7"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                We only support mobile money payments and payments to banks in
                Kenya
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
                I’m having trouble installing the app on my phone. What do I do?
              </button>
            </h2>
          </div>
          <div
            id="collapse8"
            className="collapse"
            aria-labelledby="heading8"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                If you're having difficulty logging into your Tulix send us an
                email at support@tulix.app.
              </p>
              <p>
                For urgent requests, please message us via WhatsApp at +1 302
                314-0099
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
                What happens if I want a refund of the funds on my Tulix wallet?
              </button>
            </h2>
          </div>
          <div
            id="collapse9"
            className="collapse"
            aria-labelledby="heading9"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                We're happy to process a refund request as per our Terms of
                Service.
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
                I’m unable to complete a payment, what do I do?
              </button>
            </h2>
          </div>
          <div
            id="collapse10"
            className="collapse"
            aria-labelledby="heading10"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                Please contact us at support@tulix.app with the error or
                difficulty you're facing and we will have a team help you
                resolve the problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
