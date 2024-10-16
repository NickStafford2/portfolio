import { NsCard } from '@/components/ns/nsCard'
import VisualNpmDemo from './VisualNpmDemo'

export default function SelfAdd() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] flex flex-col">
      <h1 className="text-5xl font-semibold">A Bit About Me</h1>
      <div className="flex flex-row gap-6 py-10 flex-grow">
        <img
          src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9"
          className="w-full basis-1/3"
          alt="profile-picture"
        />
        <div className="flex flex-col basis-2/3 gap-3 font-semibold">
          <h2 className="text-3xl">Education</h2>
          <ul className="text-xl">
            <li className="text-xl">
              M.S in Computer Science from Kent State University. (in progress)
            </li>
            <li>
              B.S in Computer Science from Kent State University. GPA: 3.98
            </li>
          </ul>
          <h2 className="pt-5 text-3xl">My Best Work</h2>
          <div className="grid grid-cols-2 gap-3 ">
            <NsCard
              title="Visual NPM"
              description="My current side project. Analyzes and visualizes NPM packages. Try it out. . . "
            >
              <VisualNpmDemo></VisualNpmDemo>
            </NsCard>
            <NsCard
              title="InflatableOffice.com"
              description="Hired as a web developer, I ended up working as a software architect. Successfully converted the companies main website from AngularJs to Angular."
            ></NsCard>
          </div>
        </div>
      </div>
    </div>
  )
}
