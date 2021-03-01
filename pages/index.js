import Head from "next/head"

import Hero from "@/components/Hero"

export default function Home() {
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
      <Hero heroData={heroData} />
    </>
  )
}
