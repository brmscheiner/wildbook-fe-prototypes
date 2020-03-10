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
    x1: 20,
    y1: 32,
    x2: 166,
    y2: 114
  }
];

export default function AnnotationGrouper({ imageSource, cover }) {
  const [activeAnnotation, setActiveAnnotation] = useState(0);
  const [bboxes, setBboxes] = useState(initialCoords);


  return (
    <div style={{ backgroundImage: `url(${imageSource})`, backgroundSize: cover ? 'cover' : 'contain', backgroundRepeat: 'no-repeat'}}>
        <svg width={340} height={220}>
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
  );
}
