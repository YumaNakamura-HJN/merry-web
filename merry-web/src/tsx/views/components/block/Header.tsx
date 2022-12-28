import './App.css'
import topIcon from './assets/react.svg'
import React from 'react'

function Header() {

  return (
    <div>
        <img src={topIcon} className="top-icon" alt="トップアイコン" />
    </div>
  )
}

export default Header
