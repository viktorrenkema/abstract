import * as React from "react";
import Chapters from "./chapters";
import { motion, useMotionValue } from "framer-motion";
import { isVideoPlaying } from "../state/context";
import { podcasting } from "../lib/chapterTimestamps";
import { VideoButton } from "./videoButton";

// Context import
import { GlobalState } from "../state/context";
import { VideoID } from "../state/context";

export default function Course() {
  // Context
  const [chapterPlaying, setChapterPlaying] = React.useContext(VideoID);
  const [globalVideoPlaying, setGlobalVideoPlaying] = React.useContext(
    isVideoPlaying
  );
  const [time, setTime] = React.useContext(GlobalState);

  // Local state
  const [localTime, setLocalTime] = React.useState(0);
  const [video, setVideo] = React.useState([]);
  const [elapsed, setElapsed] = React.useState(0);

  // Functions
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
    updateVideoTime();
  });

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

  // Variants for overlay
  const overlay = {
    show: {
      opacity: 0.8,
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <div className="courseWindow">
      <div className="videoPlayer">
        <VideoButton
          globalVideoPlaying={globalVideoPlaying}
          onClick={toggleContinuePlaying}
          chapterPlaying={chapterPlaying}
          time={time}
        ></VideoButton>
        <motion.div
          style={{
            position: "absolute",
            width: "772px",
            height: "434px",
            background: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          variants={overlay}
          initial={"show"}
          animate={globalVideoPlaying ? "hide" : "show"}
        >
          {/* <h1>Subscribe to get full access</h1> */}
        </motion.div>
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
