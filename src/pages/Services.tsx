import { Link } from "react-router-dom";

import CommonBanner from "../elements/CommonBanner";
import { ServicesArr } from "../elements/JsonData";

import { IMAGES } from "../elements/theme";

const Services = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner img={IMAGES.bnr2} title="OUR SERVICES" text="Services" />
      <section className="content-inner line-img">
        <div className="container">
          <div className="row">
            {ServicesArr.map(({ img, title }, ind) => (
              <div className="col-lg-3 col-md-6 aos-item" key={ind}>
                <div
                  className="icon-bx-wraper style-1 m-b30 flip-bx"
                  data-name="1."
                >
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
                  <div className="back">
                    <div className="inner">
                      <div>
                        <div className="sep-tl"></div>
                        <div className="sep-br"></div>
                        
                        <h4 className="title m-b15">
                          <Link to="/services-details" className="text-white">
                            {title}
                          </Link>
                        </h4>
                        <p>
                          Quisque vel condimentum dolor, vitae luctus lacus. Integer
                          finibus arcu non ultrices rhoncus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
