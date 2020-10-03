import React from "react";

const Resume = (props) => {
  return (
    <div className="resume-item mb-4">
      <span className="date"><span className="icon-calendar"></span>{props.data.period}</span>
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
      <span className="school">{props.data.name}</span>
    </div>
  )
}

export default Resume;