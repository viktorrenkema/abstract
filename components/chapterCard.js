import * as React from "react";
import { motion } from "framer-motion";

export default function ChapterCard({ chapterTitle, chapterDuration }) {
  const [video, setVideo] = React.useState(null);
  const [playStatus, setPlayStatus] = React.useState(false);

  React.useEffect(() => {
    const documentVideo = document.getElementById("courseVideo");
    setVideo(documentVideo);
  }, []);

  function playVid() {
    setPlayStatus(!playStatus);
    playStatus ? video.pause() : video.play();
    video.currentTime = chapterDuration;
  }

  return (
    <div className="chapterCard">
      <div className="flexwraptext">
        <span className="textStyle1" onClick={playVid}>
          {chapterTitle}
        </span>
        <span className="textStyle2">{`${chapterDuration} seconds`}</span>
      </div>

      <div className="flexwrapButton">
        <Play onClick={playVid} playStatus={playStatus}></Play>
      </div>
    </div>
  );
}

function Play(props) {
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
    <motion.div
      onClick={props.onClick}
      style={{
        flexShrink: 0,
        width: 71,
        height: 31,
        overflow: "visible",
        backgroundColor: "#1c1c27",
        borderRadius: 5,
        margin: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <motion.svg
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="25"
      >
        <motion.path
          // d="M 8 4 L 8 22 L 22.5 13 Z"
          fill={props.playStatus ? "#FF0088" : "#E0E0E0"}
          stroke={props.playStatus ? "#FF0088" : "#E0E0E0"}
          variants={variantsLineOne}
          animate={props.playStatus ? "play" : "pause"}
          initial="play"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></motion.path>
        <motion.path
          // d="M 8 4 L 8 22 L 22.5 13 Z"
          fill={props.playStatus ? "#FF0088" : "#E0E0E0"}
          stroke={props.playStatus ? "#FF0088" : "#E0E0E0"}
          initial="play"
          variants={variantsLineTwo}
          animate={props.playStatus ? "play" : "pause"}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></motion.path>
      </motion.svg>
    </motion.div>
  );
}

// import * as React from "react"

// export function Graphic() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18">
//       <path d="M 7.5 2.86 L 7.5 15.86 L 15.5 9.5 Z" fill="rgb(224, 224, 224)" stroke="#E0E0E0" strokeLinecap="round" strokeLinejoin="round"></path>
//       <path d="M 15.5 2.86 L 15.5 15.86 L 15.5 9.5 Z" fill="rgb(224, 224, 224)" strokeWidth="2" stroke="rgba(224, 224, 224, 0)" strokeLinecap="round" strokeLinejoin="round"></path>
//     </svg>
//   )

// }

// import * as React from "react"

// export function Graphic() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18">
//       <path d="M 7.5 2.86 L 7.5 15.86 L 7.5 9.5 Z" fill="rgb(224, 224, 224)" strokeWidth="2" stroke="#E0E0E0" strokeLinecap="round" strokeLinejoin="round"></path>
//       <path d="M 15.5 2.86 L 15.5 15.86 L 15.5 9.5 Z" fill="rgb(224, 224, 224)" strokeWidth="2" stroke="#E0E0E0" strokeLinecap="round" strokeLinejoin="round"></path>
//     </svg>
//   )
// }
