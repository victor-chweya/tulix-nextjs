import Head from 'next/head';
import Layout from '../components/layout';

export default function Faqs(){
	return(
		<Layout>
			<Head>
        <title>Frequently Asked Questions</title>        
      </Head>
			<section className="about-us">
				<div className="container">
					<div className="row justify-content-lg-center ">
						<div className="col-lg-8 pb-5">
							<h6 className="text-success">Help Centre</h6>
							<h2 className="section-title ">Frequently Asked Questions</h2>
						</div>
						<div className="col-lg-8 mb-5">
							<div className="accordion" id="accordionFAQs">
								<div className="card">
									<div className="card-header" id="headingOne">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block btn-lg text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												What is Tulix?
											</button>
										</h2>
									</div>									
									<div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Tulix is a person-to-business (P2B) payments mobile app, facilitating payments by individuals both locally and abroad for the purchase of goods and services offered by businesses located in Kenya.</p>
											<p>Furthermore, Tulix will allow users to allocate funds to specific individuals (beneficiaries), and go as far as limiting fund usage to specific categories or merchants.</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingTwo">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												Can I use Tulix if I’m in Kenya? (Is Tulix only for people in the diaspora)
											</button>
										</h2>
									</div>
									<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Yes. Tulix is a Kenyan product for all Kenyans globally whether home or away.</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingThree">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												Do I need a Kenyan mobile phone line to use Tulix?
											</button>
										</h2>
									</div>
									<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>No. You can register on Tulix using any number that you're able to receive SMS messages on.</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFour">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												What other countries can I make payments to using Tulix?
											</button>
										</h2>
									</div>
									<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>At the moment, you can only make payments using Tulix to businesses in Kenya. We will be expanding into new African markets soon. Send us an email to <a href="mailto:hello@tulix.app">hello@tulix.app</a> to suggest new markets that you're interested in.</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingFive">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
												Can I use Tulix to make a payment at a business that doesn’t support mobile money?
											</button>
										</h2>
									</div>
									<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>No. But we're working on adding new payment channels soon.</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="headingSix">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
												Who is a beneficiary and who is a benefactor on Tulix?
											</button>
										</h2>
									</div>
									<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>A beneficiary is a Tulix user who has been added to a benefactor's Tulix App account in order to make payments using allocations.</p>
											<p>A benefactor is a Tulix user who adds people to his or her account as beneficiaries on the Tulix App so they can make payments using allocations with funds from their Tulix wallet.</p>
											<em className="text-success">N/B: One can be both a beneficiary and benefactor.</em>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading7">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
												What do I need to sign up to use Tulix?
											</button>
										</h2>
									</div>
									<div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>You need an Android or iOS smartphone to download the Tulix App. You'll need to have a valid email address and phone number that can receive SMS notifications in order to sign up</p>
											<p>You also need to provide a valid, government issued identification document e.g. ID card, passport, drivers license or residence permit for identity verification as per <abbr title="Know Your Customer">KYC</abbr> requirements.</p>													
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading8">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
												Who is behind Tulix and where is the company based?
											</button>
										</h2>
									</div>
									<div id="collapse8" className="collapse" aria-labelledby="heading8" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Tulix is an <a href="https://antler.co">Antler</a> portfolio company based out of Nairobi, Kenya. For more information, please check out our <a href="./about-us.html">About Us</a> page.</p>			 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading9">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
												When will the Tulix App be available on the App and Play Store? 
											</button>
										</h2>
									</div>
									<div id="collapse9" className="collapse" aria-labelledby="heading9" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>The Tulix App is currently available in the Apple App Store and Google Play Store. However, we're currently in closed beta and are onboarding our waitlist users first.</p>	 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading10">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
												Can I make a payment using Lipa Na M-Pesa from abroad?  
											</button>
										</h2>
									</div>
									<div id="collapse10" className="collapse" aria-labelledby="heading10" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Yes. You can pay a business Paybill or Till Number from anywhere in the world.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading11">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
												I’m in a different time zone currently. Can I make payments at any time of the day or can I add a person to notify when I make a payment so they can follow up?  
											</button>
										</h2>
									</div>
									<div id="collapse11" className="collapse" aria-labelledby="heading11" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Yes, you can make a payment at any time of the day. </p>
											<p>If you’d like a merchant or a beneficiary to receive the payment confirmation, enter their email address when confirming the payment and they will be notified.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading12">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
												Can I use the app on a laptop or PC? 
											</button>
										</h2>
									</div>
									<div id="collapse12" className="collapse" aria-labelledby="heading12" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>The app is currently only available on mobile phones. Future versions will support other devices.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading13">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
												I’m not ready to use the app but would like to know about new features and updates. What do I do?
											</button>
										</h2>
									</div>
									<div id="collapse13" className="collapse" aria-labelledby="heading13" data-parent="#accordionFAQs">
										<div className="card-body">
											<button type="button" className="btn btn-primary mr-2" data-toggle="modal" data-target="#subscribeModal">Get Early Access</button> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading14">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
												Can I suggest a feature on the app?
											</button>
										</h2>
									</div>
									<div id="collapse14" className="collapse" aria-labelledby="heading14" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Absolutely yes! We are building the app based on user needs. If there is a feature that you would like us to take into consideration, please reach out to us via email at <a href="mailto:hello@tulix.app">hello@tulix.app</a> and let us know.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading15">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
												What if I can’t find a merchant on the App? or What do I do if a merchant I want to pay is not listed on the app?
											</button>
										</h2>
									</div>
									<div id="collapse15" className="collapse" aria-labelledby="heading15" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>If the merchant you're trying to pay is not currently available, please use the 'Enter Merchant Details' button and manually enter the details. We'll save the details after you successfully complete your transaction.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading16">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
												What is the Tulix Wallet?
											</button>
										</h2>
									</div>
									<div id="collapse16" className="collapse" aria-labelledby="heading16" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>The Tulix Wallet is your own unique and personal wallet that every Tulix user has on the app. Using the wallet, a user is able to load funds and make payments to businesses in Kenya using mobile money.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading17">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
												What’s the minimum and maximum amount I can transact on Tulix? 
											</button>
										</h2>
									</div>
									<div id="collapse17" className="collapse" aria-labelledby="heading17" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Currently, you can make payments of between KES 10 and KES 150,000 per transaction.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading18">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
												What kind of notifications or confirmations do I get when I make a payment on Tulix? (Will I receive an SMS confirmation?)
											</button>
										</h2>
									</div>
									<div id="collapse18" className="collapse" aria-labelledby="heading18" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>You will receive an in-app confirmation as well as e-mail notifications to the registered email address on the app.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading19">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
												Can I send money to an individual on Tulix?
											</button>
										</h2>
									</div>
									<div id="collapse19" className="collapse" aria-labelledby="heading19" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>No. Tulix is not a remittance service or a money transfer service. Tulix facilitates Person-to-Business payments. However, you can add beneficiaries to make payments using allocations funded from your wallet.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading20">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
												What are allocations and how are they used?
											</button>
										</h2>
									</div>
									<div id="collapse20" className="collapse" aria-labelledby="heading20" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Allocations are funds in a Tulix benefactor’s wallet balance that have been set aside for their beneficiaries to use to make payments to
												businesses.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading21">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse21" aria-expanded="false" aria-controls="collapse10">
												How do I buy airtime on the app and what networks are supported?
											</button>
										</h2>
									</div>
									<div id="collapse21" className="collapse" aria-labelledby="heading21" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>You can currently purchase airtime for yourself or another person on Safaricom, Airtel &amp; Telkom networks in Kenya.
												On the app, use the payment category, Airtime and follow the prompts.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading22">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse22" aria-expanded="false" aria-controls="collapse10">
												Can I change my email address or other information on the app?
											</button>
										</h2>
									</div>
									<div id="collapse22" className="collapse" aria-labelledby="heading22" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Yes. You can update your personal information in the “Account Settings” tab on the app.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading23">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse23" aria-expanded="false" aria-controls="collapse10">
												How do I confirm that a payment has been received by the business I’ve paid?
											</button>
										</h2>
									</div>
									<div id="collapse23" className="collapse" aria-labelledby="heading23" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>As long as you have entered the correct payment details of the business, you should see the payment status marked as "success", on your transaction history on the app.</p>
											<p>You will also receive an in-app confirmation and an email notification that contains the payment status and transaction reference to confirm that the business has received your payment.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading24">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse24" aria-expanded="false" aria-controls="collapse10">
												Are merchants charged to receive payments through Tulix?
											</button>
										</h2>
									</div>
									<div id="collapse24" className="collapse" aria-labelledby="heading24" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>No. Merchants are not charged to receive payments using Tulix.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading25">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse25" aria-expanded="false" aria-controls="collapse10">
												Can I change the language on the app?
											</button>
										</h2>
									</div>
									<div id="collapse25" className="collapse" aria-labelledby="heading25" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>No. The app is only available in English at the moment. Support for more languages shall be rolled out in future.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading26">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse26" aria-expanded="false" aria-controls="collapse10">
												Must I have mobile data/ WiFi to use the app?
											</button>
										</h2>
									</div>
									<div id="collapse26" className="collapse" aria-labelledby="heading26" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Yes, at present, the app requires a data connection in order to function. We are planning to develop a USSD version that will not require a data
												connection.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading27">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse27" aria-expanded="false" aria-controls="collapse10">
												How do I know my funds are safe on my Tulix wallet?
											</button>
										</h2>
									</div>
									<div id="collapse27" className="collapse" aria-labelledby="heading27" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>We work with licensed institutions to credit and debit funds on the Tulix Wallet. These 3rd parties have the necessary safeguards in place to guarantee the safety of your funds at all times.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading28">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse28" aria-expanded="false" aria-controls="collapse10">
												Is my card information stored on the app?
											</button>
										</h2>
									</div>
									<div id="collapse28" className="collapse" aria-labelledby="heading28" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>No, we don't store your financial information on the app. This is an extra security measure to ensure the safety of your financial information when
												using Tulix.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading29">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse29" aria-expanded="false" aria-controls="collapse10">
												How can I contact you in case I have an issue or a query?
											</button>
										</h2>
									</div>
									<div id="collapse29" className="collapse" aria-labelledby="heading29" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Our support e-mail is <a href="mailto:support@tulix.app">support@tulix.app</a> and you can reach us there in case of any queries around your transactions or other issues with the app.</p> 										
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="heading30">
										<h2 className="mb-0">
											<button className="btn btn-link btn-block text-left font-weight-bold py-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse30" aria-expanded="false" aria-controls="collapse10">
												What Should I do if I paid the wrong business? (Can I cancel or reverse a payment once processed?)
											</button>
										</h2>
									</div>
									<div id="collapse30" className="collapse" aria-labelledby="heading30" data-parent="#accordionFAQs">
										<div className="card-body">
											<p>Payment through Tulix is intended to be seamless and instant, with Tulix forwarding funds immediately to user-specified merchants once
												instructions are issued. This makes reversal of transactions difficult.</p>
											<p>Please refer to our <a href="./terms-and-conditions.html">Terms and Conditions</a>  for more information on erroneous transactions.</p>
											<p>If you believe that you have made a payment in error, you may contact us within thirty (30) minutes after you initiated it at <a href="mailto:support@tulix.app">support@tulix.app</a> and	we will attempt to contact the merchant and recover the funds. However, we can’t guarantee the same as per our Terms and Conditions.</p> 										
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		
		</Layout>
	)
}