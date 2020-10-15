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
                <li className="nav-item"><a className="nav-link" href="#section-resume">Resume</a></li>
                <li className="nav-item"><a className="nav-link" href="#section-portfolio">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#section-skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link" href="#section-contact">Contact</a></li>
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
                <p className="lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p className="mb-5  ">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                <p>
                  <a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
                  <a href="https://drive.google.com/file/d/1b7jfB5OMFvovTvi4oHNhdFqhLb3hGRRK/view?usp=sharing" target="blank" className="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* END ABOUT */}

        {/* START RESUME */}
        <section className="site-section " id="section-resume">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>My <strong>Resume</strong></h2>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="col-md-6">
                <h2 className="mb-5">Education</h2>
                {listEducation.map((value) => (
                  <Resume data={value} />
                ))}
              </div>

              {/* EXPERIENCE */}
              <div className="col-md-6">
                <h2 className="mb-5">Experience</h2>
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

        <section className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="section-heading text-center">
                  <h2>Client <strong>Testimonial</strong></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">

                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img src={require("../images/person_1.jpg")} alt="Image_placeholder" className="img-fluid" />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                    <cite className="block-47-quote-author">&mdash; Ethan McCown, CEO <a href="f">XYZ Inc.</a></cite>
                  </blockquote>
                </div>

              </div>
              <div className="col-md-6">

                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img src={require("../images/person_2.jpg")} alt="Image_placeholder" className="img-fluid" />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                    <cite className="block-47-quote-author">&mdash; Craig Gowen, CEO <a href="f">XYZ Inc.</a></cite>
                  </blockquote>
                </div>

              </div>

              <div className="col-md-6">

                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img src={require("../images/person_3.jpg")} alt="Image_placeholder" className="img-fluid" />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                    <cite className="block-47-quote-author">&mdash; Ethan McCown, CEO <a href="f">XYZ Inc.</a></cite>
                  </blockquote>
                </div>

              </div>
              <div className="col-md-6">

                <div className="block-47 d-flex mb-5">
                  <div className="block-47-image">
                    <img src={require("../images/person_4.jpg")} alt="Image_placeholder" className="img-fluid" />
                  </div>
                  <blockquote className="block-47-quote">
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                    <cite className="block-47-quote-author">&mdash; Craig Gowen, CEO <a href="f">XYZ Inc.</a></cite>
                  </blockquote>
                </div>

              </div>

            </div>
          </div>
        </section>


        <section className="site-section pb-0" id="section-services">
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-12">
                <div className="section-heading text-center">
                  <h2>My <strong>Services</strong></h2>
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-md-6 col-lg-4 text-center mb-5">
                <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                  <span className="icon">
                    <span className="icon-browser2"></span>
                  </span>
                  <h3 className="mb-4">Web Design</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="f" className="site-link">Learn More <i className="icon-chevron-right"></i></a></p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-center mb-5">
                <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                  <span className="icon">
                    <span className="icon-presentation"></span>
                  </span>
                  <h3 className="mb-4">Search Engine Optimization</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  <p><a href="f" className="site-link">Learn More <i className="icon-chevron-right"></i></a></p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-center mb-5">
                <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                  <span className="icon">
                    <span className="icon-video2"></span>
                  </span>
                  <h3 className="mb-4">Video Editing</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                  <p><a href="f" className="site-link">Learn More <i className="icon-chevron-right"></i></a></p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="site-section" id="section-blog">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>Blog on <strong>Medium</strong></h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="f"><img src={require("../images/post_1.jpg")} alt="Image_placeholder" className="img-fluid" /></a>
                  <div className="blog-entry-text">
                    <h3><a href="f">Creative Product Designer From Facebook</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>

                    <div className="meta">
                      <a href="f"><span className="icon-calendar"></span> Aug 7, 2018</a>
                      <a href="f"><span className="icon-bubble"></span> 5 Comments</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="google.com"><img src={require("../images/post_2.jpg")} alt="Image_placeholder" className="img-fluid" /></a>
                  <div className="blog-entry-text">
                    <h3><a href="g">Creative Product Designer From Facebook</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>

                    <div className="meta">
                      <a href="f"><span className="icon-calendar"></span> Aug 7, 2018</a>
                      <a href="f"><span className="icon-bubble"></span> 5 Comments</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 mb-4">
                <div className="blog-entry">
                  <a href="f"><img src={require("../images/post_3.jpg")} alt="Image_placeholder" className="img-fluid" /></a>
                  <div className="blog-entry-text">
                    <h3><a href="f">Creative Product Designer From Facebook</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>

                    <div className="meta">
                      <a href="f"><span className="icon-calendar"></span> Aug 7, 2018</a>
                      <a href="f"><span className="icon-bubble"></span> 5 Comments</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="site-section" id="section-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>Get <strong>In Touch</strong></h2>
                </div>
              </div>

              <div className="col-md-7 mb-5 mb-md-0">
                <form action="" className="site-form">
                  <h3 className="mb-5">Get In Touch</h3>
                  <div className="form-group">
                    <input type="text" className="form-control px-3 py-4" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control px-3 py-4" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control px-3 py-4" placeholder="Your Phone" />
                  </div>
                  <div className="form-group mb-5">
                    <textarea className="form-control px-3 py-4" cols="30" rows="10" placeholder="Write a Message"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-primary  px-4 py-3" value="Send Message" />
                  </div>
                </form>
              </div>
              <div className="col-md-5 pl-md-5">
                <h3 className="mb-5">My Contact Details</h3>
                <ul className="site-contact-details">
                  <li>
                    <span className="text-uppercase">Email</span>
                    andrenugroho395@gmail.com
                  </li>
                  <li>
                    <span className="text-uppercase">Phone</span>
                    +62 85 735 950 340
                  </li>
                  <li>
                    <span className="text-uppercase">Address</span>
                    Jalan Blitar no. 20 Ngunut, Tulungagung, Jawa Timur, Indonesia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <footer className="site-footer">
          <div className="container">

            <div className="row mb-5">
              <p className="col-12 text-center">
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
      Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" ></i> by <a href="https://colorlib.com" target="blank" className="text-primary">Colorlib</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>

            <div className="row mb-5">
              <div className="col-md-12 text-center">
                <p>
                  <a href="https://www.facebook.com/an.fa.nu0706/" className="social-item"><span className="icon-facebook2"></span></a>
                  <a href="https://www.instagram.com/andrefajarn/" className="social-item"><span className="icon-instagram2"></span></a>
                  <a href="https://www.linkedin.com/in/andre-fajar-n/" className="social-item"><span className="icon-linkedin2"></span></a>
                  <a href="https://github.com/andre-fajar-n/" className="social-item"><span className="icon-github"></span></a>
                  <a href="mailto:andrenugroho395@gmail.com" className="social-item"><span className="icon-email"></span></a>
                </p>
              </div>
            </div>

          </div>
        </footer>
      </Fragment>
    )
  }
}

export default Home;