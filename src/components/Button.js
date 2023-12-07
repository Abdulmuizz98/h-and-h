import { motion } from "framer-motion";
const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 8px rgb(255, 255, 255)",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const Button = ({ value, classes }) => {
  return (
    <motion.button
      className={`custom-btn ${classes}`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {value}
    </motion.button>
  );

};

export default Button;
