import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles, lighten } from "@material-ui/core/styles";
import { deepPurple, green, blue } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import shark1 from "../assets/shark1.png";
import shark2 from "../assets/shark2.jpeg";

const drawerWidth = 20;
const cardWidth = 350;

const ColorLinearProgress = withStyles({
  root: {
    height: 12
  },
  colorPrimary: {
    backgroundColor: blue[100]
  },
  barColorPrimary: {
    backgroundColor: blue[500]
  }
})(LinearProgress);

const useStyles = makeStyles(theme => {
  return {
    root: {
      width: cardWidth,
      display: "inline"
    },
    media: {
      height: 200,
      width: 300
    },
    permissionsButton: {
      marginLeft: 4
    }
  };
});

const encounters = [
  {
    img: shark2,
    date: "11/14/2019",
    photoCount: 9,
    matchCount: 2
  },
  {
    img: shark1,
    date: "06/31/2019",
    photoCount: 14,
    matchCount: 5
  },
  {
    img: shark2,
    date: "11/14/2019",
    photoCount: 9,
    matchCount: 2
  },
  {
    img: shark1,
    date: "06/31/2019",
    photoCount: 14,
    matchCount: 5
  },
  {
    img: shark2,
    date: "11/14/2019",
    photoCount: 9,
    matchCount: 2
  },
  {
    img: shark1,
    date: "06/31/2019",
    photoCount: 14,
    matchCount: 5
  }
];

export default function EncounterGrid() {
  const classes = useStyles();

  return (
    <Box padding={2}>
      <Box>
        <Typography component="h4" variant="h4" style={{ margin: 12 }}>
          Your Encounters
        </Typography>
        <Button>Report Encounter</Button>
      </Box>
      {/* <Box component="span">
        <Typography component="span">
          Your encounters are only visible to others in your organization.
        </Typography>
        <Link className={classes.permissionsButton}>
          <Typography component="span">Edit Permissions</Typography>
        </Link>
      </Box> */}
      <Grid container spacing={3}>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={shark1}
                title="Contemplative Reptile"
                style={{
                  filter: "brightness(0.5) grayscale(1)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 140,
                  left: 50,
                  color: "white",
                  width: 200
                }}
              >
                <ColorLinearProgress variant="determinate" value={52} />
                <Typography
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    fontWeight: "bold"
                  }}
                >
                  Matches 52% Complete
                </Typography>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  2/13/2020
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  26 photographs
                </Typography>
              </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions> */}
          </Card>
        </Grid>
        {encounters.map(encounter => (
          <Grid key={encounter.date} item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={encounter.img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {encounter.date}
                  </Typography>
                  <Grid container alignItems="center" justify="space-between">
                    <Grid item>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {`${encounter.photoCount} photographs`}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {`${encounter.matchCount} matches`}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
