import * as React from "react";
import { motion } from "framer-motion";

export default function ChapterCard(props) {
  const [video, setVideo] = React.useState(null);
  const [playStatus, setPlayStatus] = React.useState(false);

  React.useEffect(() => {
    const documentVideo = document.getElementById("courseVideo");
    setVideo(documentVideo);
  }, []);

  function playVid() {
    setPlayStatus(!playStatus);
    playStatus ? video.pause() : video.play();
    video.currentTime = 12;
  }

  return (
    <div className="chapterCard">
      <div className="flexwraptext">
        <span className="textStyle1" onClick={playVid}>
          {props.chapterTitle}
        </span>
        <span className="textStyle2">{props.chapterDuration}</span>
      </div>

      <div className="flexwrapButton">
        <Play></Play>
      </div>
    </div>
  );
}

function Play(props) {
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
          d="M 8 4 L 8 22 L 22.5 13 Z"
          fill={props.playStatus ? "#FF0088" : "#E0E0E0"}
          stroke={props.playStatus ? "#FF0088" : "#E0E0E0"}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></motion.path>
      </motion.svg>
    </motion.div>
  );
}
