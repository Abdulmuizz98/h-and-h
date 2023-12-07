import { useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const maskVariants = {
  visibleMask: {
    WebkitMaskImage: visibleMask,
    maskImage: visibleMask,
  },
  hiddenMask: {
    WebkitMaskImage: hiddenMask,
    maskImage: hiddenMask,
  },
};

const Frame = ({ img, classes, borderStyle }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.figure
      className={`w-182 h-281 w-md-270 h-md-400 ${classes} ${borderStyle}`}
      variants={maskVariants}
      animate={isLoaded && isInView ? "visibleMask" : "hiddenMask"}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      <img
        className={`w-100 h-100 ${borderStyle}`}
        src={img}
        alt="necklace showcase"
        onLoad={() => setIsLoaded(true)}
      ></img>
    </motion.figure>
  );
};

export default Frame;
