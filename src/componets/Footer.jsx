import React from 'react'
import '../style/Footer.css'
import lobo from '../image/Netflix.png'
export default function Footer() {
  return (
    <div className='container7'>
  <div className="container7-1">
    <img src={lobo} alt="" />
  </div>
  <div className="container7-2">
    <p>&copy; All rights reserved by My Website</p><br/>
  </div>
    </div>
  )
}
