import { useContext, useEffect, useState } from "react";
import { Context } from "../context/contextApi";
import { IMAGES } from "./theme";

interface Users {
  name?: string;
  email?: string;
}
const InquiryModal: React.FC = () => {
  const { show, setShow } = useContext(Context);
  const [modalVal, setModalVal] = useState(Math.floor(window.innerHeight / 4));
  const [user, setUser] = useState<Users>({ name: "", email: "" });

  const ResizeMode = () => {
    setModalVal(Math.floor(window.innerHeight / 4));
  };

  useEffect(() => {
    window.addEventListener("resize", ResizeMode);

    return () => {
      window.removeEventListener("resize", ResizeMode);
    };
  }, [modalVal]);

  const handleClose = () => setShow(false);
  const submitHandler = () => {
    setUser({ name: "", email: "" });
  };
  console.log(show);

  return (
    <>
      <div
        className="inquiry-modal-overlay"
        onClick={handleClose}
        style={{
          transform: `scale(${show ? "1" : "0"})`,
        }}
      ></div>
      <div
        className={`modal inquiry-modal show  ${show ? "scal" : ""}`}
        style={{
          display: "block",
          marginTop: modalVal,
          transition: "all .2s",
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="inquiry-adv">
            <img src={IMAGES.modalimg} alt="" />
          </div>
          <div className="modal-content">
            <div className="modal-header">
              <i className="flaticon-email"></i>
              <h5 className="modal-title" id="exampleModalLongTitle">
                SUBSCRIBE TO OUR NEWSLATTER
              </h5>
              <button type="button" className="btn-close" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="dzSubscribeMsg"></div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="dzSubscribe"
              >
                <div className="form-group mb-3">
                  <input
                    value={user.name}
                    onChange={(e) => {
                      setUser({ name: e.target.value });
                    }}
                    type="text"
                    name="dzName"
                    required
                    className="form-control"
                    placeholder="YOUR NAME"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    value={user.email}
                    onChange={(e) => {
                      setUser({ email: e.target.value });
                    }}
                    type="email"
                    name="dzEmail"
                    required
                    className="form-control"
                    placeholder="YOUR EMAIL ADDRESS"
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    name="submit"
                    type="button"
                    onClick={submitHandler}
                    value="Submit"
                    className="btn btn-primary"
                  >
                    SUBSCRIBE NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquiryModal;
