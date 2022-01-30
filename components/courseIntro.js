import CourseCategories from "../components/courseCategories";
import { TEACHER } from "../lib/constants";

export default function CourseIntro() {
  const [tab, setCurrentTab] = React.useState(1);

  return (
    <section className="containerCourseIntro">
      <CourseCategories
        tab={tab}
        setCurrentTab={setCurrentTab}
      ></CourseCategories>
      {tab === 1 && (
        <>
          <p className="courseIntroContent">
            Donec ornare sagittis arcu, id aliquet sem cursus vel. Integer
            vulputate metus at erat ultricies, non convallis metus eleifend. In
            sed justo sollicitudin, dignissim nulla nec, mollis magna. Nullam
            commodo tortor sit amet mi rutrum tempus. Donec aliquet erat arcu,
            vel lacinia nisi rhoncus a.
          </p>
        </>
      )}
      {tab === 2 && (
        <>
          <p className="courseIntroContent">
            Donec nec leo id urna porttitor venenatis vitae at est. Proin ac
            placerat ipsum, in ornare urna. Curabitur auctor varius vehicula.
            Sed et neque vitae felis maximus bibendum non sed risus.
          </p>
        </>
      )}
    </section>
  );
}
