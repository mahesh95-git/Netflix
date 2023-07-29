import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import "../style/Banner.css";
import Loader from "./Loader";
export default function Banner({ url }) {
  const [video, setvideo] = useState("close");
  let [movielink, setmovielink] = useState("");
  const [getdata, setdata] = useState(null);
  let [cout1, setcout] = useState(Number(0));

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
      let { results } = givedata;
      setdata(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data(options, url);
    let a = Math.floor(Math.random() * 19);
    setcout(a);
    // eslint-disable-next-line
  }, []);

  let cout = () => {
    setcout((cout) => cout1 + 1);
  };

  let back = () => {
    setcout((cout) => cout1 - 1);
  };

  let closevideo = () => {
    if (video === "close") {
      setvideo("video-container");
    } else {
      setvideo("close");
    }
  };
  let playvideo = async () => {
    if (video === "close") {
      setvideo("video-container");
      try {
        let response = await fetch(
          `http://api.themoviedb.org/3/movie/${getdata[cout1].id}/videos?api_key=48a5045d313aa7fa6bf2288bf5c5f318`
        );
        let data = await response.json(response);
        console.log(data);
        let newdata = data.results.find((data) => {
          return data.type = "Trailer";
        });
console.log(newdata)
        setmovielink(newdata.key);
        console.log(movielink)
      } catch (data) {
        console.log("Error", data);
      }
    } else {
      setvideo("close");
    }
  };

  if (getdata) {
    let image = {
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0)),url(https://image.tmdb.org/t/p/original${getdata[cout1].backdrop_path})`,
    };
    let b = getdata[cout1].overview.slice(0, 300);
console.log(getdata[cout1].id)

    return (
      <div className="background" style={image}>
        <div className={video}>
          <div className="video-container1">
            <div className="video-container1-1">Play Trailer</div>
            <div className="close-video " onClick={closevideo}>
              <AiOutlineClose />
            </div>
          </div>
          <iframe
            src={`https://www.youtube.com/embed/${movielink}`}
            title="video"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="info">
          <div className="back">
            <button disabled={cout1 === 0} onClick={back}>
              <FiChevronLeft />
            </button>
          </div>
          <div className="go">
            <button disabled={cout1 === 19} onClick={cout}>
              <FiChevronRight />
            </button>
          </div>
          <div className="name">
            {" "}
            {getdata[cout1].title
              ? getdata[cout1].title
              : getdata[cout1].original_name}
          </div>
          <div className="description">{b}</div>
          <div className="button">
            <button className="play" onClick={playvideo}>
              <span>
                <BsFillPlayFill />
              </span>
              <spna >Watch Now</spna>
            </button>

            <button className="list">
              <span>
                <FiPlus />
              </span>
              <span>Add list</span>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
}
