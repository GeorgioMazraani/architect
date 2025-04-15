import CommonBanner from "../elements/CommonBanner";
import { IMAGES } from "../elements/theme";

const Contact = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner img={IMAGES.bnr3} title="CONTACT US" text="Contact Us" />
      <section className="content-inner-2 line-img">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 order-2 order-md-1 m-b30">
              <form
                className="dz-form style-1 dzForm radius-no"
                method="POST"
                action="https://api.web3forms.com/submit"
              >
                <input type="hidden" name="access_key" value="ec9f48f7-b275-4e7b-934c-d731c02b77af" />

                <div className="row sp10">
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        placeholder="First Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Phone No."
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      SEND MESSAGE <i className="m-l10 fas fa-caret-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-xl-6 col-lg-6 order-1 order-md-2">
              <div className="row">
                <div className="col-lg-12 m-b30">
                  <div className="icon-bx-wraper style-8 bg-white">
                    <div className="icon-md m-r20">
                      <span className="icon-cell text-primary">
                        <i className="flaticon-telephone"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="tilte m-b10">Call Now</h4>
                      <p className="m-b0">+96170037300</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 m-b30">
                  <div className="icon-bx-wraper style-8 bg-white">
                    <div className="icon-md m-r20">
                      <span className="icon-cell text-primary">
                        <i className="flaticon-email"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="tilte m-b10">Location</h4>
                      <p className="m-b0">
                        Chekka, Batroun, North Lebanon. Ragheb Center, Block B, First Floor
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 m-b30">
                  <div className="icon-bx-wraper style-8 bg-white">
                    <div className="icon-md m-r20">
                      <span className="icon-cell text-primary">
                        <i className="flaticon-placeholder"></i>
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="tilte m-b10">Email Now</h4>
                      <p className="m-b0">info@manalshalak.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
