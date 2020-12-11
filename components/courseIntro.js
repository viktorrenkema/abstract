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
            Een podcast is een opgenomen audio-uitzending die online te
            luisteren of te downloaden is. Luisteraars kunnen op podcasts
            abonneren en daardoor kan jij jezelf of jouw bedrijf goed aan de man
            te brengen. Of het nou gaat om inhoudelijke informatie over het
            vakgebied of een hobby, een podcast biedt uitkomst. <br />
            <br /> Ben jij benieuwd hoe jij je eigen podcast show opzet? In deze
            cursus ga jij vanuit het idee in je hoofd werken tot een allereerste
            aflevering. Ik laat je stapsgewijs zien hoe je aan de slag kunt
            gaan.
          </p>
        </>
      )}
      {tab === 2 && (
        <>
          <h2>{TEACHER}</h2>
          <p className="courseIntroContent">
            Marciano is een jongen die graag geniet van een pilske, en een
            enorme passie heeft voor podcasts maken.
          </p>
        </>
      )}
    </section>
  );
}
