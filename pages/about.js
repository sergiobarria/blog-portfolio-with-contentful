import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SEO from "@/components/SEO"
import Header from "@/components/Header"
import client from "../contentful/client"
import Title from "@/components/Title"

const About = ({ about }) => {
  // console.log(about[0].fields.body);
  return (
    <>
      <SEO title="About" />
      <Header
        title="Hey, I'm Sergio"
        subtitle="I'm a Civil Engineer turn into Web Developer"
      />
      <section className="container max-w-screen-md mx-auto mb-8">
        <div className="p-2 bg-white rounded md:p-8">
          <Title title="About" />
          <article className="p-4 font-normal">
            {documentToReactComponents(about[0].fields.body)}
          </article>
        </div>
      </section>
    </>
  )
}

export default About

export const getStaticProps = async () => {
  const data = await client.getEntries({
    content_type: "about",
  })

  return {
    props: {
      about: data.items,
    },
  }
}
