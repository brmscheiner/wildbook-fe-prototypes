import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ActivityTable from "./ActivityTable";

const drawerWidth = 20;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "theme.palette.background.paper"
  }
}));

export default function RecentActivity() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.root}>
        <List component="nav" aria-label="recent activity folders">
          <ListItem>
            <ListItemText primary="All (12)" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Peer encounters (6)" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Pending reviews (1)" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Requests" />
          </ListItem>
        </List>
      </Grid>
      <Grid item>
        <ActivityTable />
      </Grid >
    </Grid>
  );
}
