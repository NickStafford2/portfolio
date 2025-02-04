import { NsCard } from '@/components/ns/nsCard'
import { Title1, Title2, Title3 } from '@/Title'
import casualHeadshot from '/casualHeadshotBlue.png'

export default function SelfAdd() {
  return (
    <>
      <div
        id="aboutme"
        className="col-span-12 col-start-1 mt-32 flex min-h-[colc(100vh-84px)] scroll-mt-16 flex-row flex-wrap items-start gap-16 2xl:col-span-11 2xl:col-start-2">
        <NsCard
          className="min-w-[min(100vw,60rem)] max-w-[70rem]"
          showImage={true}
          childContainerClassName="px-24 pt-6 h-[calc((100vh-64px)*0.95)] min-h-[calc((100vh-64px)*0.95)] max-h-[calc((100vh-64px)*0.95)] flex flex-row justify-around">
          <div className="self-start text-nowrap">
            <Title1 className="py-12">
              Me <span className="pl-8 font-[Roboto] font-semibold">:)</span>
            </Title1>
            <Title2 className="pb-12">I absolutely love:</Title2>
            <ul className="flex flex-col gap-8 pl-8">
              <li>Solving problems.</li>
              <li>Writing code.</li>
              <li>Helping others.</li>
              <li>Learning.</li>
              <li>Making cool things.</li>
            </ul>
          </div>
          <div className="flex-grow-0">
            <img
              src={casualHeadshot}
              // src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9"
              className="h-full w-auto min-w-80 object-contain"
              alt="profile-picture"
            />
          </div>
        </NsCard>
        <div className="flex w-fit flex-row gap-6">
          <NsCard
            className="w-fit"
            childContainerClassName="group p-6 text-nowrap">
            <Title1 className="pb-12">Education</Title1>
            <Title2>M.S in Computer Science </Title2>
            <p className="pl-4">
              GPA: 3.8 (in progress) <br />
              Kent State University. <br />
              Full time graduate student while working at Amazon.{' '}
            </p>
            <Title2 className="pt-4">B.S in Computer Science</Title2>
            <p className="pl-4">
              Kent State University
              <br /> GPA: 3.98 <br />
              <span className="invisible text-gray-600 group-hover:visible">
                You have no idea how much that A- in Latin class still urks me.
              </span>
            </p>
          </NsCard>
          <NsCard className="max-w-[50rem]" childContainerClassName="p-6">
            <Title1 className="pb-12">My Best Work</Title1>
            <Title2 className="pt-2">
              <a href="#dependencyInspection" className="underline">
                Dependecy Inspection
              </a>
            </Title2>
            <p className="pl-4">
              Analyzes and visualizes NPM dependency graph.
            </p>
            <br />
            <Title2 className="pt-4">
              <a href="#inflatableOffice" className="underline">
                InflatableOffice.com
              </a>
            </Title2>
            <p className="pl-4">
              Hired as a web developer, I ended up working as a software
              architect. Successfully converted the companies main website from
              AngularJs to Angular.
            </p>
          </NsCard>
        </div>
      </div>
    </>
  )
}
