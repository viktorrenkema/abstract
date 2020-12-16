import * as React from "react";
import { motion } from "framer-motion";
import { THEME_TINT } from "../lib/constants";

// Context imports
import { VideoID } from "../state/context";
import { GlobalState } from "../state/context";

const chapterCardVariants = {
  inactive: {
    backgroundColor: "#14181d",
  },
  active: {
    backgroundColor: "#161e24",
  },
};

export default function ChapterCard({ chapterTitle, chapterDuration, id }) {
  // Context
  const [chapterPlaying, setChapterPlaying] = React.useContext(VideoID);
  const [playStatus, setPlayStatus] = React.useState(false);
  const [time, setTime] = React.useContext(GlobalState);
  // End contexts

  // Logging
  console.log("Video ID is ", chapterPlaying);
  // End logging

  const [videoElement, setVideoElement] = React.useState(null);

  React.useEffect(() => {
    const documentVideo = document.getElementById("courseVideo");
    setVideoElement(documentVideo);
  }, []);

  function playVid() {
    setChapterPlaying(id);
    setPlayStatus(true);
    videoElement.play();
    videoElement.currentTime = chapterDuration;
  }

  // if (time < chapterDuration) {
  //   setChapterPlaying(id);
  //   console.log(chapterDuration);
  // }

  return (
    <motion.div
      className="chapterCard"
      variants={chapterCardVariants}
      animate={id === chapterPlaying ? "active" : "inactive"}
    >
      <div className="flexwraptext">
        <span className="textStyle1">{chapterTitle}</span>
        <span className="textStyle2">{`${chapterDuration} minuten`}</span>
      </div>

      <div className="flexwrapButton">
        <Play onClick={playVid} chapterPlaying={chapterPlaying} id={id}></Play>
      </div>
    </motion.div>
  );
}

function Play({ onClick, id, chapterPlaying }) {
  const variantsLineOne = {
    play: {
      d: "M 7.5 2.86 L 7.5 15.86 L 15.5 9.5 Z",
      opacity: 1,
    },
    pause: {
      // d: "M 7.5 2.86 L 7.5 15.86 L 7.5 9.5 Z",
      opacity: 0,
    },
  };
  const variantsLineTwo = {
    play: {
      d: "M 15.5 2.86 L 15.5 15.86 L 15.5 9.5 Z",
      opacity: 0,
    },
    pause: {
      opacity: 0,
    },
  };

  return (
    <motion.svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="18"
      style={{ visibility: id === chapterPlaying ? "hidden" : "visible" }}
    >
      <motion.path
        fill={id === chapterPlaying ? `${THEME_TINT}` : "#E0E0E0"}
        stroke={id === chapterPlaying ? `${THEME_TINT}` : "#E0E0E0"}
        variants={variantsLineOne}
        animate={id === chapterPlaying ? "pause" : "play"}
        initial="play"
        strokeLinecap="round"
        strokeLinejoin="round"
        transition={{ ease: "linear", duration: 0.1 }}
        strokeWidth="2"
      ></motion.path>
      <motion.path
        fill={id === chapterPlaying ? `${THEME_TINT}` : "#E0E0E0"}
        stroke={id === chapterPlaying ? `${THEME_TINT}` : "#E0E0E0"}
        initial="play"
        variants={variantsLineTwo}
        animate={id === chapterPlaying ? "pause" : "play"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transition={{ duration: 0.01 }}
      ></motion.path>
    </motion.svg>
  );
}
