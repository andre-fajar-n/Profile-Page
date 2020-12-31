import React, { Component, Fragment } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { paginate } from "../utils/paginate";
import { PaginatePortfolio } from "../components/PaginatePortfolio";
import categories from "../data/Category";
import { filterByCategories, getAllRepos, rateLimit } from "../store/action/github";
import { connect } from "react-redux";
import "../style/css/Portfolio.css"
import { Loading } from "../components/Loading";
import { RateLimit } from "../components/RateLimit";

class Portfolio extends Component {
  componentDidMount = async () => {
    await this.props.rateLimit()
    await this.props.getAllRepos()
    await this.props.filterByCategories()
    await this.props.rateLimit()
  }

  render() {
    var reposSlice = paginate(this.props.repos)
    return (
      <Fragment>
        <Navbar />

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
                <Loading />
              </Fragment>
            ) : (
                <div className="tab-content" id="myTabContent">
                  {!this.props.githubSuccess ? (
                    <div style={{ textAlign: "center" }}>
                      {this.props.message}
                    </div>
                  ) : (
                      <Fragment>
                        <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                          <PaginatePortfolio data={reposSlice} />
                        </div>
                        {categories.map((category) => (
                          <div className="tab-pane fade" key={category} id={`${category}`} role="tabpanel" aria-labelledby={`${category}`}>
                            {this.props.isLoadingFiltered ? (
                              <Loading />
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

        <RateLimit rateLimit={this.props.githubRateLimit.remaining} />
        {/* <div className="rate-limit">
          <strong>{this.props.githubRateLimit.remaining}</strong> request(s) left before rate-limit
        </div> */}

        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  repos: state.github.allRepos,
  isLoading: state.github.isLoading,
  githubSuccess: state.github.isSuccess,
  isLoadingFiltered: state.github.isLoadingFiltered,
  message: state.github.message,
  filtered: state.github.filtered,
  githubRateLimit: state.github.rateLimit,
})

const mapDispatchToProps = {
  getAllRepos,
  filterByCategories,
  rateLimit,
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);