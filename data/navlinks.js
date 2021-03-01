import { FaHome, FaBookOpen, FaBloggerB } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"

export const navLinks = [
  {
    id: 1,
    text: "home",
    icon: <FaHome />,
    url: "/",
  },
  {
    id: 2,
    text: "about",
    icon: <FaBookOpen />,
    url: "/about",
  },
  {
    id: 3,
    text: "blog",
    url: "/blog",
    icon: <FaBloggerB />,
  },
  // {
  //   id: 4,
  //   text: 'projects',
  //   icon: <GrHome/>,
  //   url: '/projects',
  // },
  // {
  //   id: 5,
  //   text: 'resources',
  //   icon: <GrHome/>,
  //   url: '/resources',
  // },
  // {
  //   id: 6,
  //   text: 'contact',
  //   icon: <IoIosContact />,
  //   url: '/contact',
  // },
]
