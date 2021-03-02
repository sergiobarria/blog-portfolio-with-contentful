import Head from "next/head"

import SEO from "@/components/SEO"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Stack from "@/components/Stack"
import client from "../contentful/client"
import PostsPreview from "@/components/PostsPreview"

export default function Home({ posts }) {
  // console.log(posts)

  const heroData = {
    title: "Welcome!!",
    subtitle: "Let's learn programming together.",
    contentType: "web and mobile develpment and much more",
    showContactBtn: true,
    showBlogBtn: true,
    quote:
      "The only way to learn a new programming language is by writing programs in it.",
    author: "Dennis Ritchie",
    heroImg: "/assets/hero-bg-3.png",
  }

  return (
    <>
      <SEO title="Home" />
      <Hero heroData={heroData} />
      <Services />
      <Stack />
      <PostsPreview posts={posts} title="Latest Posts" />
    </>
  )
}

export const getStaticProps = async () => {
  const entries = await client.getEntries({
    content_type: "post",
    limit: 4,
    order: "-fields.date",
  })

  return {
    props: {
      posts: entries.items,
    },
    // revalidate: 1,
  }
}
