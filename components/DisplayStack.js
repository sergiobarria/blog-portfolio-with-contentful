import React from "react"
import Image from "next/image"

import { stack } from "@data/stackLinks"

const DisplayStack = ({ val }) => {
  const styles = {
    article:
      "grid grid-cols-3 mx-4 md:mx-0 md:grid-cols-4 px-2 md:col-span-10 bg-grey-900",
    icon:
      "flex flex-col py-2 items-center justify-center md:p-4 transform transition-all duration-300 ease-in-out md:hover:scale-150",
  }

  return (
    <article className={styles["article"]}>
      {stack[val].map((item) => (
        <div key={item.id} className={styles["icon"]}>
          <Image
            className="bg-white rounded-full"
            alt="language or library icon"
            src={`${item.icon}`}
            width={75}
            height={75}
          />
          <h4 className="mt-2 text-white capitalize">{item.title}</h4>
        </div>
      ))}
    </article>
  )
}

export default DisplayStack
