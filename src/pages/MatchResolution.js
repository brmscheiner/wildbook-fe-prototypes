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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PermMediaIcon from "@material-ui/icons/PermMediaOutlined";
import MatchProgressBanner from "../components/MatchProgressBanner";
import turt1 from "../assets/turt1.jpg";
import turt2 from "../assets/turt2.jpg";
import turt3 from "../assets/turt3.jpg";
import turt4 from "../assets/turt4.jpg";
import turt5 from "../assets/turt5.jpg";

const inputWidth = 340;

export default function NewEncounter() {
  return (
    <div
      style={{
        marginTop: 64
      }}
    >
      <Grid container direction="column">
        <Grid item>
          <Grid container style={{ width: "100%" }}>
            <Grid item>
              <img src={turt2} width={400} />
              <Button>Heeey</Button>
            </Grid>
            <Grid item>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Individual</TableCell>
                      <TableCell>CurvRank</TableCell>
                      <TableCell>MatchoTron</TableCell>
                      <TableCell>Whoomp</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <Button>Heeey</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item style={{ height: 200, marginTop: 8 }}>
          <Grid container spacing={3}>
            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                style={{ padding: 4 }}
              >
                <img src={turt1} height={100} />
                <Typography>RJ-22</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                style={{ border: "1px solid black", padding: 4 }}
              >
                <img src={turt2} height={100} />
                <Typography>RJ-77</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                style={{ padding: 4 }}
              >
                <img src={turt1} height={100} />
                <Typography>-</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
