import React from "react";
import { Link } from "react-router-dom";
import "../style/css/Navbar.css"
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <nav className="navbar navbar-expand-lg site-navbar navbar-light" id="pb-navbar">

      <div className="container" style={{ justifyContent: "flex-end" }}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarsExample09">
          <ul className="navbar-list">
            <li className="nav-item"><Link to="/" className={splitLocation[1] === "" ? "active" : ""}>Home</Link></li>
            <li className="nav-item"><Link to="/about" className={splitLocation[1] === "about" ? "active" : ""} >About</Link></li>
            <li className="nav-item"><Link to="/edu-exp" className={splitLocation[1] === "edu-exp" ? "active" : ""}>Education & Experience</Link></li>
            <li className="nav-item"><Link to="/portfolio" className={splitLocation[1] === "portfolio" ? "active" : ""}>Portfolio</Link></li>
            {/* <li className="nav-item"><Link to="/stats" className={splitLocation[1]==="stats"?"active":""}>Stats</Link></li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}