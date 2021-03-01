import React from "react"

import Title from "@/components/Title"

const Form = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  const styles = {
    btn:
      "flex items-center justify-around w-40 px-2 py-2 font-medium text-white uppercase bg-green-600 rounded shadow-lg cursor-pointer hover:bg-white hover:text-green-600 animate-bounce",
  }

  return (
    <>
      <section className="flex flex-col justify-center mt-20 min-h-screen-center">
        <article className="container max-w-md p-6 mx-auto bg-white rounded-md shadow-xl">
          <h2 className="mb-2 text-green-600">Get in touch here! 👇🏼</h2>
          <form
            // onSubmit={handleSubmit}
            action="https://formspree.io/f/xaylglnj"
            method="POST"
            className="flex flex-col"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-2 mb-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 mb-2 border rounded-md"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message here..."
              required
              className="w-full p-2 mb-2 border rounded-md"
            />
            <button type="submit" className={`mx-auto mt-4 ${styles.btn}`}>
              Submit
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default Form
