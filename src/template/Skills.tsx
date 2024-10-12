import { SkillCard } from '@/template/SkillCard'
import { FaGit, FaLinux } from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { RiAngularjsLine } from 'react-icons/ri'
import { SiNeovim, SiTypescript } from 'react-icons/si'
import { FaAngular, FaGithub } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa6'
import { SiJavascript } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import NsSkill from '@/components/ns/NsSkill'

const skills = [
  {
    title: 'Neovim',
    icon: <SiNeovim className="skillcard-icon" />,
    value: 40,
    description: '3 months daily',
  },

  {
    title: 'Git',
    icon: <FaGit className="skillcard-icon" />,
    value: 60,
    description: '3 years',
  },
  {
    title: 'GitHub',
    icon: <FaGithub className="skillcard-icon" />,
    value: 60,
    description: '3 years',
  },
  {
    title: 'Javascript',
    icon: <SiJavascript className="skillcard-icon" />,
    value: 80,
    description: '4 years',
  },
  {
    title: 'Typescript',
    icon: <SiTypescript className="skillcard-icon" />,
    value: 40,
    description: '3 years',
  },
  {
    title: 'C++',
    icon: <TbBrandCpp className="skillcard-icon" />,
    value: 60,
    description: '2 years',
  },
  {
    title: 'Python',
    icon: <FaPython className="skillcard-icon" />,
    value: 40,
    description: '2 years infrequent',
  },
  {
    title: 'AngularJs',
    icon: <RiAngularjsLine className="skillcard-icon" />,
    value: 85,
    description: '3 years',
  },
  {
    title: 'Angular',
    icon: <FaAngular className="skillcard-icon" />,
    value: 40,
    description: '2 years',
  },
  {
    title: 'React',
    icon: <FaReact className="skillcard-icon" />,
    value: 25,
    description: '2 months recent',
  },
  {
    title: 'Flask',
    icon: <SiFlask className="skillcard-icon" />,
    value: 30,
    description: '4 months',
  },
  {
    title: 'Linux',
    icon: <FaLinux className="skillcard-icon" />,
    value: 80,
    description: '10 years',
  },
]

export function Skills() {
  return (
    <div id="skills" className="mt-48 min-h-screen pt-[var(--header-height)] ">
      <h1 className="text-5xl py-5">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 ">
        {skills.map((skill) => (
          <NsSkill
            key={skill.title}
            svg={skill.icon}
            description={skill.description}
            title={skill.title}
            skill={skill.value}
          ></NsSkill>
        ))}
      </div>
    </div>
  )
}
