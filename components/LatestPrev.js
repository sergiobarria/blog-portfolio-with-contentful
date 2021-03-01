import Link from "next/link"
import Image from "next/image"

import formatDate from "../utils/formatDate"

const LatestPrev = (props) => {
  // console.log(props);
  const {
    category,
    date,
    readingTime,
    summary,
    slug,
    title,
    image,
  } = props.fields
  const { id } = props.sys

  const formatedDate = formatDate(date)

  // console.log(summary);

  return (
    <Link href={`blog/${slug}`} key={id}>
      <article className="relative mx-8 transition-all duration-300 transform shadow-md cursor-pointer h-80 lg:mx-0 lg:grid lg:grid-cols-12 lg:h-60 lg:shadow-none lg:border hover:shadow-md hover:border-0 hover:scale-110">
        <div className={`relative h-52 lg:col-span-4 lg:h-full`}>
          {image && (
            <Image
              src={`https:${image.fields.file.url}`}
              alt="post image"
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>

        <div className="p-4 lg:col-span-8">
          <div className="flex items-center pl-2 border-l-2 border-green-500">
            <h5>{category}</h5>
            <span className="mx-1.5 transform scale-200 text-green-500">
              &#8901;
            </span>
            <h5>{readingTime} min read</h5>
          </div>
          <h4 className="py-2 font-medium tracking-widest">{title}</h4>
          {summary && (
            <p className="my-0 text-sm opacity-0 md:opacity-100">
              {summary.slice(0, 150)}...
              <span className="text-blue-400">read more</span>
            </p>
          )}
          <div className="absolute bottom-4 right-4">
            <h5>{formatedDate}</h5>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default LatestPrev
