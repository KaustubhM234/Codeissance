import logo from "../mainlogo.jpg";
// import logo from "../../src/assets/images/logo.png";
import userImg from "../assets/images/avatar-icon.png";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useCookies } from "react-cookie";

const navLinks = [
  
  {
    path: "/schemes",
    display: "Schemes",
  },
  {
    path: "/knowledge",
    display: "Resources",
  },
];

// Declare the function before using it
const extractUserRoleFromAuthToken = (authToken) => {
  try {
    // Decode the JWT token
    const tokenPayload = JSON.parse(atob(authToken.split(".")[1]));

    // Extract the user role from the decoded token payload
    return tokenPayload.role || ""; // Replace with the actual key used in your token payload
  } catch (error) {
    console.error("Error extracting user role from authToken:", error);
    return "";
  }
};

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);
  const authToken = cookies.authToken || "";
  const userRole = extractUserRoleFromAuthToken(authToken);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const togglemenu = () => menuRef.current.classList.toggle("shown__menu");

  const handleLogout = () => {
    removeCookie("authToken", { path: "/" });
    // You may want to perform other logout actions here (e.g., redirect to the login page)
  };
  return (
    <header className="header">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-[60px]" style={{    maxWidth: "145%"}} />
            </Link>
          </div>

          <div className="navigation md:ml-4" onClick={togglemenu} ref={menuRef}>
            <ul className="menu flex item-center gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-16px leading-7 font-600"
                        : "text-textColor text-16px leading-7 font-500"
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}

              {userRole === "student" && (
                <ul>
                <li>
                  <NavLink
                    to="/reportscan"
                    className="text-textColor text-16px leading-7 font-500"
                  >
                    Update Profile
                  </NavLink>
                </li>
                </ul>
              )}
              {userRole === "teacher" && (
                <ul>
                <li>
                  <NavLink
                    to="/teacherdash"
                    className="text-textColor text-16px leading-7 font-500"
                  >
                    Dashboard
                  </NavLink>
                </li>
                </ul>
              )}
              {userRole === "admin" && (
                <li>
                  <NavLink
                    to="/admindash"
                    className="text-textColor text-16px leading-7 font-500"
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {authToken ? (
              <>
                <div className="hidden">
                  <Link to="/">
                    <figure className="w-35px h-35px rounded-full">
                      <img src={userImg} alt="user" />
                    </figure>
                  </Link>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] md:ml-4"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}
            <span className="md:hidden" onClick={togglemenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
