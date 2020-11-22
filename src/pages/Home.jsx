import React, { Fragment } from "react";
import { Component } from "react";
import "../style/css/Home.css"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />

        {/* START FOTO PROFILE */}
        <section className="site-hero" id="section-home" data-stellar-background-ratio="0.5">
        </section>
        {/* END FOTO PROFILE */}

        <Footer />
      </Fragment>
    )
  }
}

export default Home;