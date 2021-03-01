import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { FaTimes } from "react-icons/fa"

import { navLinks } from "@data/navlinks"
import { socialLinks } from "@data/socialLinks"

const Sidebar = ({ isOpen, setIsOpen, toggleSidebar }) => {
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [router.pathname])

  return (
    <aside
      className={`bg-grey-900 fixed top-0 left-0 w-full h-full z-50 transform transition-all duration-700 ease-in-out ${
        isOpen ? "transform translate-x0 opacity-100" : "-translate-x-full"
      }`}
    >
      <button
        className="absolute text-4xl text-green-600 right-8 top-6 focus:outline-none"
        onClick={toggleSidebar}
      >
        <FaTimes />
      </button>

      <div className="w-full h-screen-3/4">
        <ul className="flex flex-col items-start justify-center h-full px-10 mb-6">
          {navLinks.map((link) => (
            <li key={link.id} className="mb-8">
              <Link href={link.url}>
                <a className="flex items-center px-2 text-xl text-white capitalize">
                  <span className="mr-4 text-green-600">{link.icon}</span>
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="container w-3/4 px-3 mx-auto">
        <ul className="flex items-center justify-between">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>
                <a className="text-3xl text-green-600">{link.icon}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
