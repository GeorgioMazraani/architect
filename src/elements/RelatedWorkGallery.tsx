import { Link } from "react-router-dom";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { RelatedWorkGalleryArr } from "./JsonData";

const RelatedWorkGallery = () => {
  return (
    <LightGallery
      speed={500}
      selector={".lightimg"}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="content-inner line-img lightgallery"
    >
      <div className="container">
        <div className="section-head style-1 text-center">
          <h2 className="title">
            RELATED <span className="text-primary">WORKS</span>
          </h2>
          <div className="dz-separator style-1 text-primary"></div>
        </div>
        <div className="row">
          {RelatedWorkGalleryArr.map(({ img }, ind) => (
            <div className="col-lg-4 col-sm-6 aos-item" key={ind}>
              <div className="dz-box overlay style-1 m-b30">
                <div className="dz-media">
                  <img src={img} alt="" />
                </div>
                <div className="dz-info">
                  <span
                    data-exthumbimage={img}
                    data-src={img}
                    className="view-btn lightimg"
                    title="INTERIOR DESIGN"
                  >
                    <img src={img} alt="" style={{ display: "none" }} />
                  </span>
                  <h6 className="sub-title">INTERIOR DESIGN</h6>
                  <h4 className="title m-b15">
                    <Link to="/portfolio-details">
                      Modern House Interior <span>New York</span>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LightGallery>
  );
};

export default RelatedWorkGallery;
