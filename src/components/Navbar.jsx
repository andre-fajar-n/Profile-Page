import React from "react";
import { Link } from "react-router-dom";
import "../style/css/Navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">

      <div className="container" style={{ justifyContent: "flex-end" }}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarsExample09">
          <ul className="navbar-list">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link" >About</Link></li>
            <li className="nav-item"><Link to="/edu_exp" className="nav-link">Education & Experience</Link></li>
            <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            {/* <li className="nav-item"><Link to="/stats" className="nav-link">Stats</Link></li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}