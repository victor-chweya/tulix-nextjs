import Head from 'next/head'
import Navigation from './navigation'
import Footer from './footer'
import SubscribeModal from './subscribe-modal'


//In order to use a component that references document or window import this component using a dynamic import with srr: false
// import dynamic from 'next/dynamic'
// const GetButtonWidgetDynamic = dynamic(() => import('./get-button-widget'), { ssr: false })



export default function Layout({ children }) {
  return (
    <>
      <Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:locale" content="en_GB" />
				<meta name="twitter:site" content="@TulixApp" />
				<meta name="twitter:creator" content="@TulixApp" />
				<meta name="theme-color" content="#005CFF" />
				<meta name="msapplication-TileColor" content="#005CFF" />
				<link rel="icon" href="/favicon.ico" />								
      </Head>
			
			<Navigation />
      <main>{children}</main>
			<Footer />
			<SubscribeModal />
			{/* <GetButtonWidgetDynamic /> */}
    </>
  )
}
