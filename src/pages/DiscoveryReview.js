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
    <Column style={{ paddingLeft: 20, paddingRight: 20 }}>
      <Grid container direction="column" alignItems="center">
        <Typography variant="h4" style={{ margin: "24px 0 12px 0" }}>
          Discovery Review
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: 40 }}>
          Reviewing Encounter c13Ylo2
        </Typography>
        {images.map(img => (
          <AnnotationCard
            key={img.name}
            name={img.name}
            imageSource={img.imageSource}
          />
        ))}
        <Button variant="contained" style={{ marginTop: 40, width: 300 }}>
          Next step: Identification
        </Button>
      </Grid>
    </Column>
  );
}
