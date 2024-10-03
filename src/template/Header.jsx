import { motion, useScroll, useTransform } from "framer-motion"

import { useRef, useState } from "react";
function Header() {

  const [yText, setYText] = useState("10em");
  const [y, setY] = useState(10);

  const inputRef = useRef(null);
  const { scrollYProgress } = useScroll()
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
  return (
    <>
      <input className="text-black" value={y} type="number" onChange={e => setY(e.target.value)} />
      <button className="text-black bg-sky-50" onClick={handleInputChangeY}>Change Height</button>
      {/* <nav className="page-width"> */}
      {/*   <div className="gradient-box"> */}
      {/*     <a>RESUME</a> */}
      {/*   </div> */}
      {/* </nav> */}
      <motion.div
        animate={{ paddingTop: yText }}
        transition={{ ease: "easeInOut", duration: 3 }}
        style={{
          backgroundColor: "tan",
          paddingTop: "10em",
          // translateX: translate,
          // rotateX: rotate, // rotate in X-axis
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
      // ref={ref}
      >
        anchor
        {/* {{ scrollYProgress }} */}
      </div>
    </>
  );
}

export default Header
