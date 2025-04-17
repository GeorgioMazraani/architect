import { useEffect, useContext } from "react";

import HomeGallery from "../components/HomeGallery";
import MainSlider from "../components/MainSlider";
import HomeAbout2 from "../elements/HomeAbout2";
import HomeServices from "../elements/HomeServices";
import { Context } from "../context/contextApi";
import { motion } from "framer-motion";

const Home = () => {
  const { switcheData } = useContext(Context);

  useEffect(() => {
    document.body.setAttribute("data-color", "color_1");
  }, [switcheData]);

  return (
    <div className="page-content bg-white">
      <MainSlider />

      {/* ABOUT SECTION */}
      <section
        className="content-inner line-img section-title style-2"
        data-name="About Us"
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">WHY CHOOSE US?</h2>
            <div className="dz-separator style-1 text-primary"></div>
          </div>
          <HomeAbout2 />
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="content-inner-2 bg-gray line-img pb-1 section-title style-1"
        data-name="Portfolio"
      >
        <div className="container">
          <div className="row align-items-center section-head-bx">
            <div className="col-md-8">
              <div className="section-head style-1">
                <h2 className="title">
                  SEE OUR <span className="text-primary">LATEST WORK</span>
                </h2>
                <div className="dz-separator style-1 text-primary"></div>
              </div>
            </div>

            {/* ARROW BUTTONS */}
            <div className="col-md-4 text-end">
              <div className="portfolio-pagination d-inline-flex gap-4 mb-5">
                {/* PREV */}
                <div
                  className="btn-prev swiper-button-prev2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <i
                    className="las la-long-arrow-alt-left"
                    style={{ position: "static", transform: "none" }}
                  />
                  <span>PREV</span>
                </div>

                {/* NEXT */}
                <div
                  className="btn-next swiper-button-next2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <span>NEXT</span>
                  <i
                    className="las la-long-arrow-alt-right"
                    style={{ position: "static", transform: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomeGallery
          prev={"swiper-button-prev2"}
          next={"swiper-button-next2"}
        />
      </motion.section>

      {/* SERVICES SECTION */}
      <section className="content-inner-1 line-img overflow-hidden">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">
              WHAT <span className="text-primary">WE PROVIDE</span>
            </h2>
            <div className="dz-separator style-1 text-primary"></div>
          </div>
          <HomeServices />
        </div>
      </section>
    </div>
  );
};

export default Home;