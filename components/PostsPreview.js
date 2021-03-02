import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

import Title from "./Title"
import Post from "./Post"

const PostsPreview = ({ posts, title }) => {
  // console.log(posts);

  return (
    <section className="h-auto py-10 bg-white">
      <Title title={title} />

      <div className="grid max-w-screen-lg gap-8 mx-auto lg:gap-10">
        {posts.map((post) => (
          <Post key={post.sys.id} {...post} />
        ))}
      </div>

      <div className="flex items-center justify-center w-4/12 mx-auto my-0 mt-12 md:w-3/12">
        <Link href="/blog">
          <a className="flex items-center justify-around w-48 py-2 font-medium text-green-600 uppercase transition duration-500 transform bg-white rounded shadow-lg cursor-pointer px-46 hover:bg-green-500 hover:text-white hover:scale-125">
            <span>see more</span>
            <FaArrowRight />
          </a>
        </Link>
      </div>
    </section>
  )
}

export default PostsPreview
