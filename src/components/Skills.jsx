import React from "react";
import "../style/css/Skills.css"

const Skills = (props) => {
  const subTitle = props.data.title
  const dataIcon = props.data.data

  return (
    <div className="skills">
      <h3><strong>{subTitle}</strong></h3>
      {dataIcon.map((value, idx) => (
        <a href={value.url} key={idx} target="blank" className="link-skils">
          <img className="logo" src={value.image} alt={value.name} />
        </a>
      ))}
    </div>
  )
}

export default Skills;