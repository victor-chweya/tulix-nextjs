import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
	return (
		<>
			<footer className="footer">
				<div className="container">
					<hr />
					<div className="row mt-5">
						<div className="col-lg-8 d-flex flex-column flex-lg-row align-items-lg-center text-center">
							<Link href="/" passHref>
								<a className="navbar-brand mb-2">
									<Image src="/img/logo.svg" height={30} width={83} alt="Tulix" />
								</a>
							</Link>
							<p className="small mb-3 mb-lg-0">©2021 Tulix Inc. All rights reserved. An <a href="https://www.antler.co/" target="_blank" rel="noopener noreferrer">Antler</a> portfolio company. 
							<Link href="/privacy-policy"><a> Privacy Policy</a></Link>  | <Link href="/terms-and-conditions"><a>Terms &amp; Conditions</a></Link></p>
						</div>
						<div className="col-lg-4  d-flex flex-column justify-content-lg-center align-items-lg-end text-center ">
							<p className="mb-0">
								<a href="https://facebook.com/TulixApp" role="link" aria-label="#" className="pl-lg-4" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a>
								<a href="https://instagram.com/TulixApp" role="link" aria-label="#" className="pl-4" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a>
								<a href="https://twitter.com/TulixApp" role="link" aria-label="#" className="pl-4" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a>
								<a href="https://www.linkedin.com/company/tulix-app/" role="link" aria-label="#" className="pl-4" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}