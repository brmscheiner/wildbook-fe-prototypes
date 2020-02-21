import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AnnotationEditor from './AnnotationEditor'

export default function AnnotationCard({ name, imageSource }) {
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
    <Card style={{ marginBottom: 40}}>
          <CardHeader
            title={name}
            subheader="5 annotations"
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
          <AnnotationEditor imageSource={imageSource} />
        </Card>
  );
}
