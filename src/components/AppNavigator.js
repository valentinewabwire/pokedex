// import { AppBar, Toolbar, Typography } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { color } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "black",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    cursor: "pointer",
    color: "white",
  },
}));

export default function AppNavigator() {
  const classes = useStyles();
  return (
    <AppBar className={classes.AppBar} position="fixed">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography className={classes.title}>Pokedex</Typography>
        </Link>
      </Toolbar>
    </AppBar>
    // <AppBar>
    //   <Toolbar>
    //     <Link to="/">
    //       <Typography>Pokedex</Typography>
    //     </Link>
    //   </Toolbar>
    // </AppBar>
  );
}
