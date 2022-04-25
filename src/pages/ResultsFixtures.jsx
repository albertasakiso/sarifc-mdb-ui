import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import FixtureCard from './cards/FixtureCard'
import ResultsCard from './cards/ResultsCard'

function ResultsFixtures() {
  return (
    <div>
      <NavBar />
      <ResultsCard />

      <FixtureCard />
      <Footer />
    </div>
  )
}

export default ResultsFixtures
