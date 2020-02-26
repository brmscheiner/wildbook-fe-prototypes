import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  TextField,
  InputLabel,
  Chip,
  Grid,
  Divider,
  Button,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  FormLabel
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Column from "../components/Column";
import Header from "../components/Header";

const inputWidth = 300;

export default function NewSite() {
  return (
    <Column>
      <Header>Wildbook Site Setup</Header>
      <Grid
        direction="column"
        container
        spacing={4}
        style={{ marginLeft: 40, marginRight: 40, maxWidth: 480 }}
      >
        <Grid item>
          <TextField
            id="name"
            label="Wildbook Name"
            required
            style={{ width: inputWidth }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="name"
            label="Description"
            style={{ width: inputWidth }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">Logo</Typography>
          <Typography variant="caption">
            Logo should be a 48 x 48 pixel png file with a transparent
            background
          </Typography>
          <Button variant="outlined">Upload a Logo</Button>
        </Grid>
        <Grid item>
          <Typography variant="h5">Species</Typography>
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel>AI species</InputLabel>
            <Select
              style={{ width: inputWidth }}
              labelId="species-selector-label"
              id="species-selector"
              multiple
              value={["1", "4"]}
              onChange={() => {
                console.log("clicky ");
              }}
            >
              <MenuItem value="1">Chelonia Myas</MenuItem>
              <MenuItem value="2">Eretmochelys Imbricata</MenuItem>
              <MenuItem value="3">Caretta Caretta</MenuItem>
              <MenuItem value="4">Lepidochelys Olivacea</MenuItem>
            </Select>
            <FormHelperText>
              Wildbook currently supports AI discovery and matching for 22
              different species. To initiate the process of adding additional
              species, contact Wildbook support.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            id="other-species"
            value="Giraffa tippelskirchi"
            style={{ width: inputWidth }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="other-species"
            value="Giraffa camelopardalis camelopardalis"
            style={{ width: inputWidth }}
          />
        </Grid>
        <Grid item>
          <TextField id="other-species" style={{ width: inputWidth }} />
          <IconButton>
            <AddBoxIcon />
          </IconButton>
          <FormHelperText>
            Wildbook can be used to catalogue encounters with any species. If
            discovery and matching are unavailable via AI, these tasks can still
            be performed manually.
          </FormHelperText>
        </Grid>
        <Grid item style={{ marginTop: 20 }}>
          <Button variant="contained" large>
            Create Site
          </Button>
        </Grid>
      </Grid>
    </Column>
  );
}
