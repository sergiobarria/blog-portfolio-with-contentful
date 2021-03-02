import Link from "next/link"

const notFound = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20 min-h-screen-center">
      <h1 className="text-8xl">404</h1>
      <h2 className="text-center">
        Oops! The page your looking for doesn't exist...
      </h2>
      <Link href="/">
        <a className="mt-20 text-center btn">BACK HOME</a>
      </Link>
    </section>
  )
}

export default notFound
