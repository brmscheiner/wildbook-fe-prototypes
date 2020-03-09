import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import AndroidIcon from "@material-ui/icons/Android";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import SubjectIcon from "@material-ui/icons/Subject";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import jon from "../assets/jon.jpeg";

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

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="fixed" className={clsx(classes.appBar)}>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div style={{ width: 300 }}>
          <List>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              style={{
                fontSize: 20,
                marginTop: 10,
                marginBottom: 20,
                marginLeft: 16
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "unset" }}>
                Wildbook
              </Link>
            </Typography>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <ListItem>
              <ListItemIcon>
                <AddToPhotosIcon />
              </ListItemIcon>
              <ListItemText>
                <Link
                  to="/submit-data"
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  Submit Data
                </Link>
              </ListItemText>
            </ListItem>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <ListItem>
              <ListItemIcon>
                <PhotoCameraIcon />
              </ListItemIcon>
              <ListItemText>Encounters</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AndroidIcon />
              </ListItemIcon>
              <ListItemText>Individuals</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Users</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText>Organizations</ListItemText>
            </ListItem>
            <Divider style={{ marginTop: 12, marginBottom: 12 }} />
            <ListItem>
              <ListItemIcon>
                <HelpOutlineIcon />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="https://community.wildbook.org/"
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  Help & Feedback
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SubjectIcon />
              </ListItemIcon>
              <ListItemText>
                <a
                  href="http://wiki.wildbook.org/"
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  Documentation
                </a>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          style={{ marginRight: 8 }}
          color="inherit"
          aria-label="menu"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          style={{ fontSize: 20, flexGrow: 1 }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "unset" }}>
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
