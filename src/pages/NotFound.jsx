import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/css/NotFound.css"

class NotFound extends Component {
  render() {
    return (
      <section id="not-found">
        <div className="circles">
          <p>404<br />
            <small>PAGE NOT FOUND</small>
          </p>
          <Link to="/" className="back-to-home">Back To Home</Link>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
    )
  }
}

export default NotFound;