import Link from 'next/link'
import Image from 'next/image'
// import 'bootstrap-icons/font/bootstrap-icons.css'

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
								<a href="https://facebook.com/TulixApp" role="link" aria-label="#" className="pl-lg-4" target="_blank" rel="noopener noreferrer"><Image src="/img/icons/facebook.svg" alt="facebook" width={16} height={16}/></a>
								<a href="https://instagram.com/TulixApp" role="link" aria-label="#" className="pl-4" target="_blank" rel="noopener noreferrer"><Image src="/img/icons/instagram.svg" alt="instagram" width={16} height={16}/></a>
								<a href="https://twitter.com/TulixApp" role="link" aria-label="#" className="pl-4" target="_blank" rel="noopener noreferrer"><Image src="/img/icons/twitter.svg" alt="twitter"  width={16} height={16}/></a>
								<a href="https://www.linkedin.com/company/tulix-app/" role="link" aria-label="#" className="pl-4" target="_blank" rel="noopener noreferrer"><Image src="/img/icons/linkedin.svg" alt="linkedin"  width={16} height={16}/></a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}