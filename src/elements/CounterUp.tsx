import CountUp from "react-countup";
import { CounterUpArr } from "./JsonData";

const CounterUp = () => {
  return (
    <section className="content-inner-3 bg-gray line-img">
      <div className="container">
        <div className="row">
          {CounterUpArr.map(({ num, title }, ind) => (
            <div className="col-lg-3 col-sm-6 aos-item" key={ind}>
              <div className="icon-bx-wraper style-6 center m-b30">
                <div className="icon-content">
                  <h2 className="counter m-b10 text-primary">
                    <CountUp start={0} end={num} duration={50} separator="" />{" "}
                  </h2>
                  <h6 className="title m-b20">{title}</h6>
                </div>
                <div className="icon-lg">
                  <span className="icon-cell text-primary">
                    <i className="flaticon-parquet"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterUp;
