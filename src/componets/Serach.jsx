import React from "react";
import "../style/search.css";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import  Loader from './Loader'
function Serach({ onState, onId }) {
  let [getdata, setdata] = useState(null);
  const [input, setinput] = useState("horror");
  const url = `https://api.themoviedb.org/3/search/multi?query=${input}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGE1MDQ1ZDMxM2FhN2ZhNmJmMjI4OGJmNWM1ZjMxOCIsInN1YiI6IjY0OTAxZDIwYzJmZjNkMDExY2JhODY2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KDBPZsJJO0M66m-sVvREzSau_VH3GaR4SEIfGs3oaLM",
    },
  };
  let data = async (options, url) => {
    let respone = await fetch(url, options);
    let givedata = await respone.json();
    setdata(givedata.results);
  };
  const inputvalue = (event) => {
    setinput(event.target.value);
  };
  
  useEffect(() => {
     
    let a = setTimeout(() => {
      data(options, url);
    },3000);
    return () => clearTimeout(a);
    // eslint-disable-next-line
  },[input]);
  let getid = (value) => {
    onState(getdata);
    onId(value);
  };

if(getdata){
  return (
    <>
      <div className="bodycontainer">
        <div className="input">
          <input
            type="text"
            name=""
            id="search"
            placeholder="Movies,show and more"
            onChange={inputvalue}
          />
        </div>
        <Allmovie getdata={getdata} getid={getid} />
      </div>
    </>
  );
}
else{
 return(
  <Loader/>
 )
}
}

export default Serach;

const Allmovie = ({getdata, getid}) => {
  return (
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
                src={`https://image.tmdb.org/t/p/original${value.poster_path?value.poster_path:index}`}
                alt=""
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};
