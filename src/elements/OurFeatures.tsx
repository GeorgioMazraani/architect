import { OurFeaturArr } from "./JsonData";

const OurFeatures = () => {
  return (
    <section className="content-inner bg-white line-img">
      <div className="container">
        <div className="section-head style-1 text-center">
          <h2 className="title">
            OUR BEST <span className="text-primary">FEATURES</span>
          </h2>
          <div className="dz-separator style-1 text-primary"></div>
        </div>
        <div className="row features-wraper-1">
          {OurFeaturArr.map(({ icon, title }, ind) => (
            <div className="col-lg-3 col-sm-6 aos-item" key={ind}>
              <div className="icon-bx-wraper style-2 center m-b30">
                <div className="icon-bx-md bg-white icon-bx">
                  <span className="icon-cell text-primary">
                    <i className={icon}></i>
                  </span>
                </div>
                <div className="">
                  <h4 className="title m-b0">{title}</h4>
                  <div className="dz-separator style-2 bg-primary"></div>
                  <p>
                    Maecenas eget commodo risus. Praesent facilisis iaculis
                    dapibus.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
