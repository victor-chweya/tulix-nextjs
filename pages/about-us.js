import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import VisionImg from '../public/img/vision.png'
import AlistairImg from '../public/img/team/alistair.png'
import BrianImg from '../public/img/team/brian.png'

export default function About(){
	return(
		<Layout>
			<Head>
        <title>About Us</title>        
      </Head>
			<section className="about-us">
				<div className="container">
					<div className="row justify-content-lg-center text-lg-center">
						<div className="col-lg-10">
							<h6 className="text-success">How It Started</h6>
							<h2 className="section-title mb-5">The Challenge</h2>
							<p className="lead">Migrants all over the world experience a very common problem when they send money home to be used for specific purposes. In many cases, individual beneficiaries are entrusted to collect and distribute these funds, rendering them prone to misappropriation or misuse.</p>
							<p className="lead">This effectively limits the impact of remittances on household incomes and communities, especially in Low and Middle Income Countries whose small GDP's rely heavily on inward remittances. 
							</p>
							<p className="lead">This has also limited the amount of money that the over 36 million Africans in the diaspora are willing to send back home effectively slowing down the development of our continent as diaspora inflows contribute significantly to economic development.</p>
						</div>
					</div>
				</div>
			</section>
			<section className="about-us">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">    
							<div className="row">
								<div className="col-lg-5">
									<h6 className="text-success">How It's Going</h6>
									<h2 className="section-title mb-5">Building In Africa For Africa</h2>
								</div>
								<div className="w-100" />
								<div className="col-lg-6 pr-lg-5">
									<p className="lead">We're building Tulix to enable Africa's migrants to allocate funds for specific needs to their beneficiaries. The app allows them to manage and limit where and how these funds are spent, thereby increasing accountability, delivering value and unlocking their maximum potential.</p>
									<p className="lead">By ensuring remittances are spent on their intended needs, we're positively impacting households, communities and the African continent's GDP.</p>
								</div>
								<div className="col-lg-6 pl-lg-5">
									<p className="lead text-success mb-4"><strong>We are aligned with the United Nation’s global Sustainable Development Goals (SDGs), specifically SDG goals 1, 8, 10 &amp; 17.</strong></p>
									<div className="row">
										<div className="col-3">
											<Image src="/img/mdg-1.png" alt="no poverty" className="img-fluid rounded" height={130} width={130}/>
										</div>
										<div className="col-3">
											<Image src="/img/mdg-8.png" alt="no poverty" className="img-fluid rounded" height={130} width={130} />
										</div>
										<div className="col-3">
											<Image src="/img/mdg-10.png" alt="no poverty" className="img-fluid rounded" height={130} width={130} />
										</div>
										<div className="col-3">
											<Image src="/img/mdg-17.png" alt="no poverty" className="img-fluid rounded" height={130} width={130} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="about-us">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">    
							<div className="row justify-content-lg-center ">
								<div className="col-lg-8 text-lg-center">
									<h6 className="text-success">Our Vision Of The Future</h6>
									<h2 className="section-title mb-5">Impacting The Lives Of Migrants &amp; Their Families</h2>
								</div>
								<div className="w-100" />
								<div className="col-lg-6 pr-lg-5">
									<Image src={VisionImg} alt="Impacting The Lives Of Migrants & Their Families" className="img-fluid" placeholder="blur" height={575} width={470} />
								</div>
								<div className="col-lg-6 pl-lg-5 d-flex flex-column justify-content-center">
									<p className="lead">Through the use of innovative financial technology, we envision a future where migrants won't worry about being away from their home countries. Using Tulix will make them feel like they never left.</p>
									<p className="lead text-success"> <strong>Our vision is to unlock the potential of remittances across Africa.</strong></p>                                
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="about-us">
				<div className="container">
					<div className="row justify-content-lg-center text-lg-center">
						<div className="col-lg-10">
							<h6 className="text-success">Team</h6>
							<h2 className="section-title mb-5">The Founders</h2>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-4 px-lg-5 mb-4">
							<div className="position-relative">
								<div className="team-triangle " />
								<Image src={BrianImg} alt="Brain Muiru" className="img-fluid team" placeholder="blur" height={348} width={331} />
							</div>
							<h6 className="mt-4">Brian Muriu</h6>
							<a href="https://www.linkedin.com/in/brian-muriu/" role="link" aria-label="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a>
							<p className="mt-2">Brian has worked in Startups in East Africa and the US for over 8 years leading teams in  Marketing, Technical &amp; Customer Service roles. His leadership experience and understanding of both markets making him a vital resource to the team.</p>
						</div>
						<div className="col-lg-4 px-lg-5 mb-4">
							<div className="position-relative">
								<div className="team-triangle" />
									<Image src={AlistairImg} alt="Alistair Gould" className="img-fluid team" placeholder="blur" height={348} width={331} />
								</div>
							<h6 className="mt-4">Alistair Gould</h6>
							<a href="https://www.linkedin.com/in/gouldalistair/" role="link" aria-label="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a>
							<p className="mt-2">With a 15 year background in investment banking in Kenya, Alistair brings to the team his knowledge of regulated financial markets as well as sales, leadership and operational experience.</p>
						</div>
					</div>
					<div className="row justify-content-center text-center mt-5">
						<div className="col-lg-8">
							<h2 className="h6">As a team, we've all been recipients of remittances from our friends and family living abroad and this makes the problem personal to us. Our team has the experience &amp; expertise to take this opportunity from Zero to One.</h2>
						</div>
					</div>
				</div>
			</section>
			<section className="about-us about-us__advisors">
				<div className="container">
					<div className="row justify-content-lg-center text-lg-center">
						<div className="col-lg-10">
							<h2 className="section-title mb-5">Our Advisors</h2>
						</div>
					</div>
					<div className="row justify-content-lg-center">
						<div className="col-6 col-lg mb-4">
							<div className="position-relative">
								<div className="team-triangle" />
								<Image src="/img/team/melalite.png" alt="Melalite Ayenew" className="img-fluid team" width={226} height={237} />
							</div>
							<h6 className="mt-4">Melalite Ayenew</h6>
							<a href="https://www.antler.co/" role="link" aria-label="#" className="font-weight-bold small">ANTLER EA </a>
						</div>
						<div className="col-6 col-lg mb-4">
							<div className="position-relative">
								<div className="team-triangle" />
								<Image src="/img/team/antonia.png" alt="Antonia Esser" className="img-fluid team" width={226} height={237}/>
							</div>
							<h6 className="mt-4">Antonia Esser</h6>
							<a href="https://www.cenfri.org/" role="link" aria-label="#" className="font-weight-bold small">CENFRI </a>
						</div>
						<div className="col-6 col-lg mb-4">
							<div className="position-relative">
								<div className="team-triangle" />
								<Image src="/img/team/simon.png" alt="Simon Engelbrecht" className="img-fluid team" width={226} height={237} />
							</div>
							<h6 className="mt-4">Simon Engelbrecht</h6>
							<a href="https://skarp.dk/#about" role="link" aria-label="#" className="font-weight-bold small">SKARP </a>
						</div>
						<div className="col-6 col-lg mb-4">
							<div className="position-relative">
								<div className="team-triangle" />
								<Image src="/img/team/patrick.png" alt="Patrick Nyaga" className="img-fluid team" width={226} height={237} />
							</div>
							<h6 className="mt-4">Patrick Nyaga</h6>
							<a href="https://cic.co.ke/" role="link" aria-label="#" className="font-weight-bold small">CIC GROUP </a>
						</div>
						<div className="col-6 col-lg mb-4">
							<div className="position-relative">
								<div className="team-triangle" />
								<Image src="/img/team/martin.png" alt="Martin Nielsen" className="img-fluid team " width={226} height={237} />
							</div>
							<h6 className="mt-4">Martin Nielsen</h6>
							<a href="https://mdundo.com/" role="link" aria-label="#" className="font-weight-bold small">MDUNDO </a>
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
							<div id="mc_embed_signup">
								<form action="https://app.us2.list-manage.com/subscribe/post?u=1f7c48c812ea5de5f89ea5e77&id=4042104668" className="form-inline" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
									<input type="email" defaultValue="" name="EMAIL" id="mce-EMAIL" className="form-control form-control-lg mr-sm-2 mb-2 col-sm-7" placeholder="Enter your Email" required />
									<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_1f7c48c812ea5de5f89ea5e77_4042104668" tabIndex={-1} defaultValue="" /></div>									 
									<button id="mc-embedded-subscribe" className="btn btn-primary btn-lg mb-2 col" type="submit">Get Early Access!</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>		
		</Layout>
	)
}