import React, { Fragment } from "react";
import "../style/css/Portfolio.css"

const Portfolio = (props) => {
  var repoFront = `https://github-readme-stats.vercel.app/api/pin/?hide_border=true&username=${props.username}&repo=${props.repo}&title_color=bac964&bg_color=333333&text_color=ffffff&icon_color=bac964`
  var repoBack = `https://github-readme-stats.vercel.app/api/pin/?hide_border=true&username=${props.username}&repo=${props.repo}&title_color=333333&bg_color=bac964&text_color=000000&icon_color=333333`
  var title = props.repo
  if (props.username !== props.repo) {
    title = props.repo.replace(/-/gi, " ")
  }
  title = title.replace(/_/gi, " ")

  return (
    <Fragment>
      <div className="single-portfolio col-sm-4 all">
        <div className="relative">
          <div className="thumb">
            <a href={props.github} target="blank" className="img-pop-up inner">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img className="image img-fluid no-hover" src={repoFront} alt={title} />
                  </div>
                  <div className="flip-box-back">
                    <img className="image img-fluid hover" src={repoBack} alt={title} />
                  </div>
                </div>
              </div>
            </a>
            {props.demo === "" || props.demo === null ? (
              <div className="no-demo img-fluid">
                No Demo
              </div>
            ) : (
                <a href={props.demo} target="blank" className="img-fluid">
                  <div className="demo">
                    <div className="demo-inner">
                      <div className="demo-front">
                        <div>View Demo</div>
                      </div>
                      <div className="demo-back">
                        <div>View Demo</div>
                      </div>
                    </div>
                  </div>
                </a>
              )}
          </div>
        </div>
        <div className="p-inner">
          <h4>{title}</h4>
        </div>
      </div>
    </Fragment>
  )
}

export default Portfolio;