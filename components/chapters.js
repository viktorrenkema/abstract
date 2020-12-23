import ChapterCard from "./chapterCard";

export default function Chapters({ time }) {
  return (
    <div className="chapterSelector">
      {/* <h2>{time}</h2> */}
      <ChapterCard
        id={"MP101"}
        chapterTitle={"1. Introductie"}
        chapterDuration={10}
        index={0}
      ></ChapterCard>
      <ChapterCard
        id={"MP102"}
        chapterTitle={"2. Podcasts 101"}
        chapterDuration={16}
        index={1}
      ></ChapterCard>
      <ChapterCard
        id={"MP103"}
        chapterTitle={"3. Opnamestudio"}
        chapterDuration={20}
        index={2}
      ></ChapterCard>
      <ChapterCard
        id={"MP104"}
        chapterTitle={"4. Een onderwerp kiezen"}
        chapterDuration={23}
        index={3}
      ></ChapterCard>
      <ChapterCard
        id={"MP105"}
        chapterTitle={"5. Distributie"}
        chapterDuration={26}
        index={4}
      ></ChapterCard>
    </div>
  );
}
