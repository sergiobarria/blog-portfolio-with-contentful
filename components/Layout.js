import React from "react"

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleSidebar={toggleSidebar}
      />
      <main>{children}</main>
    </>
  )
}

export default Layout
