import React from "react";
import { useHistory } from 'react-router-dom'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import Button from "@material-ui/core/Button";
import Filter9PlusIcon from "@material-ui/icons/Filter9Plus";
import TocIcon from "@material-ui/icons/Toc";
import FilterIcon from "@material-ui/icons/Filter";

export default function SubmitDataSplash() {
    const history = useHistory()
  return (
    <div
      style={{
        marginTop: 120,
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Paper
        style={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 40,
          paddingBottom: 40,
          paddingLeft: 20,
          paddingRight: 20,
          cursor: "pointer",
          marginLeft: 30,
          marginRight: 30
        }}
        elevation={5}
        onClick={() => {
          console.log("clicky");
        }}
      >
        <Typography variant="h4" style={{ marginTop: 16 }}>
          Streamlined
        </Typography>
        <TocIcon style={{ width: 200, height: 200 }} />
        <Typography variant="h6">Encounters without Images</Typography>
        <Divider style={{ width: "100%", marginTop: 12, marginBottom: 12 }} />
        <Typography
          variant="caption"
          style={{
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
            width: 200
          }}
        >
          Submit encounter data without images for up to 10 individuals
        </Typography>
        <Button>Submit Data</Button>
      </Paper>
      <Paper
        style={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 40,
          paddingBottom: 40,
          paddingLeft: 20,
          paddingRight: 20,
          cursor: "pointer",
          marginLeft: 30,
          marginRight: 30
        }}
        elevation={5}
        onClick={() => {
            history.push('/standard-submit')
        }}
      >
        <Typography variant="h4" style={{ marginTop: 16 }}>
          Standard
        </Typography>
        <FilterIcon
          style={{ width: 140, height: 140, marginTop: 30, marginBottom: 30 }}
        />
        <Typography variant="h6">Encounters with Images</Typography>
        <Divider style={{ width: "100%", marginTop: 12, marginBottom: 12 }} />
        <Typography
          variant="caption"
          style={{
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
            width: 200
          }}
        >
          Submit encounter data with images for up to 10 individuals
        </Typography>
        <Button>Submit Data</Button>
      </Paper>
      <Paper
        style={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 40,
          paddingBottom: 40,
          paddingLeft: 20,
          paddingRight: 20,
          cursor: "pointer",
          marginLeft: 30,
          marginRight: 30
        }}
        elevation={5}
      >
        <Typography variant="h4" style={{ marginTop: 16 }}>
          Bulk
        </Typography>
        <Filter9PlusIcon
          style={{ width: 140, height: 140, marginTop: 30, marginBottom: 30 }}
        />
        <Typography variant="h6">Lots of Encounters</Typography>
        <Divider style={{ width: "100%", marginTop: 12, marginBottom: 12 }} />
        <Typography
          variant="caption"
          style={{
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
            width: 200
          }}
        >
          Submit encounter data in large quantities using an Excel template
        </Typography>
        <Button>Submit Data</Button>
      </Paper>
    </div>
  );
}
