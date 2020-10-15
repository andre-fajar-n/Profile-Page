import React from "react";
import "../style/css/EduAndExp.css"

const Resume = (props) => {
  return (
    <a href={props.data.url}>
      <div className="resume-item mb-4">
        <span className="date"><span className="icon-calendar"></span>{props.data.period}</span>
        <h3 className="title"><strong>{props.data.title}</strong></h3>
        <p className="description">{props.data.description}</p>
        <span className="school">{props.data.name}</span>
      </div>
    </a>
  )
}

export default Resume;