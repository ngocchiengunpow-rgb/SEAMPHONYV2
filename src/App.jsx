import React from 'react'
import Navigation from './components/Navigation'
import FloatingNav from './components/FloatingNav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import SolutionProcess from './components/SolutionProcess'
import CoreFeatures from './components/CoreFeatures'
import AcousticPerformance from './components/AcousticPerformance'
import ProjectGallery from './components/ProjectGallery'
import SWOTAnalysis from './components/SWOTAnalysis'
import BusinessModelCanvas from './components/BusinessModelCanvas'
import CompetitiveMatrix from './components/CompetitiveMatrix'
import MarketCompetition from './components/MarketCompetition'
import ProjectAchievements from './components/ProjectAchievements'
import FinancialDashboard from './components/FinancialDashboard'
import InteractiveCalculator from './components/InteractiveCalculator'
import Roadmap from './components/Roadmap'
import ESGImpact from './components/ESGImpact'
import ProjectStatus from './components/ProjectStatus'
import TheAsk from './components/TheAsk'
import TheTeam from './components/TheTeam'
import FAQObjectionHandling from './components/FAQObjectionHandling'
import ContactForm from './components/ContactForm'
import TeamFooter from './components/TeamFooter'
import BackToTop from './components/BackToTop'
import { motion, useScroll } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen font-body bg-primary-bg selection:bg-primary-cta selection:text-primary-bg">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-cta origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navigation />
      <FloatingNav />
      <main>
        <Hero />
        <Problem />
        <SolutionProcess />
        <CoreFeatures />
        <AcousticPerformance />
        <ProjectGallery />
        <SWOTAnalysis />
        <BusinessModelCanvas />
        <CompetitiveMatrix />
        <MarketCompetition />
        <ProjectAchievements />
        <FinancialDashboard />
        <InteractiveCalculator />
        <Roadmap />
        <ESGImpact />
        <ProjectStatus />
        <TheAsk />
        <TheTeam />
        <FAQObjectionHandling />
      </main>
      <ContactForm />
      <TeamFooter />
      <BackToTop />
    </div>
  )
}

export default App
