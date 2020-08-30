import React from "react";
import { Component } from "react";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import ListEducation from "../data/Education";
import ListSkills from "../data/Skills";
import WorkExperience from "../data/WorkExperience";

class Home extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div class="container-wrap">
          <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar"
            aria-expanded="false" aria-controls="navbar"><i></i></a>
          <aside id="colorlib-aside" role="complementary" class="border js-fullheight">
            <div class="text-center">
              <div class="author-img" style={{ backgroundImage: "url(images/about.jpg);" }}></div>
              <h1 id="colorlib-logo"><a href="index.html">Jackson Ford</a></h1>
              <span class="position"><a href="#">UI/UX/Designer</a> in Philippines</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" class="navbar">
              <div id="navbar" class="collapse">
                <ul>
                  <li class="active"><a href="#" data-nav-section="home">Home</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  {/* <li><a href="#" data-nav-section="services">Services</a></li> */}
                  <li><a href="#" data-nav-section="skills">Skills</a></li>
                  <li><a href="#" data-nav-section="education">Education</a></li>
                  <li><a href="#" data-nav-section="work-experience">Work Experience</a></li>
                  <li><a href="#" data-nav-section="portfolio">Portfolio</a></li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li><a href="#" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>

            <div class="colorlib-footer">
              <p><small>&copy;
							{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
							Copyright &copy;
							<script>document.write(new Date().getFullYear());</script> All rights reserved | This
							template is made with <i class="icon-heart" aria-hidden="true"></i> by <a
                  href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                <span>Demo Images: <a href="https://unsplash.com/"
                  target="_blank">Unsplash.com</a></span></small></p>
              <ul>
                <li><a href="#"><i class="icon-facebook2"></i></a></li>
                <li><a href="#"><i class="icon-twitter2"></i></a></li>
                <li><a href="#"><i class="icon-instagram"></i></a></li>
                <li><a href="#"><i class="icon-linkedin2"></i></a></li>
              </ul>
            </div>

          </aside>

          <div id="colorlib-main">
            <section id="colorlib-hero" class="js-fullheight" data-section="home">
              <div class="flexslider js-fullheight">
                <ul class="slides">
                  <li style={{ backgroundImage: "url(images/img_bg_1.jpg);" }}>
                    <div class="overlay"></div>
                    <div class="container-fluid">
                      <div class="row">
                        <div
                          class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                          <div class="slider-text-inner js-fullheight">
                            <div class="desc">
                              <h1>Hi! <br />I'm Jackson</h1>
                              <h2>100% html5 bootstrap templates Made by <a
                                href="https://colorlib.com/"
                                target="_blank">colorlib.com</a></h2>
                              <p><a class="btn btn-primary btn-learn">Download CV <i
                                class="icon-download4"></i></a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li style={{ backgroundImage: "url(images/img_bg_2.jpg);" }}>
                    <div class="overlay"></div>
                    <div class="container-fluid">
                      <div class="row">
                        <div
                          class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                          <div class="slider-text-inner">
                            <div class="desc">
                              <h1>I am <br />a Designer</h1>
                              <h2>100% html5 bootstrap templates Made by <a
                                href="https://colorlib.com/"
                                target="_blank">colorlib.com</a></h2>
                              <p><a class="btn btn-primary btn-learn">View Portfolio <i
                                class="icon-briefcase3"></i></a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section class="colorlib-about" data-section="about">
              <div class="colorlib-narrow-content">
                <div class="row">
                  <div class="col-md-12">
                    <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                      <div class="col-md-12">
                        <div class="about-desc">
                          <span class="heading-meta">About Us</span>
                          <h2 class="colorlib-heading">Who Am I?</h2>
                          <p><strong>Hi I'm Jackson Ford</strong> On her way she met a copy. The copy
												warned the Little Blind Text, that where it came from it would have been
												rewritten a thousand times and everything that was left from its origin
												would be the word "and" and the Little Blind Text should turn around and
												return to its own, safe country.</p>
                          <p>Even the all-powerful Pointing has no control about the blind texts it is
                          an almost unorthographic life One day however a small line of blind text
                          by the name of Lorem Ipsum decided to leave for the far World of
												Grammar.</p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                        <div class="services color-1">
                          <span class="icon2"><i class="icon-bulb"></i></span>
                          <h3>Graphic Design</h3>
                        </div>
                      </div>
                      <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
                        <div class="services color-2">
                          <span class="icon2"><i class="icon-globe-outline"></i></span>
                          <h3>Web Design</h3>
                        </div>
                      </div>
                      <div class="col-md-3 animate-box" data-animate-effect="fadeInTop">
                        <div class="services color-3">
                          <span class="icon2"><i class="icon-data"></i></span>
                          <h3>Software</h3>
                        </div>
                      </div>
                      <div class="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                        <div class="services color-4">
                          <span class="icon2"><i class="icon-phone3"></i></span>
                          <h3>Application</h3>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div class="hire">
                          <h2>I am happy to know you <br />that 300+ projects done sucessfully!</h2>
                          <a href="#" class="btn-hire">Hire me</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>



            <section class="colorlib-services" data-section="services">
              <div class="colorlib-narrow-content">
                <div class="row">
                  <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                    data-animate-effect="fadeInLeft">
                    <span class="heading-meta">What I do?</span>
                    <h2 class="colorlib-heading">Here are some of my expertise</h2>
                  </div>
                </div>
                <div class="row row-pt-md">
                  <div class="col-md-4 text-center animate-box">
                    <div class="services color-1">
                      <span class="icon">
                        <i class="icon-bulb"></i>
                      </span>
                      <div class="desc">
                        <h3>Innovative Ideas</h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 text-center animate-box">
                    <div class="services color-2">
                      <span class="icon">
                        <i class="icon-data"></i>
                      </span>
                      <div class="desc">
                        <h3>Software</h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 text-center animate-box">
                    <div class="services color-3">
                      <span class="icon">
                        <i class="icon-phone3"></i>
                      </span>
                      <div class="desc">
                        <h3>Application</h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 text-center animate-box">
                    <div class="services color-4">
                      <span class="icon">
                        <i class="icon-layers2"></i>
                      </span>
                      <div class="desc">
                        <h3>Graphic Design</h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 text-center animate-box">
                    <div class="services color-5">
                      <span class="icon">
                        <i class="icon-data"></i>
                      </span>
                      <div class="desc">
                        <h3>Software</h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 text-center animate-box">
                    <div class="services color-6">
                      <span class="icon">
                        <i class="icon-phone3"></i>
                      </span>
                      <div class="desc">
                        <h3>Application</h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div id="colorlib-counter" class="colorlib-counters"
              style={{ backgroundImage: "url(images/cover_bg_1.jpg);" }} data-stellar-background-ratio="0.5">
              <div class="overlay"></div>
              <div class="colorlib-narrow-content">
                <div class="row">
                </div>
                <div class="row">
                  <div class="col-md-3 text-center animate-box">
                    <span class="colorlib-counter js-counter" data-from="0" data-to="309" data-speed="5000"
                      data-refresh-interval="50"></span>
                    <span class="colorlib-counter-label">Cups of coffee</span>
                  </div>
                  <div class="col-md-3 text-center animate-box">
                    <span class="colorlib-counter js-counter" data-from="0" data-to="356" data-speed="5000"
                      data-refresh-interval="50"></span>
                    <span class="colorlib-counter-label">Projects</span>
                  </div>
                  <div class="col-md-3 text-center animate-box">
                    <span class="colorlib-counter js-counter" data-from="0" data-to="30" data-speed="5000"
                      data-refresh-interval="50"></span>
                    <span class="colorlib-counter-label">Clients</span>
                  </div>
                  <div class="col-md-3 text-center animate-box">
                    <span class="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="5000"
                      data-refresh-interval="50"></span>
                    <span class="colorlib-counter-label">Partners</span>
                  </div>
                </div>
              </div>
            </div>

            <Skills data={ListSkills} />

            <Education data={ListEducation} />

            <Experience data={WorkExperience} />

            <Portfolio />

            <section class="colorlib-blog" data-section="blog">
              <div class="colorlib-narrow-content">
                <div class="row">
                  <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                    data-animate-effect="fadeInLeft">
                    <span class="heading-meta">Read</span>
                    <h2 class="colorlib-heading">Recent Blog</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                    <div class="blog-entry">
                      <a href="blog.html" class="blog-img"><img src="images/blog-1.jpg"
                        class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                      <div class="desc">
                        <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i
                          class="icon-bubble3"></i> 4</small></span>
                        <h3><a href="blog.html">Renovating National Gallery</a></h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a
											large language ocean.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                    <div class="blog-entry">
                      <a href="blog.html" class="blog-img"><img src="images/blog-2.jpg"
                        class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                      <div class="desc">
                        <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i
                          class="icon-bubble3"></i> 4</small></span>
                        <h3><a href="blog.html">Wordpress for a Beginner</a></h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a
											large language ocean.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                    <div class="blog-entry">
                      <a href="blog.html" class="blog-img"><img src="images/blog-3.jpg"
                        class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                      <div class="desc">
                        <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i
                          class="icon-bubble3"></i> 4</small></span>
                        <h3><a href="blog.html">Make website from scratch</a></h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a
											large language ocean.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 animate-box">
                    <p><a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i
                      class="icon-reload"></i></a></p>
                  </div>
                </div>
              </div>
            </section>

            <section class="colorlib-contact" data-section="contact">
              <div class="colorlib-narrow-content">
                <div class="row">
                  <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                    data-animate-effect="fadeInLeft">
                    <span class="heading-meta">Get in Touch</span>
                    <h2 class="colorlib-heading">Contact</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-5">
                    <div class="colorlib-feature colorlib-feature-sm animate-box"
                      data-animate-effect="fadeInLeft">
                      <div class="colorlib-icon">
                        <i class="icon-globe-outline"></i>
                      </div>
                      <div class="colorlib-text">
                        <p><a href="#">info@domain.com</a></p>
                      </div>
                    </div>

                    <div class="colorlib-feature colorlib-feature-sm animate-box"
                      data-animate-effect="fadeInLeft">
                      <div class="colorlib-icon">
                        <i class="icon-map"></i>
                      </div>
                      <div class="colorlib-text">
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                      </div>
                    </div>

                    <div class="colorlib-feature colorlib-feature-sm animate-box"
                      data-animate-effect="fadeInLeft">
                      <div class="colorlib-icon">
                        <i class="icon-phone"></i>
                      </div>
                      <div class="colorlib-text">
                        <p><a href="tel://">+123 456 7890</a></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7 col-md-push-1">
                    <div class="row">
                      <div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                        data-animate-effect="fadeInRight">
                        <form action="">
                          <div class="form-group">
                            <input type="text" class="form-control" placeholder="Name" />
                          </div>
                          <div class="form-group">
                            <input type="text" class="form-control" placeholder="Email" />
                          </div>
                          <div class="form-group">
                            <input type="text" class="form-control" placeholder="Subject" />
                          </div>
                          <div class="form-group">
                            <textarea name="" id="message" cols="30" rows="7" class="form-control"
                              placeholder="Message"></textarea>
                          </div>
                          <div class="form-group">
                            <input type="submit" class="btn btn-primary btn-send-message"
                              value="Send Message" />
                          </div>
                        </form>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- end:colorlib-main --> */}
          </div>
          {/* <!-- end:container-wrap --> */}
        </div>
        {/* <!-- end:colorlib-page --> */}
      </div>
    )
  }
}

export default Home;