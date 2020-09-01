import React from 'react';
import './App.css';
import axios from 'axios';
import {
  Container,
  createStyles,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const initialAthelete = {sex: '1', goal: '3', weight: '70', height: '170'};
const initialRoutine = {
  'abs': 194,
  'backrep': 11,
  'backweight': 35,
  'biceprep': 12,
  'bicepweight': 11,
  'bicycle': 500,
  'chestrep': 12,
  'chestweight': 7,
  'pushups': 12,
  'run': 500,
  'shoulderrep': 12,
  'shoulderweight': 10,
  'squats': 24,
  'superman': 144,
  'triceprep': 11,
  'tricepweight': 30,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '10ch',
    },
  }),
);

function App() {
  const classes = useStyles();

  const [athlete, setAthlete] = React.useState(initialAthelete);
  const [routine, setRoutine] = React.useState(initialRoutine);

  const handleSexChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAthlete({...athlete, sex: event.target.value as string});
    requestRoutine();
  };
  const handleGoalChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAthlete({...athlete, goal: event.target.value as string});
    requestRoutine();
  };
  const handleWeightChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAthlete({...athlete, weight: event.target.value as string});
    requestRoutine();
  };
  const handleHeightChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAthlete({...athlete, height: event.target.value as string});
    requestRoutine();
  };

  const requestRoutine = async () => {
    try {
      const routineResponse = await axios.get('/routine', {params: athlete});
      const routine = routineResponse.data;
      setRoutine(routine);

      return routine;
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  return (
    <div className="App">
      <h1>GYM Trainer</h1>
      <Container>
        <form>
          <FormControl className={classes.formControl}>
            <InputLabel id="sex-label">Sex</InputLabel>
            <Select labelId="sex-label"
                    id="sex-select"
                    value={athlete.sex}
                    onChange={handleSexChange}
            >
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={0}>Female</MenuItem>
            </Select>
            <FormHelperText>Select athlete sex</FormHelperText>
          </FormControl>
          <TextField label="Weight" id="weight-field" value={athlete.weight} className={classes.textField}
                     helperText="Athlete weight" margin="dense" required type="number" onChange={handleWeightChange}/>
          <TextField label="Height" id="height-field" value={athlete.height} className={classes.textField}
                     helperText="Athlete height" margin="dense" required type="number" onChange={handleHeightChange}/>
          <FormControl className={classes.formControl}>
            <InputLabel id="goal-label">Goal</InputLabel>
            <Select labelId="goal-label"
                    id="goal-select"
                    value={athlete.goal}
                    onChange={handleGoalChange}
            >
              <MenuItem value={1}>Drop weight</MenuItem>
              <MenuItem value={2}>Gain strenght</MenuItem>
              <MenuItem value={3}>Get fitter</MenuItem>
            </Select>
            <FormHelperText>Select athlete goal</FormHelperText>
          </FormControl>
        </form>
        <Container>
          <p>Personalize your data to request a customized gym routine!!!</p>
        </Container>
        <Container>
          <h2>Routine:</h2>
          <p>Run: {routine.run} meters</p>
          <p>Bicycle: {routine.bicycle} meters</p>
          <p>Abs: {routine.abs} reps</p>
          <p>Spinal flexes: {routine.superman} reps</p>
          <p>Pushups: {routine.pushups} reps</p>
          <p>Chest: 4 x {routine.chestrep} with {routine.chestweight}kg each side</p>
          <p>Back: 4 x {routine.backrep} with {routine.backweight}kg</p>
          <p>Shoulder: 4 x {routine.shoulderrep} with {routine.shoulderweight}kg each side</p>
          <p>Biceps: 4 x {routine.biceprep} with {routine.bicepweight}kg each arm</p>
          <p>Triceps: 4 x {routine.triceprep} with {routine.tricepweight}kg</p>
          <p>Squats: 6 x 10 with {routine.squats}kg</p>
        </Container>
      </Container>
    </div>
  );
}

export default App;
