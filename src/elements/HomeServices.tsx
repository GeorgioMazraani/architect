import { Link } from "react-router-dom";
import { HomeServicesArr } from "./JsonData";
import { motion } from "framer-motion";

const HomeServices = () => {
  return (
    <>
      <div className="row justify-content-center">
        {HomeServicesArr.map(({ img, title, description }, ind) => (
          <motion.div
            className="col-lg-4 col-md-6 aos-item"
            key={ind}
            initial={{ rotateY: "90deg" }}
            whileInView={{ rotateY: "360deg" }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="icon-bx-wraper style-1 m-b30 flip-bx">
              {/* FRONT SIDE */}
              <div
                className="front overlay-black-middle"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="inner">
                  <div>
                    <div className="sep-tl"></div>
                    <div className="sep-br"></div>
                    <h4 className="title m-b10">{title}</h4>
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="back">
                <div className="inner">
                  <div>
                    <div className="sep-tl"></div>
                    <div className="sep-br"></div>
                    <h4 className="title m-b15 text-white">{title}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link to="/services" className="btn shadow-primary btn-primary">
          VIEW ALL SERVICES <i className="m-l10 fas fa-caret-right"></i>
        </Link>
      </div>
    </>
  );
};

export default HomeServices;
