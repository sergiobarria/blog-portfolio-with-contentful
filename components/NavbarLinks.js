import React from "react"
import { useRouter } from "next/router"

import { navLinks } from "@data/navlinks"
import ActiveLink from "@/components/ActiveLink"

const NavbarLinks = () => {
  const router = useRouter()

  return (
    <ul className="hidden md:flex md:items-end">
      {navLinks.map((link) => (
        <li key={link.id} className="md:mr-10">
          <ActiveLink
            href={link.url}
            activeClassName="bg-green-600 rounded p-2"
          >
            <a
              className={`tracking-widest text-white uppercase ${
                router.pathname !== link.url
                  ? "hover:text-green-600 hover:font-medium transform transition duration-500"
                  : ""
              }`}
            >
              {link.text}
            </a>
          </ActiveLink>
        </li>
      ))}
    </ul>
  )
}

export default NavbarLinks
