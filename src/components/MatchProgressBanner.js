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
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  alert: {
    marginTop: 10,
    margin: 40,
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 1,
    width: 440
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
    <div
      style={{
        right: 0,
        width: 440,
        bottom: 0,
        margin: 40,
        zIndex: 1,
        position: "fixed",
        marginTop: 10,
        backgroundColor: "rgb(232, 244, 253)",
        borderRadius: 8
      }}
    >
      <ExpansionPanel style={{ backgroundColor: "unset", boxShadow: "unset" }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="encounter-progress-panel"
          id="encounter-progress-header"
        >
          <AlertTitle style={{ marginTop: 4 }}>Jobs in Progress (4)</AlertTitle>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container>
            <Grid container>
              <Typography variant="subtitle2">Encounter 2412</Typography>
              <Grid container justify="space-between">
                <Grid item>
                  <Typography variant="caption">Calculating matches</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption">#3 in queue</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: 12 }}>
              <Typography variant="subtitle2">Encounter 2414</Typography>
              <Grid container justify="space-between">
                <Grid item>
                  <Typography variant="caption">Waiting for review</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption">Review requested</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: 12 }}>
              <Typography variant="subtitle2">Encounter 2415</Typography>
              <Grid container justify="space-between">
                <Grid item>
                  <Typography variant="caption">
                    Discovering individuals
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption">In progress</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
