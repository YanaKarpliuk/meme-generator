import React from "react";
import logoImg from '../images/Logo.svg'

export default function Header(){
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={logoImg} alt="logo" />
    </nav>
  )
}