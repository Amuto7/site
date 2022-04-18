import React from 'react'
import travelLogo from '../images/travelLogo.png'
export default function Navbar() {
  return (
    <div>
      <nav className='travel--nav'>
          <img src={travelLogo} alt="" />
          <h1 className='nav--title'>My travel journal</h1>
      </nav>
    </div>
  )
}
