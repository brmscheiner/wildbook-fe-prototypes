import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import TimelapseIcon from "@material-ui/icons/Timelapse";

const useStyles = makeStyles(theme => ({
  alert: {
    marginTop: 64
  },
  message: {
    width: "100%"
  },
  progress: {
    flexGrow: 1,
    paddingRight: 40,
    paddingLeft: 40
  }
}));

export default function MatchProgressBanner() {
  const classes = useStyles();

  return (
    <Alert
      severity="info"
      icon={<TimelapseIcon style={{ fontSize: 30 }}  />}
      classes={{ root: classes.alert, message: classes.message }}
    >
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography>Calculating matches for encounter 3XBC72 </Typography>
        </Grid>
        <Grid item className={classes.progress}>
          <LinearProgress
            variant="determinate"
            value={52}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item>
          <IconButton size="small">
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Alert>
  );
}
