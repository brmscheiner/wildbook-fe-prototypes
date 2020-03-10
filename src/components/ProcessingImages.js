import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

export default function ProcessingImages({ setStep, step }) {
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFinished(true);
    }, 5000);

    setTimeout(() => {
        if (step === 1) setStep(2);
      }, 6000);
  });
  return (
    <div style={{ textAlign: "center" }}>
      <CircularProgress
        thickness={1}
        size={140}
        style={{ marginTop: 40, marginBottom: 40 }}
        variant={finished ? 'static' : undefined}
        value={finished ? 100 : undefined}
      />
      {!finished && <Typography>Annotating images...</Typography>}
      {finished && <Typography>Success!</Typography>}
    </div>
  );
}
