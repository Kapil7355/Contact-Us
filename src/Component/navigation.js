import React from 'react'
import log from '../logcon.png'

export default function Navigation() {
  return (
    <nav className='container'>
    <div className='imag'>
      <img src={log} alt='contact'/>
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </nav>
  )
}
