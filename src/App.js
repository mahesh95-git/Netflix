import React, { useState } from "react";
import "./App.css";
import Home from "./componets/Home";
import Webseries from "./componets/Webseries";
import Serach from "./componets/Serach";
import Tvshow from "./componets/Tvshow";
import MyList from "./componets/MyLIst";
import Movies from "./componets/Movies";
import Moviepage from "./componets/Moviepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewMore from "./componets/ViewMore";
import PageNotePound from "./componets/PageNoteFound";
function App() {
  const [data, setdata] = useState([]);
  const [id, setid] = useState();
const [add,setadd]=useState([])
const [movieData,setMovies]=useState([])
const [title,settitle]=useState('')
  const onState = (value) => {
    setdata(value);
    
  };
  const onId = (Id) => {
    setid(Id);
  };
  const onAdddList=(value)=>{
   setadd(value)
  }
  const movie=(value,value1)=>{
    setMovies(value)
    settitle(value1)
    

  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onState={onState} onId={onId} movie={movie}/>}/>
        <Route path="/Search" element={<Serach onState={onState} onId={onId} />} />
        <Route path="/Tvshow" element={<Tvshow  onState={onState} movie={movie} onId={onId} />} />
        <Route path="/Webseries" element={<Webseries />} />
        <Route path="/MyList" element={<MyList add={add} />} />
        <Route path="/Movies" element={<Movies   onState={onState} movie={movie} onId={onId} />} />
        <Route path="/showAll" element={<ViewMore onState={onState} onId={onId} data={movieData} title={title}/>} />
        <Route
          exact
          path="/Movie/:id"
          element={<Moviepage data={data} id={id}  onId={onId} onState={onState} onAddList={onAdddList}/>}
        />
        <Route path="*" element={<PageNotePound/>}/>
      </Routes>

    </BrowserRouter>
  );
}
export default App;
