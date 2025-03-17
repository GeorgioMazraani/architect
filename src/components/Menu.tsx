import { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MenuList, MenuList2 } from "../elements/MenuArr";
import { HeaderSocialIcon } from "../elements/JsonData";
import { IMAGES } from "../elements/theme";

// Define the shape of individual submenu items
interface MenuChild {
  to: string;
  children: string;
}

// Define the shape of the main menu items
interface MenuItem {
  menu: string;
  to?: string;
  child?: MenuChild[];
  className?: string; // For items that have a special class like "menu-down"
}

// Define the shape of your component's reducer state
interface IMenuState {
  activeSubmenu: string;
}

// The action type for your reducer is simply a partial update to IMenuState
type MenuAction = Partial<IMenuState>;

// Reducer to handle submenu state
const reducer = (previousState: IMenuState, updatedState: MenuAction): IMenuState => {
  return {
    ...previousState,
    ...updatedState,
  };
};

const initialState: IMenuState = {
  activeSubmenu: "",
};

const Menu = () => {
  const location = useLocation();
  const [menuactive, setMenuactive] = useState<string>("");

  // Use a reducer to track and update the active submenu
  const [state, setState] = useReducer(reducer, initialState);

  // Handles opening/closing of dropdowns
  const menuHandler = (status: string) => {
    setState({ activeSubmenu: status });
    // Close the submenu if it's already active
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  // Tracks active menu based on current route
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
        <Link to="/">
          <img src={IMAGES.logo} alt="Logo" />
        </Link>
      </div>

      {/* Left Navigation Menu */}
      <ul className="nav navbar-nav navbar navbar-left">
        {MenuList.map((item: MenuItem, ind: number) => (
          <li
            className={`${menuactive === item.menu ? "active" : ""}`}
            key={ind}
          >
            {item.to ? (
              // Direct link if "to" exists
              <Link to={item.to}>{item.menu}</Link>
            ) : (
              <>
                {/* Dropdown Menu */}
                <Link
                  to="#"
                  onClick={() => {
                    menuHandler(item.menu);
                  }}
                >
                  {item.menu}
                </Link>
                {item.child && (
                  <ul className="sub-menu">
                    {item.child.map((data, index) => (
                      <li key={index}>
                        <Link to={data.to}>{data.children}</Link>
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
          const { menu, child, className } = item;

          // Dropdown menus
          if (className === "menu-down") {
            return (
              <li
                className={`sub-menu-down ${
                  menuactive === item.menu ? "active" : ""
                } ${state.activeSubmenu === item.menu ? "open" : ""}`}
                key={ind}
              >
                <Link
                  to="#"
                  onClick={() => {
                    menuHandler(item.menu);
                  }}
                >
                  {menu}
                </Link>
                {child && (
                  <ul className="sub-menu">
                    {child.map((data, index) => (
                      <li key={index}>
                        <Link to={data.to}>{data.children}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }

          // Direct links
          if (item.to) {
            return (
              <li key={ind}>
                <Link to={item.to}>{item.menu}</Link>
              </li>
            );
          }

          // If no matching structure, render nothing
          return null;
        })}
      </ul>

      {/* Social Media Icons */}
      <div className="dz-social-icon">
        <ul>
          {HeaderSocialIcon.map((icons: { icon: string }, ind: number) => (
            <li key={ind}>
              <Link className={icons.icon} to="#"></Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;