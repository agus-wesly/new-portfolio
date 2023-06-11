import Hero from '@/components/ui/home/hero'
import Skill from '@/components/ui/home/skill'
import Project from '@/components/ui/home/project'
import Footer from '@/components/ui/home/footer'

export default async function Home() {
  return (
    <>
      <Hero />
      <Skill />
      <Project />
      <Footer />
    </>
  )
}
