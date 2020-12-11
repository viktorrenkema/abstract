import Chapters from "./chapters";
import { motion } from "framer-motion";
import VideoPlaying from "../state/context";

export default function Course() {
  const [video, setVideo] = React.useState(null);

  React.useEffect(() => {
    const documentVideo = document.getElementById("courseVideo");
    setVideo(documentVideo);
  }, []);

  const [globalVideoPlaying, setGlobalVideoPlaying] = React.useContext(
    VideoPlaying
  );
  console.log("global video playing is ", globalVideoPlaying);

  if (video)
    video.onpause = function () {
      setGlobalVideoPlaying(false);
    };
  if (video)
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
        <video
          id="courseVideo"
          width="787"
          height="433"
          controls
          muted
          autoplay
        >
          <source
            src={require("../public/videos/recording.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      <Chapters></Chapters>
    </div>
  );
}

function VideoButton({ onClick, globalVideoPlaying }) {
  return (
    <motion.div
      className="circle"
      onClick={onClick}
      initial={{ opacity: "1" }}
      animate={
        globalVideoPlaying !== false ? { opacity: "0.3" } : { opacity: "1" }
      }
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
