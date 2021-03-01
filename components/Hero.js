import React from "react"
import Link from "next/link"
import { FaQuoteLeft } from "react-icons/fa"
import { AiOutlineArrowRight } from "react-icons/ai"

const Hero = ({ heroData }) => {
  const {
    title,
    subtitle,
    contentType,
    showContactBtn,
    showBlogBtn,
    quote,
    author,
    heroImg,
  } = heroData

  const styles = {
    article:
      "absolute pt-10 flex flex-col justify-around w-full h-full px-4 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:w-8/12 md:px-10",
    btn:
      "flex items-center justify-around w-40 px-2 py-2 font-medium text-white uppercase bg-green-600 rounded shadow-lg cursor-pointer hover:bg-white hover:text-green-600 animate-bounce",
  }

  return (
    <header className="relative h-screen">
      <video
        className="object-cover w-full h-full"
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
        type="vide/mp4"
      />

      <article className={`${styles.article}`}>
        <div className="capitalize">
          <h1 className="mb-4 text-4xl font-medium tracking-widest lg:text-6xl">
            {title}
          </h1>
          <h3 className="mb-4 text-xl leading-7 tracking-widest md:text-4xl">
            {subtitle}
          </h3>
          <h3 className="text-xl tracking-widest md:text-4xl">{contentType}</h3>
        </div>

        <div className="flex justify-around w-full md:mx-auto">
          {showContactBtn && (
            <Link href="/contact">
              <a className={`${styles.btn}`}>Contact me</a>
            </Link>
          )}
          {showBlogBtn && (
            <Link href="/blog">
              <a className={`${styles.btn}`}>
                Check Blog
                <span className="">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </Link>
          )}
        </div>

        <div>
          <FaQuoteLeft className="text-2xl" />
          <h3 className="mb-4 text-lg italic tracking-wider font-extralight md:text-2xl">
            {quote}
          </h3>
          <h4 className="tracking-widest md:text-lg">- {author}</h4>
        </div>
      </article>
    </header>
  )
}

export default Hero
