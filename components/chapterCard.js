import * as React from "react";
import { motion } from "framer-motion";
import { THEME_TINT } from "../lib/constants";
import GlobalState from "../state/context";

const chapterCardVariants = {
  inactive: {
    backgroundColor: "#14181d",
  },
  active: {
    backgroundColor: "#161e24",
  },
};

export default function ChapterCard({ chapterTitle, chapterDuration, id }) {
  const [video, setVideo] = React.useState(null);

  const [playStatus, setPlayStatus] = React.useState(false);

  const [globalChapterPlaying, setGlobalChapterPlaying] = React.useContext(
    GlobalState
  );

  React.useEffect(() => {
    const documentVideo = document.getElementById("courseVideo");
    setVideo(documentVideo);
  }, []);

  function playVid() {
    setGlobalChapterPlaying(id);
    setPlayStatus(!playStatus);
    playStatus ? video.pause() : video.play();
    video.currentTime = chapterDuration;
  }

  console.log(globalChapterPlaying);

  return (
    <motion.div
      className="chapterCard"
      variants={chapterCardVariants}
      animate={id === globalChapterPlaying ? "active" : "inactive"}
    >
      <div className="flexwraptext">
        <span className="textStyle1">{chapterTitle}</span>
        <span className="textStyle2">{`${chapterDuration} minuten`}</span>
      </div>

      <div className="flexwrapButton">
        <Play
          onClick={playVid}
          globalChapterPlaying={globalChapterPlaying}
          id={id}
        ></Play>
      </div>
    </motion.div>
  );
}

function Play({ onClick, id, globalChapterPlaying }) {
  const variantsLineOne = {
    play: {
      d: "M 7.5 2.86 L 7.5 15.86 L 15.5 9.5 Z",
      strokeWidth: "2",
      opacity: 1,
    },
    pause: {
      d: "M 7.5 2.86 L 7.5 15.86 L 7.5 9.5 Z",
      strokeWidth: "2",
      opacity: 1,
    },
  };
  const variantsLineTwo = {
    play: {
      d: "M 15.5 2.86 L 15.5 15.86 L 15.5 9.5 Z",
      strokeWidth: "2",
      opacity: 0,
    },
    pause: {
      d: "M 15.5 2.86 L 15.5 15.86 L 15.5 9.5 Z",
      strokeWidth: "2",
      opacity: 1,
    },
  };

  return (
    <motion.svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="18"
    >
      <motion.path
        fill={id === globalChapterPlaying ? `${THEME_TINT}` : "#E0E0E0"}
        stroke={id === globalChapterPlaying ? `${THEME_TINT}` : "#E0E0E0"}
        variants={variantsLineOne}
        animate={id === globalChapterPlaying ? "play" : "pause"}
        initial="play"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></motion.path>
      <motion.path
        fill={id === globalChapterPlaying ? `${THEME_TINT}` : "#E0E0E0"}
        stroke={id === globalChapterPlaying ? `${THEME_TINT}` : "#E0E0E0"}
        initial="play"
        variants={variantsLineTwo}
        animate={id === globalChapterPlaying ? "play" : "pause"}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></motion.path>
    </motion.svg>
  );
}

// import * as React from "react"

// export function Graphic() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18">
//       <path d="M 7.5 2.86 L 7.5 15.86 L 16.5 9.5 Z" fill="rgb(224, 224, 224)" stroke="#E0E0E0" strokeLinecap="round" strokeLinejoin="round"></path>
//       <path d="M 15.5 2.86 L 15.5 15.86 L 15.5 9.5 Z" fill="rgb(224, 224, 224)" strokeWidth="2" stroke="rgba(224, 224, 224, 0)" strokeLinecap="round" strokeLinejoin="round"></path>
//     </svg>
//   )
// }
