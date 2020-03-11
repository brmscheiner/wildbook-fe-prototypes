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
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ActivityTable from "./ActivityTable";

const drawerWidth = 20;

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(4),
    maxWidth: 1000
  },
  grid: {
    flexWrap: "unset",
    flexDirection: "row",
    minHeight: 500
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
    <Paper elevation={5} className={classes.container}>
      <Tabs>
        <Tab label="All (12)" />
        <Tab label="Notifications (7)" />
        <Tab label="Requests (5)" />
        <Tab label="Reviews" />
      </Tabs>
      <Divider />
      <ActivityTable />
    </Paper>
  );
}
