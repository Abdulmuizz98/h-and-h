import { motion } from "framer-motion";
import Button from "../Button";
import Typewriter from "typewriter-effect";
const modelVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 5, delay: 0.5, type: "spring" },
  },
};

const Showcase = () => {
  return (
    <section className="showcase">
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={modelVariants}
      >
        <div className="position-relative h-vw h-xl-995">
          <div className="text-center position-center w-100">
            <div className="ff-serif fw-bold fs-sm-6 fs-md-5 fs-xl-7">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(6000)
                    .typeString("Glitter With Confidence")
                    .pauseFor(2500)
                    .typeString("<br/>And Beauty")
                    .start();
                }}
              />
            </div>
            <p className="p-4 p-lg-5 fw-300 fs-sm-3 fs-md-2 fs-xl-3">
              Discover the right jewelry piece from our <br /> collections to
              enhance your every look.
            </p>
            <Button value="Discover now" classes="fs-sm-1 fs-md-1 fs-xl-2" />
          </div>
          <div className="bgd-hero position-center"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Showcase;
