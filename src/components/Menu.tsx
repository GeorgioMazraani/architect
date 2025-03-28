import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MenuList, MenuList2 } from "../elements/MenuArr";
import { HeaderSocialIcon } from "../elements/JsonData";
import { IMAGES } from "../elements/theme";

// Define the props type
interface MenuProps {
  onLinkClick: () => void;
}

// Define the shape of menu items
interface MenuChild {
  to: string;
  children: string;
}

interface MenuItem {
  menu: string;
  to?: string;
  child?: MenuChild[];
  className?: string;
}

const Menu = ({ onLinkClick }: MenuProps) => {
  const location = useLocation();
  const [menuactive, setMenuactive] = useState<string>("");

  useEffect(() => {
    MenuList.forEach((item: MenuItem) => {
      item.child?.forEach((data) => {
        if (data.to === location.pathname) {
          setMenuactive(item.menu);
        }
      });
    });

    MenuList2.forEach((item: MenuItem) => {
      if (item?.to === location.pathname) {
        setMenuactive(item.menu);
      }
      item.child?.forEach((data) => {
        if (data?.to === location.pathname) {
          setMenuactive(item.menu);
        }
      });
    });
  }, [location.pathname]);

  return (
    <>
      {/* Logo Section */}
      <div className="logo-header logo-dark">
        <Link to="/" onClick={onLinkClick}>
          <img src={IMAGES.logo} alt="Logo" />
        </Link>
      </div>

      {/* Left Navigation Menu */}
      <ul className="nav navbar-nav navbar navbar-left">
        {MenuList.map((item: MenuItem, ind: number) => (
          <li key={ind} className={`${menuactive === item.menu ? "active" : ""}`}>
            {item.to ? (
              <Link to={item.to} onClick={onLinkClick}>
                {item.menu}
              </Link>
            ) : (
              <>
                <Link to="#" onClick={onLinkClick}>
                  {item.menu}
                </Link>
                {item.child && (
                  <ul className="sub-menu">
                    {item.child.map((data, index) => (
                      <li key={index}>
                        <Link to={data.to} onClick={onLinkClick}>
                          {data.children}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Right Navigation Menu */}
      <ul className="nav navbar-nav navbar navbar-right">
        {MenuList2.map((item: MenuItem, ind: number) => {
          if (item.to) {
            return (
              <li key={ind}>
                <Link to={item.to} onClick={onLinkClick}>
                  {item.menu}
                </Link>
              </li>
            );
          }
          return null;
        })}
      </ul>

      {/* Social Media Icons */}
      <div className="dz-social-icon">
        <ul>
          {HeaderSocialIcon.map((icons, ind) => (
            <li key={ind}>
              <Link className={icons.icon} to="#" onClick={onLinkClick}></Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
