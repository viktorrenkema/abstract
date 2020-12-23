import * as React from "react";
import Chapters from "./chapters";
import { motion, useMotionValue } from "framer-motion";
import { isVideoPlaying } from "../state/context";

// Context import
import { GlobalState } from "../state/context";

export default function Course() {
  // Context
  const [globalVideoPlaying, setGlobalVideoPlaying] = React.useContext(
    isVideoPlaying
  );
  const [time, setTime] = React.useContext(GlobalState);
  const [localTime, setLocalTime] = React.useState(0);

  console.log("isVideoPlaying is ", globalVideoPlaying);

  const [video, setVideo] = React.useState([]);
  const [elapsed, setElapsed] = React.useState(0);

  function updateVideoTime() {
    video.ontimeupdate = function () {
      setTime(video.currentTime);
      setLocalTime(video.currentTime);
      console.log(video.currentTime);
    };
  }

  React.useEffect(() => {
    const documentVideo = document.getElementById("courseVideo");
    setVideo(documentVideo);
    console.log(documentVideo);
    updateVideoTime();
  });

  // React.useEffect(() => {
  //   const documentVideo = document.getElementById("courseVideo");
  //   console.log("bladiebla");
  //   setVideo(documentVideo);
  //   console.log(documentVideo);

  //   video.ontimeupdate = function () {
  //     setTime(video.currentTime);
  //     setLocalTime(video.currentTime);
  //     console.log(video.currentTime);
  //     console.log(localTime);
  //   };
  // }, []);

  video.onpause = function () {
    setGlobalVideoPlaying(false);
  };

  video.onplay = function () {
    setGlobalVideoPlaying(true);
  };

  function toggleContinuePlaying() {
    setGlobalVideoPlaying(!globalVideoPlaying);
    globalVideoPlaying ? video.pause() : video.play();
  }

  return (
    <div className="courseWindow">
      <div className="videoPlayer">
        <VideoButton
          globalVideoPlaying={globalVideoPlaying}
          onClick={toggleContinuePlaying}
        ></VideoButton>
        <video id="courseVideo" width="787" height="433" controls muted>
          <source
            src={require("../public/videos/recording.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      <Chapters time={time}></Chapters>
    </div>
  );
}

function VideoButton({ onClick, globalVideoPlaying }) {
  return (
    <motion.div
      className="circle"
      onClick={onClick}
      initial={{ opacity: "1" }}
      animate={globalVideoPlaying ? { opacity: "0" } : { opacity: "1" }}
    >
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
    </motion.div>
  );
}
