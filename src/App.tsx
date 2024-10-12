import './App.css'
import { Hero } from './Hero'
import { BeyondCode } from './template/BeyondCode'
import { Education } from './template/Education'
import { Experience } from './template/Experience'
import { ProgrammingPhilosophy } from './template/ProgrammingPhilosophy'
import { Projects } from './template/Projects'
import { QuoteBox } from './template/QuoteBox'
import { RandomIdeas } from './template/RandomIdeas'
import { Skills } from './template/Skills'

// import sample from './assets/AbstractDots.mp4'
// import sample from './assets/AbstractWaves.mp4'
// too big. edid with kdenlive. maybe
import sample from './assets/vecteezy_binary-code-with-numbers-moving-downward-on-screen_2015336.mov'
// import sample from './assets/Particle_Wave_4K_Motion_Background_Loop.mp4'
// <a href="https://www.vecteezy.com/free-videos/binary-code">Binary Code Stock Videos by Vecteezy</a>
// idea. Make a terminal looking thing. use react to change text over time like someone is typing.
function App() {
  return (
    <div className="overflow-x-hidden">
      <video
        className="videoTag absolute h-full top-0 w-auto max-w-none overflow-x-hidden "
        autoPlay
        loop
        muted
        style={{
          // transform: 'rotateX(180deg)',
          zIndex: -998,
        }}
      >
        <source src={sample} type="video/mp4" />
      </video>
      <div className="content-wrapper flex flex-col gap-0 px-20">
        <Hero></Hero>
        <h1 className="text-5xl">Experience</h1>
        <div id="experience" className="flex flex-row">
          <Education></Education>
          <Experience></Experience>
        </div>
        <Projects></Projects>
        <Skills></Skills>
        <ProgrammingPhilosophy></ProgrammingPhilosophy>
        <BeyondCode></BeyondCode>
        <QuoteBox></QuoteBox>
        <RandomIdeas></RandomIdeas>
      </div>
    </div>
  )
}

export default App
