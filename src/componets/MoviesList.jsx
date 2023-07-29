import "../style/Movie.css";
import {AiOutlineRight} from'react-icons/ai'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from './Loader'

export default function MoviesList({ title, url, onState, onId,movie }) {
  let [getdata, setdata] = useState(null);
 
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGE1MDQ1ZDMxM2FhN2ZhNmJmMjI4OGJmNWM1ZjMxOCIsInN1YiI6IjY0OTAxZDIwYzJmZjNkMDExY2JhODY2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KDBPZsJJO0M66m-sVvREzSau_VH3GaR4SEIfGs3oaLM",
    },
  };
  let data = async (options, url) => {
    try {
      
    let respone = await fetch(url, options);
    let givedata = await respone.json();
    setdata(givedata.results);
   
    }
    catch(error){
   
    }
  };
  useEffect(() => {
    data(options, url);
   
  // eslint-disable-next-line
  }, []);
  let getid = (value) => {
    onState(getdata);
    onId(value);
  };
  const seddata=()=>{
    movie(getdata,title)
  }
  if (getdata) {
    return (
      <>
        <div className="moviesheader">
       
          <div className="heading">
          {title}
          </div>
          <div className="viewAll">
            <button onClick={seddata}>
           <spna><Link to="/showAll">View All </Link></spna><span><AiOutlineRight/></span>
            </button>
          </div>
          </div>
        <div className="movieList">
          {getdata.map((value, index) => {
            return (
              <Link
                to={`/Movie/:${value.id}`}
                key={index}
                onClick={() => getid(value.id)}
              >
                <div className="container1" key={index}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                    alt=""
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </>
    );
  } else {
   return(
    <Loader/>
   )
  }
}
