
import CommonBanner from "../elements/CommonBanner";
import HomeAbout from "../elements/HomeAbout";
import { IMAGES } from "../elements/theme";

const AboutUs = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner img={IMAGES.bnr1} title="ABOUT US" text="About us" />
      <section
        className="content-inner line-img section-title style-2"
        data-name="About Us"
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">
              WELCOME TO <span className="text-primary">MANALSHALAK</span>
            </h2>
            <div className="dz-separator style-1 text-primary"></div>
          </div>
          <HomeAbout />
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;
