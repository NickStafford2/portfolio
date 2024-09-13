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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="parallelogram">
        <div class="no-skew">Hello World</div>
      </h1>
      <h2>Nicholas Stafford. Full Stack Developer.</h2>
      <motion.div
        className="box"
        initial={{ obacity: 0, scale: 0 }}
        animate={{ obacity: 1, scale: 1 }}
      />
      <ul>
        <li><a>Github</a><FaGithub /></li>
        <li><a>Resume</a></li>
        <li><a>Icebox</a><FaRegSnowflake /></li>
      </ul>
      <h1>Your next website</h1>
      <p>Contact my business email at ngstafford1@gmail.com.</p>
      <h1>Education</h1>
      <LuBrainCircuit />
      <h2>Masters of Computer Science - Kent State University</h2>
      <p>In progress. I am a graduate student at Kent State. Currently studying Cryptography and AI.</p>
      <h2>B.S Computer Science. GPA: 3.958 - Kent State University</h2>
      <p>You have no idea how much that A- in Latin class still urks me.</p>
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
    </>
  );
  /*
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
  */
}

export default App
