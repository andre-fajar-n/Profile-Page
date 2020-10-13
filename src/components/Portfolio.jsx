import React from "react";

const Portfolio = (props) => {
  var demo = props.data.demo
  if (demo === "") {
    demo = props.data.github
  }
  return (
    <div className={`single-portfolio col-sm-4 all ${props.data.category}`}>
      <div className="relative">
        <div className="thumb">
          <div className="overlay overlay-bg"></div>
          <img className="image img-fluid" src={props.data.image} alt="" />
        </div>
        <a href={demo} target="blank" className="img-pop-up">
          <div className="middle">
            <div className="text align-self-center d-flex"><img src={props.data.image} alt="" /></div>
          </div>
        </a>
      </div>
      <div className="p-inner">
        <h4>{props.data.title}</h4>
        <div className="cat">{props.data.category}</div>
      </div>
    </div>
  )
}

export default Portfolio;