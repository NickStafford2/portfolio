import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Experience() {
  return (
    <div>
      <h1 className="text-3xl pb-4">Work</h1>
      <Card className="ns-w-card">
        <CardHeader>
          <CardTitle>InflatableOffice LLC</CardTitle>
          <CardDescription>Web Developer & Software Architect</CardDescription>
        </CardHeader>
        <CardContent>
          My most significant work was with InflatableOffice LLC. While I was
          hired as a full stack web developer, I ended up working as a software
          architect.
          <Button>Learn more</Button>
          <p>
            open a side bar which discusses what I did at IO. have it just float
            there on the side in a nice container. in "projects" there is a
            section for this project. If they click it, have the big io card
            swoop down, and shove aside the other projects.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
