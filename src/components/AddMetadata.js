import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PermMediaIcon from "@material-ui/icons/PermMediaOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IndividualForm from "../components/IndividualForm";
import Column from "../components/Column";
import AnnotationThumbnail from "../components/AnnotationThumbnail";
import turt1 from "../assets/turt1.jpg";
import turt2 from "../assets/turt2.jpg";
import turt3 from "../assets/turt3.jpg";
import turt4 from "../assets/turt4.jpg";
import turt5 from "../assets/turt5.jpg";

const images = [
  {
    name: "turt1.jpg",
    imageSource: turt1
  },
  {
    name: "turt2.jpg",
    imageSource: turt2
  },
  {
    name: "turt3.jpg",
    imageSource: turt3
  },
  {
    name: "turt4.jpg",
    imageSource: turt4
  }
];

const inputWidth = 340;

export default function AddMetadata() {
  const [radioClicked, setRadioClicked] = useState(false);
  const history = useHistory();

  return (
    <Grid
      direction="column"
      container
      spacing={4}
      style={{ marginLeft: 40, marginRight: 40, maxWidth: 480 }}
    >
      <Grid item>
        <Typography variant="h5" style={{ margin: "16px 0" }}>
          Date and Location
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="sharing"
            name="sharing"
            value={radioClicked ? 1 : null}
            onClick={() => setRadioClicked(true)}
          >
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="One date and location"
            />
            <Typography variant="caption">
              All photographs have the same date and location
            </Typography>
            <FormControlLabel
              value={2}
              control={<Radio />}
              label="Multiple dates and locations"
            />
            <Typography variant="caption">
              These photographs were taken in multiple locations or multiple
              points in time
            </Typography>
          </RadioGroup>
        </FormControl>
        {radioClicked && (
          <>
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
            <FormControl style={{ marginBottom: 20 }}>
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
          </>
        )}
      </Grid>
      <Grid item>
        <Typography variant="h5" style={{ margin: "16px 0" }}>
          Individual A
        </Typography>
        <Grid container spacing={1} style={{ flexWrap: "unset" }}>
          <Grid item>
            <AnnotationThumbnail
              name={images[0].name}
              imageSource={images[0].imageSource}
              selectedIndividual={0}
            />
          </Grid>
          <Grid item>
            <AnnotationThumbnail
              name={images[1].name}
              imageSource={images[1].imageSource}
              selectedIndividual={0}
            />
          </Grid>
        </Grid>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Metadata
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <IndividualForm />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
      <Grid item>
        <Typography variant="h5" style={{ margin: "16px 0" }}>
          Individual B
        </Typography>

        <Grid container spacing={1} style={{ flexWrap: "unset" }}>
          <Grid item>
            <AnnotationThumbnail
              name={images[2].name}
              imageSource={images[2].imageSource}
              selectedIndividual={1}
            />
          </Grid>
          <Grid item>
            <AnnotationThumbnail
              name={images[3].name}
              imageSource={images[3].imageSource}
              selectedIndividual={1}
            />
          </Grid>
        </Grid>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Metadata
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <IndividualForm />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
      <Grid item>
        <Typography variant="h5" style={{ margin: "16px 0" }}>
          Global Settings
        </Typography>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Permissions
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormControl component="fieldset">
              <RadioGroup aria-label="sharing" name="sharing" value={1}>
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Public"
                />
                <Typography variant="caption">
                  Make the full details of this encounter public. Growing a free
                  and public database of knowledge is the best way to advance
                  conservation efforts.
                </Typography>
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="Limited"
                />
                <Typography variant="caption">
                  Make the basic details of this encounter public. Approximate
                  location will be shown instead of exact location. Only you,
                  members of your group, and administrators will be able to see
                  the full details of this encounter.
                </Typography>
                <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label="Private"
                />
                <Typography variant="caption">
                  Make the details of this encounter private. Only you, members
                  of your group, and administrators of this site will be able to
                  see details of this encounter.
                </Typography>
              </RadioGroup>
            </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            License
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormControl component="fieldset">
              <RadioGroup aria-label="sharing" name="sharing" value={1}>
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Creative Commons 3.0"
                />
                <Typography variant="caption">
                  Others will have the right to share and use this encounter
                  data. An attribution is required when using this data.
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
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Match Domain
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormControl component="fieldset">
              <RadioGroup aria-label="sharing" name="sharing" value={2}>
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="All public encounters"
                />
                <Typography variant="caption">
                  Attempt to match this encounter against all public encounters
                </Typography>
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="A subset of encounters"
                />
                <Typography variant="caption">
                  Attempt to match this encounter against a selected subset of
                  encounters.
                </Typography>
                <FormControl>
                  <InputLabel>Subset</InputLabel>
                  <Select
                    style={{ width: inputWidth }}
                    labelId="region-selector-label"
                    id="region-selector"
                    onChange={() => {
                      console.log("clicky ");
                    }}
                  >
                    <MenuItem value="1">
                      2018 Male Reticulated Giraffe at Lewa
                    </MenuItem>
                    <MenuItem value="2">
                      2018 Female Reticulated Giraffe at Lewa
                    </MenuItem>
                    <MenuItem value="3">
                      2019 Male Reticulated Giraffe at Lewa
                    </MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="outlined"
                  style={{ width: 140, margin: "10px 0 20px 0" }}
                >
                  New subset
                </Button>
                <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label="No encounters"
                />
                <Typography variant="caption">
                  Skip identification for this encounter. If this encounter is
                  set to public, the encounter data will still enter the
                  computer vision database for other users to match against.
                </Typography>
              </RadioGroup>
            </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
      <Grid item style={{ marginBottom: 80, marginTop: 20 }}>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column"
          }}
          onClick={() => history.push("/")}
        >
          <Button variant="contained" large>
            Submit for Identification
          </Button>
          <Button>Submit and skip identification</Button>
        </div>
      </Grid>
    </Grid>
  );
}
