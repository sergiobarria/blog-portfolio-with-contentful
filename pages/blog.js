import React from "react"

import SEO from "@/components/SEO"
import Header from "@/components/Header"
// import Newsletter from '../../components/Newsletter';
import Title from "@/components/Title"
import client from "../contentful/client"
import LatestPrev from "@/components/LatestPrev"

const BlogPage = ({ posts }) => {
  // console.log(posts);
  const latestBlogs = posts.slice(0, 2)
  const moreBlogs = posts.slice(2)

  return (
    <>
      <SEO title="Blog" />
      <Header title="Welcome to The Coding Script Blog!!" />
      <section className="max-w-screen-xl py-16 mx-auto my-0 bg-white md:px-20">
        <Title title="Latest Posts" />
        <div className="grid max-w-screen-lg gap-8 mx-auto mb-10 lg:grid lg:grid-cols-2">
          {latestBlogs.map((blog) => (
            <LatestPrev key={blog.sys.id} {...blog} />
          ))}
        </div>

        <Title title="All Posts" />
        <div className="grid max-w-screen-lg gap-8 mx-auto mb-10 lg:grid lg:grid-cols-2">
          {moreBlogs.lenth > 0 ? (
            moreBlogs.map((blog) => <LatestPrev key={blog.sys.id} {...blog} />)
          ) : (
            <h3>There are no more blogs to display at the moment</h3>
          )}
        </div>
      </section>
    </>
  )
}

export default BlogPage

export const getStaticProps = async () => {
  const entries = await client.getEntries({
    content_type: "post",
    limit: 14,
    order: "-fields.date",
  })

  return {
    props: {
      posts: entries.items,
    },
    revalidate: 1,
  }
}
