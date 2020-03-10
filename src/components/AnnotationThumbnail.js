import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AnnotationGrouper from "./AnnotationGrouper";

const colors = [
  "#e41a1c",
  "#377eb8",
  "#4daf4a",
  "#984ea3",
  "#ff7f00",
  "#ffff33",
  "#a65628",
  "#f781bf"
];

const unknownColor = "#999999";

export default function AnnotationThumbnail({ name, imageSource, selectedIndividual }) {
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
    <Card
      style={{
        marginBottom: 40,
        backgroundColor: colors[selectedIndividual] || "unset",
        width: 240,
        height: 240,
      }}
      elevation={5}
    >
      <CardHeader
        title={name}
        action={
          <div>
            <IconButton
              aria-describedby={id}
              aria-label="annotation-actions"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
            >
              <List dense>
                <ListItem>
                  <Button size="small">Add annotation</Button>
                </ListItem>
                <ListItem>
                  <Button size="small">Delete this annotation</Button>
                </ListItem>
                <ListItem>
                  <Button size="small">Revert all changes</Button>
                </ListItem>
              </List>
            </Popover>
          </div>
        }
      />
      <AnnotationGrouper imageSource={imageSource} />
    </Card>
  );
}
