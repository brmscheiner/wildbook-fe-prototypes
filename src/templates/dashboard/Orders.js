import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'MX-232', 'TT-421', 'Jon Taylor', 'Doug Fresh'),
  createData(1, '16 Mar, 2019', 'AC-41', 'MD-511', 'Sarah Barbara', 'Jeep Grand Cherokee'),
  createData(2, '16 Mar, 2019', 'FC-321', 'CD-142', 'Deepak Choog', 'Bingo Star'),
  createData(3, '16 Mar, 2019', 'C-233', 'BN-420', 'Limousine Boflex', 'Jabbles Outlet'),
  createData(4, '15 Mar, 2019', 'Z-58', 'WS-873', 'Dennis Mopa', 'Spinach Boy'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent merges</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>ID 1</TableCell>
            <TableCell>ID 2</TableCell>
            <TableCell>Reviewer</TableCell>
            <TableCell>Approver</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more merges
        </Link>
      </div>
    </React.Fragment>
  );
}
