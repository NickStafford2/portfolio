import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "framer-motion"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello World</h1>
      <h2>Nicholas Stafford. Full Stack Developer.</h2>
      <p>Test</p>
      <motion.div
        className="box"
        initial={{ obacity: 0, scale: 0 }}
        animate={{ obacity: 1, scale: 1 }}
      />
      <ul>
        <li><a>Github</a></li>
        <li><a>Resume</a></li>
        <li><a>Icebox</a></li>
      </ul>
      <h1>Your next website</h1>
      <h1>About me</h1>
      <h1>Education</h1>
      <h2>Masters of Computer Science - Kent State University</h2>
      <p>In progress. I am a graduate student at Kent State. Currently studying Cryptography and AI.</p>
      <h2>B.S Computer Science. GPA: 3.958 - Kent State University</h2>
      <p>You have no idea how much that A- in Latin class still urks me.</p>
      <h1>Projects</h1>
      <h2>Visual NPM</h2>
      <p>Visualize the tools that power the web. See it change over time. Coming soon. . .</p>
      <h2>NBA Goat Calculator</h2>
      <p>Generations have argued. Is anyone right? Who you consider the greatest depends on your values. This app asks what you value, and with the power of advanced analytics, ranks players accordingly. Coming soon. . .</p>
    </div>
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
