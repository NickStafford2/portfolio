import { Progress } from '@/components/ui/progress'
import { ReactElement } from 'react'

export interface SkillCardInput {
  data: {
    title: string
    icon: ReactElement
    description: string
  }
}

export function SkillCard({ data }: SkillCardInput) {
  return (
    <div className="w-96">
      <h1 className="text-2xl">{data.title}</h1>
      {data.icon}
      <p>{data.description}</p>
      <Progress value={33}></Progress>
    </div>
  )
}
