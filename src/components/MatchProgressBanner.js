import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import CloseIcon from "@material-ui/icons/Close";
import TimelapseIcon from "@material-ui/icons/Timelapse";

const useStyles = makeStyles(theme => ({
  alert: {
    marginTop: 10,
    margin: 40,
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 1
  },
  message: {
    width: "100%"
  },
  progress: {
    paddingLeft: 10
  }
}));

export default function MatchProgressBanner() {
  const classes = useStyles();

  return (
    <Alert
      severity="info"
      icon={<TimelapseIcon style={{ fontSize: 30, marginLeft: 8 }} />}
      classes={{ root: classes.alert, message: classes.message }}
      onClose={() => {
        console.log("clicky");
      }}
    >
      <AlertTitle>Calculating Matches for Encounter 3XBC72</AlertTitle>
      <Grid container alignItems="center" justify="flex-start">
        <Grid item>
          <Typography>Status: job in queue</Typography>
        </Grid>
        <Grid item className={classes.progress}>
          <LinearProgress
            variant="determinate"
            value={52}
            style={{ width: 200 }}
          />
        </Grid>
      </Grid>
    </Alert>
  );
}
