/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
	images: {
	  minimumCacheTTL: 2592000, // 30 days
	  remotePatterns: [
	    {
	      // static images and videos
	      protocol: "https",
	      hostname: "assets.papermark.io",
	    },
	   
	    {
	      // twitter img
	      protocol: "https",
	      hostname: "pbs.twimg.com",
	    },
	    {
	      // linkedin img
	      protocol: "https",
	      hostname: "media.licdn.com",
	    },
	    {
	      // google img
	      protocol: "https",
	      hostname: "lh3.googleusercontent.com",
	    },
	  
	  ],
	},
	transpilePackages: ["@trigger.dev/react"],
	async rewrites() {
	  return [
	    {
	      source: "/ingest/:path*",
	      destination: "https://eu.posthog.com/:path*",
	    },
	  ];
	},
	experimental: {
	  outputFileTracingIncludes: {
	    "/api/mupdf/*": ["./node_modules/mupdf/lib/*.wasm"],
	  },
	  missingSuspenseWithCSRBailout: false,
	},
      };
      
      export default nextConfig;
      