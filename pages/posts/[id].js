import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

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
	return (
    <Layout>
		 <Head>
		 <title>{postData.title}</title>
		 </Head>
			<div className="container">
				{postData.title}
				<br />
				{postData.author}
				<br />
				<Date dateString={postData.date} />
				<br />
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</div>
    </Layout>
  )
}