// import { SkillCard } from '@/template/SkillCard'
import { FaPhp } from 'react-icons/fa'
import { FaGit, FaLinux } from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { RiAngularjsLine } from 'react-icons/ri'
import { SiNeovim, SiTypescript } from 'react-icons/si'
import { FaAngular } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa6'
import { SiJavascript } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import NsSkill from '@/components/ns/NsSkill'
import { OptionTwo } from './gravity/OptionTwo'
import { Title1, Title2 } from '@/Title'
import { NsCard } from '@/components/ns/nsCard'
import NsIcon from '@/components/ns/NsIcon'

const skills = [
  {
    title: 'Javascript',
    icon: <SiJavascript />,
    value: 80,
    description: '6 years',
  },
  {
    title: 'Python',
    icon: <FaPython />,
    value: 40,
    description: '2 years',
  },
  {
    title: 'Typescript',
    icon: <SiTypescript />,
    value: 40,
    description: '3 years',
  },
  {
    title: 'Neovim',
    icon: <SiNeovim />,
    value: 40,
    description: 'daily',
  },
  {
    title: 'Linux',
    icon: <FaLinux />,
    value: 80,
    description: '10 years',
  },
  {
    title: 'Git',
    icon: <FaGit />,
    value: 80,
    description: '5 years',
  },
]

export function Skills() {
  return (
    <>
      <Title1
        id="skills"
        className="col-start-1 scroll-mt-6 pb-6 pt-36 lg:col-start-2">
        Skills
      </Title1>
      <div className="col-span-12 col-start-1 row-start-4 lg:col-span-11 lg:col-start-2">
        <NsCard className="flex w-fit flex-col" childContainerClassName="p-4 ">
          <Title2 className="pb-4">Current Stack</Title2>
          <div className="flex flex-row gap-8">
            <NsSkill svg={<FaPython />} title="Python"></NsSkill>
            <NsSkill svg={<SiFlask />} title="Flask"></NsSkill>
            <NsSkill svg={<FaReact />} title="React"></NsSkill>
            <NsSkill svg={<SiTypescript />} title="Typescript "></NsSkill>
          </div>
        </NsCard>
      </div>
      <div className="col-span-12 col-start-1 row-start-5 flex flex-col gap-6 pt-10 lg:col-span-10 lg:col-start-2 xl:flex-row">
        <div className="w-fit">
          <NsCard childContainerClassName="overflow-hidden">
            <OptionTwo></OptionTwo>
          </NsCard>
        </div>
        <NsCard childContainerClassName=" w-fit flex flex-col gap-4 p-4 min-w-[20em]">
          <Title2 className="pb-6">My Focus:</Title2>
          <div className="flex flex-row flex-wrap justify-start gap-4">
            {skills.map((skill) => (
              <NsSkill
                key={skill.title}
                svg={skill.icon}
                description={skill.description}
                title={skill.title}></NsSkill>
            ))}
          </div>
          <p>
            I am proud to have learned programming with C. I value the
            fundimentals.{' '}
          </p>
        </NsCard>
      </div>
    </>
  )
}
