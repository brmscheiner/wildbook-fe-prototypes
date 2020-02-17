import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple, green, red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import HomeIcon from "@material-ui/icons/Home";
import WebIcon from "@material-ui/icons/Web";
import SchoolIcon from "@material-ui/icons/School";
import GroupIcon from "@material-ui/icons/Group";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import jon from "../assets/jon2.jpeg";
import saharacon from "../assets/sahara-conservation.png";
import shark1 from "../assets/shark1.png";

const drawerWidth = 20;

const useStyles = makeStyles(theme => {
  return {
    root: {
      paddingTop: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
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
    },
    lineItem: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1)
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500]
    },
    green: {
      color: theme.palette.getContrastText(green[600]),
      backgroundColor: green[600]
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500]
    },
    red: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500]
    },
    followedEntity: {
      width: 100,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1)
    }
  };
});

export default function ProfileHeader() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Avatar className={classes.avatar} src={jon} title="Jon Van Oast" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h2" variant="h2">
            Jon Van Oast
          </Typography>
          <Grid container className={classes.lineItem}>
            <SchoolIcon className={classes.infoIcon} />
            <Typography variant="subtitle2" className={classes.infoPreface}>
              Affiliated with
            </Typography>
            <Link variant="subtitle2">University of Obregón</Link>
          </Grid>
          <Grid container className={classes.lineItem}>
            <HomeIcon className={classes.infoIcon} />
            <Typography variant="subtitle2" className={classes.infoPreface}>
              Lives in
            </Typography>
            <Link variant="subtitle2">Portland, Oregon</Link>
          </Grid>
          <Grid container className={classes.lineItem}>
            <WebIcon className={classes.infoIcon} />
            <Typography variant="subtitle2" className={classes.infoPreface}>
              Website:
            </Typography>
            <Link variant="subtitle2">https://id.sito.org/uwi/</Link>
          </Grid>
          <Divider style={{ margin: "16px 0" }} />
          <Typography variant="h5">Organizations</Typography>

          <div
            style={{
              flexDirection: "column",
              textAlign: "center",
              width: 150,
              margin: "24px 0",
              display: "flex",
              alignItems: "center"
            }}
          >
            <img src={saharacon} width={100} />
            <Link variant="subtitle2" style={{ marginTop: 8 }}>
              Sahara Conservation Fund
            </Link>
          </div>

          <Divider style={{ margin: "16px 0" }} />

          <Typography variant="h5">Following</Typography>

          <Grid container justify="flex-start">
            <Grid item className={classes.followedEntity}>
              <Grid container direction="column" alignItems="center">
                <Avatar src={shark1} />
                <Link
                  variant="subtitle2"
                  style={{ textAlign: "center", marginTop: 4 }}
                >
                  RJ-22 (Sparkles)
                </Link>
              </Grid>
            </Grid>
            <Grid item className={classes.followedEntity}>
              <Grid container direction="column" alignItems="center">
                <Avatar className={classes.orange}>B</Avatar>
                <Link
                  variant="subtitle2"
                  style={{ textAlign: "center", marginTop: 4 }}
                >
                  Benjamin Default
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <CardActions>
            <Button size="small" variant="outlined">
              Edit Profile
            </Button>
            <Button size="small" variant="outlined">
              Settings and Privacy
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}
