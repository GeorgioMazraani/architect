import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const { pathname } = useLocation();

  const scrollButton = () => {
    window.scrollY > 120 ? setShowScrollBtn(true) : setShowScrollBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollButton);

    return () => {
      window.removeEventListener("scroll", scrollButton);
    };
  }, [showScrollBtn]);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      null;
    };
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="scroltop icon-up"
        type="button"
        style={{ display: `${showScrollBtn ? "block" : ""}` }}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default ScrollTop;