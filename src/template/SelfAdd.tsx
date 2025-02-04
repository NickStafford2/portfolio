import { NsCard } from '@/components/ns/nsCard'
import { Title1, Title2, Title3 } from '@/Title'
import casualHeadshot from '/casualHeadshotBlue.png'

export default function SelfAdd() {
  return (
    <>
      <div
        id="aboutme"
        className="col-span-12 col-start-1 mt-32 flex min-h-[colc(100vh-84px)] scroll-mt-16 flex-col items-start gap-16 2xl:col-span-10 2xl:col-start-2">
        <NsCard
          className="h-full"
          showImage={true}
          childContainerClassName=" pt-6 h-[calc((100vh-64px)*0.95)] min-h-[calc((100vh-64px)*0.95)] max-h-[calc((100vh-64px)*0.95)] px-5 flex flex-row justify-around">
          <div className="self-start">
            <Title1 className="py-12">Me. :)</Title1>
            <Title2 className="pb-12">I absolutely love:</Title2>
            <ul className="flex flex-col gap-8 pl-8">
              <li>Solving problems.</li>
              <li>Writing code.</li>
              <li>Helping others.</li>
              <li>Learning.</li>
              <li>Making cool things.</li>
            </ul>
          </div>
          <img
            src={casualHeadshot}
            // src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9"
            className="h-full w-auto"
            alt="profile-picture"
          />
        </NsCard>
        <div className="flex w-fit flex-col gap-6">
          <NsCard childContainerClassName="p-6">
            <div className="">
              <div>
                <Title1 className="pb-12">Education</Title1>
                <Title2>
                  M.S in Computer Science from Kent State University. GPA: 3.8
                  (in progress)
                </Title2>
                <p>Full time graduate student while working at Amazon. </p>
                {/* Current Courses: */}
                {/* <ul className="list-desc"> */}
                {/* 	<li>- Artificial Intelligence</li> */}
                {/* 	<li>- Secure Programming</li> */}
                {/* 	<li>- Cryptography</li> */}
                {/* 	<li>- Graph Algorithms</li> */}
                {/* 	<li>- iOS Programming</li> */}
                {/* </ul> */}
                <Title2 className="pt-4">
                  B.S in Computer Science from Kent State University. GPA: 3.98
                </Title2>
                <p>
                  You have no idea how much that A- in Latin class still urks
                  me.
                </p>
              </div>
            </div>
          </NsCard>
          <NsCard childContainerClassName="p-6">
            <div className="py-4">
              <Title1 className="pb-12">My Best Work</Title1>
              <Title2 className="pt-2">
                <a href="#dependencyInspection" className="underline">
                  Dependecy Inspection
                </a>
              </Title2>
              Analyzes and visualizes NPM dependency graph.
              <br />
              <Title2 className="pt-4">
                <a href="#inflatableOffice" className="underline">
                  InflatableOffice.com
                </a>
              </Title2>
              Hired as a web developer, I ended up working as a software
              architect. Successfully converted the companies main website from
              AngularJs to Angular.
            </div>
          </NsCard>
        </div>
      </div>
    </>
  )
}
