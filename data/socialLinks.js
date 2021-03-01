import Link from "next/link"
import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"

export const socialLinks = [
  {
    id: 1,
    icon: <FaInstagram className="social_icon" />,
    url: "https://www.instagram.com/",
  },
  {
    id: 2,
    icon: <AiFillGithub className="social_icon" />,
    url: "https://github.com/sergiobarria",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social_icon" />,
    url: "https://www.instagram.com/",
  },
]
