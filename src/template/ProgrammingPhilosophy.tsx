import { NsCard } from '@/components/ns/nsCard'
import NsCollapse from '@/components/ns/NsCollapse'

export function ProgrammingPhilosophy() {
  return (
    <div className="min-h-screen">
      <h2 className="pb-10 text-6xl">Programming Hot Takes</h2>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <NsCard>
          <NsCollapse title="IDE Wars" description="The return of the king">
            <p className="p-4">
              VI is back with a vengence. All the cool kids are doing it. No
              more mice.
            </p>
          </NsCollapse>
        </NsCard>

        <NsCard>
          <NsCollapse title="Limit Abstractions" description="Just get it done">
            <p>
              I prefer pragmatisim over theory. i aim to solve the problem as
              simplpy as i can. once i do, i take plenty of time to refactor.
              unless i have a very unique use case, i don't like to get too
              clever.
            </p>
          </NsCollapse>
        </NsCard>
        <NsCard>
          <NsCollapse title="DRY" description="Don't overdo it.">
            <p>
              Overuse of this has caused way too many headaches. Sometimes,
              repetition is worth the tradeoff if it helps with clarity.
            </p>
          </NsCollapse>
        </NsCard>
        <NsCard>
          <NsCollapse
            title="Programing Paradigmn"
            description="
              Think inside the box. And outside. Actually, just ignore the box.
            "
          >
            <p>
              Paradigms are not dogma. I like to use the one that best suits the
              job. I represent my data as objects. I represent processes as
              functions using procedural programming. Whenever I have simple
              input and output, I write pure virtual functions with no side
              effects. keep it simple stupid (kiss). make your code as simple as
              possible, and no simpler.
            </p>
          </NsCollapse>
        </NsCard>
        <NsCard>
          <NsCollapse title="Object Oriented Programming" description="">
            <p>Objects should not orient how you solve problems.</p>
          </NsCollapse>
        </NsCard>
        <NsCard>
          <NsCollapse
            title="Inheritance"
            description="Why do we still teach this?"
          >
            <p>
              Inheritance is my enemy. i don't often get hyper-opinionated, but
              this is my exception. i don't understand why we teach this in
              schools. every time i have ever used it, it makes things
              unnecessarily complicated and fragile. inheritance should not be a
              default feature in languages. i would rather it be imported via
              some obscure library if for some extraordinary reason you need it.
            </p>
          </NsCollapse>
        </NsCard>
        <NsCard>
          <NsCollapse
            title="Frameworks"
            description="Keep the relationship casual."
          >
            <p>
              Where ever i can, i try to separate my business logic from the
              libraries i am using. i put as much of my own code as possible
              into vanilla typescript files without imports.
            </p>
          </NsCollapse>
        </NsCard>
        <NsCard>
          <NsCollapse
            title="Too many Frameworks"
            description="Keep the relationship casual."
          >
            <p>
              One thing I regret is learning too many frameworks and tools. I
              became an expert at webpack and angularJS, and I seriously doubt I
              will use that knowledge again. I have started so many projects
              that fizzled out, and spent so many hours learning new frameworks
              that I never use again.
            </p>
          </NsCollapse>
        </NsCard>
        <NsCard>
          <NsCollapse title="KISS" description="Keep it Simple Stupid">
            <p>
              Don't get clever with code. Even if it makes perfect sense now, it
              won't be so clear when you read it again in a few months. Design
              code so that it can be understood by your coworkers on their worst
              days. Design it to make sence when you are exhausted and hung
              over.
            </p>
          </NsCollapse>
        </NsCard>
      </div>
    </div>
  )
}
