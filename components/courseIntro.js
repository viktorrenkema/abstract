import CourseCategories from "../components/courseCategories";

export default function CourseIntro() {
  return (
    <section className="containerCourseIntro">
      <CourseCategories></CourseCategories>
      <h2 className="">
        Lekker<h2 className="inlineTeacher"> met Miljuschka Witzenhausen</h2>
      </h2>
      <p className="courseIntroContent">
        Ben je op zoek naar lekkere en leuke recepten om te maken? Ik heb er een
        groot aantal voor je verzameld. Van ontbijt recepten tot oven recepten
        en van snelle recepten tot vlees recepten: je vindt het allemaal op mijn
        website terug. En ook voor speciale gelegenheden kun je hier altijd wel
        een geschikt recept vinden. <br />
        <br />
        Wat te denken van mijn kerst recepten, sinterklaas recepten en oud en
        nieuw recepten? Wat er ook te vieren valt of waar je ook een gerecht
        voor wilt maken: de kans is groot dat je hier iets heerlijks en
        geweldigs vindt.
      </p>
    </section>
  );
}
