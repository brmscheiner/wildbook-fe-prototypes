import React, { useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';
import ProTip from './ProTip';
import Singin from './Signin';
import Dashboard from './templates/dashboard/Dashboard'
import Blog from './templates/blog/Blog'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000000'
      },
      secondary: {
        main: '#000000'
      }
    }
  })

  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <ThemeProvider theme={theme}>
      
      <div>
      <Dashboard />
      <Blog />

    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <div style={{
    top: `50%`,
    left: `25%`,
    transform: `translate(50%, -50%)`,
  }} className={classes.paper}><Singin /></div>
        
      </Modal>
      </div>
    </ThemeProvider>
  );
}
