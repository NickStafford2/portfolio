import { NsCard } from '@/components/ns/nsCard'
import VisualNpmDemo from './VisualNpmDemo'

export default function SelfAdd() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height)-4rem)] flex flex-col">
      <h1 className="text-5xl font-semibold">A Bit About Me</h1>
      <div className="flex flex-row gap-6 py-10 flex-grow">
        <img
          src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9"
          className="w-full basis-1/3 max-h-[800px]"
          alt="profile-picture"
        />
        <div className="flex flex-col justify-between basis-2/3 font-semibold">
          <p>
            I am a software developer. Solving problems and helping others are
            my true passions. When I have spare time, you will find me reading
            about some obscure subject. Ancient history, quantum mechanics, I
            love it all.
          </p>
          <div>
            <h2 className="text-3xl">Education</h2>
            <ul className="text-xl">
              <li className="text-xl">
                M.S in Computer Science from Kent State University. (in
                progress)
              </li>
              <li>
                B.S in Computer Science from Kent State University. GPA: 3.98
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pt-5 text-3xl">My Best Work</h2>
            <div className="flex flex-col items-start gap-3 ">
              <NsCard
                className="min-h-36"
                title="Visual NPM"
                description="My current side project. Analyzes and visualizes NPM packages. Try it out. . . "
              >
                <VisualNpmDemo></VisualNpmDemo>
              </NsCard>
              <NsCard
                className="min-h-36"
                title="InflatableOffice.com"
                description="Hired as a web developer, I ended up working as a software architect. Successfully converted the companies main website from AngularJs to Angular."
              ></NsCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
