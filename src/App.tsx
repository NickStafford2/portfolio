import './App.css'
import { Hero } from './Hero'
import { BeyondCode } from './template/BeyondCode'
import { Education } from './template/Education'
import { ProgrammingPhilosophy } from './template/ProgrammingPhilosophy'
import { Projects } from './template/Projects'
import { QuoteBox } from './template/QuoteBox'
import { Skills } from './template/Skills'

// idea. Make a terminal looking thing. use react to change text over time like someone is typing.
function App() {
  return (
    <div className="content-wrapper flex flex-col gap-20 px-20">
      <Hero></Hero>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <QuoteBox></QuoteBox>
      <BeyondCode></BeyondCode>
      <ProgrammingPhilosophy></ProgrammingPhilosophy>
      <div className="section">
        <h1>Random Ideas</h1>
        <h2>Neural Network code injection</h2>
        <p>
          Why ought neural network nodes be constrained to weights and biases?
          What if some nodes were stochastically assigned to be pointers to
          chunks of code?
        </p>
        <p>
          It would completely mess up the matrix multiplications used at the
          moment, but I keep thinking that I should test this out some time and
          see what happens.
        </p>
      </div>
    </div>
  )
}
/*
 *
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
 */
export default App
