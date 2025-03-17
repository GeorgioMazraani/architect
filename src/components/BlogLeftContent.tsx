import { Link } from "react-router-dom";
import { BlogLeftContentArr } from "../elements/JsonData";

const BlogLeftContent = () => {
  return (
    <div className="col-xl-4 col-lg-4 m-b30 dz-order-1" style={{ zIndex: 99 }}>
      <aside className="side-bar sticky-top left">
        <div className="widget widget_tag_cloud">
          <div className="widget-title">
            <h5 className="title">Search</h5>
            <div className="dz-separator style-1 text-primary mb-0"></div>
          </div>
          <div className="search-bx">
            <form role="search" method="post">
              <div className="input-group">
                <input
                  name="text"
                  className="form-control"
                  placeholder="Enter your keywords..."
                  type="text"
                />
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-primary sharp radius-no"
                  >
                    <i className="la la-search scale3"></i>
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="widget widget_categories">
          <div className="widget-title">
            <h5 className="title">Categories</h5>
            <div className="dz-separator style-1 text-primary mb-0"></div>
          </div>
          <ul>
            <li className="cat-item">
              <Link to="#">Residence</Link>
            </li>
            <li className="cat-item">
              <Link to="#">Beauty</Link>
            </li>
            <li className="cat-item">
              <Link to="#">Fashion</Link>
            </li>
            <li className="cat-item">
              <Link to="#">Images</Link>
            </li>
            <li className="cat-item">
              <Link to="#">Lifestyle</Link>
            </li>
          </ul>
        </div>
        <div className="widget recent-posts-entry">
          <div className="widget-title">
            <h5 className="title">Recent Posts</h5>
            <div className="dz-separator style-1 text-primary mb-0"></div>
          </div>
          <div className="widget-post-bx">
            {BlogLeftContentArr.map(({ img }, ind) => (
              <div className="widget-post clearfix" key={ind}>
                <div className="dz-media">
                  <Link to="/blog-details">
                    <img src={img} alt="" />
                  </Link>
                </div>
                <div className="dz-info">
                  <h4 className="title">
                    <Link to="/blog-details">
                      Fusce mollis felis quis tristique
                    </Link>
                  </h4>
                  <div className="dz-meta">
                    <ul>
                      <li className="post-date"> 7 March, 2023 </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="widget widget widget_categories">
          <div className="widget-title">
            <h5 className="title">Archives</h5>
            <div className="dz-separator style-1 text-primary mb-0"></div>
          </div>
          <ul>
            <li>
              <Link to="#">January</Link>(3)
            </li>
            <li>
              <Link to="#">Fabruary</Link>(4)
            </li>
            <li>
              <Link to="#">March</Link>(4)
            </li>
            <li>
              <Link to="#">April</Link>(3)
            </li>
            <li>
              <Link to="#">May</Link>(4)
            </li>
            <li>
              <Link to="#">Jun</Link>(1)
            </li>
            <li>
              <Link to="#">July</Link>(4)
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BlogLeftContent;
