import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Movie from './Movie'
import Footer from './Footer'

export default function Home({onState,onId,movie}) {

  return (
    <>
     
    <Navbar/>
    <Banner url={"https://api.themoviedb.org/3/movie/now_playing"}/>
    <Movie onState={onState} onId={onId} movie={movie}/>
    <Footer/>
    </>
  )
}

