import CommonBanner from "../elements/CommonBanner";
import { IMAGES } from "../elements/theme";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import { HomeGalleryArr } from "../elements/JsonData";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArchitectureSubtypeImages,
  ResidentialSubtypeImages,
  CommercialSubtypeImages,
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
  } else if (category.includes("Commercial")) {
    if ([IMAGES.pc1, IMAGES.pc2].includes(img)) return "Padel Courts";
    if ([IMAGES.commercial1, IMAGES.commercial2].includes(img)) return "Interior Commercial";
    return "Commercial";
  }
  return "";
};

const Portfolio = () => {
  const [data, setData] = useState<HomeGalleryItem[]>([]);
  const [active, setActive] = useState("Architecture");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  useEffect(() => {
    if (category && typeof category === "string") {
      FilterButton(category);
    } else {
      FilterButton("Architecture");
    }
  }, [category]);

  const FilterButton = (title: string) => {
    setActive(title);

    if (title === "Commercial") {
      const desiredCommercialOrder = ["Padel Courts", "Interior Commercial"];
      const commercialItems = HomeGalleryArr.filter(el => el.categery === "Commercial");
      const labeledItems = commercialItems.map(item => ({
        ...item,
        label: getImageLabel(item.img, item.categery),
      }));
      const seen = new Set<string>();
      const filteredUnique = desiredCommercialOrder.flatMap(label => {
        const firstMatch = labeledItems.find(
          item => item.label === label && !seen.has(label)
        );
        if (firstMatch) {
          seen.add(label);
          return [firstMatch];
        }
        return [];
      });
      const cleaned = filteredUnique.map(({ label, ...rest }) => rest);
      setData(cleaned);
    } else if (title === "Residential") {
      const filtered = HomeGalleryArr.filter(el => el.categery.includes("Residential"));
      setData(filtered);
    } else {
      const desiredOrder = ["Modern Villa", "Lebanese Style", "Medical Tourism", "KSA Villa"];
      const architectureItems = HomeGalleryArr.filter(el => el.categery === "Architecture");
      const labeledItems = architectureItems.map(item => ({
        ...item,
        label: getImageLabel(item.img, item.categery),
      }));
      const seen = new Set<string>();
      const filteredUnique = desiredOrder.flatMap(label => {
        const firstMatch = labeledItems.find(
          item => item.label === label && !seen.has(label)
        );
        if (firstMatch) {
          seen.add(label);
          return [firstMatch];
        }
        return [];
      });
      const cleaned = filteredUnique.map(({ label, ...rest }) => rest);
      setData(cleaned);
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
            const gallery =
              ArchitectureSubtypeImages[label] ||
              ResidentialSubtypeImages[label] ||
              CommercialSubtypeImages[label];

            return (
              <SwiperSlide className="swiper-slide" key={ind}>
                <div className="dz-box overlay style-1">
                  <div className="dz-media">
                    <img src={item.img} alt="" style={imageStyle} />
                  </div>
                  <div className="dz-info">
                    <LightGallery speed={500} plugins={[lgZoom]}>
                      {gallery?.map((img, i) => (
                        <a
                          key={i}
                          href={img}
                          data-exthumbimage={img}
                          data-src={img}
                          className="lightimg"
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
                    </LightGallery>

                    <h4 className="title m-b15 text-white">{label}</h4>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Portfolio;