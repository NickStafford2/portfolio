import { NsCard } from '@/components/ns/nsCard'
import NsCollapse from '@/components/ns/NsCollapse'
import { Button } from '@/components/ui/button'

export function Experience() {
  return (
    <div>
      <h1 className="pb-4 pt-10 text-3xl">Work</h1>
      <NsCard>
        <NsCollapse title="InflatableOffice LLC">
          <h3>Web Developer & Software Architect</h3>
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
        </NsCollapse>
      </NsCard>
    </div>
  )
}
