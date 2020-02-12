import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import EncounterGrid from './EncounterGrid'
import ProfileHeader from "./ProfileHeader";

const drawerWidth = 20;

const useStyles = makeStyles(theme => {
  return {
    root: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(5),
      display: "flex"
    },
    avatar: {
      width: theme.spacing(26),
      height: theme.spacing(26),
      marginRight: theme.spacing(3)
    },
    infoIcon: {
      marginRight: theme.spacing(1)
    },
    infoPreface: {
      marginRight: 4
    },
    editButton: {
      marginTop: theme.spacing(1)
    }
  };
});

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <ProfileHeader />
      <EncounterGrid />
    </div>
  );
}
