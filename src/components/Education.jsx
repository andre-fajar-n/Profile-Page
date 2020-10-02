import React, { Fragment } from "react";

const Education = (props) => {
  return (
    <section class="colorlib-education" data-section="education">
      <div class="colorlib-narrow-content">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft">
            <span class="heading-meta">Education & Training</span>
            <h2 class="colorlib-heading animate-box">Education & Training</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <div class="fancy-collapse-panel">
              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                {/* DATA 0 */}
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion"
                        href="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                        <div className="row">
                          <div className="col-md-6">
                            {props.data[0].name}
                          </div>
                          <div className="col-md-6">
                            {props.data[0].major}
                          </div>
                        </div>
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel"
                    aria-labelledby="headingOne">
                    <div class="panel-body">
                      <div class="row">
                        <div class="col-md-4">
                          <p>{props.data[0].period} </p>
                        </div>
                        <div class="col-md-8">
                          <p>{props.data[0].description}.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DATA 1 */}
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                      <a class="collapsed" data-toggle="collapse" data-parent="#accordion"
                        href="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                        <div className="row">
                          <div className="col-md-6">
                            {props.data[1].name}
                          </div>
                          <div className="col-md-6">
                            {props.data[1].major}
                          </div>
                        </div>
                      </a>
                    </h4>
                  </div>
                  <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                    aria-labelledby="headingTwo">
                    <div class="panel-body">
                      <div class="row">
                        <div class="col-md-4">
                          <p>{props.data[1].period} </p>
                        </div>
                        <div class="col-md-8">
                          <p>{props.data[1].description}.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education;