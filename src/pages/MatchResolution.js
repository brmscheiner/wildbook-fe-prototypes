import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
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
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";
import Paper from "@material-ui/core/Paper";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CandidateMatchData from "../constants/CandidateMatchData";
import TablePaginationActions from "../components/TablePaginationActions";
import turt1 from "../assets/turt1-annotated.jpg";
import turt2 from "../assets/turt2-annotated.jpg";
import turt3 from "../assets/turt3-annotated.jpg";
import turt4 from "../assets/turt4-annotated.jpg";
import turt5 from "../assets/turt5-annotated.jpg";

export default function NewEncounter() {
  const [showCandidate, setShowCandidate] = useState(false);

  useEffect(() => {
    const onKeyDown = e => {
      if (e.keyCode === 32) setShowCandidate(true);
    };

    const onKeyUp = e => {
      if (e.keyCode === 32) setShowCandidate(false);
    };

    window.addEventListener("keydown", onKeyDown);

    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  });

  return (
    <div
      style={{
        marginTop: 64
      }}
    >
      <Grid container direction="column">
        <Grid item style={{ padding: 20 }}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h4">Identification Review</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Done
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid item style={{ height: "60%" }}>
          <Grid container style={{ width: "100%" }}>
            <Grid item style={{ padding: 20, width: "calc(50% - 1px)" }}>
              <div style={{ display: "inline-grid" }}>
                <img src={turt2} style={{ maxHeight: 600, maxWidth: "100%" }} />
                <Typography variant="caption" style={{ textAlign: "end" }}>
                  Annotation 3 of 3
                </Typography>
                <Divider />
              </div>
              <Grid container spacing={3} style={{ marginTop: 4 }}>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    style={{ padding: 4 }}
                  >
                    <img src={turt1} height={100} />
                    <Typography>IND-763859</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    style={{ padding: 4 }}
                  >
                    <img src={turt2} height={100} />
                    <Typography>IND-130192</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    style={{ border: "1px solid black", padding: 4 }}
                  >
                    <img src={turt1} height={100} />
                    <Typography>Unmatched</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item style={{ padding: 20, width: "48%" }}>
              {showCandidate && (
                <div style={{ position: "absolute", zIndex: 5 }}>
                  <img
                    src={turt4}
                    style={{ maxHeight: 600, maxWidth: "100%" }}
                  />
                </div>
              )}
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Typography variant="subtitle2">Quick select</Typography>
                </Grid>
                <Grid item>
                  <Autocomplete
                    id="combo-box-demo"
                    options={["IND-548621", "IND-228003", "IND-981344"]}
                    style={{ width: 300 }}
                    renderInput={params => (
                      <TextField
                        {...params}
                        size="small"
                        style={{ width: 300 }}
                        label="Add an individual..."
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item>
                  <TableContainer component={Paper}>
                    <Table size="small">
                      <TableBody>
                        <TableRow>
                          <TableCell>IND-344857</TableCell>
                          <TableCell>
                            Previously matched in this encounter
                          </TableCell>
                        </TableRow>
                        <TableRow selected>
                          <TableCell>IND-819545</TableCell>
                          <TableCell>Added using the search bar</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">Candidate Matches</Typography>
                </Grid>
                <Grid item>
                  <TableContainer component={Paper}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Individual</TableCell>
                          <TableCell>CurvRank</TableCell>
                          <TableCell>Deepsense</TableCell>
                          <TableCell>Weighted Average</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {CandidateMatchData.map(candidateMatch => (
                          <TableRow>
                            <TableCell>{candidateMatch.name}</TableCell>
                            <TableCell>
                              {candidateMatch.a1.toFixed(2)}
                            </TableCell>
                            <TableCell>
                              {candidateMatch.a2.toFixed(2)}
                            </TableCell>
                            <TableCell>
                              {candidateMatch.avg.toFixed(2)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TablePagination
                            ActionsComponent={TablePaginationActions}
                            rowsPerPageOptions={[12, 36]}
                            count={1}
                            page={0}
                            rowsPerPage={12}
                          />
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid item container spacing={1}>
                  <Grid item>
                    <Button variant="outlined">Confirm Match</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined">Report No Match</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined">Skip for Now</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
