import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import OurClub from './pages/OurClub'
import LatestNews from './pages/LatestNews'
import Players from './pages/Players'
import ResultsFixtures from './pages/ResultsFixtures'
import LeagueTable from './pages/LeagueTable'
import History from './pages/History'
import Honors from './pages/Honors'
import ContactUs from './pages/ContactUs'

import NewsItem from './pages/NewsItem'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import Videos from './pages/Videos'
import Pictures from './pages/Pictures'
import SingleNewsPost from './pages/SingleNewsPost'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql?populate=*',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Routes>
          <Route path='/' exact element={<Layout />} />
          <Route path='/ourclub' element={<OurClub />} />
          <Route path='/latestnews' element={<LatestNews />} />
          <Route path='/players' element={<Players />} />
          <Route path='/resultsfixtures' element={<ResultsFixtures />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/pictures' element={<Pictures />} />
          <Route path='/leaguetable' element={<LeagueTable />} />
          <Route path='/history' element={<History />} />
          <Route path='/honors' element={<NewsItem />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/news/:id' element={<SingleNewsPost />} />
        </Routes>
      </ApolloProvider>
    </>
  )
}

export default App
