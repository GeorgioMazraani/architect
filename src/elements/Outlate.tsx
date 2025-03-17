import { Outlet,useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const Layout1 = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname !== "/contact-us" && <Footer />}
    </>
  );
};



