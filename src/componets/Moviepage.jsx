import React, { useState } from "react";
import Navbar from "./Navbar";
import "../style/Moviepage.css";
import Footer from "./Footer";
import { FiPlus } from "react-icons/fi";
import { AiFillCaretRight, AiOutlineClose } from "react-icons/ai";
function Moviepage({ data, id, onAddList }) {
  const [moviedata] = useState(data);
  const [movieid] = useState(id);
  let [movielink, setmovielink] = useState("fjakjka");
  const [video, setvideo] = useState("close");
  let result = moviedata.find((moviedata) => {
    return moviedata.id === movieid;
  });

  let image = {
    backgroundImage: `linear-gradient(to bottom, rgba(8, 8, 8, 0), rgb(0, 0, 0)),url('https://image.tmdb.org/t/p/original${
      result.backdrop_path ? result.backdrop_path : result.poster_path
    }')`,
  };
  let image2 = `https://image.tmdb.org/t/p/original${
    result.backdrop_path ? result.backdrop_path : result.poster_path
  }`;

  let moviedescription = result.overview.slice(0, 200);
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
          `http://api.themoviedb.org/3/movie/${movieid}/videos?api_key=48a5045d313aa7fa6bf2288bf5c5f318`
        );
        let data = await response.json(response);
        console.log(data);
        let newdata = data.results.find((data) => {
          return (data.type = " Trailer");
        });

        setmovielink(newdata.key);
        console.log(movielink);
      } catch (data) {
        console.log("Error", data);
      }
    } else {
      setvideo("close");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container2" style={image}>
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
        <div className="reinfo ">
          <div className="rename">
            <h1> {result.title ? result.title : result.original_name}</h1>
          </div>
          <div className="datalan">
            <div className="data">{result.release_date}</div>

            <div className="lan">
              {result.original_language ? "english" : "english"}, hindi
            </div>
          </div>
          <div className="redescription">
            <p>{result.overview}</p>
          </div>
          <div className="recategories">
            <span>Action</span>
            <span>Drama</span>
            <span>Suspense</span>
            <span>Aventure</span>
          </div>
          <div className="rebutton">
            <button className="watch" onClick={playvideo}>
              <div className="b">
                <spna>
                  <AiFillCaretRight />
                </spna>
                <span>Watch Now</span>
              </div>
            </button>
            <div className="addlist">
              <button>
                <FiPlus />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container2-1">
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
        <div className="container2-1-1">
          <img src={image2} alt="movie" />
        </div>
        <div className="container2-1-2">
          <div className="movie-name">
            <h2>{result.title ? result.title : result.original_name}</h2>
          </div>
          <div className="movie-data">{result.release_date}</div>
          <div className="movie-lanuage">
            {" "}
            {result.original_language ? "english" : "english"}, hindi
          </div>
        </div>
        <div className="container2-1-3">{moviedescription}...</div>
        <div className="container2-1-4">
          <div className="recategories">
            <span>Action</span>
            <span>Drama</span>
            <span>Suspense</span>
            <span>Aventure</span>
          </div>
        </div>
        <div className="container-2-1-5">
          <div className="watch-movie">
            <button onClick={playvideo}>
              <span>Watch Now</span>{" "}
              <span>
                <AiFillCaretRight />
              </span>
            </button>
          </div>
          <div className="movie-addlist">
            <button>
              <span>Add List</span>
              <span>
                {" "}
                <FiPlus />{" "}
              </span>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Moviepage;
