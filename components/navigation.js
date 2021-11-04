import Link from 'next/link'
import Image from 'next/image'

export default function Navigation(){
	return (
		<>
			<header className="container mt-3 mb-xl-5">
				<nav className="navbar navbar-expand-lg navbar-light bg-transparent px-0">
					<a className="navbar-brand" href="./">
						<Image src="/img/logo.svg" alt="tulix logo" className="nav-brand" height={40}  width={111.2} priority/> 
					</a>
					<button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarsMain" aria-expanded="false" aria-label="Toggle navigation">
						{/* <svg height={50} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M4 6h16M4 12h16m-7 6h7" /></svg> */}
					</button>
					<div className="collapse navbar-collapse" id="navbarMain">
						<ul className="navbar-nav mx-auto main-nav">
							<li className="nav-item">
								<Link  href="/"><a className="nav-link">Home</a></Link>
							</li>
							<li className="nav-item">
								<Link  href="/about-us"><a className="nav-link">About Us</a></Link>
							</li>
							<li className="nav-item">
								<Link  href="/blog"><a className="nav-link">Blog</a></Link>
							</li>
							<li className="nav-item ">
								<Link  href="/faqs"><a className="nav-link">FAQs</a></Link>
							</li>
							<li className="nav-item">
								<a className="nav-link " href="mailto:hello@tulix.app">Contact Us</a>
							</li>
						</ul>
						<button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#subscribeModal">Get Early Access</button>
						{/* <a href="https://forms.gle/C5ewxia2fmLKmiWp6" class="btn btn-outline-primary" target="_blank">Take Our Survey</a> */}
					</div>
				</nav>
			</header>
		</>
	)
}