import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
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
    <Card className="w-96">
      <CardHeader className="p-3">
        <CardTitle className="flex flex-row items-center">
          <span className="pr-8">{data.icon}</span>
          <span>- {data.title}</span>
        </CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={33}></Progress>
      </CardContent>
    </Card>
  )
}
