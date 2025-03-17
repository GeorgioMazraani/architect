import CommonBanner from "../elements/CommonBanner";
import { IMAGES } from "../elements/theme";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { HomeGalleryArr } from "../elements/JsonData";
import { useState } from "react";

const buttons = [
  { title: "All" },
  { title: "Architecture" },
  { title: "Interior Design" },
];

const Portfolio = () => {
  const [data, setData] = useState(HomeGalleryArr);
  const [active, setActive] = useState("All");

  const FilterButton = (title: string) => {
    setActive(title);

    if (title === "Interior Design") {
      const filteredInterior = HomeGalleryArr.filter((el) =>
        el.categery.includes("Interior Design")
      ).slice(0, 5); // Show first 5 Interior Design images
      setData(filteredInterior);
    } else if (title === "Architecture") {
      const filteredArchitecture = HomeGalleryArr.filter((el) =>
        el.categery.includes("Architecture")
      );
      setData(filteredArchitecture);
    } else {
      setData(HomeGalleryArr);
    }
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

  // Apply a consistent style to all images.
  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  };
  

  return (
    <div className="page-content bg-white">
      <CommonBanner img={IMAGES.bnr5} title="OUR PORTFOLIO" text="Portfolio" />
      <section className="content-inner-1 line-img overflow-hidden masonry-portfolio">
        <div className="container">
          <div className="site-filters style-1 clearfix center">
            <ul className="filters">
              {buttons.map(({ title }, index) => (
                <li
                  className={`btn ${active === title ? "active" : ""}`}
                  key={index}
                  onClick={() => FilterButton(title)}
                >
                  <Link to="#">{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          selector={".lightimg"}
        >
          <Swiper
            className="swiper-container swiper-portfolio lightgallery aos-item"
            slidesPerView={4}
            loop={true}
            breakpoints={{
              1200: { slidesPerView: 4 },
              991: { slidesPerView: 3 },
              575: { slidesPerView: 2 },
              240: { slidesPerView: 1 },
            }}
          >
            {data.map((item, ind) => (
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
                      <img src={item.img} alt="" style={{ display: "none" }} />
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
                        <img src={item.img2} alt="" style={{ display: "none" }} />
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
            ))}
          </Swiper>
        </LightGallery>
      </section>
    </div>
  );
};

export default Portfolio;
