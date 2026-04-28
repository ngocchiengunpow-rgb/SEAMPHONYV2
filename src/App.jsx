import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problem from './components/Problem'
import SolutionProcess from './components/SolutionProcess'
import MarketCompetition from './components/MarketCompetition'
import ESGImpact from './components/ESGImpact'
import InteractiveCalculator from './components/InteractiveCalculator'
import FAQObjectionHandling from './components/FAQObjectionHandling'
import TeamFooter from './components/TeamFooter'
import CoreFeatures from './components/CoreFeatures'
import AcousticPerformance from './components/AcousticPerformance'
import ProjectGallery from './components/ProjectGallery'
import CompetitiveMatrix from './components/CompetitiveMatrix'
import BackToTop from './components/BackToTop'
import BusinessModelCanvas from './components/BusinessModelCanvas'
import SWOTAnalysis from './components/SWOTAnalysis'
import ProjectAchievements from './components/ProjectAchievements'
import FinancialViability from './components/FinancialViability'
import Roadmap from './components/Roadmap'
import ProjectStatus from './components/ProjectStatus'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen font-body bg-primary-bg selection:bg-primary-cta selection:text-primary-bg">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <SolutionProcess />
        <BusinessModelCanvas />
        <FinancialViability />
        <Roadmap />
        <CoreFeatures />
        <AcousticPerformance />
        <ProjectGallery />
        <CompetitiveMatrix />
        <MarketCompetition />
        <ProjectAchievements />
        <ESGImpact />
        <SWOTAnalysis />
        <InteractiveCalculator />
        <FAQObjectionHandling />
      </main>
      <ProjectStatus />
      <ContactForm />
      <TeamFooter />
      <BackToTop />
    </div>
  )
}

export default App
