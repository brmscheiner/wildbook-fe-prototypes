import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AnnotationCard from "../components/AnnotationCard";
import Column from "../components/Column";
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

export default function DiscoveryReview() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "annotation-actions-menu" : undefined;

  return (
    <Column>
      <Grid container direction="column">
        <div style={{ marginLeft: 8 }}>
          <Typography variant="h4" style={{ margin: "24px 0 12px 0" }}>
            Discovery Review
          </Typography>
          <Typography variant="subtitle2" style={{ marginBottom: 40 }}>
            Reviewing Encounter 532930
          </Typography>
        </div>
        {images.map(img => (
          <AnnotationCard
            key={img.name}
            name={img.name}
            imageSource={img.imageSource}
          />
        ))}
        <Button variant="contained" style={{ marginTop: 40 }}>Submit for Identification</Button>
        <Button size="small" style={{ marginTop: 12, marginBottom: 200}}>Submit and Skip Identification</Button>
      </Grid>
    </Column>
  );
}
