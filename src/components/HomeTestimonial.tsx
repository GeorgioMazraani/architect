import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HomeTestimonialArr } from "../elements/JsonData";

interface buttoType {
  prev: string;
  next: string;
}

const HomeTestimonial = ({ prev, next }: buttoType) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 m-b20">
          <Swiper
            className="swiper-container testimonial-swiper"
            slidesPerView={3}
            spaceBetween={30}
            speed={1200}
            modules={[Navigation]}
            navigation={{
              prevEl: `.${prev}`,
              nextEl: `.${next}`,
            }}
            loop={true}
            breakpoints={{
              1200: { slidesPerView: 3 },
              691: { slidesPerView: 2 },
              240: { slidesPerView: 1 },
            }}
          >
            {HomeTestimonialArr.map(({ img, title }, ind) => (
              <SwiperSlide className="swiper-slide aos-item" key={ind}>
                <div className="testimonial-1 text-center">
                  <div className="testimonial-info">
                    <div className="sep-tl"></div>
                    <div className="sep-br"></div>
                    <div className="testimonial-text">
                      <p>
                        Suspendisse sem est, eleifend id vulputate sit amet,
                        rhoncus mollis justo. Cras iaculis justo ac dictum
                        vestibulum. Cras id arcu turpis. Nulla ligula velit,
                        condimentum ut orci eget, semper efficitur odio.
                      </p>
                    </div>
                    <div className="testimonial-detail">
                      <ul className="star-rating text-primary">
                        <li>
                          <i className="fa fa-star me-1"></i>
                        </li>
                        <li>
                          <i className="fa fa-star me-1"></i>
                        </li>
                        <li>
                          <i className="fa fa-star me-1"></i>
                        </li>
                        <li>
                          <i className="fa fa-star me-1"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <h5 className="testimonial-name text-white">{title}</h5>
                      <span className="testimonial-position text-white">
                        CEO Founder
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-pic">
                    <img src={img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;