import TextWriter from './components/uiBeats/TextWriter'
import { Progress } from './components/ui/progress'

export function Hero() {
  return (
    <div className="h-screen bg-gradient-to-t from-cyan-50 to-gray-700 flex justify-center flex-col">
      <h1 className="text-6xl font-extrabold">Nicholas Stafford</h1>
      <TextWriter
        text="Full Stack Developer"
        className="text-3xl mb-6"
        delay={0.1}
      />
      <h2>Full Stack Developer</h2>
      <Progress value={33}></Progress>
      <TextWriter text="Got Work?" className="text-3xl mb-1" delay={0.1} />
      <TextWriter text="I Freelance" className="text-1xl mb-6" delay={0.2} />
    </div>
  )
}
