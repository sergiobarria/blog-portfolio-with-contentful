import React from "react"
import Head from "next/head"

const SEO = ({ title }) => {
  return (
    <Head>
      <title>The Coding Script | {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SEO
