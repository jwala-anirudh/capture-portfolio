import React from "react";

// Styled components
import { About, Description, Hide, Image } from "../styles";

// Framer motion
import { motion } from "framer-motion";

// Images
import home1 from "../img/home1.png";

// Animation
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us on any photography or videography that you have. We have
          professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          // initial="hidden"
          // animate="show"
          src={home1}
          alt="Guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
