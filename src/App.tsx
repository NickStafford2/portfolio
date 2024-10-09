import './App.css'
import { Hero } from './Hero'
import { BeyondCode } from './template/BeyondCode'
import { Education } from './template/Education'
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
      <div className="section">
        <div>
          <h2>Programming Philosophy</h2>
          <p>
            I prefer pragmatisim over theory. I aim to solve the problem as
            simplpy as I can. Once I do, I take plenty of time to refactor.
            Unless I have a very unique use case, I don't like to get too
            clever.{' '}
          </p>
          <p>
            Paradigms are not dogma. I like to use the one that best suits the
            job. I represent my data as objects. I represent processes as
            functions using procedural programming. Whenever I have simple input
            and output, I write pure virtual functions with no side effects.
            Keep it simple stupid (KISS). Make your code as simple as possible,
            and no simpler.
          </p>
          <p>
            I have come to dislike object oriented programming. It has its uses,
            but it ends up with so much boilerplate. I love the gang of four,
            but I can't avoid thinking that OOP overcomplicates so much. For
            example, if your program logic is best conceptualized as a series of
            steps, why ought it be in an object? Doesn't a function seem much
            more natural? Functions do things. Objects are things.{' '}
          </p>
          <p>
            Inheritance is my enemy. I don't often get hyper-opinionated, but
            this is my exception. I don't understand why we teach this in
            schools. Every time I have ever used it, it makes things
            unnecessarily complicated and fragile. Inheritance should not be a
            default feature in languages. I would rather it be imported via some
            obscure library if for some extraordinary reason you need it.
          </p>
          <p>
            Where ever I can, I try to separate my business logic from the
            libraries I am using. I put as much of my own code as possible into
            vanilla Typescript files without imports.
          </p>
        </div>
        <div>
          <h2>Too many Frameworks</h2>
          <p>
            One thing I regret is learning too many frameworks and tools. I
            became an expert at webpack and angularJS, and I seriously doubt I
            will use that knowledge again. I have started so many projects that
            fizzled out, and spent so many hours learning new frameworks that I
            never use again.
          </p>
          <p>
            Currently I am learning React. Angular has been far too slow and
            opinionated for me.{' '}
          </p>
        </div>
        <div>
          <h2>Epistemology</h2>
          <p>
            I really nerd out about this. Epistemology is the most useful thing
            in philosophy. I find that how you learn is more important that what
            you know. I enjoy questioning the processes by which we learn. How
            would you know if you were wrong? What method did you use to come to
            this belief? Do you want this belief to be true? How do you avoid
            confermation bias?
          </p>
          <p>
            Me and my friends have these sorts of conversations. It is
            incredible where they lead.{' '}
          </p>
        </div>
      </div>
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
