export function ProgrammingPhilosophy() {
  return (
    <div className="section">
      <div>
        <h2>programming philosophy</h2>
        <p>
          i prefer pragmatisim over theory. i aim to solve the problem as
          simplpy as i can. once i do, i take plenty of time to refactor. unless
          i have a very unique use case, i don't like to get too clever.{' '}
        </p>
        <p>
          paradigms are not dogma. i like to use the one that best suits the
          job. i represent my data as objects. i represent processes as
          functions using procedural programming. whenever i have simple input
          and output, i write pure virtual functions with no side effects. keep
          it simple stupid (kiss). make your code as simple as possible, and no
          simpler.
        </p>
        <p>
          i have come to dislike object oriented programming. it has its uses,
          but it ends up with so much boilerplate. i love the gang of four, but
          i can't avoid thinking that oop overcomplicates so much. for example,
          if your program logic is best conceptualized as a series of steps, why
          ought it be in an object? doesn't a function seem much more natural?
          functions do things. objects are things.{' '}
        </p>
        <p>
          inheritance is my enemy. i don't often get hyper-opinionated, but this
          is my exception. i don't understand why we teach this in schools.
          every time i have ever used it, it makes things unnecessarily
          complicated and fragile. inheritance should not be a default feature
          in languages. i would rather it be imported via some obscure library
          if for some extraordinary reason you need it.
        </p>
        <p>
          where ever i can, i try to separate my business logic from the
          libraries i am using. i put as much of my own code as possible into
          vanilla typescript files without imports.
        </p>
      </div>
      <div>
        <h2>Too many Frameworks</h2>
        <p>
          One thing I regret is learning too many frameworks and tools. I became
          an expert at webpack and angularJS, and I seriously doubt I will use
          that knowledge again. I have started so many projects that fizzled
          out, and spent so many hours learning new frameworks that I never use
          again.
        </p>
        <p>
          Currently I am learning React. Angular has been far too slow and
          opinionated for me.{' '}
        </p>
      </div>
    </div>
  )
}
