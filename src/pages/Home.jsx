import React, { Fragment } from "react";
import { Component } from "react";
import Skills from "../components/Skills";
import Resume from "../components/EduAndExperience";
import Portfolio from "../components/Portfolio";
import ListEducation from "../data/Education";
import ListSkills from "../data/Skills";
import WorkExperience from "../data/WorkExperience";
import categories from "../data/Category";
import "../style/css/Home.css"
import { getAllRepos } from "../store/action/github";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";

const override = css`
display: blok;
margin: 0 auto;
border-color: red;
`;

class Home extends Component {
  componentDidMount = async () => {
    await this.props.getAllRepos()
  }

  render() {
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
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex"><span>Name:</span> <span>Andre Fajar Nugroho</span></li>
                  <li className="d-flex"><span>Date of birth:</span> <span>June 07, 1996</span></li>
                  <li className="d-flex"><span>Address:</span> <span>Blitar Street 20, Ngunut, Tulungagung, East Java, Indonesia</span>
                  </li>
                  <li className="d-flex"><span>Zip code:</span> <span>66292</span></li>
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
                <a href="https://www.facebook.com/an.fa.nu0706/" className="social-item"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/andrefajarn/" className="social-item"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/andre-fajar-n/" className="social-item"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/andre-fajar-n/" className="social-item"><i className="fab fa-github"></i></a>
                <a href="mailto:andrenugroho395@gmail.com" className="social-item"><i className="far fa-envelope"></i></a>
                <a href="https://www.hackerrank.com/afajar" className="social-item"><i className="fab fa-hackerrank"></i></a>
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
                {ListEducation.map((value, i) => (
                  <Resume data={value} key={i} />
                ))}
              </div>

              {/* EXPERIENCE */}
              <div className="col-md-6">
                <h2 className="mb-5"><strong>Experience</strong></h2>
                {WorkExperience.map((value, i) => (
                  <Resume data={value} key={i} />
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
                <h2>My <strong>Portfolio</strong></h2>
              </div>
            </div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link portfolio active"
                  id="all-tab"
                  data-toggle="tab"
                  href="#all"
                  role="tab"
                  aria-controls="all"
                  aria-selected="true"
                >All</a>
              </li>
              {categories.map((value) => (
                <li className="nav-item" key={value} role="presentation">
                  <a className="nav-link portfolio"
                    id={`${value}-tab`}
                    data-toggle="tab"
                    href={`#${value}`}
                    role="tab"
                    aria-controls={`${value}`}
                    aria-selected="false"
                  >{value.replace(/-/gi, " ")}</a>
                </li>
              ))}
            </ul>

            {this.props.isLoading ? (
              <Fragment>
                <FadeLoader
                  css={override}
                  height={50}
                  width={10}
                  radius={25}
                  margin={50}
                  color={"#bac964"}
                />
              </Fragment>
            ) : (
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                    <div className="row">
                      {this.props.repos.map((repo) => (
                        <Portfolio
                          key={repo.full_name}
                          github={repo.html_url}
                          demo={repo.homepage}
                          username={repo.owner.login}
                          repo={repo.name}
                        />
                      ))}
                    </div>
                  </div>
                  {categories.map((value) => (
                    <div className="tab-pane fade" key={value} id={`${value}`} role="tabpanel" aria-labelledby={`${value}`}>
                      <div className="row">
                        {this.props.filtered[`${value}`] === undefined ? (
                          <Fragment>
                          </Fragment>
                        ) : (
                            <Fragment>
                              {this.props.filtered[`${value}`].map((repo) => (
                                <Portfolio
                                  key={repo.full_name}
                                  github={repo.html_url}
                                  demo={repo.homepage}
                                  username={repo.owner.login}
                                  repo={repo.name}
                                />
                              ))}
                            </Fragment>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
                  {ListSkills.map((value, idx) => (
                    <Skills key={idx} data={value} />
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

const mapStateToProps = (state) => ({
  repos: state.github.repos,
  filtered: state.github.filtered,
  githubSuccess: state.github.isSuccess,
  isLoading: state.github.isLoading,
})

const mapDispatchToProps = {
  getAllRepos,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);