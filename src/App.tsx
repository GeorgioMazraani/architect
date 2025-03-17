import "./assets/css/common.css";
import "react-modal-video/css/modal-video.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./assets/other/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";
import "./assets/css/skins.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InquiryModal from "./elements/InquiryModal";
import Home from "./pages/Home";
import ModalBox from "./elements/ModalBox";
import AboutUs from "./pages/AboutUs";
import Error404 from "./pages/Error404";
import Portfolio from "./pages/Portfolio";

import Services from "./pages/Services";


import Contact from "./pages/Contact";

import ScrollTop from "./elements/ScrollTop";
import {
  Layout1,
 
} from "./elements/Outlate";

const elementRoutes = [
  { routerLink: "/", elements: <Home /> },
  { routerLink: "/about-us", elements: <AboutUs /> },

  { routerLink: "/error-404", elements: <Error404 /> },
  { routerLink: "/portfolio", elements: <Portfolio /> },
  { routerLink: "/services", elements: <Services /> },

  { routerLink: "/contact-us", elements: <Contact /> },

];

function App() {
  return (
    <>
      <div className="page-wraper">
        <Router>
          <InquiryModal />
          
          <ModalBox />
          <Routes>
            <Route element={<Layout1 />}>
              {elementRoutes.map(({ elements, routerLink }, ind) => (
                <Route key={ind} path={routerLink} element={elements} />
              ))}
            </Route>

           
          

            <Route path="*" element={<Error404 />} />
          </Routes>
          <ScrollTop />
        </Router>
      </div>
    </>
  );
}

export default App;
