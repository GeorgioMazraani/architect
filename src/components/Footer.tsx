import { Link } from "react-router-dom";
import { IMAGES } from "../elements/theme";

const Footer = () => {
  return (
    <footer className="site-footer style-1" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-10">
              <div className="footer-logo logo-dark">
                <img src={IMAGES.logo} alt="Logo" />
              </div>
              <p className="text">
                Let’s bring your vision to life.
                From concept to completion, we create timeless, functional, and inspiring spaces.
              </p>

              {/* Contact Us Button */}
              <div className="ft-contact">
                <Link to="/contact-us" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-7 text-center">
              <span className="copyright-text">
                Copyright © 2025{" "}
                All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;