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
                Test laoreet orci id pretium sodales. Nunc ac est dolor. Donec
                placerat dolor et mi elementum, in suscipit libero tincidunt.
                Ut at tempor ex, vel auctor tortor. Sed finibus vitae mi et
                imperdiet.
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
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 text-start">
              <span className="copyright-text">
                Copyright © 2025{" "}

                All rights reserved.
              </span>
            </div>
            <div className="col-lg-6 col-md-5 text-end">
              <ul className="social-list style-1">
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-linkedin"></i></Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-tiktok"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;