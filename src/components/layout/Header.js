import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import { HhHamburger, HhClose } from "../Icons";
import { motion } from "framer-motion";

const menuVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 0px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const menuItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    toggleNavBgd();
  }, []);

  const toggleNavBgd = () => {
    const navbar = document.querySelector(".header");
    const home = document.querySelector(".home-section");

    const homeHeight = home.clientHeight;

    window.addEventListener("scroll", () => {
      if (window.scrollY > homeHeight) {
        navbar.classList.add("bg-custom-secondary");
      } else {
        navbar.classList.remove("bg-custom-secondary");
      }
    });
  };

  return (
    <nav className="header py-3 fixed-top bgd-clip opacity-1 z-first">
      <motion.div
        className="container d-flex position-relative align-items-center"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <a href="/" className="ff-serif fs-sm-4 fs-md-3 fs-xl-4 fw-bold">
          H&H Jewels
        </a>
        <motion.button
          className="navbar-toggler ms-auto d-lg-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <HhHamburger />
        </motion.button>

        <div className="nav-menu-lg ms-auto d-none d-lg-block">
          <ul className="nav-links d-flex custom-gap justify-content-bentween list-unstyled rm-mb fw-300 fs-sm-5">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#category">Category</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <motion.div
          className="nav-menu-sm d-lg-none position-absolute end-0 px-2 py-50 w-150 top-0 bg-custom-secondary"
          variants={menuVariants}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.button
            className="navbar-toggler d-lg-none position-absolute start-21 top-18"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <HhClose />
          </motion.button>

          <motion.ul className="nav-links list-unstyled text-center rm-mb fw-300 fs-sm-3">
            <motion.li variants={menuItemVariants}>
              <a href="#home">Home</a>
            </motion.li>
            <motion.li className="my-40" variants={menuItemVariants}>
              <a href="#about">About</a>
            </motion.li>
            <motion.li className="my-40" variants={menuItemVariants}>
              <a href="#category">Category</a>
            </motion.li>
            <motion.li variants={menuItemVariants}>
              <a href="#contact">Contact</a>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>

    </nav>
  );
};

export default Header;
