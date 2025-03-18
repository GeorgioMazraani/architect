import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../elements/theme";
import Menu from "./Menu";


const Header = () => {

  const [headerfix, setHeaderfix] = useState<number>(0);
  const [sidebarShow, setSidebarShow] = useState<boolean>(false);


  // Track header scroll for "fixed" class
  useEffect(() => {
    const FixesHeader = () => {
      setHeaderfix(window.scrollY);
    };
    window.addEventListener("scroll", FixesHeader);
    return () => window.removeEventListener("scroll", FixesHeader);
  }, []);

  return (
    <header className="site-header mo-left header center style-1">
      <div
        className={`sticky-header main-bar-wraper navbar-expand-lg ${
          headerfix > 50 ? "is-fixed" : ""
        }`}
      >
        <div className="main-bar clearfix ">
          <div className="container-fluid clearfix">

            {/* LOGO */}
            <div className="logo-header mostion logo-dark">
              <Link to="/">
                <img
                  src={
                    document.body.className.includes("dark")
                      ? IMAGES.logo_white
                      : IMAGES.logo
                  }
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Mobile Nav Toggler */}
            <button
              onClick={() => {
                setSidebarShow(!sidebarShow);
              }}
              className={`navbar-toggler collapsed navicon justify-content-end ${
                sidebarShow ? "open" : ""
              }`}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* 
              EXTRANAV (Removed Search & Subscribe) 
              Keep the wrapper if you need to preserve spacing, 
              else you can remove these 2 divs entirely.
            */}
            <div className="extra-nav">
              <div className="extra-cell">
                {/* Search & Subscribe removed */}
              </div>
            </div>

            {/* QUICK SEARCH (REMOVED)
            <div
              className={`dz-quik-search ${searchbox ? "On" : ""}`}
              style={{ display: "block" }}
            >
              <form action="#">
                <input
                  name="search"
                  defaultValue=""
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Keyword ..."
                />
                <span
                  id="quik-search-remove"
                  onClick={() => setSearchbox(false)}
                >
                  <i className="ti-close"></i>
                </span>
              </form>
            </div>
            */}


            {/* Collapsible Nav / Main Menu */}
            <div
              className={`header-nav navbar-collapse justify-content-center ${
                sidebarShow ? "show" : ""
              }`}
              id="navbarNavDropdown"
            >
              <Menu onLinkClick={() => setSidebarShow(false)} />

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
