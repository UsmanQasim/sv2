import { AiFillHome, AiFillMail } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";
import { GiGears } from "react-icons/gi";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

import styles from "./styles/SideNav.module.scss";

const SideItems = [
  { name: "Home", route: "/", Icon: <AiFillHome className={styles.navIcon} /> },
  {
    name: "Option",
    route: "/engine",
    Icon: <GiGears className={styles.navIcon} />,
  },
  {
    name: "Option",
    route: "/used-engines",
    Icon: <GiGears className={styles.navIcon} />,
  },
  {
    name: "Weddings",
    route: "/recon-engines",
    Icon: <GiGears className={styles.navIcon} />,
  },
  {
    name: "Gallery",
    route: "/gallery",
    Icon: <RiGalleryFill className={styles.navIcon} />,
  },
  {
    name: "About",
    route: "/about",
    Icon: <BsFillInfoCircleFill className={styles.navIcon} />,
  },
  {
    name: "Contact",
    route: "/contact",
    Icon: <AiFillMail className={styles.navIcon} />,
  },
  {
    name: "Privacy Policy",
    route: "/privacy-policy",
    Icon: <RiGitRepositoryPrivateLine className={styles.navIcon} />,
  },
];

export default SideItems;
