import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from './TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Provide your email', 'Receive your coupon!'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Please enter your email address:`;
    case 1:
      return `We have sent a coupon code to your email address.`;
    default:
      return `Unknown step`;
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  return (
    <div className={classes.root}>
      <h1>Menu Item</h1>
      <h1>Menu Item</h1>
      <h1>Menu Item</h1>
      <h1>Menu Item</h1>
    </div>
  );
}