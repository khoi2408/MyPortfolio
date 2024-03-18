import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai"
import {
  FaDiscord,
  FaEye,
  FaFacebookF,
  FaRegListAlt, FaRegUser
} from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { MdDashboard } from "react-icons/md"
import {
  SiElectron,
  SiElectronbuilder,
  SiNextdotjs, SiPlatformdotsh, SiWordpress, SiWorkplace
} from "react-icons/si"
import About from "./components/aboutPage/About"
import Contact from "./components/contactPage/Contact"
import Resume from "./components/resumePage/Resume"
import Stats from "./components/statistics/Stats"
import Works from "./components/worksPage/Works"
import {
  ClientData,
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TestimonialData
} from "./types"

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: "stats",
    Icon: MdDashboard,
    Component: Stats,
  },
  {
    id: 5,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
]

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: FaFacebookF,
    label: "Facebook",
    logoColor: "#3b5998",
    mediaUrl: "https://www.facebook.com/ARK.khoibodoi",
    info: "Follow me on Facebook",
  },
  {
    id: 2,
    Icon: AiOutlineInstagram,
    label: "Instagram",
    logoColor: "#3b5998",
    mediaUrl: "https://www.instagram.com/ark.wing",
    info: "Follow me on Instagram",
  },
  {
    id: 3,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://github.com/khoi2408",
    info: "Star my projects on Github",
  },
  {
    id: 4,
    Icon: FaDiscord,
    label: "Discord",
    logoColor: "#5865f2",
    mediaUrl: "https://www.discord.com",
    info: "Let's chat on Discord. My username - Khôi#9745",
  },
]

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Front-end",
    Icon: SiNextdotjs,
    description:
      "HTML, CSS, JavaScript, Typescript, React, Next.js, Bootstrap, Material UI, PHP, etc.",
  },
  {
    id: 2,
    title: "Wordpress",
    Icon: SiWordpress,
    description:
      "With website builder: Flatsome, Elementor, Avada, etc.",
  },
  {
    id: 3,
    title: "Low Code Platform",
    Icon: SiElectronbuilder,
    description:
      "Build web app without coding. I can build app with Appsmith, Openblocks.",
  },
  {
    id: 4,
    title: "Other",
    Icon: SiPlatformdotsh,
    description:
      "Version control (Github, Gitlab); Auto Testing (Playwright); Familiar with npm, yarn; Firebase; etc.",
  },
]

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: "https://www.linkedin.com/",
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    linkLocation: "https://www.freelancer.com/",
    imgLocation: "/images/freelancer.png",
  },
  {
    id: 3,
    linkLocation: "https://www.upwork.com/",
    imgLocation: "/images/upwork.png",
  },
  {
    id: 4,
    linkLocation: "https://www.envato.com/",
    imgLocation: "/images/envato.png",
  },
]

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  userName: "Martin Fowler",
  userProfession: "Software Developer",
  userImage: { url: "/images/martin.jpg" },
}

export const statisticsData: StatisticsData[] = [
  {
    title: "stack",
    info: "MERN or T3",
  },
  {
    title: "projects",
    info: "70+",
  },
  {
    title: "clients",
    info: "40+",
  },
]
