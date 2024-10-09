import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Projects() {
  return (
    <div className="h-screen">
      <h1 className="text-5xl py-6">Projects</h1>
      <p>
        I love code. Below is a selection of some stuff I am working on in my
        spare time.
      </p>
      <div className="flex flex-row gap-4">
        <Card className="min-w-48">
          <CardHeader>
            <CardTitle>Visual NPM</CardTitle>
            <CardDescription>
              Visualize the tools that power the web. See it change over time.
              Coming soon. . .
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="min-w-48">
          <CardHeader>
            <CardTitle>NBA Goat Calculator</CardTitle>
            <CardDescription>
              Generations have argued. Is anyone right? Who you consider the
              greatest depends on your values. This app asks what you value, and
              with the power of advanced analytics, ranks players accordingly.
              Coming soon. . .
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="min-w-48">
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
      </div>
      <p></p>
      <div></div>
    </div>
  )
}
