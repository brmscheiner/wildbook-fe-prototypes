import React, { useState } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  TextField,
  InputLabel,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel
} from "@material-ui/core";

const initialCoords = [
  {
    x1: 145,
    y1: 150,
    x2: 322,
    y2: 255
  },
  {
    x1: 111,
    y1: 188,
    x2: 200,
    y2: 242
  }
];

export default function AnnotationEditor({ imageSource }) {
  const [activeAnnotation, setActiveAnnotation] = useState(0);
  const [bboxes, setBboxes] = useState(initialCoords);

  return (
    <>
      <Divider />
      <div>
        <svg width={400} height={400}>
          <image href={imageSource} x={0} y={0} width={400} height={400} />
          {bboxes.map((bbox, i) => (
            <rect
              x={bbox.x1}
              y={bbox.y1}
              width={bbox.x2 - bbox.x1}
              height={bbox.y2 - bbox.y1}
              fill={i === activeAnnotation ? "rgba(40, 40, 40, 0.1)" : "none"}
              stroke={i === activeAnnotation ? "black" : "rgba(0, 0, 0, 0.5)"}
              strokeDasharray={i === activeAnnotation ? "unset" : "4 4"}
              strokeWidth={2}
            />
          ))}
        </svg>
      </div>
      <Divider />
      <Grid
        direction="column"
        container
        spacing={1}
        style={{ marginLeft: 20, marginRight: 20, width: "100%" }}
      >
        <Grid item>
          <Typography variant="caption">{`Annotation ${activeAnnotation +
            1} of ${bboxes.length}`}</Typography>
        </Grid>
        <Grid item style={{ marginTop: 16 }}>
          <FormControl>
            <InputLabel>Sex</InputLabel>
            <Select
              style={{ width: 140 }}
              labelId="sex-selector-label"
              id="sex-selector"
              value={5}
              onChange={() => {
                console.log("clicky ");
              }}
            >
              <MenuItem value="1">Male</MenuItem>
              <MenuItem value="2">Female</MenuItem>
              <MenuItem value="5">Unknown</MenuItem>
            </Select>
          </FormControl>

          <FormControl style={{ marginLeft: 20 }}>
            <InputLabel>Status</InputLabel>
            <Select
              style={{ width: 140 }}
              labelId="sex-selector-label"
              id="sex-selector"
              value={5}
              onChange={() => {
                console.log("clicky ");
              }}
            >
              <MenuItem value="1">Deceased</MenuItem>
              <MenuItem value="2">Unknown</MenuItem>
              <MenuItem value="5">Alive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            id="behavior"
            label="Observed behavior"
            multiline
            style={{ width: 300, marginBottom: 32 }}
          />
        </Grid>
      </Grid>
      <CardActions>
        <Grid container justify="space-between">
          <Button
            disabled={activeAnnotation === 0}
            onClick={() => setActiveAnnotation(activeAnnotation - 1)}
          >
            Previous
          </Button>
          <Button
            disabled={activeAnnotation === bboxes.length - 1}
            onClick={() => setActiveAnnotation(activeAnnotation + 1)}
          >
            Next
          </Button>
        </Grid>
      </CardActions>
    </>
  );
}
