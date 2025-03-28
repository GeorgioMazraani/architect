import { Link } from "react-router-dom";
import CommonBanner from "../elements/CommonBanner";
import { ServicesArr } from "../elements/JsonData";
import { IMAGES } from "../elements/theme";

const Services = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner img={IMAGES.bnr2} title="OUR SERVICES" text="Services" />

      <section className="content-inner pb-0">
  <div className="container">
    <div className="section-head style-1 text-center">
      <h2 className="title">ARCHITECTURE & CONSULTANCY</h2>
      <div className="dz-separator style-1 text-primary"></div>
      <p
        className="mx-auto"
        style={{
          maxWidth: "750px",
          fontSize: "1.15rem",
          color: "#666",
          lineHeight: "1.8",
          marginTop: "1.5rem",
        }}
      >
        At Manal Shalak Architecture & Consultancy, we offer a range of
        professional services tailored to meet the diverse needs of our
        clients. From concept to completion, we ensure that every project
        is executed with precision, creativity, and a deep understanding
        of architectural functionality.
      </p>
    </div>
  </div>
</section>


      <section className="content-inner line-img">
        <div className="container">
          <div className="row">
            {ServicesArr.map(({ img, title, description }, ind) => (
              <div className="col-lg-3 col-md-6 aos-item" key={ind}>
                <div
                  className="icon-bx-wraper style-1 m-b30 flip-bx"
                  data-name="1."
                >
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
                        <h4 className="title m-b15">
                          <Link to="/services-details" className="text-white">
                            {title}
                          </Link>
                        </h4>
                        <p>{description}</p>
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
