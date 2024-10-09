import { SkillCard } from '@/template/SkillCard'
import { FaLinux } from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { RiAngularjsLine } from 'react-icons/ri'
import { SiNeovim, SiTypescript } from 'react-icons/si'
import { FaAngular, FaGithub } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa6'
import { SiJavascript } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'

export function Skills() {
  const skills = [
    {
      title: 'Neovim',
      icon: <SiNeovim className="skillcard-icon" />,
      description:
        'Neovim has changed how I program. It has been years since I last used vi, and this time, I am not going back to the mouse. ',
    },
    {
      title: 'Github',
      icon: <FaGithub className="skillcard-icon" />,
      description: 'check out all my code here',
    },
    {
      title: 'Javascript',
      icon: <SiJavascript className="skillcard-icon" />,
      description: 'check out all my code here',
    },
    {
      title: 'Typescript',
      icon: <SiTypescript className="skillcard-icon" />,
      description: 'check out all my code here',
    },
    {
      title: 'C++',
      icon: <TbBrandCpp className="skillcard-icon" />,
      description: 'check out all my code here',
    },
    {
      title: 'Python',
      icon: <FaPython className="skillcard-icon" />,
      description: 'check out all my code here',
    },
    {
      title: 'AngularJs',
      icon: <RiAngularjsLine className="skillcard-icon" />,
      description: 'check out all my code here',
    },
    {
      title: 'Angular',
      icon: <FaAngular className="skillcard-icon" />,
      description: 'check out all my code here',
    },
    {
      title: 'React',
      icon: <FaReact className="skillcard-icon" />,
      description: 'check out all my code here',
    },
    {
      title: 'Flask',
      icon: <SiFlask className="skillcard-icon" />,
      description: 'check out all my code here',
    },
    {
      title: 'Linux',
      icon: <FaLinux className="skillcard-icon" />,
      description: 'check out all my code here',
    },
  ]
  return (
    <div className="section">
      <h1>Skills</h1>
      <div className="flex flex-row flex-wrap justify-between gap-5">
        {skills.map((skill) => (
          <div className="w-96">
            <SkillCard data={skill}></SkillCard>
          </div>
        ))}
      </div>
    </div>
  )
}