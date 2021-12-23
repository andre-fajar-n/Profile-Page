import React from "react";
import "../style/css/EduAndExp.css"

const Resume = (props) => {
  return (
    <a href={props.data.url}>
      <div className="resume-item mb-4">
        <h2 className="title"><strong>{props.data.title}</strong></h2>
        <h3 className="school">{props.data.name}</h3>
        <h4 className="date"><span className="icon-calendar"></span>{props.data.period}</h4>
        <p className="description">{props.data.description}</p>
      </div>
    </a>
  )
}

export default Resume;