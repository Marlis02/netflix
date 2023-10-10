import { Button } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import Popover from "@mui/material/Popover";
import { FiUser } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";

const Navbar = () => {
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
  return (
    <div className="navbar_container">
      <div className="navbar_item_container">
        <div className="navbar_item">
          <h3>NETFLIX</h3>
          <NavLink className="nav_link" to="/">
            Home
          </NavLink>
          <NavLink to="/movies" className="nav_link">
            Movies
          </NavLink>
          <NavLink to="my-list" className="nav_link">
            My List
          </NavLink>
          <NavLink to="about" className="nav_link">
            About us
          </NavLink>
        </div>
        <div>
          {/* <Button variant="contained">Login</Button> */}
          <div>
            <NavLink to="/favorites">
              <FiBookmark size={30} style={{ marginRight: "30px" }} />
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
                <NavLink to="/sign-in">
                  <Button className="auth_btn">Sign in</Button>
                </NavLink>
                <NavLink to="/sign-up">
                  <Button className="auth_btn">Sign up</Button>
                </NavLink>
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
