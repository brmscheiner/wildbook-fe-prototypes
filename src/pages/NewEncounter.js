import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import LocationPicker from "react-location-picker";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  TextField,
  InputLabel,
  Grid,
  Divider,
  Button
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PermMediaIcon from "@material-ui/icons/PermMediaOutlined";
import MatchProgressBanner from "../components/MatchProgressBanner";

const inputWidth = 340;

export default function NewEncounter() {
  return (
    <div
      style={{
        marginTop: 64,
        marginBottom: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <MatchProgressBanner />
      <Typography component="h4" variant="h4" style={{ padding: 24 }}>
        Report an Encounter
      </Typography>

      <Grid
        direction="column"
        container
        spacing={4}
        style={{ marginLeft: 40, marginRight: 40, maxWidth: 640 }}
      >
        <Grid item>
          <Grid container direction="column" style={{ width: inputWidth }}>
            <PermMediaIcon style={{ fontSize: 40, width: 180 }} />
            <Button
              variant="outlined"
              style={{
                marginTop: 12,
                marginBottom: 12,
                width: 180
              }}
              startIcon={<CloudUploadIcon />}
            >
              Upload Media
            </Button>
            Note: only JPG, JPEG and PNG files will be parsed by the matching engine.
          </Grid>
        </Grid>
        <Grid item>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Encounter Date"
              value="02/12/1999"
              required
              style={{ width: inputWidth }}
              onChange={() => {
                console.log("clicky ");
              }}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item>
          <FormControl required>
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
          <TextField
            id="notes"
            label="Notes"
            multiline
            style={{ width: inputWidth }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">Location</Typography>
          <LocationPicker
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: 400, width: 600 }} />}
            defaultPosition={{
              lat: 27.9878,
              lng: 86.925
            }}
            onChange={e => {
              console.log(e);
            }}
          />
          <Typography variant="subtitle">
            Adjust the location by dragging the red pin
          </Typography>
        </Grid>

        <Grid item>
          <FormControl>
            <InputLabel>Region</InputLabel>
            <Select
              style={{ width: inputWidth }}
              labelId="region-selector-label"
              id="region-selector"
              onChange={() => {
                console.log("clicky ");
              }}
            >
              <MenuItem value="1">Medellín</MenuItem>
              <MenuItem value="2">Goa</MenuItem>
              <MenuItem value="3">Tombaqûœ</MenuItem>
              <MenuItem value="4">Jočasta</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel>Country</InputLabel>
            <Select
              style={{ width: inputWidth }}
              labelId="country-selector-label"
              id="country-selector"
              onChange={() => {
                console.log("clicky ");
              }}
            >
              <MenuItem value="male">Colombia</MenuItem>
              <MenuItem value="male">India</MenuItem>
              <MenuItem value="female">Mozambique</MenuItem>
              <MenuItem value="unknown">Britain</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Typography variant="h5">Measurements</Typography>
          <TextField
            id="salty"
            label="Salinity"
            style={{ width: inputWidth }}
          />
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

        <Grid item>
          <Typography variant="h5">Team</Typography>

          <FormControl>
            <InputLabel>Organization</InputLabel>
            <Select
              style={{ width: inputWidth }}
              labelId="region-selector-label"
              id="region-selector"
              onChange={() => {
                console.log("clicky ");
              }}
            >
              <MenuItem value="1">Medellín</MenuItem>
              <MenuItem value="2">Goa</MenuItem>
              <MenuItem value="3">Tombaqûœ</MenuItem>
              <MenuItem value="4">Jočasta</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            id="project"
            label="Project"
            multiline
            style={{ width: inputWidth }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="photo-name"
            label="Photographer name"
            style={{ width: inputWidth }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="photo-email"
            label="Photographer email address"
            style={{ width: inputWidth }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" large>
            Report Encounter
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
