import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Header({ children }) {
  return (
    <Typography
      component="h4"
      variant="h4"
      style={{ padding: 24, textAlign: "center" }}
    >
      {children}
    </Typography>
  );
}
