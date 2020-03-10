import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Grid,
  Button,
  FormHelperText
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Column from "../components/Column";

const inputWidth = 340;

export default function NewEncounter({ setStep }) {
  return (
    <div>
      <Grid direction="column" container spacing={6} style={{ maxWidth: 480 }}>
        <Grid item>
          <FormControl required  style={{ marginTop: 40 }}>
            <InputLabel>Species</InputLabel>
            <Select
              style={{ width: inputWidth }}
              labelId="species-selector-label"
              id="species-selector"
              onChange={() => {
                console.log("clicky ");
              }}
            >
              <MenuItem value="1">Chelonia Myas</MenuItem>
              <MenuItem value="2">Eretmochelys Imbricata</MenuItem>
              <MenuItem value="3">Caretta Caretta</MenuItem>
              <MenuItem value="4">Lepidochelys Olivacea</MenuItem>
              <MenuItem value="5">Unknown</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Button
              variant="outlined"
              style={{
                width: 260
              }}
              startIcon={<CloudUploadIcon />}
            >
              Upload Photographs
            </Button>
            <FormHelperText style={{ marginTop: 8 }}>
              JPG, JPEG and PNG pictures of your encounters. In step 3 you can
              upload other types of media.
            </FormHelperText>
          </Grid>
        </Grid>

        <Grid
          item
          style={{ marginTop: 20, display: "flex", flexDirection: "column" }}
        >
          <Button variant="contained" large onClick={() => setStep(1)}>
            Process Images
          </Button>
          <Button style={{ textTransform: "unset" }} onClick={() => setStep(2)}>
            Skip Image Processing
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
