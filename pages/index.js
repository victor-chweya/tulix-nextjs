import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import HeroImage from '../public/img/hero.png'
import DashboardMockup from '../public/img/dashboard-mockup.png'

export default function Home() {
  return (
    <Layout>
			<Head>
				<meta name="description" content="Tulix helps you make direct business payments and fund allocations to beneficiaries from anywhere, simple and convenient." />		
				<title>Tulix - Support your loved ones from wherever you are.</title>
			</Head>
			<div>
				<section className="hero">
					<div className="container">
						<div className="row">
							<div className="col-lg-6  d-flex flex-column justify-content-center mb-5 mb-md-0">
								<h1 className="hero-title mb-5">Pay any business in Kenya <span className="text-success">instantly</span> &amp; <span className="text-success">directly</span> from anywhere in the world</h1>
								{/* <p class="lead mb-5">A simple and convenient way to allocate funds or make payments for all their needs.</p> */}
								<div className="hero-cta ">
									{/* <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#subscribeModal">Get Early Access</button> */}
									{/* <a href="./about-us.html" role="link" aria-label="learn more" class="btn btn-outline-primary">Learn More</a> */}
									<div id="mc_embed_signup">
										<form action="https://app.us2.list-manage.com/subscribe/post?u=1f7c48c812ea5de5f89ea5e77&id=4042104668" className="form-inline" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
											<input type="email" defaultValue="" name="EMAIL" id="mce-EMAIL" className="form-control form-control-lg mr-sm-2 mb-2 col-sm-7" placeholder="Enter your Email" required />
											<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_1f7c48c812ea5de5f89ea5e77_4042104668" tabIndex={-1} defaultValue /></div>									 
											<button id="mc-embedded-subscribe" className="btn btn-primary btn-lg mb-2 col" type="submit">Get Early Access!</button>
										</form>
									</div>
								</div>            
							</div>
							<div className="col-lg-5 offset-xl-1 hero-img">
								<Image 
								src={HeroImage} 
								alt="tulix" 
								className="img-fluid pl-lg-5" 
								priority 
								placeholder="blur"
								height={455} 
								width={463}
								/>
							</div> 
						</div>       
					</div>
				</section>
				<section className="hero-2">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8">
								<h2 className=" h1 text-center mb-4">Get more from the money you’re sending back home</h2>
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
								<Image src="/img/beneficiary-mockup.png" alt="tulix beneficiary-mockup" className="img-fluid" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6  d-flex flex-column justify-content-center ">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">You and all your beneficiaries in one app</h2>
								<p className="lead mb-4">For the first time ever, add beneficiaries and collaborate on expenses when allocating funds. Allocate them funds in advance for any of their needs.</p>
							</div>
						</div>
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5">
								<Image src="/img/paybill-mockup.png" alt="tulix paybill-mockup" className="img-fluid" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6 offset-xl-1 d-flex flex-column justify-content-center order-first order-lg-last">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">Easily pay over 100,000 businesses across Kenya</h2>
								<p className="lead mb-4">Make payments to over 100,000 businesses &amp; institutions instantly and directly using M-Pesa - the dominant payment method in Kenya.</p>
							</div>
						</div>
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5 offset-xl-1 order-last">
								<Image src="/img/transaction-mockup.png" alt="tulix transaction-mockup" className="img-fluid" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6  d-flex flex-column justify-content-center ">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">Track your spending &amp; get updates on allocations</h2>
								<p className="lead mb-4">Using our different spending categories, easily sort your payments by category to know where you &amp; your beneficiaries spend, helping you plan ahead &amp; budget.</p>
							</div>
						</div>
						<div className="row justify-content-center py-5">
							<div className="col-lg-4 p-5">
								<Image src="/img/receipt-mockup.png" alt="tulix receipt-mockup" className="img-fluid" height={567} width={283} />
							</div>
							<div className="col-lg-6 col-xl-6 offset-xl-1 d-flex flex-column justify-content-center order-first order-lg-last">
								{/* <h6 class="text-success">Features</h6> */}
								<h2 className="section-title mb-4">No more surprises, no hidden fees</h2>
								<p className="lead mb-4">Get a clear breakdown of all fees on every transaction and receive detailed confirmations in app and via email for all the transactions you make on the Tulix App.</p>
							</div>
						</div>
					</div>
				</section>

			</div>

		</Layout>
  )
}
