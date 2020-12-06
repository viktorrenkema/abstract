import { motion, AnimateSharedLayout } from "framer-motion";

export default function CourseCategories() {
  const [tab, setCurrentTab] = React.useState(1);
  return (
    <section style={{ marginLeft: "-1rem" }}>
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
                  background: "#FF0088",
                }}
              ></motion.div>
            )}
          </motion.li>
          <motion.li
            onClick={() => setCurrentTab(2)}
            style={{ opacity: tab === 2 ? "1" : "0.5" }}
          >
            Over Miljuschka
            {tab === 2 && (
              <motion.div
                layoutId="underline"
                style={{
                  height: "1px",
                  width: "100%",
                  background: "#FF0088",
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
                  background: "#FF0088",
                }}
              ></motion.div>
            )}
          </motion.li>
        </AnimateSharedLayout>
      </ul>
    </section>
  );
}
