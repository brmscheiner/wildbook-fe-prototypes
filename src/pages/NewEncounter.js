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
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  FormLabel
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PermMediaIcon from "@material-ui/icons/PermMediaOutlined";
import MatchProgressBanner from "../components/MatchProgressBanner";
import Column from "../components/Column";
import Header from "../components/Header";

const inputWidth = 340;

export default function NewEncounter() {
  return (
    <Column>
      <MatchProgressBanner />
      <Header>Report an Encounter</Header>
      <Grid
        direction="column"
        container
        spacing={4}
        style={{ marginLeft: 40, marginRight: 40, maxWidth: 480 }}
      >
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
          <Grid container direction="column" style={{ width: inputWidth }}>
            <Button
              variant="outlined"
              style={{
                width: 180
              }}
              startIcon={<CloudUploadIcon />}
            >
              Upload Media
            </Button>
            <FormHelperText>
              Any media can be associated with your encounter. However, only
              JPG, JPEG and PNG files will be parsed by the matching engine.
            </FormHelperText>
          </Grid>
        </Grid>
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
            mapElement={<div style={{ height: 400, width: 480 }} />}
            defaultPosition={{
              lat: 27.9878,
              lng: 86.925
            }}
            onChange={e => {
              console.log(e);
            }}
          />
          <FormHelperText>
            Adjust the location by dragging the red pin
          </FormHelperText>
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
            <InputLabel>Group</InputLabel>
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
          <Typography variant="h5" style={{ marginBottom: 20 }}>
            Permissions
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="sharing" name="sharing" value={1}>
              <FormControlLabel value={1} control={<Radio />} label="Public" />
              <Typography variant="caption">
                Make the full details of this encounter public. Growing a free
                and public database of knowledge is the best way to advance
                conservation efforts.
              </Typography>
              <FormControlLabel value={2} control={<Radio />} label="Limited" />
              <Typography variant="caption">
                Make the basic details of this encounter public. Approximate
                location will be shown instead of exact location. Only you,
                members of your group, and administrators will be able to see
                the full details of this encounter.
              </Typography>
              <FormControlLabel value={3} control={<Radio />} label="Private" />
              <Typography variant="caption">
                Make the details of this encounter private. Only you, members of
                your group, and administrators of this site will be able to see
                details of this encounter.
              </Typography>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <Typography variant="h5" style={{ marginBottom: 20 }}>
            License
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="sharing" name="sharing" value={1}>
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="Creative Commons 3.0"
              />
              <Typography variant="caption">
                Others will have the right to share and use this encounter data.
                An attribution is required when using this data.
              </Typography>
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="Restricted License"
              />
              <Typography variant="caption">
                Others do not have the right to share or use this encounter
                data.
              </Typography>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item style={{ marginBottom: 80, marginTop: 20 }}>
          <Button variant="contained" large>
            Report Encounter
          </Button>
        </Grid>
      </Grid>
    </Column>
  );
}
