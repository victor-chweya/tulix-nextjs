import Head from 'next/head';
import Layout from '../components/layout';

export default function PrivacyPolicy(){
	const pageTitle = "Non Disclosure Agreement - Support your loved ones from wherever you are."
	const pageDescription = "Tulix helps you make direct business payments and fund allocations to beneficiaries from anywhere, simple and convenient."
	const pageImage ="https://res.cloudinary.com/avicdesign/image/upload/v1636459905/social-img_qpf63s.png"
	return(
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
			<section className="about-us">
				<div className="container">
					<div className="row justify-content-lg-center ">
						<div className="col-lg-8 pb-5">
							<h2 className="section-title">Alpha Non-Disclosure Agreement</h2>
							<h6 className="text-success mb-5">Alpha Tester Non-Disclosure Agreement</h6>
							<p className="lead mb-4">In connection with Tulix, or its subsidiaries and affiliates (“Tulix”) research and development or testing activities, as proposed or agreed to by Tulix from time to time, you, as a tester, participant or in such activities, (“Recipient”) hereby agree with Tulix that:</p>
							<ol>
								<li>
									<p>Tulix may disclose to Recipient in tangible or intangible form (a) product plans, products in development, prototypes, Alpha products, and associated materials, data, or information (collectively, “Alpha Products”), (b) other information that is marked as confidential, or (c) other information that Tulix considers confidential and that would, under the circumstances, appear to a reasonable person to be confidential (“Confidential Information”). For the avoidance of doubt, Confidential Information also includes all notes, analyses, compilations, studies, interpretations, feedback, photos, videos, audio clips, audio visuals, other media or documents prepared by Recipient or its Representatives (as defined below) that contain, reflect, or are based in whole or in part on Confidential Information. Confidential Information does not include information that (i) was known to Recipient without restriction before receipt, as demonstrated by files in existence before receipt, of that information from Tulix, (ii) is publicly available through no fault of Recipient, (iii) becomes known to Recipient, rightfully and without restriction, from a source other than Tulix without breach of this agreement and otherwise not in violation of Tulix’s rights, or (iv) is independently developed by Recipient without any use of Confidential Information, as demonstrated by files in existence at the time Recipient independently developed that information.</p></li>
								<li>
									<p>Tulix may disclose to Recipient in tangible or intangible form (a) product plans, products in development, prototypes, Alpha products, and associated materials, data, or information (collectively, “Alpha Products”), (b) other information that is marked as confidential, or (c) other information that Tulix considers confidential and that would, under the circumstances, appear to a reasonable person to be confidential (“Confidential Information”). For the avoidance of doubt, Confidential Information also includes all notes, analyses, compilations, studies, interpretations, feedback, photos, videos, audio clips, audio visuals, other media or documents prepared by Recipient or its Representatives (as defined below) that contain, reflect, or are based in whole or in part on Confidential Information. Confidential Information does not include information that (i) was known to Recipient without restriction before receipt, as demonstrated by files in existence before receipt, of that information from Tulix, (ii) is publicly available through no fault of Recipient, (iii) becomes known to Recipient, rightfully and without restriction, from a source other than Tulix without breach of this agreement and otherwise not in violation of Tulix’s rights, or (iv) is independently developed by Recipient without any use of Confidential Information, as demonstrated by files in existence at the time Recipient independently developed that information.</p></li>
								<li>
									<p>2Recipient may use Confidential Information only for personal use to evaluate the Alpha Products in accordance with this Agreement and the Tulix Agreement Recipient has agreed to or will agree to as a condition to creating a Tulix account or using any Tulix services (the “Tulix Agreement”) and any other requirements specified orally or in writing by Tulix (the “Purpose”). Recipient will not copy any Confidential Information. Recipient will treat Confidential Information with at least the highest degree of care with which it treats similar materials of its own, and in any case no less than a reasonable degree of care. Recipient may disclose Confidential Information only to its beneficiaries and businesses to which direct payments are made but only to the extent necessary for the Purpose. Recipient will notify Tulix immediately in writing if Recipient becomes aware of any misuse or unauthorized disclosure of Confidential Information.</p></li>
								<li>
									<p>Alpha Products have not yet been publicly released and are offered for the sole purpose of internal testing and non-commercial evaluation. Alpha Products may not perform at the level of a commercially available service; may not operate as expected and maybe modified prior to release. ALPHA PRODUCTS ARE, THEREFORE, OFFERED “AS IS” WITHOUT WARRANTY OF ANY KIND. TULIX DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT OF THIRD PARTY RIGHTS, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE. NO ORAL OR WRITTEN ADVICE BY AGENTS OR EMPLOYEES OF TULIX MAY GIVE RISE TO A WARRANTY. THE RECIPIENT ACCEPTS ALL RISKS ARISING OUT OF THE DOWNLOAD, ACCESS AND USE OF THE ALPHA PRODUCTS. TULIX MAY, IN ITS SOLE DISCRETION, AT ANY TIME, TERMINATE OR DISCONTINUE THE ALPHA PRODUCT(S), OR DISCONTINUE RECIPIENT’S PARTICIPATION.</p>
								</li>
								<li>
									<p>TULIX SHALL NOT BE LIABLE FOR LOSS OF USE, LOST PROFITS, LOST DATA, BUSINESS INTERRUPTION OR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, SPECIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR IN RELATION TO THE ALPHA PRODUCTS.</p>
								</li>
								<li>
									<p>Upon the termination of Tulix’s internal evaluation or within two (2) days of Tulix’s written request, Recipient will destroy all Confidential Information, delete or return any tangible Alpha Products, and update any alpha version of a Tulix mobile app to the latest released version of such Tulix mobile app. This agreement’s provisions will survive as to all Confidential Information disclosed.</p>
								</li>
								<li>
									<p>This agreement doesn’t impose any obligation on Tulix to disclose any Confidential Information or grant Recipient any rights in Tulix intellectual property, except the limited right to use Confidential Information for the Purpose.</p>
								</li>
								<li>
									<p>All bug or error reports, feedback, photos, videos, audio clips, audiovisuals, other media, comments, or ideas Recipient submits to Tulix about the Confidential Information will be considered “Ideas” and Tulix will have the right to use and disclose such Ideas.</p>
								</li>
								<li>
									<p>Recipient’s obligations in this agreement are necessary and reasonable in order to protect Tulix and its business. Due to the unique nature of Confidential Information, monetary damages would be inadequate to compensate Tulix for any breach by Recipient of this agreement. Accordingly, Recipient agrees that any breach or threatened breach may cause irreparable injury to Tulix and, in addition to any other remedies available at law, in equity, or otherwise, Tulix will be entitled to obtain injunctive relief against Recipient’s threatened or continuing breach of this agreement.</p>
								</li>
								<li>
									<p>This agreement is not assignable or transferable by Recipient without the prior written consent of Tulix. This agreement is the parties’ entire agreement on this topic, superseding any prior or contemporaneous agreements (provided that this agreement supplements, and does not supersede, any other Tulix Agreement), and any amendments must be in writing and executed by the parties. Failure to enforce any of provisions of this agreement will not constitute a waiver. If any provision is unenforceable, the other provisions will remain effective.</p>
								</li>
								<li>
									<p>This agreement is governed by the laws of Kenya. The exclusive venue for any dispute relating to this agreement shall be in Kenya.</p>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</section>

		
		</Layout>
	)
}