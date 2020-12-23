import * as React from "react";

import { motion, useMotionValue } from "framer-motion";
import { podcasting } from "../lib/chapterTimestamps";

export function VideoButton({
  onClick,
  globalVideoPlaying,
  chapterPlaying,
  time,
}) {
  return (
    <motion.div
      className="circle"
      onClick={onClick}
      initial={{ opacity: "1" }}
      animate={globalVideoPlaying ? { opacity: "0" } : { opacity: "1" }}
      style={{ cursor: "pointer" }}
    >
      <motion.div
        style={styleThinHalo}
        variants={variantsThinHalo}
        initial={"start"}
        animate={"end"}
        transition={thinHalo}
      />

      <motion.div
        className="circle"
        animate={logoAnimate}
        transition={logoTransition}
      >
        {time >= podcasting[Object.keys(podcasting).length - 1] ? (
          <motion.svg xmlns="http://www.w3.org/2000/svg" width="29" height="30">
            <motion.path
              d="M 28.996 15 C 28.996 23.268 22.381 29.996 14.251 29.996 C 12.587 29.996 10.955 29.717 9.398 29.167 C 7.895 28.634 6.488 27.859 5.223 26.862 C 3.972 25.877 2.889 24.699 2.006 23.362 C 1.108 22.007 0.442 20.522 0.018 18.949 C -0.007 18.855 0.007 18.757 0.053 18.674 C 0.103 18.587 0.182 18.529 0.274 18.504 L 3.374 17.71 C 3.563 17.663 3.751 17.775 3.805 17.967 C 5.105 22.714 9.398 26.025 14.247 26.025 C 20.214 26.025 25.078 21.087 25.088 15.022 C 25.099 9.033 20.318 4.08 14.432 3.978 C 11.525 3.928 8.793 5.029 6.708 7.08 L 10.1 10.529 C 10.189 10.62 10.214 10.754 10.168 10.873 C 10.121 10.993 10.007 11.069 9.883 11.069 L 0.31 11.069 C 0.139 11.069 0 10.928 0 10.754 L 0 1.014 C 0 0.888 0.075 0.772 0.192 0.725 C 0.31 0.674 0.442 0.703 0.531 0.793 L 3.951 4.272 C 5.276 2.957 6.812 1.917 8.511 1.185 C 10.328 0.402 12.259 0.007 14.251 0.007 C 16.242 0.007 18.173 0.406 19.99 1.185 C 21.746 1.942 23.325 3.022 24.679 4.399 C 26.032 5.775 27.098 7.38 27.839 9.167 C 28.608 11.011 28.996 12.975 28.996 15 Z"
              fill="#CCCCCC"
            ></motion.path>
          </motion.svg>
        ) : (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="26"
            className="videobutton-svg"
          >
            <motion.path
              d="M 22 13 L -0.5 25.99 L -0.5 0.01 Z"
              fill="hsl(0, 0%, 88%)"
            ></motion.path>
          </motion.svg>
        )}
      </motion.div>
    </motion.div>
  );
}

// Transitions
const thinHalo = {
  duration: 2.2,
  delay: 0.3,
  repeatDelay: 1,
  repeat: "Infinity",
  repeatType: "loop",
  type: "tween",
  ease: [0, 0.55, 0.75, 1],
};

// Styles
const styleThinHalo = {
  width: 60,
  height: 60,
  border: "1px solid #cbcbcb",
  overflow: "visible",
  //   backgroundColor: "#177AA833",
  borderRadius: 100,
  position: "absolute",
  //   boxShadow:
  //     "1px 1px 3px 0px rgba(23, 122, 168), -1px -1px 3px 0px rgba(23, 122, 168)",
};

// Variants
const variantsThinHalo = {
  start: {
    scale: 1.1,
    opacity: 1,
  },
  end: {
    scale: 2,
    opacity: [1, 1, 1, 0],
  },
};

const logoAnimate = {
  scale: [null, 0.9, 1.1, 1],
};

// Transitions
const logoTransition = {
  duration: 0.5,
  repeatDelay: 2.7,
  repeat: "Infinity",
  repeatType: "loop",
  ease: [0.44, 0, 1, 1],
};
