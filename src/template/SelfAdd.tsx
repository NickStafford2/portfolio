import { NsCard } from '@/components/ns/nsCard'
import VisualNpmDemo from './VisualNpmDemo'
import angularLogo from '/logos/angularLogo.svg'
import reactLogo from '/logos/reactLogo.svg'
import javascriptLogo from '@public/logos/javascriptLogo.svg'
import cPlusPlusLogo from '/logos/cPlusPlusLogo.svg'
import pythonLogo from '/logos/pythonLogo.svg'
import neovimLogo from '/logos/neovimLogo.svg'
import viteLogo from '/logos/viteLogo.svg'
import webpackLogo from '/logos/webpackLogo.svg'
import githubLogo from '/logos/githubLogo.svg'
import angularJsLogo from '/logos/angularJsLogo.svg'
import GravitySimulation from './GravitySimulation'
import { OptionTwo } from './gravity/OptionTwo'
import casualHeadshot from '/casualHeadshot.jpg'

export default function SelfAdd() {
  return (
    <div className="flex min-h-[calc(100vh-var(--header-height)-4rem)] flex-col text-foreground">
      <h1 className="text-5xl font-semibold">A Bit About Me</h1>
      <div className="flex flex-grow flex-row gap-6 py-10">
        <img
          src={casualHeadshot}
          // src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9"
          className="max-h-[800px] w-full basis-1/3"
          alt="profile-picture"
        />
        <div className="flex basis-2/3 flex-col justify-between font-semibold">
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
            <div className="flex flex-col items-start gap-3">
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
            <div className="grid grid-cols-5 pt-6">
              <div className="bg-blue flex flex-col items-center justify-center">
                <img className="w-12" src={reactLogo} alt="React" />
                <p>React</p>
              </div>
              <div className="bg-blue flex flex-col items-center justify-center">
                <img className="w-12" src={javascriptLogo} alt="Javascript" />
                <p>Javascript</p>
              </div>
              <div className="bg-blue flex flex-col items-center justify-center">
                <img className="w-12" src={angularJsLogo} alt="AngularJs" />
                <p>AngularJs</p>
              </div>
              <div className="bg-blue flex flex-col items-center justify-center">
                <img className="w-12" src={pythonLogo} alt="Python" />
                <p>Python</p>
              </div>
              <div className="bg-blue flex flex-col items-center justify-center">
                <img className="w-12" src={neovimLogo} alt="Neovim" />
                <p>Neovim</p>
              </div>
              <div className="bg-blue flex flex-col items-center justify-center">
                <img className="w-12" src={cPlusPlusLogo} alt="C++" />
                <p>C++</p>
              </div>
              <div className="bg-blue flex flex-col items-center justify-center">
                <img className="w-12" src={angularLogo} alt="Angular" />
                <p>Angular</p>
              </div>
              <div className="bg-blue flex flex-col items-center justify-center">
                <img className="w-12" src={githubLogo} alt="Github" />
                <p>Github</p>
              </div>
              <div className="bg-blue flex flex-col items-center justify-center">
                <img className="w-12" src={webpackLogo} alt="Webpack" />
                <p>Webpack</p>
              </div>
              <div className="bg-blue flex flex-col items-center justify-center">
                <img className="w-12" src={viteLogo} alt="Vite" />
                <p>Vite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
