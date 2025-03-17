import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HomeTeamArr } from "../elements/JsonData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeTeam = () => {
  return (
    <div className="row">
      <div className="col-lg-12 m-b30">
        <Swiper
          className="swiper-container team-swiper"
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          speed={1500}
          modules={[Navigation]}
          navigation={{
            prevEl: ".btn-prev",
            nextEl: ".btn-next",
          }}
          breakpoints={{
            1200: { slidesPerView: 4 },
            991: { slidesPerView: 3 },
            575: { slidesPerView: 2 },
            240: { slidesPerView: 1 },
          }}
        >
          {HomeTeamArr.map(({ img, title, setStyle }, ind) => (
            <SwiperSlide className="swiper-slide" key={ind}>
              <motion.div
                className={`${setStyle} dz-team style-1 text-center m-b30 overlay-shine aos-item`}
                initial={{ y: "50%" }}
                whileInView={{ y: "0%" }}
              >
                <div className="dz-media shadow">
                  <Link to="#">
                    <img src={img} alt="" />
                  </Link>
                  <ul className="team-social">
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
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dz-content">
                  <h5 className="dz-name">
                    <Link to="#">{title}</Link>
                  </h5>
                  <h6 className="dz-position text-primary">Director</h6>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          <div className="testimonial-swiper text-center m-t30">
            <div className="btn-prev swiper-button-prev4 pe-3">
              <i className="las la-long-arrow-alt-left"></i>PREV
            </div>
            <div className="btn-next swiper-button-next4 ps-3">
              NEXT<i className="las la-long-arrow-alt-right"></i>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeTeam;
