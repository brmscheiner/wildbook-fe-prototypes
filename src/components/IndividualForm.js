import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  TextField,
  InputLabel,
  Grid
} from "@material-ui/core";

const inputWidth = 340;

export default function IndividualForm() {
  return (
    <Grid
      direction="column"
      container
      spacing={4}
      style={{ marginLeft: 8, marginBottom: 12 }}
    >
      
      <Grid item>
        <FormControl required>
          <InputLabel>Encounter Context</InputLabel>
          <Select
            style={{ width: inputWidth }}
            labelId="species-selector-label"
            id="species-selector"
            onChange={() => {
              console.log("clicky ");
            }}
          >
            <MenuItem value="1">Wildlife Tour</MenuItem>
            <MenuItem value="2">Opportunistic Sighting</MenuItem>
            <MenuItem value="3">Research Effort</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <TextField
          id="notes"
          label="Notes"
          multiline
          style={{ width: inputWidth }}
        />
      </Grid>

      <Grid item>
        <TextField id="salty" label="Salinity" style={{ width: inputWidth }} />
      </Grid>
      <Grid item>
        <TextField
          id="salty"
          label="Water depth"
          style={{ width: inputWidth }}
        />
      </Grid>
      <Grid item>
        <TextField
          id="temp"
          label="Temperature (°C)"
          style={{ width: inputWidth }}
        />
      </Grid>
    </Grid>
  );
}
