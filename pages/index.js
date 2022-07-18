import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import HeroImage from '../public/img/hero.png'
import DashboardMockup from '../public/img/dashboard-mockup.png'
import BeneficiaryMockup from '../public/img/beneficiary-mockup.png'
import PaybillMockup from '../public/img/paybill-mockup.png'
import TransactionMockup from '../public/img/transaction-mockup.png'
import ReceiptMockup from '../public/img/receipt-mockup.png'
// import Subscribe from '../components/Subscribe'

export default function Home() {
	const pageTitle = "Tulix - Support your loved ones from wherever you are."
	const pageDescription = "Tulix helps you make direct business payments and fund allocations to beneficiaries from anywhere, simple and convenient."
	const pageImage ="https://res.cloudinary.com/avicdesign/image/upload/v1636459905/social-img_qpf63s.png"
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
				<meta name="twitter:title" content={pageTitle}/>
				<meta name="twitter:description" content={pageDescription} />
				<meta name="twitter:image" content={pageImage} />	
				<title>{pageTitle}</title>
			</Head>
			<div>
				<section className="hero ">
					<div className="container hero-bg">
						<div className="row justify-content-between">
							<div className="col-lg-5  d-flex flex-column justify-content-center mb-5 mb-md-0">
								<h1 className="hero-title mt-4 mb-3 text-white">The smart way to  <span className="text-success">share</span> money</h1>
								<p className="lead mb-5 text-white">Share, split, spend money with anyone in Kenya, from anywhere in the world.</p>
								<div className="hero-cta ">
									{/* <Subscribe id="email-input-1"/> */}
									<div className="row">
										<div className="col-lg-12">
											<p className='small text-light'>Download Tulix On</p>
										</div>
										<div className="col-lg-5 mb-2">
											<a href="#" className="btn btn-outline-light btn-lg btn-block" role="button" >

											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-google-play" viewBox="0 0 16 16">
												<path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
											</svg>
											
											Google Play</a>
										</div>
										<div className="col-lg-5 mb-22">
											<a href="#" className="btn btn-outline-light btn-lg btn-block" role="button" >
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-apple" viewBox="0 0 16 16">
												<path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
												<path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
											</svg>
											App Store</a>
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
								src={DashboardMockup} 
								alt="tulix dashboard-mockup" 
								className="img-fluid" 
								placeholder="blur" 
								height={567} width={283}  

								/>
							</div> 
						</div>       
					</div>
				</section>
				
				<section className="hero-2">
					<div className="container">
						<div className="row justify-content-center mb-5">
							<div className="col-lg-6">
								<h2 className=" h1 text-center mb-4 ">Why you will love using Tulix </h2>								
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 mb-4">
								<div className="card values h-100">
									<div className="card-body">
										<Image src="/img/icons/identification.svg" alt="" className="img-fluid" width={50} height={45} />
										<h3 className="mb-3 mt-4 h5">Pay local businesses conveniently & directly</h3>
										<p>Load your Tulix wallet in Kenyan Shillings (KES) using your card and directly pay over 300,000 businesses in Kenya, just like you’re local. </p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mb-4">
								<div className="card values h-100">
									<div className="card-body ">
										<Image src="/img/icons/calculator.svg" alt="" className="img-fluid" width={32} height={44} />
										<h3 className="mb-3 mt-4 h5">Manage money together with your people</h3>
										<p>For the first time ever, add friends and family as beneficiaries and create shared budget jars where you can allocate money for different needs.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mb-4">
								<div className="card values h-100">
									<div className="card-body">
										<Image src="/img/icons/cash.svg" alt="" className="img-fluid " width={50} height={40} />
										<h3 className="mb-3 mt-4 h5">Budgeting made easier</h3>
										<p>Filter payments by category and receive a monthly summary of your transactions so you can budget better.
										</p>
									</div>
								</div>						
							</div>
							<div className="col-lg-6 mb-4">
								<div className="card values h-100">
									<div className="card-body">
										<Image src="/img/icons/check.svg" alt="" className="img-fluid" width={40} height={40}/>
										<h3 className="mb-3 mt-4 h5">We hate hidden fees too</h3>
										<p>Get a breakdown of all transaction fees and receive instant payment confirmations in-app and via email.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='container mb-5'>
					<div className="row justify-content-center">
					 <div className="col-lg-8">

						<div className="row justify-content-center mb-5">
							<div className="col-lg-4">
								<h2 className=" h1 text-center mb-4  ">Questions? </h2>								
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12 mb-5">
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
								
								
							</div>
						</div>
						</div>
					 </div>
						
					</div>
				</section>
				<div className="cta bg-light ">
					<div className="container py-5 ">
						<div className="row ">
							<div className="col-lg-6 d-flex justify-content-center">
							<Image 
								src={DashboardMockup} 
								alt="tulix dashboard-mockup" 
								className="img-fluid text-center" 
								placeholder="blur" 
								height={567} width={283}  

								/>
							</div>
							<div className="col-lg-6 d-flex flex-column justify-content-center">
								<h2 className="mb-5">Get Started in 3 easy steps</h2>
								<div className='mb-4'>
									<h5>Download the Tulix App</h5>
									<p>Get it from Google Play Store or Apple App Store.</p>
								</div>
								<div className='mb-4'>
									<h5>Submit and Verify your personal information</h5>
									<p>Enter your KYC details in the app to get verified</p>
								</div>
								<div className='mb-4'>
									<h5>Start transacting </h5>
									<p>Load your wallet to make payments, share money and manage finances</p>
								</div>
								{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subscribeModal">Get Early Access</button>
										<a href="https://forms.gle/C5ewxia2fmLKmiWp6" class="btn btn-outline-primary" target="_blank">Take Our Survey</a>  */}
										{/* <Subscribe id="email-input-2" /> */}
										<div className="row">
										<div className="col-lg-12">
											<p className='small text-light'>Download Tulix On</p>
										</div>
										<div className="col-lg-5 mb-2">
											<a href="#" className="btn btn-outline-primary btn-lg btn-block" role="button" >

											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-google-play" viewBox="0 0 16 16">
												<path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
											</svg>
											
											Google Play</a>
										</div>
										<div className="col-lg-5 mb-22">
											<a href="#" className="btn btn-outline-primary btn-lg btn-block" role="button" >
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2 bi bi-apple" viewBox="0 0 16 16">
												<path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
												<path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
											</svg>
											App Store</a>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</Layout>
  )
}
