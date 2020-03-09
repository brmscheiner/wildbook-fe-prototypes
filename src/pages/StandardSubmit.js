import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import Filter9PlusIcon from "@material-ui/icons/Filter9Plus";
import UploadImages from "../components/UploadImages";
import ProcessingImages from "../components/ProcessingImages";

export default function StandardSubmit() {
  const [step, setStep] = useState(0);

  const activeStep = Math.max(0, step - 1);

  return (
    <div
      style={{
        marginTop: 80,
        width: "100%",
        maxWidth: 800,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Stepper
        style={{ width: "100%" }}
        alternativeLabel
        activeStep={activeStep}
      >
        <Step>
          <StepLabel>Upload images</StepLabel>
        </Step>
        <Step>
          <StepLabel>Group images</StepLabel>
        </Step>
        <Step>
          <StepLabel>Add metadata</StepLabel>
        </Step>
      </Stepper>
      {step === 0 && <UploadImages setStep={setStep} />}
      {step === 1 && <ProcessingImages setStep={setStep} />}
    </div>
  );
}
