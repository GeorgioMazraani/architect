import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import { portArr } from "../elements/JsonData";
import { useNavigate } from "react-router-dom";

interface propsFile {
  prev: string;
  next: string;
}

const HomeGallery = ({ prev, next }: propsFile) => {
  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  };
  const navigate = useNavigate();

  const handleNavigate = (item: any) => {
    navigate(`/Portfolio?category=${item.categery}`);
  };


  const filteredImages = portArr.slice(0, 8);

  return (
    <LightGallery speed={500} plugins={[lgZoom]} selector={".lightimg"}>
      <Swiper
        className="swiper-container swiper-portfolio lightgallery aos-item"
        slidesPerView={4}
        speed={2500}
        loop={true}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: `.${prev}`,
          nextEl: `.${next}`,
        }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }}
      >
        {filteredImages.map((item, ind) => (
          <SwiperSlide className="swiper-slide" key={ind}>
            <div className="dz-box overlay style-1">
              <div className="dz-media">
                <img src={item.img} alt="" style={imageStyle} />
              </div>
              <div className="dz-info">
                <div
                  onClick={() => handleNavigate(item)}
                  className="view-btn lightimg"
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.img} alt="" style={{ display: "none" }} />
                </div>

                <h6 className="sub-title text-uppercase">{item.category}</h6>
                <h4 className="title m-b15 text-white">{item.categery}</h4>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </LightGallery>
  );
};

export default HomeGallery;
