import { IMAGES } from "./theme";

const ProgressBar = () => {
  const ProgressBarArr = [
    { title: "Architecture", value: 100 },
    { title: "Interior Design", value: 100 },
    { title: "Creative Design", value: 100 },
  ];

  return (
    <section className="section-full line-img content-inner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 m-b30">
            <div className="dz-media-1 aos-item">
              <img src={IMAGES.about_pic1_1} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-head style-1">
              <h2 className="title">
                DISTINCTIVE DESIGNS{" "}
                <span className="text-primary">FOR SPECIAL IDEAS</span>
              </h2>
              <div className="dz-separator style-1 text-primary"></div>
            </div>
            <p className="m-b30">
              Fusce accumsan felis sed purus sollicitudin posuere. Vivamus id
              pharetra augue. Phasellus molestie ornare lacus mattis iaculis.
              Nulla dui dui, convallis et venenatis id, condimentum ut justo.
            </p>
            {ProgressBarArr.map(({ title }, ind) => (
              <div className="progress-bx style-1 m-b40 aos-item" key={ind}>
                <div className="progress-info">
                  <h6 className="title">{title}</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;

export const ProgressBar2 = () => {
  const ProgressBarArr2 = [
    { title: "Architecture", value: 100 },
    { title: "Interior Design", value: 100 },
    { title: "Creative Design", value: 100 },
  ];

  return (
    <section className="content-inner overflow-hidden">
      <div className="container">
        <div className="row align-items-center about-bx2">
          <div className="col-lg-6 m-b30 aos-item">
            <div className="section-head style-1">
              <h2 className="title">ARCHITECTS WITH DIFFERENT APPROACH</h2>
            </div>
            {ProgressBarArr2.map(({ title }, ind) => (
              <div className="progress-bx style-3 m-b40" key={ind}>
                <div className="progress-info">
                  <h4 className="title">{title}</h4>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6 m-b30">
            <div className="dz-media right">
              <img src={IMAGES.about_pic4} alt="" className="img1 aos-item" />
              <img src={IMAGES.pattern13} className="circle-bg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
