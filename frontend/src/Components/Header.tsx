import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  

  return (
    <div className='Header '>
      <h2>ZapBot Laucher</h2>
      <nav>
        <Link to="/" >Status</Link>
        <Link to="/respostas">Gravar resposta altomatica</Link>
      </nav>
    </div>
  )
}

export default Header