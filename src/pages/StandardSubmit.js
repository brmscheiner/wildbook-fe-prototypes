import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import UploadImages from "../components/UploadImages";
import ProcessingImages from "../components/ProcessingImages";
import GroupImages from "../components/GroupImages";
import AddMetadata from "../components/AddMetadata";
import BackIcon from "@material-ui/icons/ChevronLeft";

export default function StandardSubmit() {
  const [step, setStep] = useState(0);

  const activeStep = Math.max(0, step - 1);

  return (
    <div
      style={{
        margin: "80px auto",
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
      <div style={{ width: "100%", textAlign: "left", marginLeft: 180 }}>
        <Button
          onClick={() => {
            if (step === 2) {
              setStep(0)
            } else {
              setStep(Math.max(step - 1, 0));
            }
          }}
          startIcon={<BackIcon />}
        >
          Back
        </Button>
      </div>
      {step === 0 && <UploadImages setStep={setStep} />}
      {step === 1 && <ProcessingImages step={step} setStep={setStep} />}
      {step === 2 && <GroupImages setStep={setStep} />}
      {step === 3 && <AddMetadata setStep={setStep} />}
    </div>
  );
}
