import React, { useState, useEffect } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import styles from "./styles/SideNav.module.scss";
import navItems from "./SideItems";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const SideNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const sidebar = {
    open: {
      clipPath: `circle(${height * 1.1}px at ${width - 60}px ${height / 3}px)`,
      transition: {
        type: "spring",
        stiffness: 40,
        restDelta: 5,
      },
    },
    closed: {
      clipPath: `circle(0px at ${width - 55}px 50px)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.button
        onClick={() => toggleOpen()}
        className={`${styles.navToggler} ${isOpen ? styles.opened : ""}`}
      >
        {isOpen ? <ImCross size={20} /> : <GiHamburgerMenu size={22} />}
      </motion.button>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className={`${styles.parent} ${isOpen ? styles.visible : ""}`}
      >
        <div className={styles.container}>
          <motion.div className={styles.background} variants={sidebar} />
          {isOpen ? <Navigation toggle={() => toggleOpen()} /> : ""}
        </div>
      </motion.div>
    </>
  );
};

const Navigation = ({ toggle }) => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <AnimatePresence>
      <motion.ul variants={variants}>
        {navItems.map((item, key) => (
          <MenuItem item={item} key={key} toggle={toggle} />
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

const MenuItem = ({ item, toggle }) => {
  const { name, route, Icon } = item;

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.025, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25 }}
    >
      <Link to={route} onClick={toggle}>
        {Icon}
        {name}
      </Link>
    </motion.li>
  );
};

export default SideNav;
