import { Link } from "react-router-dom";
import CommonBanner from "../elements/CommonBanner";
import { IMAGES } from "../elements/theme";

const Error404 = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner img={IMAGES.bnr6} title="404" text="404" />
      <section className="content-inner line-img">
        <div className="container">
          <div className="error-page text-center">
            <div className="dlab_error">404</div>
            <h2 className="error-head">
              We are sorry. But the page you are looking for cannot be found.
            </h2>
            <Link to="/" className="btn btn-primary radius-no">
              <span className="p-lr15">BACK TO HOMEPAGE</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error404;
