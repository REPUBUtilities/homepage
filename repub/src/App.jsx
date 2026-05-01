import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import DoctrineSection from './components/sections/DoctrineSection'
import LeadershipSection from './components/sections/LeadershipSection'
import MemberCorporationsSection from './components/sections/MemberCorporationsSection'
import RecruitmentSection from './components/sections/RecruitmentSection'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DoctrineSection />
        <LeadershipSection />
        <MemberCorporationsSection />
        <RecruitmentSection />
      </main>
      <Footer />
    </>
  )
}
