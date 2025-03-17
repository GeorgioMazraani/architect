import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { HomeGalleryArr } from "../elements/JsonData";
import { IMAGES } from "../elements/theme";

// Define a type for your gallery items.
interface GalleryItem {
  img: string;
  img2?: string;
  categery: string;
  className?: string;
}

interface propsFile {
  prev: string;
  next: string;
}

const HomeGallery = ({ prev, next }: propsFile) => {
  // Define a consistent style for all images.
  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  };

  // Helper function returns the correct label based on the image and its category.
  const getImageLabel = (img: string, category: string) => {
    if (category.includes("Architecture")) {
      if (img === IMAGES.architecture1 || img === IMAGES.architecture2)
        return "Lebanese Style";
      if (img === IMAGES.architecture3 || img === IMAGES.architecture4)
        return "KSA Villa";
      if (img === IMAGES.architecture5 || img === IMAGES.architecture6)
        return "Modern Villa";
      if (img === IMAGES.architecture7 || img === IMAGES.architecture8)
        return "Medical Tourism";
      if (img === IMAGES.architecture9 || img === IMAGES.architecture10)
        return "Padel Courts";
      return "Architecture";
    } else if (category.includes("Interior Design")) {
      if (img === IMAGES.interior1 || img === IMAGES.interior2)
        return "Master Bedroom";
      if (img === IMAGES.interior3 || img === IMAGES.interior4)
        return "Salon";
      if (img === IMAGES.interior5 || img === IMAGES.interior6)
        return "Living Room";
      if (img === IMAGES.interior7 || img === IMAGES.interior8)
        return "Grand Bedroom";
      if (img === IMAGES.interior9 || img === IMAGES.interior10)
        return "KSI Interior Villa";
      return "Interior Design";
    }
    return "";
  };

  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      selector={".lightimg"}
    >
      <Swiper
        className="swiper-container swiper-portfolio lightgallery aos-item"
        slidesPerView={4}
        speed={1500}
        loop={true}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: `.${prev}`,
          nextEl: `.${next}`,
        }}
        autoplay={{ delay: 1500 }}
        breakpoints={{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }}
      >
        {(HomeGalleryArr as GalleryItem[]).map((item, ind) => {
          if (item?.className !== "hide") {
            return (
              <SwiperSlide className="swiper-slide" key={ind}>
                <div className="dz-box overlay style-1">
                  <div className="dz-media">
                    <img src={item.img} alt="" style={imageStyle} />
                  </div>
                  <div className="dz-info">
                    <span
                      data-exthumbimage={item.img}
                      data-src={item.img}
                      className="view-btn lightimg"
                      title={getImageLabel(item.img, item.categery)}
                    >
                      <img
                        src={item.img}
                        alt=""
                        style={{ display: "none" }}
                      />
                    </span>
                    <h6 className="sub-title">
                      {getImageLabel(item.img, item.categery)}
                    </h6>
                    <h4 className="title m-b15">
                      <Link to="/portfolio-details">
                        {getImageLabel(item.img, item.categery)}
                      </Link>
                    </h4>
                  </div>
                </div>
                {item?.img2 && (
                  <div className="dz-box overlay style-1">
                    <div className="dz-media">
                      <img src={item.img2} alt="" style={imageStyle} />
                    </div>
                    <div className="dz-info">
                      <span
                        data-exthumbimage={item.img2}
                        data-src={item.img2}
                        className="view-btn lightimg"
                        title={getImageLabel(item.img, item.categery)}
                      >
                        <img
                          src={item.img2}
                          alt=""
                          style={{ display: "none" }}
                        />
                      </span>
                      <h6 className="sub-title">
                        {getImageLabel(item.img, item.categery)}
                      </h6>
                      <h4 className="title m-b15">
                        <Link to="/portfolio-details">
                          {getImageLabel(item.img, item.categery)}
                        </Link>
                      </h4>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide className="swiper-slide" key={ind}>
                <div className="dz-box overlay style-1">
                  <div className="dz-media">
                    <img src={item.img} alt="" style={imageStyle} />
                  </div>
                  <div className="dz-info">
                    <span
                      data-exthumbimage={item.img}
                      data-src={item.img}
                      className="view-btn lightimg"
                      title={getImageLabel(item.img, item.categery)}
                    >
                      <img
                        src={item.img}
                        alt=""
                        style={{ display: "none" }}
                      />
                    </span>
                    <h6 className="sub-title">
                      {getImageLabel(item.img, item.categery)}
                    </h6>
                    <h4 className="title m-b15">
                      <Link to="/portfolio-details">
                        {getImageLabel(item.img, item.categery)}
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="dz-box overlay style-1">
                  <div className="dz-media">
                    <img src={item.img2} alt="" style={imageStyle} />
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </LightGallery>
  );
};

export default HomeGallery;
