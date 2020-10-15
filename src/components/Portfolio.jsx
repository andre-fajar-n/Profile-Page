import React, { Fragment } from "react";
import "../style/css/Portfolio.css"

const Portfolio = (props) => {
  var demo = props.data.demo

  return (
    <Fragment>
      <div className={`single-portfolio col-sm-4 all ${props.data.category}`}>
        <div className="relative">
          <div className="thumb">
            <a href={props.data.github} target="blank" className="img-pop-up">
              <div className="overlay overlay-bg"></div>
              <img className="image img-fluid no-hover" src={props.data.image} alt="" />
              <img className="image img-fluid hover" src={props.data.image.replace("-dark", "")} alt="" />
              {/* <div className="middle">
                <div className="text align-self-center d-flex"><img src={props.data.image} alt="" /></div>
              </div> */}
            </a>
            {demo === "" ? (
              <Fragment></Fragment>
            ) : (
                <a href={demo} target="blank">
                  <div className="cat demo">
                    <div className="m-auto">View Demo</div>
                  </div>
                </a>
              )}
          </div>
        </div>
        <div className="p-inner">
          <h4>{props.data.title}</h4>
          <div className="cat">{props.data.category}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Portfolio;