import React, { useState } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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

  console.log(imageSource);
  return (
    <>
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
          <text x={200} y={380} textAnchor="middle" fontSize="16">
            {`Annotation ${activeAnnotation + 1} of ${bboxes.length}`}
          </text>
        </svg>
      </div>
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
