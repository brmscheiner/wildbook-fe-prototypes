import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import AnnotationReview from "../components/AnnotationReview";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Cancel";
import turt1 from "../assets/turt1.jpg";
import turt2 from "../assets/turt2.jpg";
import turt3 from "../assets/turt3.jpg";
import turt4 from "../assets/turt4.jpg";
import turt5 from "../assets/turt5.jpg";

const colors = [
  "#e41a1c",
  "#377eb8",
  "#4daf4a",
  "#984ea3",
  "#ff7f00",
  "#a65628",
  "#f781bf"
];

const images = [
  {
    name: "turt1.jpg",
    imageSource: turt1
  },
  {
    name: "turt2.jpg",
    imageSource: turt2
  },
  {
    name: "turt3.jpg",
    imageSource: turt3
  },
  {
    name: "turt4.jpg",
    imageSource: turt4
  }
];

export default function GroupImages({ setStep }) {
  const [individuals, setIndividuals] = useState(1);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "left" }}
    >
      <Grid
        container
        item
        direction="column"
        style={{ maxWidth: 300, marginLeft: 60, marginTop: 40 }}
        spacing={1}
      >
        <Grid item>
          <Typography variant="subtitle2">1. Create Labels</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">
            Create one label for each individual in your photographs.
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          spacing={1}
          style={{ padding: 12 }}
        >
          {[...Array(individuals).keys()].map(i => (
            <Grid item>
              <Badge onClick={() => setIndividuals(individuals - 1)} badgeContent={<DeleteIcon style={{ fill: '#757575', cursor: 'pointer' }} fontSize="small" />}>
                <Avatar
                  style={{ backgroundColor: colors[i] }}
                >
                  {String.fromCharCode(65 + i)}
                </Avatar>
              </Badge>
            </Grid>
          ))}
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              setIndividuals(individuals + 1);
            }}
            startIcon={<AddCircleOutlineIcon />}
            variant="outlined"
            style={{ width: 160 }}
          >
            Add Label
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="column"
        style={{
          maxWidth: 300,
          marginLeft: 60,
          marginTop: 40,
          marginBottom: 20
        }}
        spacing={1}
      >
        <Grid item>
          <Typography variant="subtitle2">
            2. Assign Labels to Photographs
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">
            Match a label to each of the annotations created by our machine
            learning algorithm.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} justify="center">
        {images.map(img => (
          <Grid item>
            <AnnotationReview
              cover
              individuals={individuals}
              key={img.name}
              name={img.name}
              imageSource={img.imageSource}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Button
          startIcon={<AddCircleOutlineIcon />}
          variant="outlined"
          style={{ width: 200, marginLeft: 52 }}
        >
          Add Annotation
        </Button>
      </Grid>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Button
          variant="contained"
          style={{ marginTop: 40, width: 300, textAlign: "center" }}
          onClick={() => setStep(3)}
        >
          Finish Grouping
        </Button>
      </div>
    </div>
  );
}
