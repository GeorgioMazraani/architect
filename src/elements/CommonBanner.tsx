import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface propFile {
  img: string;
  title: string;
  text: string;
}

const CommonBanner = ({ img, title, text }: propFile) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="dz-bnr-inr style-1 overlay-white-dark"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container">
        <div className="dz-bnr-inr-entry">
          <h1>{title}</h1>
          <nav aria-label="breadcrumb" className="breadcrumb-row">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">{text}</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="follow-info">
        <div className="inner-info">
          <h6 className="title text-primary">Follow Us On:</h6>
          <ul>
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
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-tiktok"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CommonBanner;
