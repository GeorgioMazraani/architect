import { Swiper, SwiperSlide } from "swiper/react";
import { ClientLogoArr } from "./JsonData";
import { Autoplay } from "swiper/modules";

const ClientLogo = () => {
  return (
    <>
      <div className="clients-section-1 line-img bg-gray">
        <div className="container">
          <Swiper
            className="swiper-container clients-swiper"
            slidesPerView={6}
            loop={true}
            speed={1500}
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
            }}
            breakpoints={{
              1200: { slidesPerView: 6 },
              1024: { slidesPerView: 5 },
              991: { slidesPerView: 4 },
              775: { slidesPerView: 3 },
              240: { slidesPerView: 2 },
            }}
          >
            {ClientLogoArr.map(({ img, img2 }, ind) => (
              <SwiperSlide className="swiper-slide" key={ind}>
                <div className="clients-logo aos-item">
                  <img className="logo-main" src={img} alt="" />
                  <img className="logo-hover" src={img2} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ClientLogo;
