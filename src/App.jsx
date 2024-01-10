import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Row from './Row'
import requests from './Requests'
 
function App() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Header />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Trending Movies" yellow_title fetchUrl={requests.fetchTrending} LargeRow />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Home Premiere" yellow_title fetchUrl={requests.fetchPremiere} LargeRow />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />


    </div>
  )
}

export default App