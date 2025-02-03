import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { NsCard } from '@/components/ns/nsCard'

interface GithubProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string
  name: string
}

export const GithubLink = ({
  className,
  href,
  name,
  ...props
}: GithubProps) => {
  return (
    <a className={cn('', className)} {...props} href={href}>
      <NsCard
        className="h-24"
        childContainerClassName="gird place-items-center pt-2"
        showImage={false}>
        <div className="flex w-fit min-w-48 flex-row gap-3 rounded-3xl px-3 py-2">
          <FaGithub className="h-12 w-12 text-primary" />
          <div className="flex flex-col">
            <h3 className="text-2xl">Github:</h3>
            <span className="text-nowrap text-sm">{name}</span>
          </div>
        </div>
      </NsCard>
    </a>
  )
}
