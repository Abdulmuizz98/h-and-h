import { HhTwitter, HhInstagram, HhWhatsapp } from "../Icons";
import { motion } from "framer-motion";

const linkVariants = {
  hover: {
    scale: 1.3,
    rotate: 180,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const Footer = () => {
  return (
    <footer className="footer mt-100 mt-xxl-150">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3 fs-xl-1 fs-md-1 bord-top">
          <p className="mb-0">H&HJEWELS&copy;2021</p>
          <div>
            <motion.a
              href="#placeholder"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              className="d-inline-flex"
            >
              <HhInstagram />
            </motion.a>
            <motion.a
              href="#placeholder"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              className="mx-md-5 mx-4 d-inline-flex"
            >
              <HhWhatsapp />
            </motion.a>
            <motion.a
              href="#placeholder"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              className="d-inline-flex"
            >
              <HhTwitter />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
