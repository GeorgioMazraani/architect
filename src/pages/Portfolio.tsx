import CommonBanner from "../elements/CommonBanner";
import { IMAGES } from "../elements/theme";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import { HomeGalleryArr } from "../elements/JsonData";
import { useState, useEffect } from "react";
import {
  ArchitectureSubtypeImages,
  ResidentialSubtypeImages,
} from "../elements/JsonData";
import type { HomeGalleryItem } from "../elements/JsonData";

const buttons = [
  { title: "Architecture" },
  { title: "Commercial" },
  { title: "Residential" },
];

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
    return "Architecture";
  } else if (category.includes("Residential")) {
    if ([IMAGES.residentialLR3, IMAGES.residentialLR4].includes(img))
      return "Living Room";
    if ([IMAGES.MBR1, IMAGES.MBR2, IMAGES.MBR3, IMAGES.MBR4, IMAGES.MBR5].includes(img))
      return "Master Bedroom 1";
    if ([IMAGES.GBR1, IMAGES.GBR2, IMAGES.GBR3, IMAGES.GBR4, IMAGES.GBR5].includes(img))
      return "Master Bedroom 2";
    if ([IMAGES.S1, IMAGES.S2, IMAGES.S3, IMAGES.S4, IMAGES.S5].includes(img))
      return "Salon";
    return "Residential Project";
  }
  return "";
};

const Portfolio = () => {
  const [data, setData] = useState<HomeGalleryItem[]>([]);
  const [active, setActive] = useState("Architecture");

  useEffect(() => {
    FilterButton("Architecture");
  }, []);

  const FilterButton = (title: string) => {
    setActive(title);

    if (title === "Commercial") {
      const filtered = HomeGalleryArr.filter((el) =>
        el.categery.includes("Commercial")
      );
      setData(filtered);
    } else if (title === "Residential") {
      const filtered = HomeGalleryArr.filter((el) =>
        el.categery.includes("Residential")
      );
      setData(filtered);
    } else {
      const allowedImages = [
        IMAGES.architecture1,
        IMAGES.architecture2,
        IMAGES.architecture3,
        IMAGES.architecture4,
        IMAGES.architecture5,
        IMAGES.architecture6,
        IMAGES.architecture7,
        IMAGES.architecture8,
      ];
     const filtered = HomeGalleryArr.filter(
  (el) =>
    el.categery === "Architecture" &&
    (allowedImages.includes(el.img) || (el.img2 && allowedImages.includes(el.img2)))
);

      setData(filtered);
    }
  };

  const makeGroupName = (label: string) => label.replace(/\s+/g, "-").toLowerCase();

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

        {active === "Commercial" ? (
          <Swiper
            className="swiper-container swiper-portfolio aos-item"
            slidesPerView={4}
            spaceBetween={0}
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
                    <h6 className="sub-title">Commercial Project</h6>
                    <h4 className="title m-b15 text-white">Commercial Project</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <LightGallery speed={500} plugins={[lgZoom]} selector={".lightimg"}>
            <Swiper
              className="swiper-container swiper-portfolio lightgallery aos-item"
              slidesPerView={4}
              spaceBetween={0}
              loop={true}
              breakpoints={{
                1200: { slidesPerView: 4 },
                991: { slidesPerView: 3 },
                575: { slidesPerView: 2 },
                240: { slidesPerView: 1 },
              }}
            >
              {data.map((item, ind) => {
                const label = getImageLabel(item.img, item.categery);
                const groupName = makeGroupName(label);

                return (
                  <SwiperSlide className="swiper-slide" key={ind}>
                    <div className="dz-box overlay style-1">
                      <div className="dz-media">
                        <img src={item.img} alt="" style={imageStyle} />
                      </div>
                      <div className="dz-info">
                        {(ArchitectureSubtypeImages[label] ||
                          ResidentialSubtypeImages[label])?.map((img, i) => (
                          <a
                            key={i}
                            href={img}
                            data-exthumbimage={img}
                            data-lg={groupName}
                            data-src={img}
                            className="lightimg"
                            style={{ display: i === 0 ? "block" : "none" }}
                            title={label}
                          >
                            {i === 0 && (
                              <i
                                className="la la-plus"
                                style={{ fontSize: "24px", color: "#fff" }}
                              ></i>
                            )}
                          </a>
                        ))}
                        <h6 className="sub-title">{label}</h6>
                        <h4 className="title m-b15 text-white">{label}</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </LightGallery>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
