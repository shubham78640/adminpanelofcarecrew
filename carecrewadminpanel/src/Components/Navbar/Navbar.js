import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { NavLink, useParams } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "green", height: "55px" }}
      >
        <Toolbar variant="dense" sx={{ display: "flex", gap: "40px" }}>
          <NavLink
            variant="h6"
            color="inherit"
            component="div"
            to="/"
            sx={{ textTransform: "none" }}
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "#ebe956" : "white",
                fontWeight: 600,
              };
            }}
          >
            Main Form Lead
          </NavLink>
          <NavLink
            variant="h6"
            color="inherit"
            component="div"
            to="/contactustable"
            style={({ isActive }) => {
              return {
                // borderBottom: isActive ? "2px solid #ebe956" : "2px solid #007a48",
                textDecoration: "none",
                color: isActive ? "#ebe956" : "white",
                fontWeight: 600,
              };
            }}
          >
            Contact Us Lead
          </NavLink>
          <NavLink
            variant="h6"
            color="inherit"
            component="div"
            to="/candidatetable"
            style={({ isActive }) => {
              return {
                // borderBottom: isActive ? "2px solid #ebe956" : "2px solid #007a48",
                textDecoration: "none",
                color: isActive ? "#ebe956" : "white",
                fontWeight: 600,
              };
            }}
          >
            Candidate Lead
          </NavLink>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
