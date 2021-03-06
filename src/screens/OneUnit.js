import React, { useEffect, useContext } from "react";
import UnitContext from "../context/units/unitContext";
import { useParams } from "react-router-dom";
import LoaderComponent from '../components/Loader';

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = ["Basic Unit Info", "Description", "Bonus"];

const SingleUnitPage = () => {
  const { unitId } = useParams();
  const unitContext = useContext(UnitContext);
  const { unit, getUnit, loading } = unitContext;

  useEffect(() => {
    getUnit(unitId);
  }, []);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth="lg">
      {loading && (
        <LoaderComponent />
      )}
      <Box sx={{ width: "100%", margin: "1rem auto" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && (
              <Box sx={{ py: 2 }}>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  {unit.name}
                </Typography>
                {/* {Object.entries(unit.cost).map(([key, value]) => {
                  return (
                    <Typography
                      sx={{ my: 1.5 }}
                      variant="body2"
                      color="#618685"
                    >
                      {key} - {value}
                    </Typography>
                  );
                })} */}
              </Box>
            )}
            {activeStep === 1 && (
              <Box sx={{ py: 2 }}>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Description - {unit.description}
                </Typography>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Age - {unit.age}
                </Typography>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Expansion - {unit.expansion}
                </Typography>
              </Box>
            )}
            {activeStep === 2 && (
              <Box sx={{ py: 2 }}>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Build Time - {unit.build_time}
                </Typography>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Reload Time - {unit.reload_time}
                </Typography>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Movement Rate - {unit.movement_rate}
                </Typography>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Line of Sight - {unit.line_of_sight}
                </Typography>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Hit Points - {unit.hit_points}
                </Typography>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Attack - {unit.attack}
                </Typography>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Armor - {unit.armor}
                </Typography>
              </Box>
            )}
            <Typography sx={{ mt: 2, mb: 1 }}>Page {activeStep + 1}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
};

export default SingleUnitPage;
