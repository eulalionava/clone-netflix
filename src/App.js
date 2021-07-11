import React from 'react';
import { Row } from './ui/Row';
import './App.css';
import { Banner } from './ui/Banner';
import { request } from './helpers/request';
import { Nav } from './ui/Nav';

export const App = ()=>{
  return(
    <div>
      <Nav/>
      <Banner/>
      <Row 
        title="NETFLIX ORINALS" 
        fetchUrl={ request.fetchNetflixOriginals}
        isLargeRow={ true }/>
      <Row title="Trending Now" fetchUrl={ request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={ request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={ request.fetchActionsMovies}/>
      <Row title="Comedy Movies" fetchUrl={ request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={ request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={ request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={ request.fetchDocumentaries}/>
    </div>
  )
}
