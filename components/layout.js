import Head from 'next/head'
import Navigation from './navigation'

export default function Layout({ children }) {
  return (
    <>
      <Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
      </Head>
			<Navigation />
      <main>{children}</main>
    </>
  )
}
