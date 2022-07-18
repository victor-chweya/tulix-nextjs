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
											<p className='small text-light'>Available On</p>
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
								className="img-fluid text-center" 
								placeholder="blur" 
								height={567} width={283}  

								/>
							</div> 
						</div>       
					</div>
				</section>
				<section className="hero-2">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8">
								<h2 className=" h1 text-center mb-4 text-light">Get more from the money you’re sending back home</h2>
								
							</div>
						</div>
					</div>
				</section>
				<section className="features">
					<div className="container">
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5">
								<Image src={DashboardMockup} alt="tulix dashboard-mockup" className="img-fluid" placeholder="blur" height={567} width={283}  />
							</div>
							<div className="col-lg-6 col-xl-6 offset-xl-1 d-flex flex-column justify-content-center order-first order-lg-last">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">Make payments like you’re local, using your Tulix Wallet</h2>
								<p className="lead mb-4">Whether you’re home or abroad, load your Tulix KES wallet using your card or bank from wherever you are to make payments and allocations.</p>
							</div>
						</div>
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5 offset-xl-1 order-last">
								<Image src={BeneficiaryMockup} alt="tulix beneficiary-mockup" className="img-fluid" placeholder="blur" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6  d-flex flex-column justify-content-center ">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">You and all your beneficiaries in one app</h2>
								<p className="lead mb-4">For the first time ever, add beneficiaries and collaborate on expenses when allocating funds. Allocate them funds in advance for any of their needs.</p>
							</div>
						</div>
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5">
								<Image src={PaybillMockup} alt="tulix paybill-mockup" className="img-fluid" placeholder="blur" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6 offset-xl-1 d-flex flex-column justify-content-center order-first order-lg-last">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">Easily pay over 100,000 businesses across Kenya</h2>
								<p className="lead mb-4">Make payments to over 100,000 businesses &amp; institutions instantly and directly using M-Pesa - the dominant payment method in Kenya.</p>
							</div>
						</div>
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5 offset-xl-1 order-last">
								<Image src={TransactionMockup} alt="tulix transaction-mockup" className="img-fluid" placeholder="blur" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6  d-flex flex-column justify-content-center ">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">Track your spending &amp; get updates on allocations</h2>
								<p className="lead mb-4">Using our different spending categories, easily sort your payments by category to know where you &amp; your beneficiaries spend, helping you plan ahead &amp; budget.</p>
							</div>
						</div>
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5">
								<Image src={ReceiptMockup} alt="tulix receipt-mockup" className="img-fluid" placeholder="blur" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6 offset-xl-1 d-flex flex-column justify-content-center order-first order-lg-last">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">No more surprises, no hidden fees</h2>
								<p className="lead mb-4">Get a clear breakdown of all fees on every transaction and receive detailed confirmations in app and via email for all the transactions you make on the Tulix App.</p>
							</div>
						</div>
					</div>
				</section>
				<section className="hero-3">
					<div className="container">
						<div className="row justify-content-center mb-5">
							<div className="col-lg-8">
								<h2 className=" hero-title text-center mb-4">Our Commitment To You</h2>
								<p className="lead mb-4 text-center">We have built in necessary features and partnered with global partners to ensure that your information and transactions are secure.</p>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mb-4">
								<div className="card values h-100">
									<div className="card-body">
										<Image src="/img/icons/identification.svg" alt="" className="img-fluid" width={50} height={45} />
										<h3 className="mb-3 mt-4 h5">We ensure transparency</h3>
										<p>When it comes to making payments, we make every step clear with no hidden charges.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4">
								<div className="card values h-100">
									<div className="card-body">
										<Image src="/img/icons/calculator.svg" alt="" className="img-fluid" width={32} height={44} />
										<h3 className="mb-3 mt-4 h5">We don’t retain your payment information</h3>
										<p>To protect you, we use trusted global partners to process payments and therefore don’t store any of your card or banking information on the app.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4">
								<div className="card values h-100">
									<div className="card-body">
										<Image src="/img/icons/cash.svg" alt="" className="img-fluid " width={50} height={40} />
										<h3 className="mb-3 mt-4 h5">We value your privacy</h3>
										<p>We’ve put in place controls to ensure that all your personal information is kept safe &amp; secure at all times.
										</p>
									</div>
								</div>						
							</div>
							<div className="col-lg-3 mb-4">
								<div className="card values h-100">
									<div className="card-body">
										<Image src="/img/icons/check.svg" alt="" className="img-fluid" width={40} height={40}/>
										<h3 className="mb-3 mt-4 h5">World class technology</h3>
										<p>We use the latest technology to keep your money safe and to fulfill all your transactions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="cta">
					<div className="container">
						<div className="row justify-content-center text-center">
							<div className="col-lg-6">
								<h2 className="section-title mb-5">Ready to dive in? <br />Become one of our first users</h2>
								{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subscribeModal">Get Early Access</button>
										<a href="https://forms.gle/C5ewxia2fmLKmiWp6" class="btn btn-outline-primary" target="_blank">Take Our Survey</a>  */}
										{/* <Subscribe id="email-input-2" /> */}
							</div>
						</div>
					</div>
				</div>

			</div>

		</Layout>
  )
}
