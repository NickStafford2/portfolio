import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion"

import { useRef, useState } from "react";
function Header() {

  const [yText, setYText] = useState("10em");
  const [y, setY] = useState(10);

  const inputRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll()
  // useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"]
  // });
  const handleInputChangeY = () => {
    setYText(y + "em");
    console.log(yText)
  };
  // const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 100])
  const x = useMotionValue(0)
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
    let size = Math.min(50, 600 - latest)
    setYText(size + "px")
  })
  // useMotionValueEvent(x, "animationStart", () => {
  //   console.log("animation started on x")
  // })
  //
  // useMotionValueEvent(x, "change", (latest) => {
  //   console.log("x changed to", latest)
  // })
  return (
    <>

      <motion.nav className="page-width"
        animate={{ paddingTop: yText }}
        // transition={{ ease: "easeInOut", duration: 3 }}
        style={{
          top: 0,
          position: "fixed",
          backgroundColor: "tan",
          // translateX: translate,
          // rotateX: rotate, // rotate in X-axis
          // position: "absolute"
        }}
      >
        <div className="gradient-box">
          <a>RESUME</a>
        </div>
      </motion.nav>
      <div
        style={{
          paddingTop: "80vh"
        }}
      // ref={ref}
      >
        anchor
        {/* {{ scrollYProgress }} */}
      </div>
    </>
  );
}

export default Header
