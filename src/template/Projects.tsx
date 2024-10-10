import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import '@/globals.css'
export function Projects() {
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl py-6">Projects</h1>
      <p>
        I love code. Below is a selection of some stuff I am working on in my
        spare time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 bg-sky-600 bg-opacity-35">
        <Card className="ns-w-card">
          <CardHeader>
            <CardTitle>Portfolio 2</CardTitle>
            <CardDescription>You are currently looking at it.</CardDescription>
          </CardHeader>
          <CardContent>
            I am starting simple. Hoping to make this pretty nice as time goes
            on.
          </CardContent>
        </Card>
        <Card className="ns-w-card">
          <CardHeader>
            <CardTitle>IO Architecture rewrite</CardTitle>
            <CardDescription>
              I can't believe this actually worked.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Without a question, my most successful programming project of my
            life. Currenty used by InflatableOffice.com. Copy description from
            linkedin and fix it.
          </CardContent>
        </Card>
        <Card className="ns-w-card">
          <CardHeader>
            <CardTitle>Visual NPM</CardTitle>
            <CardDescription>
              Visualize the tools that power the web. See it change over time.
              Coming soon. . .
            </CardDescription>
          </CardHeader>
          <CardContent>
            My current pet project. This is a collaboritive project that aims to
            create a visualization of ego networks for npm dependencies. It
            essentially dynamically searches npm packages by name to find
            package.json files, and creates a network based on every dependency
            that would appear in your package.lock.jsono. Luckily, I have been
            able to incorperate three of my graduate course projects into this.
            It is working great, and should be hosted online very soon.{' '}
          </CardContent>
        </Card>
        <Card className="ns-w-card">
          <CardHeader>
            <CardTitle>CCounter Dev</CardTitle>
            <CardDescription>
              Too nerdy and useful to not mention.
            </CardDescription>
          </CardHeader>
          <CardContent>
            This program has made a bigger impact on my life than anything one
            this list. I worked on this for at least five minutes a day for
            seven months. Built with the glorious power of google sheets, this
            solved a real life problem of mine and I use it every day.{' '}
          </CardContent>
        </Card>
        <Card className="ns-w-card">
          <CardHeader>
            <CardTitle>NBA Goat Calculator</CardTitle>
            <CardDescription>
              Can I turn opinions into a math problem?
            </CardDescription>
          </CardHeader>
          <CardContent>
            Generations have argued. Is anyone right? Who you consider the
            greatest depends on your values. This app asks what you value, and
            with the power of advanced analytics, ranks players accordingly.
            Written in C# and Asp.net. I became so frustrated at Microsoft
            Visual Studio, I ended up restarting the entire project in react,
            and Python Flask.{' '}
          </CardContent>
        </Card>
        <Card className="ns-w-card">
          <CardHeader>
            <CardTitle>DotFiles</CardTitle>
            <CardDescription>
              No Joke, these configurations contain serious code.
              <p>
                I am returning to the church of vi after many years away. It is
                glorious. I don't want to use the mouse ever again. I have spent
                way too many hours configuring my neovim setup. I started with
                kickstarter, then I ruined that configuration. Now I switched to
                my own customized version of AstroVim. Week by week, I will
                morph this beast into my perfect IDE.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            Insert image of google search "vi: did you mean emacs?" and the
            reverse
          </CardContent>
        </Card>
        <Card className="ns-w-card">
          <CardHeader>
            <CardTitle>Portfolio 1</CardTitle>
            <CardDescription>Great work for the time</CardDescription>
          </CardHeader>
          <CardContent>
            Built entirely in Python flask and lots of very clever CSS, this was
            my first serious website attempt. I was proud when I made this as an
            undergrad, but I have no desire to make websites again with simple
            templating engines. I no longer host this anymore, but I still have
            some pretty pictures.{' '}
          </CardContent>
        </Card>
        <Card className="ns-w-card">
          <CardHeader>
            <CardTitle>Syllahub</CardTitle>
            <CardDescription>Undergrad Senior Project</CardDescription>
          </CardHeader>
          <CardContent>
            Syllahub is a platform to standardize syllabus formats. Syllahub
            scrapes uploaded syllabi, stores their content, indexes them, and
            outputs them into a standardized format.{' '}
          </CardContent>
        </Card>
        <Card className="ns-w-card">
          <CardHeader>
            <CardTitle>Simple C++ Parcer</CardTitle>
            <CardDescription>How I learned C++</CardDescription>
          </CardHeader>
          <CardContent>An undergrad project</CardContent>
        </Card>
        <Card className="ns-w-card">
          <CardHeader>
            <CardTitle>Rainmeter Desktop</CardTitle>
            <CardDescription>My first successful pet project</CardDescription>
          </CardHeader>
          <CardContent>
            I wish I still had access to this. I was not happy with any of the
            windows 8 customization options, I made my perfect desktop with
            every feature I ever wanted. Customizing the volume bars was a total
            pain.{' '}
          </CardContent>
        </Card>
        <Card className="ns-w-card">
          <CardHeader>
            <CardTitle>Vpython TicTacToe</CardTitle>
            <CardDescription>My first pet project</CardDescription>
          </CardHeader>
          <CardContent>
            I wrote this before I knew what for loops were. I was so excited to
            learn to program, I made the first thing that came to mind. This is
            completely overengineered, written in a 3d Vpython engine, and I
            absolutely loved it. I even made an opponent program that would play
            against you. It is great seeing how far I have come.{' '}
          </CardContent>
        </Card>
        <Card className="ns-w-card bg-gray-400">
          <CardHeader className="p-3">
            <CardTitle>NN Code Injection</CardTitle>
          </CardHeader>
          <CardContent>
            Project in planning. Experimental idea to do AI where nodes contain
            pointers that execute arbitrary small code snippits and then pass
            the result to the next node.{' '}
          </CardContent>
        </Card>
        <Card className="ns-w-card bg-gray-400">
          <CardHeader className="p-3">
            <CardTitle>Physics Constant Checker</CardTitle>
          </CardHeader>
          <CardContent>
            This may be crazy, but has anyone tried brute force approach to see
            if any unexpected relationship exists between physics consants? Is
            the plank's constant 1/2 of Newton's constant? how about the square
            root? There are infinite potential relationships, but since the
            number of constants is not too large, I think we can get away with a
            brute force search with some dynamic programming. An api would also
            exist so that more advanced relationships between constants could be
            checked. Work in progress.
          </CardContent>
        </Card>
      </div>
      <p></p>
      <div></div>
    </div>
  )
}
