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

  // Get the first 8 images (4 Architecture, 2 Grand Bedrooms, 2 Salon)
  const filteredImages = HomeGalleryArr.slice(0, 8);

  return (
    <LightGallery speed={500} plugins={[ lgZoom]} selector={".lightimg"}>
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
        {filteredImages.map((item, ind) => (
          <SwiperSlide className="swiper-slide" key={ind}>
            <div className="dz-box overlay style-1">
              <div className="dz-media">
                <img src={item.img} alt="" style={imageStyle} />
              </div>
              <div className="dz-info">
                <span data-exthumbimage={item.img} data-src={item.img} className="view-btn lightimg">
                  <img src={item.img} alt="" style={{ display: "none" }} />
                </span>
                <h6 className="sub-title">{item.categery}</h6>
                <h4 className="title m-b15">
                  <Link to="/portfolio-details">{item.categery}</Link>
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </LightGallery>
  );
};

export default HomeGallery;
