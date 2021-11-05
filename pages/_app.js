import {useEffect} from "react";
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
	useEffect(() => { //Fixing Next js "ReferenceError: document is not defined
		import("bootstrap");
		}, []);
	
		return <Component {...pageProps} />
}
