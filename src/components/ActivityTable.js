import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple, green, red } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650
  },
  cell: {
    borderBottom: "unset"
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  },
  green: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600]
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  },
  red: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
  }
}));

function createData(avatar, request, color) {
  return { avatar, request, color };
}

const rows = [
  createData("T", "Tom Scholtz sent you a collaboration request", 'orange'),
  createData(
    "J",
    "Jane Dillum asked to join the Max Planck Institute of Ornithology", 'green'
  ),
  createData("P", "Phillip Eclair sent you a collaboration request", 'purple')
];

export default function ActivityTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map(row => {
              return (
                <TableRow key={row.request}>
                  <TableCell className={classes.cell} component="th" scope="row">
                    <Grid container>
                      <Grid item>
                        <Avatar className={classes[row.color]}>{row.avatar}</Avatar>
                      </Grid>
                      <Grid item>
                        <Typography>{row.request}</Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell className={classes.cell} align="right">
                    <Button className={classes.green} variant="outlined" size="small" ><CheckIcon /></Button>
                    <Button className={classes.red} variant="outlined" size="small" ><CloseIcon /></Button>
                  </TableCell>
                </TableRow>
              )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
