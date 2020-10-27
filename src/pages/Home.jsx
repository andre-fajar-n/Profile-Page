import React, { Fragment } from "react";
import { Component } from "react";
import Skills from "../components/Skills";
import Resume from "../components/EduAndExperience";
import Portfolio from "../components/Portfolio";
import ListEducation from "../data/Education";
import ListSkills from "../data/Skills";
import WorkExperience from "../data/WorkExperience";
import category from "../data/Category";
import portfolio from "../data/Portfolio";
import "../style/css/Home.css"

class Home extends Component {
  render() {
    const listEducation = ListEducation;
    const listExperience = WorkExperience;

    return (
      <Fragment>
        {/* START NAVBAR */}
        <nav className="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">

          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#section-home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#section-about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#section-education-experience">Education & Experience</a></li>
                <li className="nav-item"><a className="nav-link" href="#section-portfolio">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#section-skills">Skills</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END NAVBAR */}

        {/* START FOTO PROFILE */}
        <section className="site-hero" id="section-home" data-stellar-background-ratio="0.5">
        </section>
        {/* END FOTO PROFILE */}

        {/* START ABOUT */}
        <section className="site-section" id="section-about">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                <img src={require("../images/name.jpg")} alt="Image_placeholder" className="img-fluid" />
              </div>
              <div className="col-lg-5 pl-lg-5">
                <div className="section-heading">
                  <h2>About <strong>Me</strong></h2>
                </div>
                <ul class="about-info mt-4 px-md-0 px-2">
                  <li class="d-flex"><span>Name:</span> <span>Andre Fajar Nugroho</span></li>
                  <li class="d-flex"><span>Date of birth:</span> <span>June 07, 1996</span></li>
                  <li class="d-flex"><span>Address:</span> <span>Blitar Street 20, Ngunut, Tulungagung, East Java, Indonesia</span>
                  </li>
                  <li class="d-flex"><span>Zip code:</span> <span>66292</span></li>
                </ul>

                <p>
                  <a href="https://drive.google.com/file/d/1b7jfB5OMFvovTvi4oHNhdFqhLb3hGRRK/view?usp=sharing"
                    target="blank"
                    className="btn btn-primary px-4 py-2 btn-sm smoothscroll"
                  >Download CV</a>
                </p>
              </div>
            </div>
            <div className="col-md-12 text-center social-media">
              <p>
                <a href="https://www.facebook.com/an.fa.nu0706/" className="social-item"><span className="icon-facebook2"></span></a>
                <a href="https://www.instagram.com/andrefajarn/" className="social-item"><span className="icon-instagram2"></span></a>
                <a href="https://www.linkedin.com/in/andre-fajar-n/" className="social-item"><span className="icon-linkedin2"></span></a>
                <a href="https://github.com/andre-fajar-n/" className="social-item"><span className="icon-github"></span></a>
                <a href="mailto:andrenugroho395@gmail.com" className="social-item"><span className="icon-email"></span></a>
              </p>
            </div>
          </div>
        </section>
        {/* END ABOUT */}

        {/* START RESUME */}
        <section className="site-section" id="section-education-experience">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>My <strong>Education</strong> & <strong>Experience</strong></h2>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="col-md-6">
                <h2 className="mb-5"><strong>Education</strong></h2>
                {listEducation.map((value) => (
                  <Resume data={value} />
                ))}
              </div>

              {/* EXPERIENCE */}
              <div className="col-md-6">
                <h2 className="mb-5"><strong>Experience</strong></h2>
                {listExperience.map((value) => (
                  <Resume data={value} />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* END RESUME */}

        {/* START PORTFOLIO */}
        <section className="site-section" id="section-portfolio">
          <div className="container">
            <div className="row">
              <div className="section-heading text-center col-md-12">
                <h2>Featured <strong>Portfolio</strong></h2>
              </div>
            </div>
            <div className="filters">
              <ul>
                <li className="active" data-filter="*">All</li>
                {category.map((value) => (
                  <li data-filter={`.${value}`}>{value.replace("-", " ")}</li>

                ))}
              </ul>
            </div>

            <div className="filters-content">
              <div className="row grid">
                {portfolio.map((value) => (
                  <Portfolio data={value} />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* END PORTFOLIO */}

        {/* START SKILLS */}
        <section className="site-section" id="section-skills">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>My <strong>Skills</strong></h2>
                  {ListSkills.map((value) => (
                    <Skills data={value} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END SKILLS */}

        <footer className="site-footer">
          <div className="container">

            <div className="row mb-5">
              <p className="col-12 text-center">
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
      Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" ></i> by <a href="https://colorlib.com" target="blank" className="text-primary">Colorlib</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default Home;