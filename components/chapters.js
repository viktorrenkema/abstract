import ChapterCard from "./chapterCard";

export default function Chapters() {
  return (
    <div className="chapterSelector">
      <ChapterCard
        id={"MP101"}
        chapterTitle={"1. Introductie"}
        chapterDuration={10}
      ></ChapterCard>
      <ChapterCard
        id={"MP102"}
        chapterTitle={"2. Podcasts 101"}
        chapterDuration={16}
      ></ChapterCard>
      <ChapterCard
        id={"MP103"}
        chapterTitle={"3. Opnamestudio"}
        chapterDuration={20}
      ></ChapterCard>
      <ChapterCard
        id={"MP104"}
        chapterTitle={"4. Een onderwerp kiezen"}
        chapterDuration={23}
      ></ChapterCard>
      <ChapterCard
        id={"MP105"}
        chapterTitle={"5. Distributie"}
        chapterDuration={26}
      ></ChapterCard>
    </div>
  );
}
