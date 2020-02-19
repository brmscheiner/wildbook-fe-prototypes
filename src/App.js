import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import AppHeader from "./components/AppHeader";
import Dashboard from "./components/Dashboard";
import NewEncounter from "./pages/NewEncounter";
import MatchResolution from "./pages/MatchResolution";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#000000"
      },
      secondary: {
        main: "#000000"
      },
      paper: {
        main: "#eeeeee"
      }
    }
  });

  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/encounters/new">
            <NewEncounter />
          </Route>
          <Route path="/encounters/4232318">
            <MatchResolution />
          </Route>
          <Route path="/match-resolution">
            <MatchResolution />
          </Route>
          <Route>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
