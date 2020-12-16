import { CMS_NAME } from "../lib/constants";
import { TEACHER } from "../lib/constants";
import React, { useContext } from "react";
import { GlobalState } from "../state/context";

export default function Intro({ onClick, theme, setTheme, login }) {
  const [state, setState] = useContext(GlobalState);

  return (
    <section className="presents-wrapper">
      <p className="presents-copy">presents</p>
      <h2></h2>
      <h2 className="coursename">Podcasts</h2>
      <h3 className="teacher">met {TEACHER}</h3>
    </section>
  );
}
