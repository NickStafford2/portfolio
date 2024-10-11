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

// idea. Make a terminal looking thing. use react to change text over time like someone is typing.
function App() {
  return (
    <div className="content-wrapper flex flex-col gap-20 px-20">
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
  )
}

export default App
