import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Styles from './blog.module.scss'
import { buildImageUrl } from 'cloudinary-build-url'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({postData}) {
	const pageImage = buildImageUrl(`${postData.thumbnail}`, {
		cloud: {cloudName:  process.env.NEXT_PUBLIC_CY_NAME,},
		transformations: {
		resize: {
			type: 'scale',
			width: 1200,
			height: 630,
			gravity: "auto:subject",
		}													
	}
})
	return (
    <Layout>
		 <Head>		 
		 	<meta name="description" content={postData.excerpt} />
			<meta property="og:title" content={postData.title} />
			<meta property="og:description" content={postData.excerpt} />
			<meta property="og:url" content="https://tulix.app" />
			<meta property="og:image" content={pageImage} />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={postData.title}/>
			<meta name="twitter:description" content={postData.excerpt} />
			<meta name="twitter:image" content={pageImage} />	
		 </Head>
			<section className="about-us">
				<div className="container">
					<div className="row justify-content-lg-center">
						<div className="col-lg-7 pb-5">
							<h6 className="text-success">Blog</h6>
							<h2 className="section-title ">{postData.title}</h2>
							<p className="text-muted mb-0">{postData.author}</p>
							<small><Date dateString={postData.date} /></small>
						</div>
						<div className="col-lg-7 mb-5">
						<div className={Styles.blog} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
