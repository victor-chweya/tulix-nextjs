import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Blog({allPostsData}){
	return(
		<Layout>
			<Head>
        <title>Blog</title>        
      </Head>
			<div className="container">
				<h1>Blog</h1>
				<ul>
					{allPostsData.map(({id, date, title}) =>(
						<li key={id}>
						{title}
              <br />
              {id}
              <br />
              {date}
						</li>
					))}
				</ul>
			</div>
						
		</Layout>
	)
}