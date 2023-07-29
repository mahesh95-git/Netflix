import React, { useState} from "react";
import "../style/Navbar.css";
import logo from "../image/Netflix.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import user from '../image/user.jpg'
import {AiFillHome,AiOutlineUnorderedList} from 'react-icons/ai'
import {MdLiveTv} from 'react-icons/md'
import {BiChevronDown} from 'react-icons/bi'
function Navbar() {
  let color1 = {
    background: "transparent",
    poistion: "fixed",
  };

  let color2 = {
    backgroundColor: "black",
  };
  let [changeclass,setClass]=useState("menu")
  let [menuoptions,setmenuoptions]=useState("menuoptions")
  const handler=()=>{
  if(changeclass==='menu' && menuoptions==='menuoptions'){
    setClass('menu-1')
    setmenuoptions('menuoptions-1')
  }
  else{
    setClass('menu')
    setmenuoptions('menuoptions')
   
  }
   
  }
  const [color, changecolor] = useState(color1);

  const changeNavbarColor = () => {
    if (window.scrollY >= 500) {
      changecolor(color2);
    } else {
      changecolor(color1);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav style={color}>
      <div className={changeclass}>
        <div className="menu-name" onClick={handler}>
      <div className="menulable">
        Menu
      </div>
         <div className="menuicon">
<BiChevronDown/>
        </div>
        </div>
        
        <div className={menuoptions}>
        <ul>
        <li>
        <div className="li-lobo">
          <AiFillHome/>
        </div>
          <div className="li-name">
          <Link to="/">Home</Link>
          </div>
       
        </li>
        <li>
        <div className="li-lobo">
          <MdLiveTv/>
        </div>
        <div className="li-name">
          <Link to="/Tvshow">Tv Shows</Link>
          </div>
        </li>
             
        <li>
        <div className="li-lobo">
          <AiOutlineUnorderedList/>
        </div>
        <div className="li-name">
          <Link to="/Movies">Movies</Link>
          </div>
        </li>
      
        <li>
        <div className="li-lobo">
          <AiOutlineUnorderedList/>
        </div>
        <div className="li-name">
          <Link to="/Mylist">My List</Link>
          </div>
        </li>
       
      </ul>
        </div>
    
      </div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="alloptions">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Tvshow">Tv Shows</Link>
        </li>
      
        <li>
          <Link to="/Movies"> Mvoies</Link>
        </li>
        <li>
          <Link to="/MyList">My list</Link>
        </li>
      </ul>
      </div>
      <div className="otheroptions">
      <div className="icon">
        <div className="serach-icon">
        <Link to="/Search"><FiSearch /></Link>
        </div>
      
      </div>
      <div className="user">
    <img src={user} alt="png" />
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
