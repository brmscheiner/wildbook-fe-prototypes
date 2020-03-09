import React from "react";
import Typography from "@material-ui/core/Typography";
import ocean from "../assets/ocean.jpeg";

export default function FourOhFourTwo() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: 'absolute',
        backgroundImage: `url(${ocean})`,
        backgroundSize: "cover"
      }}
    >
      <div style={{ marginTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <Typography variant="h1" style={{ fontSize: 120 }}>404</Typography>
        <Typography variant="h4">Page not found</Typography>
        <Typography style={{ maxWidth: 400, marginTop: 16 }}>The page you are looking for may have been removed or may be temporarily unavailable.</Typography>
      </div>
    </div>
  );
}
