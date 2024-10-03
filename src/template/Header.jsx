import { motion, useScroll, useTransform } from "framer-motion"

import { useRef } from "react";
function Header() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll()
  // useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"]
  // });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 100])
  return (
    <>

      {/* <nav className="page-width"> */}
      {/*   <div className="gradient-box"> */}
      {/*     <a>RESUME</a> */}
      {/*   </div> */}
      {/* </nav> */}
      <motion.div

        style={{
          paddingTop: "10em",
          translateX: translate,
          rotateX: rotate, // rotate in X-axis
          // position: "absolute"
        }}
      // translate={translate}
      // rotate={rotate}
      // style={{
      //   position: 'fixed',
      //   top: 0,
      //   height: "3em",
      //   right: 0,
      //   left: 0,
      //   backgroundColor: "red",
      //   fontSize: scrollYProgress,
      // }}
      // initial={{
      //   top: "10em",
      //   fontSize: "3em"
      // }}

      >
        Nicholas Stafford

      </motion.div>
      <div
        style={{
          paddingTop: "80vh"
        }}
        ref={ref}
      >
        anchor
        {/* {{ scrollYProgress }} */}
      </div>
    </>
  );
}

export default Header
