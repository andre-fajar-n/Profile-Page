import React, { Fragment } from "react";

const Skills = (props) => {
  const subTitle = props.data.title
  const dataIcon = props.data.data

  return (
    <Fragment>
      <h3>{subTitle}</h3>
      {dataIcon.map((value) => (
        <a href={value.url} target="blank" className="mr-3 ml-3">
          <img src={value.image} alt="a" style={{ width: "auto", height: "100px" }} />
        </a>
      ))}
    </Fragment>
  )
}

export default Skills;