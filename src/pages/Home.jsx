import React, { Fragment } from "react";
import { Component } from "react";
import Skills from "../components/Skills";
import EduAndExp from "../components/EduAndExperience";
import ListEducation from "../data/Education";
import ListSkills from "../data/Skills";
import WorkExperience from "../data/WorkExperience";
import categories from "../data/Category";
import "../style/css/Home.css"
import { filterByCategories, getAllRepos } from "../store/action/github";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import { paginate } from "../utils/paginate";
import { PaginatePortfolio } from "../components/PaginatePortfolio";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

const override = css`
display: blok;
margin: 0 auto;
border-color: red;
`;

class Home extends Component {
  componentDidMount = async () => {
    await this.props.getAllRepos()
    await this.props.filterByCategories()
  }

  render() {
    var reposSlice = paginate(this.props.repos)

    return (
      <Fragment>
        <Navbar />

        {/* START FOTO PROFILE */}
        <section className="site-hero" id="section-home" data-stellar-background-ratio="0.5">
        </section>
        {/* END FOTO PROFILE */}

        <Link to="/about">ABOUT</Link>

        {/* START EDU & EXP */}
        <section className="site-section" id="section-education-experience">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>My <strong>Education</strong> & <strong>Experience</strong></h2>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="col-md-6" style={{ borderRight: "1px solid white" }}>
                <h2 className="mb-5"><strong>Education</strong></h2>
                {ListEducation.map((value, i) => (
                  <EduAndExp data={value} key={i} />
                ))}
              </div>

              {/* EXPERIENCE */}
              <div className="col-md-6">
                <h2 className="mb-5"><strong>Experience</strong></h2>
                {WorkExperience.map((value, i) => (
                  <EduAndExp data={value} key={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* END EDU & EXP */}

        {/* START PORTFOLIO */}
        <section className="site-section" id="section-portfolio">
          <div className="container">
            <div className="row">
              <div className="section-heading text-center col-md-12">
                <h2>My <strong>Portfolio</strong></h2>
              </div>
            </div>

            <ul className="nav nav-tabs mb-2 justify-content-center" id="myTab" role="tablist" >
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
                  {!this.props.githubSuccess ? (
                    <div>
                      {this.props.message}
                    </div>
                  ) : (
                      <Fragment>
                        <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                          <PaginatePortfolio data={reposSlice} />
                        </div>
                        {categories.map((category) => (
                          <div className="tab-pane fade" key={category} id={`${category}`} role="tabpanel" aria-labelledby={`${category}`}>
                            {this.props.filtered[`${category}`] === undefined ? (
                              <div>
                                {this.props.message}
                              </div>
                            ) : (
                                <PaginatePortfolio category={category} data={this.props.filtered[category]} />
                              )}
                          </div>
                        ))}
                      </Fragment>
                    )}
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

const mapStateToProps = (state) => ({
  repos: state.github.allRepos,
  isLoading: state.github.isLoading,
  githubSuccess: state.github.isSuccess,
  githubFilterSuccess: state.github.isLoadingFiltered,
  message: state.github.message,
  filtered: state.github.filtered,
  // isRateLimit: state.github.isRateLimit,
})

const mapDispatchToProps = {
  getAllRepos,
  filterByCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);