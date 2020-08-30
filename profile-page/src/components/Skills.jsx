import React from "react";

const Skills = (props) => {
  return (
    <section class="colorlib-skills" data-section="skills">
      <div class="colorlib-narrow-content">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft">
            <span class="heading-meta">My Specialty</span>
            <h2 class="colorlib-heading animate-box">My Skills</h2>
          </div>
        </div>


        <div className="row">
          <div className="col-md-4 animate-box list-skills" data-animate-effect="fadeInLeft">
            <ul>
              Language
              {props.data.language.map((value) => (
              <li>{value}</li>
            ))}
            </ul>
          </div>
          <div className="col-md-4 animate-box list-skills" data-animate-effect="fadeInLeft">
            <ul>
              Backend
              {props.data.backend.map((value) => (
              <li>{value}</li>
            ))}
            </ul>
          </div>
          <div className="col-md-4 animate-box list-skills" data-animate-effect="fadeInLeft">
            <ul>
              Frontend
              {props.data.frontend.map((value) => (
              <li>{value}</li>
            ))}
            </ul>
          </div>
          <div className="col-md-6 animate-box list-skills" data-animate-effect="fadeInLeft">
            <ul>
              Database
              {props.data.database.map((value) => (
              <li>{value}</li>
            ))}
            </ul>
          </div>
          <div className="col-md-6 animate-box list-skills" data-animate-effect="fadeInLeft">
            <ul>
              Other Skills
              {props.data.other.map((value) => (
              <li>{value}</li>
            ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills;