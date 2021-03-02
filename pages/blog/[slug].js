import Image from "next/image"
import Link from "next/link"
import { GoQuote } from "react-icons/go"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  vscDarkPlus,
  materialDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism"

import client from "../../contentful/client"
import SEO from "@/components/SEO"
import formatDate from "../../utils/formatDate"
// import SocialShare from '../../components/SocialShare';

const PostPage = ({ article }) => {
  const {
    title,
    category,
    image,
    slug,
    readingTime,
    summary,
    content,
    date,
  } = article[0].fields

  console.log(article[0])

  const formatedDate = formatDate(date)

  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <Image
          className="h-20"
          src={`https:${node.data.target.fields.file.url}`}
          alt="post main image"
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          layout="responsive"
        />
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <h3 className="flex py-2 pl-4 my-8 italic normal-case border-l-4 border-green-500">
          <GoQuote className="text-green-500" />
          {children}
        </h3>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          className="font-normal text-green-500 cursor-pointer"
          href={node.data.uri}
        >
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const code = node.data.target.fields.code.replace(/`/g, "")
        return (
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {code}
          </SyntaxHighlighter>
        )
      },
    },
  }

  return (
    <>
      <SEO title="Blog" />
      <section className="min-h-screen">
        <header className="border-t-2 h-80 bg-gradient-to-t from-grey-900 to-grey-700">
          <div className="flex flex-col justify-end h-full max-w-3xl px-4 pt-20 pb-4 mx-auto text-white md:p-8 md:w-4/6">
            <h1 className="pb-4 font-normal capitalize">{title}</h1>
            <div className="flex items-center mb-6">
              <h4 className="pl-4 mr-2 capitalize border-l-2 border-green-500">
                {category}
              </h4>
              <span className="mr-2">&#8901;</span>
              <h4 className="capitalize ">{readingTime} min read</h4>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  className="rounded-full"
                  src="/assets/author-face.svg"
                  alt="Sergio Carranza"
                  width={25}
                  height={25}
                />
                <h4 className="ml-2">Sergio Carranza</h4>
              </div>
              <h4 className="text-right">{formatedDate}</h4>
            </div>
          </div>
        </header>
        <section className="max-w-3xl px-4 pt-8 pb-8 bg-white md:mt-10 md:my-0 md:mx-auto md:rounded-sm md:px-8">
          <div className="relative h-56 mb-4 md:h-72">
            {image && (
              <Image
                src={`https:${image.fields.file.url}`}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
          {summary && <h3 className="text-green-500">Quick Summary</h3>}
          {summary && <p className="px-8 pb-4 italic font-light">{summary}</p>}
          <hr className="w-5/6 mx-auto text-2xl text-center border-grey-200" />
          <article className="mt-4 text-base font-light">
            {documentToReactComponents(content, RICHTEXT_OPTIONS)}
          </article>
          <hr />
          {/* <SocialShare url={`localhost:3000/blog/${slug}`} /> */}
          <div className="flex justify-center mx-auto mt-12">
            <Link href="/blog">
              <a className="flex items-center justify-around w-40 px-4 py-2 font-medium text-white uppercase transition duration-500 transform bg-green-500 rounded shadow-lg cursor-pointer hover:bg-white hover:text-green-500 hover:scale-125">
                more posts
              </a>
            </Link>
          </div>
        </section>
      </section>
    </>
  )
}

export default PostPage

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: "post",
  })

  return {
    paths: response.items.map((item) => ({
      params: {
        slug: item.fields.slug,
      },
    })),
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const response = await client.getEntries({
    content_type: "post",
    "fields.slug": context.params.slug,
  })

  return {
    props: {
      article: response.items,
    },
    revalidate: 1,
  }
}
