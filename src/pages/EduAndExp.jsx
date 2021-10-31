import React, { Component, Fragment } from "react";
import Resume from "../components/EduAndExperience";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ListEducation from "../data/Education";
import WorkExperience from "../data/WorkExperience";

class EduAndExp extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />

        <section className="site-section" id="section-education-experience">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>My <strong>Education</strong> & <strong>Experience</strong></h2>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="col-md-6" id="education" >
                <h2 className="mb-5"><strong>Education</strong></h2>
                {ListEducation.map((value, i) => (
                  <Resume data={value} key={i} />
                ))}
              </div>

              {/* EXPERIENCE */}
              <div className="col-md-6" id="experience">
                <h2 className="mb-5"><strong>Experience</strong></h2>
                {WorkExperience.map((value, i) => (
                  <Resume data={value} key={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </Fragment>
    )
  }
}

export default EduAndExp;