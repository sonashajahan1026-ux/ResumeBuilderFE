import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { FaSuitcase } from "react-icons/fa";

const Header = () => {
  return (
    //box-div

    <Box sx={{ flexGrow: 1 }}>
      {/*Appbar-> div with nav styling*/}
      {/* position static - the content have to come under the navbar*/}
      <AppBar position="static">
        <Toolbar>
          {/* for menu icon IconButton */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FaSuitcase />
          </IconButton>
          {/* sx- style*/}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          {/* inherit-color as same as in the top*/}
          <Box>
            <Link className=" btn btn-success" to={"/history"}>
              History
            </Link>
            <Tooltip
              title="Our Resume Builder is designed to help individuals create professional, well-structured resumes with ease. We focus on simplicity, customization, and modern design, ensuring that every user can highlight their skills, experience, and achievements effectively. Whether you’re a student, a fresher, or a working professional, our tool provides an effortless way to craft a resume that stands out."
              placement="bottom-start"
            >
              <button className=" btn btn-danger ms-3">About</button>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
