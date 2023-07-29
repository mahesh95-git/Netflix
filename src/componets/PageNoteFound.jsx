import React from 'react'
import '../style/pageNoteFound.css'
import Sorry from '../image/monkey.png'
import Navbar from './Navbar'
import {AiFillWarning} from 'react-icons/ai'
export default function PageNotePound() {
  return (
    <>
    <Navbar/>
    <div className='pageContainer'>
    <div className="inner-container">
  <div className="opps">
    <img src={Sorry} alt="" />
  </div>
  <div className="desc">
   <span><AiFillWarning/></span>
   <spna>This page is temporarily unavailable. We apologize for the inconvenience and ask that you try again later.
   </spna>
  </div>
    </div>
    </div>
    </>
  )
}
