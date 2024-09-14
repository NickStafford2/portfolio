import { useState } from 'react'
import { FaLinux } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import reactLogo from './assets/react.svg'
import { SiNeovim } from "react-icons/si";
import { RiAngularjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import viteLogo from '/vite.svg'
import { SiJavascript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaRegSnowflake } from "react-icons/fa";
import './App.css'
import { motion } from "framer-motion"



// idea. Make a terminal looking thing. use react to change text over time like someone is typing. 
//
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page-wrapper page-width">
      <motion.div
        className="banner"
        animate={{
          skew: [0, -20, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 1, 2],
          repeat: Infinity,
          repeatDelay: 0
        }}
      >
        <motion.h1>
          Hello World
        </motion.h1>
      </motion.div>
      <h2>Nicholas Stafford. Full Stack Developer.</h2>
      <motion.div
        className="box"
        initial={{ obacity: 0, scale: 0 }}
        animate={{ obacity: 1, scale: 1 }}
      />
      <div className="section">
        <ul>
          <li><a>Github</a><FaGithub /></li>
          <li><a>Resume</a></li>
          <li><a>Icebox</a><FaRegSnowflake /></li>
        </ul>
      </div>
      <div className="section">
        <h1>Your next website</h1>
        <p>Contact my business email at ngstafford1@gmail.com.</p>
      </div>
      <div className="section">
        <h1>Education</h1>
        <LuBrainCircuit />
        <h2>Masters of Computer Science - Kent State University</h2>
        <p>In progress. I am a graduate student at Kent State. Currently studying Cryptography and AI.</p>
        <h2>B.S Computer Science. GPA: 3.958 - Kent State University</h2>
        <p>You have no idea how much that A- in Latin class still urks me.</p>
      </div>
      <div className="section">
        <h1>Technology</h1>
        <h2>Languages</h2>
        <ul>
          <li>Typescript<SiTypescript /></li>
          <li>Javascript<SiJavascript /></li>
          <li>C++<TbBrandCpp /></li>
          <li>Python<FaPython /></li>
        </ul>
        <h2>Frameworks</h2>
        <ul>
          <li>AngularJS<RiAngularjsLine /></li>
          <li>Angular<FaAngular className="icon" /></li>
          <li>React<FaReact /></li>
          <li>Flask<SiFlask /></li>
        </ul>
        <h2>Environment</h2>
        <SiNeovim className="icon" />
        <p>I am a big fan of Neovim.</p>
        <p>I primarily use Linux<FaLinux /></p>
        <h1>Open Source</h1>
        <p>I love code. Below is a selection of some of my pet projects.</p>
        <h2>Visual NPM</h2>
        <p>Visualize the tools that power the web. See it change over time. Coming soon. . .</p>
        <h2>NBA Goat Calculator</h2>
        <p>Generations have argued. Is anyone right? Who you consider the greatest depends on your values. This app asks what you value, and with the power of advanced analytics, ranks players accordingly. Coming soon. . .</p>
        <h2>Neovim Config</h2>
        <p>Link</p>
      </div>
      <div className="section">
        <h1>Keep in mind</h1>
        <p className="quote-box" > If a programming language does not make you think. It isn't worth using.</p>
      </div>
    </div>
  );
}

export default App
