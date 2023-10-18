import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import Popover from "@mui/material/Popover";
import { FiUser } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { authContext } from "../../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { handleSignOut } = useContext(authContext);
  const [currentUser, setCurrentUser] = useState("");
  const isAdmin = currentUser;

  //================auth=====================
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //-------------------------------------------

  const location = useLocation();

  const signOut = () => {
    handleSignOut();
  };

  useEffect(() => {
    const user = localStorage.getItem("email");
    setCurrentUser(user);
  }, [localStorage.getItem("tokens")]);

  return (
    <div className="navbar_container">
      <div className="navbar_item_container">
        <div className="navbar_item">
          <NavLink to="/">
            <p className="logo"> NETFLIX</p>
          </NavLink>
          <NavLink
            exact
            to="/"
            className={`nav_link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </NavLink>
          {isAdmin && (
            <NavLink
              to="/movies"
              className={`nav_link ${
                location.pathname === "/movies" ? "active" : ""
              }`}
            >
              Movies
            </NavLink>
          )}
          {isAdmin && (
            <NavLink
              to="/my-list"
              className={`nav_link ${
                location.pathname === "/my-list" ? "active" : ""
              }`}
            >
              My List
            </NavLink>
          )}
          <NavLink
            to="/about"
            className={`nav_link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About us
          </NavLink>
          {isAdmin && (
            <NavLink
              to="/create-product"
              className={`nav_link ${
                location.pathname === "/create-product" ? "active" : ""
              }`}
            >
              Create product
            </NavLink>
          )}
        </div>
        <div>
          {/* <Button variant="contained">Login</Button> */}
          <div>
            <NavLink to="/favorites">
              <FiBookmark
                size={30}
                style={{ marginRight: "30px", color: "white" }}
              />
            </NavLink>
            <FiUser
              size={30}
              className="auth_btn1"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div className="auth">
                <Button className="user">
                  {" "}
                  {currentUser ? currentUser : "No auth user"}
                </Button>
                {isAdmin && (
                  <>
                    <NavLink to="/sign-in">
                      <Button
                        style={{ marginTop: "10px" }}
                        variant="contained"
                        className="auth-btn"
                        onClick={() => signOut()}
                      >
                        Logout
                      </Button>
                    </NavLink>
                  </>
                )}
                {!isAdmin && (
                  <>
                    <NavLink to="/sign-in">
                      <Button
                        style={{ marginTop: "10px" }}
                        variant="contained"
                        className="auth_btn"
                      >
                        Sign in
                      </Button>
                    </NavLink>
                    {/* <NavLink to="/sign-up">
                      <Button
                        style={{ marginTop: "10px" }}
                        variant="contained"
                        className="auth_btn"
                      >
                        Sign up
                      </Button>
                    </NavLink> */}
                  </>
                )}

                {/* {a && (
                  <NavLink to="/sign-up">
                    <Button variant="outlined">Logout</Button>
                  </NavLink>
                )} */}
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
