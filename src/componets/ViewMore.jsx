import React, { useState } from "react";
import "../style/ViewMore.css";
import Loader from "./Loader";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
export default function ViewMore({ onState, onId, data, title }) {
  const [movies] = useState(data);
  let getid = (value) => {
    onState(movies);
    onId(value);
  };
  if (movies) {
    return (
      <>

      <Navbar/>
        <h1 className="Heading">{title}</h1>
        <div className="allmovies">
          {movies.map((value, index) => {
            return (
              <Link
                to={`/Movie/:${value.id}`}
                key={index}
                onClick={() => getid(value.id)}
              >
                <div className="moviePoster" key={index}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                    alt=""
                  />
                </div>
              </Link>
            );
          })}
        </div>
        <Footer/>
      </>
    );
  } else {
    return <Loader />;
  }
}
