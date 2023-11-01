import React from 'react'
import logo from '../assets/holberton_logo.jpg'
import './Header.css'
export const Header = () => {
  return (
    <div className='App-header'>
      <img src={logo} alt='holberton logo' width={250} height={250} />
      <h1>School dashboard</h1>
    </div>
  )
}
