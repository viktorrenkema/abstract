import Video from "../public/videos/cookingvideo.mp4";
import ChapterCard from "./chapterCard";

export default function Chapters() {
  return (
    <div className="chapterSelector">
      <ChapterCard
        chapterTitle={"1. Introduction"}
        chapterDuration={"3 minutes"}
      ></ChapterCard>
      <ChapterCard
        chapterTitle={"2. Preparation"}
        chapterDuration={"8 minutes"}
      ></ChapterCard>
      <ChapterCard
        chapterTitle={"2. Preparation"}
        chapterDuration={"8 minutes"}
      ></ChapterCard>
      <ChapterCard
        chapterTitle={"2. Preparation"}
        chapterDuration={"8 minutes"}
      ></ChapterCard>
    </div>
  );
}
