import { NsCard } from '@/components/ns/nsCard'
import VisualNpmDemo from './VisualNpmDemo'

export default function SelfAdd() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] flex flex-row gap-6 py-10">
      <div className="bg-gray-50 min-w-[30%]">
        <img className="" alt="profile-picture" />
      </div>
      <div className="grid flex-grow grid-cols-2 gap-3">
        <NsCard
          title="Visual NPM"
          description="My current side project. Analyzes and visualizes NPM packages. Try it out. . . "
        >
          <VisualNpmDemo></VisualNpmDemo>
        </NsCard>
        <NsCard></NsCard>
        <NsCard></NsCard>
        <NsCard></NsCard>
        <NsCard></NsCard>
        <NsCard></NsCard>
        <NsCard></NsCard>
      </div>
    </div>
  )
}
