import React from "react"
import Image from "next/image"

import Title from "./Title"
import services from "../data/services"

const Services = () => {
  const styles = {
    underline: "w-20 h-0.5 my-4 mx-auto bg-green-600",
  }

  return (
    <section className="py-10">
      <Title title="My Services" color="green-600" />

      <div className="max-w-screen-xl p-4 mx-auto sm:px-16 lg:grid lg:grid-cols-3 lg:gap-6">
        {services.map((service, index) => {
          const { id, title, icon, text } = service

          return (
            <article
              key={id}
              className="transition-all duration-300 transform lg:px-4 lg:border lg:shadow-md lg:rounded-md lg:hover:scale-110 lg:hover:shadow-lg lg:hover:text-white lg:hover:bg-green-500"
            >
              <div className="flex items-center justify-center">
                <Image src={icon} alt="service-icon" width={250} height={250} />
              </div>
              <h3 className="text-lg font-medium text-center">{title}</h3>
              <div className={styles.underline}></div>
              <p className="mb-6 text-center">{text}</p>
              <hr
                className={`w-2/3 mx-auto ${
                  index === 2 ? "opacity-0" : ""
                } lg:opacity-0`}
              />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
