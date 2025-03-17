import { Link } from "react-router-dom";
import { MainBanner5Arr } from "../elements/JsonData";
import { useContext, useRef, useState } from "react";
import { Context } from "../context/contextApi";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import { IMAGES } from "../elements/theme";
import { motion } from "framer-motion";

const MainSlider5 = () => {
  const { setModabox } = useContext(Context);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const ref = useRef<SwiperRef | null>(null);

  function accordianButton(e: React.FormEvent<HTMLLIElement>) {
    const nodelist = document.querySelectorAll<HTMLElement>(".icon-dropdown");

    for (let i = 0; i < nodelist.length; i++) {
      nodelist[i].id = `element_${i}`;
    }

    Array.from(nodelist).forEach((el, index) => {
      el.classList.toggle("show");
      if (
        e.currentTarget instanceof HTMLElement &&
        e.currentTarget.id !== `element_${index}`
      ) {
        el.classList.remove("show");
      }
    });
  }

  return (
    <motion.div
      className="silder-five position-relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="container">
        <div className="row  inner-content">
          <div className="col-lg-7 col-md-12">
            <Swiper
              className="swiper-container main-silder-05"
              speed={1500}
              modules={[Thumbs, Autoplay]}
              autoplay={{ delay: 1500 }}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
              onSwiper={(swiper) => {
                if (ref.current) ref.current.swiper = swiper;
              }}
            >
              {MainBanner5Arr.map(({ title }, ind) => (
                <SwiperSlide className="swiper-slide" key={ind}>
                  <div className="silder-content ">
                    <div className="inner-content">
                      <h1 className="title">
                        {title}
                        <span className="text-primary">
                          Creative Architecture
                        </span>
                      </h1>
                      <p className="text m-b30">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley.
                      </p>
                      <div className="contant-box">
                        <Link
                          to="/about-us"
                          className="btn shadow-primary btn-primary m-r40  btn-sm"
                        >
                          READ MORE
                        </Link>
                        <Link
                          className="video-btn style-1 popup-youtube"
                          to="#"
                          onClick={() => {
                            setModabox(true);
                          }}
                        >
                          <i className="fa fa-play"></i>
                          <span className="text">Watch Video</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-lg-5 col-md-12 p-a0">
            <Swiper
              className="swiper-container main-silder-thumb-05 "
              speed={1500}
              onSwiper={(swiper: any) => {
                setThumbsSwiper(swiper);
              }}
            >
              {MainBanner5Arr.map(({ img }, ind) => (
                <SwiperSlide className="swiper-slide" key={ind}>
                  <div className="silder-img overlay-black-light m-b30">
                    <img src={img} alt="" />
                    <ul className="point-list">
                      <li
                        className="icon-dropdown"
                        onClick={(e) => {
                          accordianButton(e);
                        }}
                      >
                        <i className="fas fa-plus"></i>
                        <div className="contant-box-inner">
                          <h6>Sofa Come Bed</h6>
                          <p>
                            standard dummy text ever since the 1500s, when an
                            unknown printer took Link galley
                          </p>
                        </div>
                      </li>
                      <li
                        className="icon-dropdown"
                        onClick={(e) => {
                          accordianButton(e);
                        }}
                      >
                        <i className="fas fa-plus"></i>
                        <div className="contant-box-inner">
                          <h6>Sofa Come Bed</h6>
                          <p>
                            standard dummy text ever since the 1500s, when an
                            unknown printer took Link galley
                          </p>
                        </div>
                      </li>
                      <li
                        className="icon-dropdown"
                        onClick={(e) => {
                          accordianButton(e);
                        }}
                      >
                        <i className="fas fa-plus"></i>
                        <div className="contant-box-inner">
                          <h6>Sofa Come Bed</h6>
                          <p>
                            standard dummy text ever since the 1500s, when an
                            unknown printer took Link galley
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="animation-btn">
        <Link
          className="popup-youtube"
          to="#"
          onClick={() => {
            setModabox(true);
          }}
        >
          <img src={IMAGES.bnr9} alt="" className="img1" />
          <img src={IMAGES.bnr10} alt="" className="img2" />
          <i className="fa fa-play"></i>
        </Link>
      </div>
      <div className="follow-info style-3 left">
        <div className="inner-info">
          <ul>
            <li className="text-primary">FOLLOW US NOW:</li>
            <li>
              <ul>
                <li>
                  <Link to="https://twitter.com/" target="blank">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/" target="blank">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.facebook.com/" target="blank">
                    <i className="fab fa-facebook-f"></i>
                  </Link>{" "}
                </li>
                <li>
                  <Link to="https://www.youtube.com//" target="blank">
                    <i className="fab fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default MainSlider5;
