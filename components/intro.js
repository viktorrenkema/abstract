import { CMS_NAME } from "../lib/constants";
import { TEACHER } from "../lib/constants";

export default function Intro() {
  return (
    <section className="presents-wrapper">
      <p className="presents-copy">presents</p>
      <h2 className="coursename">Podcasts</h2>
      <h3 className="teacher">met {TEACHER}</h3>
    </section>
  );
}
