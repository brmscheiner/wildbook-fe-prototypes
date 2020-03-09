import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AnnotationReview from "../components/AnnotationReview";
import turt1 from "../assets/turt1.jpg";
import turt2 from "../assets/turt2.jpg";
import turt3 from "../assets/turt3.jpg";
import turt4 from "../assets/turt4.jpg";
import turt5 from "../assets/turt5.jpg";

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
  },
  {
    name: "turt5.jpg",
    imageSource: turt5
  }
];

export default function GroupImages({ setStep }) {
  return (
    <Grid container spacing={2} justify="center">
      {images.map(img => (
        <Grid item>
          <AnnotationReview
            key={img.name}
            name={img.name}
            imageSource={img.imageSource}
          />
        </Grid>
      ))}
      <Button variant="contained" style={{ marginTop: 40, width: 300 }}>
        Finish Grouping
      </Button>
    </Grid>
  );
}
