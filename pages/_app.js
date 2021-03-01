import "../styles/tailwind.css"
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"

import Layout from "@/components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
