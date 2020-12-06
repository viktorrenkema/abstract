import * as React from "react";
import { motion } from "framer-motion";

export default function ChapterCard(props) {
  const [video, setVideo] = React.useState(null);
  const [playStatus, setPlayStatus] = React.useState(false);
  const [videoTime, setVideoTime] = React.useState(0);

  React.useEffect(() => {
    const documentVideo = document.getElementById("courseVideo");
    setVideo(documentVideo);
  }, []);

  function playVid() {
    setPlayStatus(!playStatus);
    playStatus ? video.pause() : video.play();
  }

  function toCustomTime() {
    video.currentTime = 12;
  }

  // setInterval(function () {
  //   setVideoTime(video.currentTime), console.log(videoTime);
  // }, 1000);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        margin: "1rem",
        padding: "5px",
      }}
    >
      <Play onClick={playVid} playStatus={playStatus}></Play>
      <Pause onClick={playVid} playStatus={playStatus}></Pause>
      <Time onClick={toCustomTime}></Time>
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

function Pause(props) {
  return (
    <div
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
      }}
    >
      <svg
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="19"
      >
        <motion.path
          d="M 0 0 L 4.435 0 L 4.435 19 L 0 19 Z"
          fill={props.playStatus ? "#E0E0E0" : "#FF0088"}
        ></motion.path>
        <motion.path
          d="M 12.565 0 L 17 0 L 17 19 L 12.565 19 Z"
          fill={props.playStatus ? "#E0E0E0" : "#FF0088"}
        ></motion.path>
      </svg>
    </div>
  );
}

function Time(props) {
  return (
    <div
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
      }}
    >
      <p
        style={{
          width: 44,
          height: 16,
          overflow: "hidden",
          fontFamily: `"Inter-Medium", "Inter", sans-serif`,
          color: "#E0E0E0",
          fontSize: 16,
          letterSpacing: 0,
          lineHeight: 1,
          fontWeight: 500,
        }}
      >
        00:12
      </p>
    </div>
  );
}
