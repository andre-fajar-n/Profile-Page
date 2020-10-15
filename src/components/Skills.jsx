import React from "react";
import "../style/css/Skills.css"

const Skills = (props) => {
  const subTitle = props.data.title
  const dataIcon = props.data.data

  return (
    <div className="skills">
      <h3><strong>{subTitle}</strong></h3>
      {dataIcon.map((value) => (
        <a href={value.url} target="blank" className="mr-3 ml-3">
          <img className="logo" src={value.image} alt="a" />
        </a>
      ))}
    </div>
  )
}

export default Skills;