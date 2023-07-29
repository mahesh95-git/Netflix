import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import MoviesList from './MoviesList'

export default function Movies({ onState, onId,movie}) {
  return (
  <>
  <Navbar/>
<Banner url={'https://api.themoviedb.org/3/movie/popular?&page=2'}/>
<MoviesList
        page="1"
        title="Popular"
        url={"https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=1"}
        onState={onState}
        onId={onId}
        movie={movie}
      />
      
<MoviesList
        page="3"
        title="actions"
        url={"https://api.themoviedb.org/3/search/movie?query=actions"}
        onState={onState}
        onId={onId}
        movie={movie}
      />
      <MoviesList
        page="1"
        title="Horror"
        url={"https://api.themoviedb.org/3/search/movie?query=horror"}
        onState={onState}
        onId={onId}
        movie={movie}
      />
<Footer/>
  </>
  )
}
