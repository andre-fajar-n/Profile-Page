import React, { Fragment } from "react";
import { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { githubStats } from "../store/action/stats";
import { connect } from "react-redux";
import { getAllRepos, rateLimit } from "../store/action/github";
import { pieChart } from "../utils/chart";
import "../style/css/Stats.css"
import { Loading } from "../components/Loading";
import { Pie } from "react-chartjs-2";
import { RateLimit } from "../components/RateLimit";

class Stats extends Component {
  componentDidMount = async () => {
    await this.props.rateLimit()
    await this.props.getAllRepos()
    await this.props.githubStats()
    await this.props.rateLimit()
  }

  render() {
    var forksPerRepo
    var starsPerRepo
    var commitsPerRepo
    var repoPerLanguage
    if (!this.props.isLoading) {
      forksPerRepo = pieChart("Forks Per Repo", this.props.forksPerRepo)
      starsPerRepo = pieChart("Stars Per Repo", this.props.starsPerRepo)
      commitsPerRepo = pieChart("Top 10 Commits Per Repo", this.props.commitsPerRepo, true)
      repoPerLanguage = pieChart("Repo Per Language", this.props.repoPerLanguage)
    }

    return (
      <Fragment>
        <Navbar />

        <section id="stats-section">
          {this.props.isLoading ? (
            <Loading />
          ) : (
              <Fragment>
                <div className="row">
                  <div className="col-md-6">
                    <Pie
                      data={forksPerRepo.data}
                      options={forksPerRepo.options}
                      height={300}
                    />
                  </div>
                  <div className="col-md-6">
                    <Pie
                      data={starsPerRepo.data}
                      options={starsPerRepo.options}
                      height={300}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Pie
                      data={commitsPerRepo.data}
                      options={commitsPerRepo.options}
                      height={300}
                    />
                  </div>
                  <div className="col-md-6">
                    <Pie
                      data={repoPerLanguage.data}
                      options={repoPerLanguage.options}
                      height={300}
                    />
                  </div>
                </div>
              </Fragment>
            )}
        </section>

        <RateLimit rateLimit={this.props.githubRateLimit.remaining} />

        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.stats.isLoading,
  githubRateLimit: state.github.rateLimit,
  forksPerRepo: state.stats.github.forksPerRepo,
  starsPerRepo: state.stats.github.starsPerRepo,
  commitsPerRepo: state.stats.github.commitsPerRepo,
  repoPerLanguage: state.stats.github.language,
})

const mapDispatchToProps = {
  githubStats,
  getAllRepos,
  rateLimit,
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);