import React, { Fragment } from "react";
import { Component } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Skills from "../components/Skills";
import ListSkills from "../data/Skills";
import "../style/css/About.css"

class About extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />

        {/* START ABOUT */}
        <section className="site-section about-section" id="section-about">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                <img src={require("../images/name.jpg")} alt="Image_placeholder" className="img-fluid" />
              </div>
              <div className="col-lg-5 pl-lg-5 description">
                <div className="section-heading text-center">
                  <h2>About <strong>Me</strong></h2>
                </div>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex"><span>Name:</span> <span>Andre Fajar Nugroho</span></li>
                  <li className="d-flex"><span>Date of birth:</span> <span>June 07, 1996</span></li>
                  <li className="d-flex"><span>Address:</span> <span>Blitar Street 20, Ngunut, Tulungagung, East Java, Indonesia</span>
                  </li>
                  <li className="d-flex"><span>Zip code:</span> <span>66292</span></li>
                </ul>

                <p className="link-cv">
                  <a href="https://drive.google.com/drive/folders/1hMEGbG-UCdYzUIMn4RJiFA_sLiabmGjS?usp=sharing"
                    target="blank"
                    className="btn btn-primary px-4 py-2 btn-sm smoothscroll"
                  >Download CV</a>
                </p>
              </div>
            </div>

          </div>
        </section>
        {/* END ABOUT */}

        {/* START SKILLS */}
        <section className="site-section skill-section" id="section-skills">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2 >My <strong>Skills</strong></h2>
                  {ListSkills.map((value, idx) => (
                    <Skills key={idx} data={value} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END SKILLS */}

        <Footer />
      </Fragment>
    )
  }
}

export default About;