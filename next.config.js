// const withPurgeCss = require("next-purgecss");
// module.exports = {
//   reactStrictMode: true,
// 	images: {
// 		domains: [
// 			'res.cloudinary.com'
// 		],
// 	},
// 	purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
	
// }
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	images: {
		domains: [
			'res.cloudinary.com'
		]
	}
}

module.exports = nextConfig