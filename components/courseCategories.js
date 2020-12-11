import { motion, AnimateSharedLayout } from "framer-motion";
import { TEACHERFN } from "../lib/constants";
import { THEME_TINT } from "../lib/constants";

export default function CourseCategories({ tab, setCurrentTab }) {
  return (
    <section className="wrap-courseCategories">
      <ul>
        <AnimateSharedLayout transition={{ duration: 0.5, ease: "anticipate" }}>
          <motion.li
            onClick={() => setCurrentTab(1)}
            style={{ opacity: tab === 1 ? "1" : "0.5" }}
          >
            Over de course
            {tab === 1 && (
              <motion.div
                layoutId="underline"
                style={{
                  height: "1px",
                  width: "100%",
                  background: `${THEME_TINT}`,
                  marginTop: "-2px",
                }}
              ></motion.div>
            )}
          </motion.li>
          <motion.li
            onClick={() => setCurrentTab(2)}
            style={{ opacity: tab === 2 ? "1" : "0.5" }}
          >
            Over {TEACHERFN}
            {tab === 2 && (
              <motion.div
                layoutId="underline"
                style={{
                  height: "1px",
                  width: "100%",
                  background: `${THEME_TINT}`,
                  marginTop: "-2px",
                }}
              ></motion.div>
            )}
          </motion.li>
          <motion.li
            onClick={() => setCurrentTab(3)}
            style={{ opacity: tab === 3 ? "1" : "0.5" }}
          >
            Wat vinden anderen
            {tab === 3 && (
              <motion.div
                layoutId="underline"
                style={{
                  height: "1px",
                  width: "100%",
                  background: `${THEME_TINT}`,
                  marginTop: "-2px",
                }}
              ></motion.div>
            )}
          </motion.li>
        </AnimateSharedLayout>
      </ul>
    </section>
  );
}
