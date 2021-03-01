import React, { useState } from "react"

import Title from "./Title"
import DisplayStack from "@/components/DisplayStack"
import { links } from "@data/stackLinks"

const Stack = () => {
  const [value, setValue] = useState(0)

  return (
    <section className="py-10 bg-gradient-to-tr from-green-300 via-blue-300 to-green-300">
      <Title title="Developer Stack" color="white" />
      <div className="max-w-screen-lg shadow-xl lg:grid lg:grid-cols-12 md:w-8/12 md:mx-auto ">
        {/* btn container */}
        <div className="flex justify-around p-4 mx-4 md:mx-0 md:items-center lg:flex-col lg:items-start lg:justify-start md:col-span-2 bg-grey-200">
          {links.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={`px-2 rounded font-content tracking-widest cursor-pointer ${
                index === value &&
                "bg-green-600 text-white px-0 border-b-2 border-green-600 focus:outline-none"
              } md:border-none md:px-2 md:py-1 md:rounded-sm md:border-l-2 ${
                value !== index ? "md:hover:text-green-500" : ""
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <DisplayStack val={value} />
      </div>
    </section>
  )
}

export default Stack
