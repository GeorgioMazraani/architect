import { IMAGES } from "./theme";
import { motion } from "framer-motion";

const HomeAbout2 = () => {
    return (
        <>
            {/* MAIN ABOUT SECTION */}
            <div className="row align-items-center about-bx1">
                {/* FIXED IMAGE COLUMN (Animated Like HomeAbout2) */}
                <div className="col-lg-6 m-b30">
                    <div className="dz-media">
                        <motion.img
                            className="img-fluid mx-auto d-block"
                            style={{ maxWidth: "85%", borderRadius: "8px" }}
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1 }}
                            src={IMAGES.about_pic2}
                            alt="Architecture"
                        />

                    </div>
                </div>
                <div className="col-lg-6 m-b30 aos-item">
                    <div className="year-exp shadow m-b30">
                        <h2 className="year text-primary">16+</h2>
                        <h4 className="text fs-5">
                            YEARS OF <span className="text-primary">EXPERIENCE</span>
                        </h4>
                    </div>
                    <p className="m-b15 fs-6">
                        <span style={{ color: "rgba(34,37,41,1)" }}>✔</span> Over 16 years of architectural expertise<br />
                        <span style={{ color: "rgba(34,37,41,1)" }}>✔</span> Seamless integration of innovation, functionality, and sustainability<br />
                        <span style={{ color: "rgba(34,37,41,1)" }}>✔</span> Client-focused approach delivering tailored solutions<br />
                        <span style={{ color: "rgba(34,37,41,1)" }}>✔</span> Meticulous attention to detail and unwavering commitment to quality
                    </p>


                </div>
            </div>
        </>
    );
};

export default HomeAbout2;
