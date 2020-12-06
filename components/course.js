import Video from "../public/videos/cookingvideo.mp4";
import Chapters from "./chapters";

export default function Course() {
  return (
    <div className="courseWindow">
      <div className="videoPlayer">
        <video id="courseVideo" width="670" height="377" controls autoplay>
          <source
            src={require("../public/videos/cookingvideo.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      <Chapters></Chapters>
    </div>
  );
}
