const withPurgeCss = require("next-purgecss");
module.exports = {
  reactStrictMode: true,
	images: {
		domains: [
			'res.cloudinary.com'
		],
	},
	
}
module.exports = withPurgeCss({
    purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
});
