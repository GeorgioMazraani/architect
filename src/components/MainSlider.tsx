import { Link } from "react-router-dom";
import { MainSliderArr } from "../elements/JsonData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const MainSlider = () => {
  return (
    <motion.div
      className="silder-one"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Swiper
        className="swiper-container main-silder-swiper"
        slidesPerView={1}
        speed={1500}
        loop={true}
        parallax={true}
        navigation={{ prevEl: ".btn-prev", nextEl: ".btn-next" }}
        modules={[Parallax, Navigation, Pagination]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          renderBullet(index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
      >
        {MainSliderArr.map((item, ind) => (
          <SwiperSlide className="swiper-slide" key={ind}>
            <div className="silder-img overlay-black-light">
              <img src={item.img} data-swiper-parallax="30%" alt="" />
            </div>
            <div className="silder-content" data-swiper-parallax="-40%">
              <div className="inner-content">
                <h6 className="sub-title text-primary">INTERIOR DESIGN</h6>
                <h1 className="title">
                  WE CREAT YOUR DREAM IDEAS
                  <span>CREATIVE</span>{" "}
                  <span className="text-primary">ARCHITECTURE</span>
                </h1>
                <p className="m-b30">
                  Quisque vel condimentum dolor, vitae luctus lacus. Integer
                  finibus arcu non ultrices rhoncus. Sed pulvinar augue diam,
                  sed commodo urna vehicula quis. Ut accumsan mauris vel neque
                  tristique, ut egestas orci aliquet. Aliquam non turpis id
                  nulla semper porta.
                </p>
                <Link to="/about-us" className="btn shadow-primary btn-primary">
                  READ MORE <i className="m-l10 fas fa-caret-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        
      </Swiper>
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

export default MainSlider;
