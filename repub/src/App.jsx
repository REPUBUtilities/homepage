import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import DoctrineSection from './components/sections/DoctrineSection'
import LeadershipSection from './components/sections/LeadershipSection'
import MemberCorporationsSection from './components/sections/MemberCorporationsSection'
import AllianceCTA from './components/sections/AllianceCTA'

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
        <AllianceCTA />
      </main>
      <Footer />
    </>
  )
}
