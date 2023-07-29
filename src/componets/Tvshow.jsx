import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import MoviesList from './MoviesList';
import Footer from './Footer';
export default function Tvshow({onState,onId,movie}) {
  return (
    <>
    <Navbar/>
 <Banner url={'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'}/>
 <MoviesList
        page="1"
        title="Hindi Tv serial"
        url={"https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"}
        onState={onState}
        onId={onId}
        movie={movie}
      />
       <MoviesList
        page="1"
        title=" Popular TV serial"
        url={"https://api.themoviedb.org/3/tv/popular?language=en-US&page=3"}
        onState={onState}
        onId={onId}
        movie={movie}
      />
       <MoviesList
        page="1"
        title="Sony Plus series"
        url={"https://api.themoviedb.org/3/tv/popular?language=en-US&page=4"}
        onState={onState}
        onId={onId}
        movie={movie}
      />
       <MoviesList
        page="1"
        title="Top Reted"
        url={"https://api.themoviedb.org/3/tv/popular?language=IN-india&page=5"}
        onState={onState}
        onId={onId}
        movie={movie}
      />
      <Footer/>
    </>
  )
}
