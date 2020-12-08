import Chapters from "./chapters";

export default function Course() {
  return (
    <div className="courseWindow">
      <div className="videoPlayer">
        <video id="courseVideo" width="787" height="433" controls autoPlay>
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
