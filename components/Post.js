import Image from "next/image"

import ActiveLink from "./ActiveLink"
import formatDate from "../utils/formatDate"

const Post = (props) => {
  // console.log(props);
  const {
    category,
    date,
    readingTime,
    slug,
    summary,
    title,
    image,
  } = props.fields
  const { id } = props.sys

  const formatedDate = formatDate(date)

  return (
    <ActiveLink
      href={`/blog/${slug}`}
      key={id}
      activeClass="bg-green-500 rounded p-2"
    >
      <a>
        <article className="relative h-auto mx-8 overflow-hidden transition duration-300 transform bg-white border shadow-md cursor-pointer hover:scale-110 sm:grid sm:grid-cols-12 sm:h-52 hover:shadow-xl">
          <div className="relative h-48 sm:h-56 sm:col-span-4 lg:col-span-4 hover:shadow-md hover:border-0">
            {image && (
              <Image
                src={`https:${image.fields.file.url}`}
                alt="post image"
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
          <div className="p-4 h-36 sm:col-span-8 lg:col-span-8">
            <div className="flex items-center pl-2 border-l-2 border-green-600">
              <h5 className="text-sm capitalize">{category}</h5>
              <span className="mx-1.5 transform scale-200 text-green-600">
                &#8901;
              </span>
              <h5 className="text-sm capitalize">{readingTime} min read</h5>
            </div>
            <h4 className="py-2 font-semibold tracking-widest text-md md:text-lg">
              {title}
            </h4>
            {summary && (
              <p className="my-0 text-sm opacity-0 sm:opacity-100">
                {summary.slice(0, 150)}...
                <span className="text-green-600">read more</span>
              </p>
            )}
            <div className="absolute bottom-4">
              <h5 className="text-sm ">{formatedDate}</h5>
            </div>
          </div>
        </article>
      </a>
    </ActiveLink>
  )
}

export default Post
