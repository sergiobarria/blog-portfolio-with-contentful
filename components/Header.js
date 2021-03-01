import React from "react"

const Header = ({ title, subtitle }) => {
  return (
    <header className="pt-24 h-96 bg-gradient-to-t from-gray-900 to-grey-700">
      <div className="container flex flex-col justify-center h-full max-w-screen-lg p-10 mx-auto text-white">
        <h1 className="text-5xl font-normal tracking-widest text-center">
          {title}
        </h1>
        <p className="text-2xl font-normal tracking-widest text-center">
          {subtitle}
        </p>
      </div>
    </header>
  )
}

export default Header
