import Link from "next/link";

export default function FaqsFeatures() {
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
                What is a Tulix Jar?
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
                A Tulix Jar is a separate place where you set aside money for
                specific uses, whether it's for yourself or with others. With
                jars, you can manage your money better and get so much more out
                of your finances
              </p>
              <p>
                Ready to try jars? Download the app and check them out for
                yourself.
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
                Can I send money to an individual using Tulix?
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
              <p>
                You can only use the funds on your Tulix wallet to make payments
                to businesses. If you'd like to share money with an individual,
                you can do so by creating shared jars with other users who can
                use the funds to make payments as well.
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
                How do I use Tulix to budget
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
                Using jars. Create up to five jars and label them for different
                expenses like electricity, groceries and school fees then top up
                the jars with money from your main wallet. Anytime you want to
                set aside money for these specific things you can keep adding to
                your jar so you're always keeping money for expenses where they
                belong.
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
                How do I create a jar?
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
              <ol className="pl-2">
                <li>Open the Tulix app.</li>
                <li> In the task bar at the bottom click on 'Jars'.</li>
                <li>
                  Select 'Create a jar' and follow the prompts to complete the
                  process.
                </li>
                <li>
                  Name your jar then top up using money from your main wallet.
                </li>
              </ol>
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
                Who can see the jars I create?
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
                Only you are able to see all the jars you create for yourself.
                When you add other people to your jars, they're able to see only
                the jars that you've added them to.
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
                How many jars can I create?
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
                You can create up to five jars on your Tulix account. Learn more
                about Jars <Link href="/jars">here</Link>.
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
                What can my jar members do?
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
                Jar members are able to make payments using money from the jar
                and can also contribute funds to the jar using funds from their
                own Tulix wallets. All jar members are able to see the activity
                of other members within the Jar helping you collaborate easily.
                Learn more about Jars <Link href="/jars">here</Link>.
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
                Will I receive a notification to confirm each payment?
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
                Yes. You will receive an in-app confirmation as well as e-mail
                notifications to the registered email address on the app.
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
                What charges are involved when using the Tulix App?
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
                We charge transaction fees to make payments when using Tulix.
                Standard fees also apply when you top up your wallet depending
                on the mode you choose to use to top up. All fees are clearly
                broken down and indicated on the app as you navigate each step
                where fees are applicable.
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
                What is a Tulix wallet?
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
                The Tulix Wallet is your own unique and personal wallet that
                every Tulix user has on the app. Using the wallet, a user is
                able to load funds and make payments to businesses in Kenya
                using mobile money.
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
                Can I make a payment using Lipa Na M-PESA from abroad?
              </button>
            </h2>
          </div>
          <div
            id="collapse11"
            className="collapse"
            aria-labelledby="heading11"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                Yes. You can use Lipa na M-PESA to pay a business Paybill or
                Till Number using the Tulix App from abroad.
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
                I’m in a different time zone currently. Can I make payments at
                any time of the day or can I add a person to notify when I make
                a payment so they can follow up?
              </button>
            </h2>
          </div>
          <div
            id="collapse12"
            className="collapse"
            aria-labelledby="heading12"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>Yes, you can make a payment at any time of the day.</p>
              <p>
                If you’d like a merchant or a beneficiary to receive the payment
                confirmation, you can share the transaction details via Email,
                SMS, WhatsApp using the 'Share Transaction Details' button.
                You'll find this button when you scroll down the specific
                payment's screen.
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
                What’s the minimum and maximum amount I can transact on Tulix?
              </button>
            </h2>
          </div>
          <div
            id="collapse13"
            className="collapse"
            aria-labelledby="heading13"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                Currently, you can make payments of between KES 10 and KES
                100,000 per transaction / per day.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading14">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse14"
                aria-expanded="false"
                aria-controls="collapse14"
              >
                What kind of notifications or confirmations do I get when I make
                a payment on Tulix? (Will I receive an SMS confirmation?)
              </button>
            </h2>
          </div>
          <div
            id="collapse14"
            className="collapse"
            aria-labelledby="heading14"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                You will receive an in-app confirmation as well as e-mail
                notifications to the registered email address on the app.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading15">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse15"
                aria-expanded="false"
                aria-controls="collapse15"
              >
                How do I buy airtime on the app and what networks are supported?
              </button>
            </h2>
          </div>
          <div
            id="collapse15"
            className="collapse"
            aria-labelledby="heading15"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                You can currently purchase airtime for yourself or another
                person on Safaricom, Airtel, Telkom & JTL networks in Kenya. On
                the app, go to Pay {"->"} Airtime & Utilities and follow the
                prompts.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading16">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse16"
                aria-expanded="false"
                aria-controls="collapse16"
              >
                How do I confirm that a payment has been received by the
                business I’ve paid?
              </button>
            </h2>
          </div>
          <div
            id="collapse16"
            className="collapse"
            aria-labelledby="heading16"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                Once you've made a successful payment, the transaction will
                appear on the 'Transaction List'. You can select indivudal
                transactions to get additional information such as the M-PESA
                reference which confirms that the transaction was successful and
                the business has received your payment.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading17">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse17"
                aria-expanded="false"
                aria-controls="collapse17"
              >
                Are merchants charged to receive payments through Tulix?
              </button>
            </h2>
          </div>
          <div
            id="collapse17"
            className="collapse"
            aria-labelledby="heading17"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                No. Merchants are not charged to receive payments using Tulix.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading18">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse18"
                aria-expanded="false"
                aria-controls="collapse18"
              >
                Can I change the language on the app?
              </button>
            </h2>
          </div>
          <div
            id="collapse18"
            className="collapse"
            aria-labelledby="heading18"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                No. The app is currently only available in English. Support for
                more languages shall be rolled out in future.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading19">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse19"
                aria-expanded="false"
                aria-controls="collapse19"
              >
                Must I have mobile data/ WiFi to use the app?
              </button>
            </h2>
          </div>
          <div
            id="collapse19"
            className="collapse"
            aria-labelledby="heading19"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>Yes. Tulix requires a data connection in order to function.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading20">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse20"
                aria-expanded="false"
                aria-controls="collapse20"
              >
                Can I set up recurrent payments or standing orders on Tulix?
              </button>
            </h2>
          </div>
          <div
            id="collapse20"
            className="collapse"
            aria-labelledby="heading20"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>Yes. Use the recurrent payments feature under 'Pay'</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="heading21">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapse21"
                aria-expanded="false"
                aria-controls="collapse21"
              >
                What are categories on Tulix?
              </button>
            </h2>
          </div>
          <div
            id="collapse21"
            className="collapse"
            aria-labelledby="heading21"
            data-parent="#featureFAQs"
          >
            <div className="card-body">
              <p>
                Categories refer to the various payment classifications we have
                on Tulix like education, utilities, car and fuel and so many
                more. Categorise each payment to get a clear summary of where
                you spend your money for better budgeting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
