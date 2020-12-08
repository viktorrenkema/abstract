import ChapterCard from "./chapterCard";

export default function Chapters() {
  return (
    <div className="chapterSelector">
      <ChapterCard
        chapterTitle={"1. Introductie"}
        chapterDuration={10}
      ></ChapterCard>
      <ChapterCard
        chapterTitle={"2. Wat zijn podcasts"}
        chapterDuration={16}
      ></ChapterCard>
      <ChapterCard
        chapterTitle={"3. Opnamestudio"}
        chapterDuration={20}
      ></ChapterCard>
      <ChapterCard
        chapterTitle={"4. Onderwerpen kiezen"}
        chapterDuration={23}
      ></ChapterCard>
      <ChapterCard
        chapterTitle={"5. Distributie"}
        chapterDuration={26}
      ></ChapterCard>
    </div>
  );
}
