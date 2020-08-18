import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    color: "blue",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: "#F1F1F1" }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            PLASMA HELP
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <Typography className={classes.title} variant="h6">
              <Link className={classes.title} variant="h6" href="/profile">
                My Profile
              </Link>
            </Typography> */}
          </div>
          <div className={classes.sectionMobile}></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
