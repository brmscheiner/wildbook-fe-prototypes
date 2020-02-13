import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import HomeIcon from "@material-ui/icons/Home";
import WebIcon from "@material-ui/icons/Web";
import SchoolIcon from "@material-ui/icons/School";
import GroupIcon from "@material-ui/icons/Group";
import Avatar from "@material-ui/core/Avatar";
import jon from "../assets/jon2.jpeg";

const drawerWidth = 20;

const useStyles = makeStyles(theme => {
  return {
    root: {
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      width: theme.spacing(26),
      height: theme.spacing(26),
      marginRight: theme.spacing(3),
    },
    infoIcon: {
        marginRight: theme.spacing(1)
    },
    infoPreface: {
        marginRight: 4,
    },
    editButton: {
        marginTop: theme.spacing(1),
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
          <Grid container>
            <SchoolIcon className={classes.infoIcon} />
            <Typography variant="subtitle1" className={classes.infoPreface}>Affiliated with</Typography>
            <Link variant="subtitle1">University of Woah</Link>
          </Grid>
          <Grid container>
            <HomeIcon className={classes.infoIcon} />
            <Typography variant="subtitle1" className={classes.infoPreface}>Lives in</Typography>
            <Link variant="subtitle1">Portland, Oregon</Link>
          </Grid>
          <Grid container>
            <WebIcon className={classes.infoIcon} />
            <Typography variant="subtitle1" className={classes.infoPreface}>Website:</Typography>
            <Link variant="subtitle1">https://id.sito.org/uwi/</Link>
          </Grid>
          <Grid container>
            <GroupIcon className={classes.infoIcon} />
            <Typography variant="subtitle1" className={classes.infoPreface}>Member of</Typography>
            <Link variant="subtitle1">Max Planck Institute of Ornithology</Link>
          </Grid>
          <Button variant="outlined" size="small" className={classes.editButton}>
              <EditIcon fontSize="small" className={classes.infoIcon} />
              <Typography>Edit Profile</Typography>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
