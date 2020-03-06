import React from "react";
import clsx from "clsx";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import jon from "../assets/jon.jpeg";

const drawerWidth = 20;

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  title: {
    flexGrow: 1,
    fontSize: 50
  },

  avatar: {
    marginLeft: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4)
  }
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={clsx(classes.appBar)}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          style={{ fontSize: 20, flexGrow: 1 }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'unset' }}>
            Wildbook
          </Link>
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={3} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Avatar
          alt="Jon Van Oast"
          src={jon}
          className={classes.avatar}
          variant="square"
        />
      </Toolbar>
    </AppBar>
  );
}
