import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/layout';
import Date from '../components/date'
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
					{allPostsData.map(({id, date, author, title}) =>(
						<li key={id}>
						<Link href={`/posts/${id}`}>
							<a>{title}</a>
						</Link>
              <br />
              {author}
              <br />
              <Date dateString={date} />
						</li>
					))}
				</ul>
			</div>
						
		</Layout>
	)
}