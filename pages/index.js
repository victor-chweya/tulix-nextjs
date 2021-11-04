import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import HeroImage from '../public/img/hero.png'

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
								priority placeholder="blur"
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
			</div>

		</Layout>
  )
}
