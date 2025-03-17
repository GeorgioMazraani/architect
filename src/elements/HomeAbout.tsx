
import { IMAGES } from "./theme";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <div className="row align-items-center about-bx1">
      <div className="col-lg-6 m-b30">
        <div className="dz-media">
          
          <div className="img2  aos-item">
            <motion.img
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 1 }}
              src={IMAGES.about_pic1}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 m-b30 aos-item">
        <h4 className="title">
          We Design & Create Best Architect Around The World With Inspiration
        </h4>
        <div className="year-exp shadow m-b30">
          <h2 className="year text-primary">16+</h2>
          <h4 className="text">
            YEARS OF <span className="text-primary">EXPERIENCE</span>
          </h4>
        </div>
        <p className="m-b15">
          Aliquam erat volutpat. Nunc erat massa, porttitor vel egestas sit
          amet, tristique at massa. Donec posuere odio neque, in ultricies lorem
          aliquet eu. Donec venenatis libero Link nulla placerat egestas. Etiam
          condimentum tortor vel faucibus aliquam. Sed et auctor orci. Morbi nec
          cursus quam.
        </p>
        <p className="m-b30">
          Praesent eu suscipit ex, quis pulvinar sem. Interdum et malesuada
          fames ac ante ipsum primis in faucibus.
        </p>
        
      </div>
    </div>
  );
};

export default HomeAbout;
