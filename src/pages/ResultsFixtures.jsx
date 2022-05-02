import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import FixtureCard from './cards/FixtureCard'
import ResultsCard from './cards/ResultsCard'

function ResultsFixtures() {
  return (
    <div>
      <NavBar />
      <div>
        <i className='far fa-calendar-alt mt-2 mb-0' /> Sari Football Club
        Upcoming Fixtures
      </div>
      <FixtureCard />
      <ResultsCard />

      {/* <FixtureCard /> */}
      <Footer />
    </div>
  )
}

export default ResultsFixtures
