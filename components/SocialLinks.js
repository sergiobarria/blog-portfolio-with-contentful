import React from "react"
import Link from "next/link"

import { socialLinks } from "@data/socialLinks"

const SocialLinks = () => {
  return (
    <ul className="flex justify-around w-full pb-4 mx-auto my-0">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <Link href={link.url}>
            <a className="text-3xl duration-300 ease-linear hover:text-green-500 trasition">
              {link.icon}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
