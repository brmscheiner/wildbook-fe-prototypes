import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ActivityTable from "./ActivityTable";

const drawerWidth = 20;

const useStyles = makeStyles(theme => ({
  root: {
    flexWrap: "unset",
    flexDirection: "row",
    minHeight: 500,
  },
  list: {
    width: "100%",
    maxWidth: 180,
    backgroundColor: "theme.palette.background.paper"
  }
}));

export default function RecentActivity() {
  const classes = useStyles();

  return (
    <Paper elevation={5}>
      <Grid container className={classes.root}>
        <Grid item className={classes.list}>
          <List
            component="nav"
            aria-label="recent activity folders"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Recent Activity
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemText primary="All (12)" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Encounters (6)" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Approvals (1)" />
            </ListItem>
            <Divider />
            <ListItem style={{ backgroundColor: "#dddddd" }}>
              <ListItemText primary="Requests (3)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Merges & Splits (2)" />
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item>
          <ActivityTable />
        </Grid>
      </Grid>
    </Paper>
  );
}
