import React from "react"
import { Fragment } from "react"
import { EachPortfolio } from "./EachPortfolio"

export const PaginatePortfolio = (props) => {
  var category = "All"
  if (props.category !== undefined) {
    category = props.category
  }
  const firstData = props.data[0]
  const nextData = props.data.slice(1, props.data.length)
  return (
    <Fragment>
      <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id={`pills-1-${category}-tab`} data-toggle="pill" href={`#pills-1-${category}`} role="tab" aria-controls={`pills-1-${category}`} aria-selected="true">1</a>
        </li>
        {nextData.map((repo, id) => (
          <li key={id} className="nav-item">
            <a className="nav-link" id={`pills-${id + 2}-${category}-tab`} data-toggle="pill" href={`#pills-${id + 2}-${category}`} role="tab" aria-controls={`pills-${id + 2}-${category}`} aria-selected="false">{id + 2}</a>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id={`pills-1-${category}`} role="tabpanel" aria-labelledby={`pills-1-${category}-tab`}>
          <div className="row justify-content-center">
            {firstData.map((repo) => (
              <EachPortfolio
                key={repo.full_name}
                github={repo.html_url}
                demo={repo.homepage}
                username={repo.owner.login}
                repo={repo.name}
              />
            ))}
          </div>
        </div>
        {nextData.map((data, id) => (
          <div key={id} className="tab-pane fade" id={`pills-${id + 2}-${category}`} role="tabpanel" aria-labelledby={`pills-${id + 2}-${category}-tab`}>
            <div className="row justify-content-center">
              {data.map((repo) => (
                <EachPortfolio
                  key={repo.full_name}
                  github={repo.html_url}
                  demo={repo.homepage}
                  username={repo.owner.login}
                  repo={repo.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  )
}