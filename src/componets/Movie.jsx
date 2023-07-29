import React from "react";
import MoviesList from "./MoviesList";
export default function Movie({ onState, onId,movie}){
  return (
    <>
      <MoviesList
        page="1"
        title="Trending"
        url={"https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1"}
        onState={onState}
        onId={onId}
        movie={movie}
      />
 <MoviesList
        page="1"
        title="Popular"
        url={"https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=1"}
        onState={onState}
        onId={onId}
        movie={movie}
      />
      
      <MoviesList
        page="1"
        title="Top Rated"
        url={"https://api.themoviedb.org/3/movie/top_rated"}
        onState={onState}
        onId={onId}
        movie={movie}
      />
    
      <MoviesList
        page="1"
        title="Upcoming"
        url={
          "https://api.themoviedb.org/3/movie/upcoming?&page=1"
        }
        onState={onState}
        onId={onId}
        movie={movie}
      />
     <MoviesList
        page="1"
        title="TV series"
        url={"https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"}
        onState={onState}
        onId={onId}
        movie={movie}
      />
 
    </>
  );
}
