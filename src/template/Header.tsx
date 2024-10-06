import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef, useState } from "react";
import "./Header.css";

function Header() {
  const [yText, setYText] = useState("40px");
  const [y, setY] = useState(10);

  const inputRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll();
  // useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"]
  // });
  const handleInputChangeY = () => {
    setYText(y + "em");
    // console.log(yText);
  };
  // const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  // const translate = useTransform(scrollYProgress, [0, 1], [0, 100]);
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    let size = Math.min(40, 600 - latest) / 2;
    setYText(size + "px");
  });
  // useMotionValueEvent(x, "animationStart", () => {
  //   console.log("animation started on x")
  // })
  //
  // useMotionValueEvent(x, "change", (latest) => {
  //   console.log("x changed to", latest)
  // })
  return (
    <>
      <motion.nav
        className="header"
        animate={{ paddingTop: yText, paddingBottom: yText }}
        // transition={{ ease: "easeInOut", duration: 0.3 }}
        style={
          {
            // translateX: translate,
            // rotateX: rotate, // rotate in X-axis
            // position: "absolute"
          }
        }
      >
        <h3 className="header-title">Nicholas Stafford</h3>
        <div className="gradient-box">
          <a>RESUME</a>
        </div>
      </motion.nav>
    </>
  );
}

export default Header;
