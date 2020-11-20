import React from "react";
import "../style/css/Footer.css"

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="row mb-5">
          <div className="col-md-12 text-center social-media">
            <p>
              <a href="https://www.facebook.com/andrefajarn/" className="social-item"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/andrefajarn/" className="social-item"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/andre-fajar-n/" className="social-item"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/andre-fajar-n/" className="social-item"><i className="fab fa-github"></i></a>
              <a href="mailto:andrenugroho395@gmail.com" className="social-item"><i className="far fa-envelope"></i></a>
              <a href="https://www.hackerrank.com/afajar" className="social-item"><i className="fab fa-hackerrank"></i></a>
            </p>
          </div>
          <p className="col-12 text-center">
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
      Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" ></i> by <a href="https://colorlib.com" target="blank" className="text-primary">Colorlib</a>
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
          </p>
        </div>
      </div>
    </footer>
  )
}