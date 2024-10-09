import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
export function ProgrammingPhilosophy() {
  return (
    <div className="min-h-screen">
      <h2>Thoughts for other Nerds</h2>
      <div className="flex flex-row gap-4">
        <Card className="min-w-48">
          <CardHeader className="p-3">
            <CardTitle>Limit Abstractions</CardTitle>
            <CardDescription>Just get it done</CardDescription>
          </CardHeader>
          <CardContent>
            I prefer pragmatisim over theory. i aim to solve the problem as
            simplpy as i can. once i do, i take plenty of time to refactor.
            unless i have a very unique use case, i don't like to get too
            clever.
          </CardContent>
        </Card>
        <Card className="min-w-48">
          <CardHeader className="p-3">
            <CardTitle>DRY</CardTitle>
            <CardDescription>Don't overdoo it.</CardDescription>
          </CardHeader>
          <CardContent>
            Overuse of this has caused way too many headaches. Sometimes,
            repetition is worth the tradeoff if it helps with clarity.
          </CardContent>
        </Card>
        <Card className="min-w-48">
          <CardHeader className="p-3">
            <CardTitle>Programing Paradigmn</CardTitle>
            <CardDescription>
              Think inside the box. And outside. Actually, just ignore the box.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Paradigms are not dogma. I like to use the one that best suits the
            job. I represent my data as objects. I represent processes as
            functions using procedural programming. Whenever I have simple input
            and output, I write pure virtual functions with no side effects.
            keep it simple stupid (kiss). make your code as simple as possible,
            and no simpler.
          </CardContent>
        </Card>
        <Card className="min-w-48">
          <CardHeader className="p-3">
            <CardTitle>Object Oriented Programming</CardTitle>
            <CardDescription>
              Objects should not orient how you solve problems.
            </CardDescription>
          </CardHeader>
          <CardContent>
            I have come to dislike object oriented programming. it has its uses,
            but it ends up with so much boilerplate. i love the gang of four,
            but i can't avoid thinking that oop overcomplicates so much. for
            example, if your program logic is best conceptualized as a series of
            steps, why ought it be in an object? doesn't a function seem much
            more natural? functions do things. objects are things.
          </CardContent>
        </Card>
        <Card className="min-w-48">
          <CardHeader className="p-3">
            <CardTitle>Inheritance</CardTitle>
            <CardDescription>Why do we still teach this?</CardDescription>
          </CardHeader>
          <CardContent>
            Inheritance is my enemy. i don't often get hyper-opinionated, but
            this is my exception. i don't understand why we teach this in
            schools. every time i have ever used it, it makes things
            unnecessarily complicated and fragile. inheritance should not be a
            default feature in languages. i would rather it be imported via some
            obscure library if for some extraordinary reason you need it.
          </CardContent>
        </Card>
        <Card className="min-w-48">
          <CardHeader className="p-3">
            <CardTitle>Frameworks</CardTitle>
            <CardDescription>Keep the relationship casual.</CardDescription>
          </CardHeader>
          <CardContent>
            Where ever i can, i try to separate my business logic from the
            libraries i am using. i put as much of my own code as possible into
            vanilla typescript files without imports.
          </CardContent>
        </Card>
        <Card className="min-w-48">
          <CardHeader className="p-3">
            <CardTitle>Too many Frameworks</CardTitle>
            <CardDescription>Keep the relationship casual.</CardDescription>
          </CardHeader>
          <CardContent>
            One thing I regret is learning too many frameworks and tools. I
            became an expert at webpack and angularJS, and I seriously doubt I
            will use that knowledge again. I have started so many projects that
            fizzled out, and spent so many hours learning new frameworks that I
            never use again.
          </CardContent>
        </Card>
        <Card className="min-w-48">
          <CardHeader className="p-3">
            <CardTitle>KISS</CardTitle>
            <CardDescription>Keep it Simple Stupid</CardDescription>
          </CardHeader>
          <CardContent>
            Don't get clever with code. Even if it makes perfect sense now, it
            won't be so clear when you read it again in a few months. Design
            code so that it can be understood by your coworkers on their worst
            days. Design it to make sence when you are exhausted and hung over.
          </CardContent>
        </Card>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <h2>Too many Frameworks</h2>
        <p></p>
        <p>
          Currently I am learning React. Angular has been far too slow and
          opinionated for me.
        </p>
      </div>
    </div>
  )
}
