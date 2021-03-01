import React, { useState, useEffect } from "react"
import Image from "next/image"
import { FaBars } from "react-icons/fa"
import { useRouter } from "next/router"
import Link from "next/link"

import NavbarLinks from "@/components/NavbarLinks"

const Navbar = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false)
  const [blogWindowActive, setBlogWindowActive] = useState(false)

  const router = useRouter()

  // handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY >= 80
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // change navbar background
  useEffect(() => {
    const activeWindow = router.pathname
    // console.log(activeWindow);

    if (activeWindow !== "/") {
      setBlogWindowActive(true)
    } else {
      setBlogWindowActive(false)
    }
  }, [router])

  return (
    <nav
      className={`fixed top-0 left-0 z-10 flex justify-center w-full h-20 transparent ${
        scrolled ? "bg-grey-900" : ""
      } ${blogWindowActive ? "bg-grey-900 border-b-2 border-green-500" : ""}`}
    >
      <div className="flex items-center justify-between w-5/6 max-w-screen-xl">
        <Link href="/">
          <a>
            <Image
              src="/assets/logo-v2.svg"
              alt="logo"
              width={180}
              height={80}
            />
          </a>
        </Link>
        <button
          type="button"
          className="h-10 p-1 text-3xl text-green-600 bg-white rounded-md focus:outline-none md:hidden"
          onClick={toggleSidebar}
        >
          <FaBars className="animate-pulse" />
        </button>
        <NavbarLinks />
      </div>
    </nav>
  )
}

export default Navbar
