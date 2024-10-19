import './App.css'
import { Hero } from './Hero'
import HeroBackground from './HeroBackground'
import { BeyondCode } from './template/BeyondCode'
import { Education } from './template/Education'
import { Experience } from './template/Experience'
import { OptionTwo } from './template/gravity/OptionTwo'
import { ProgrammingPhilosophy } from './template/ProgrammingPhilosophy'
import { Projects } from './template/Projects'
import { QuoteBox } from './template/QuoteBox'
import { RandomIdeas } from './template/RandomIdeas'
import SelfAdd from './template/SelfAdd'
import { Skills } from './template/Skills'
// import Three from './Three'
import Scene from './three/threeWithShaders.tsx'

function App() {
  return (
    <div className="overflow-x-hidden text-foreground" style={{}}>
      <HeroBackground></HeroBackground>
      {/* <Three></Three> */}
      <Scene></Scene>
      <div className="content-wrapper flex flex-col gap-6 px-20">
        <Hero></Hero>
        {/* <div className=" h-10 w-[200%] mb-16 animated-gradient"></div> */}
        <SelfAdd></SelfAdd>
        <OptionTwo></OptionTwo>
        <h1 id="experience" className="pt-40 text-5xl">
          Experience
        </h1>
        <div className="flex flex-col">
          <Education></Education>
          <Experience></Experience>
        </div>
        {/* idea. add a fancy svg animation here */}
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
