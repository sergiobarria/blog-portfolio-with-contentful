import React from "react"

import SocialLinks from "@/components/SocialLinks"

const Footer = () => {
  return (
    <footer className="grid items-center tracking-widest text-center text-white h-36 bg-grey-900">
      <div className="max-w-3xl mx-auto">
        <SocialLinks />
        <h4>&copy; Copyright {new Date().getFullYear()}</h4>
        <h4>
          All rights reserved. Built with{" "}
          <span className="font-semibold text-green-500">
            <a href="https://www.nextjs.org">Next js</a>
          </span>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
