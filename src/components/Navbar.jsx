import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

import "./Navbar.css"

export const Navbar = () => {
  // useState hook for menu functions
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* If menuOpen=true then ul will have className="open" */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}
