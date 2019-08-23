import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './PriceRangeSlider.css';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 8
  }
});

export default function PriceRangeSlider(props) {
  const classes = useStyles();

  console.log(props.value);
  // const [value, setValue] = React.useState([20, 37]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const valuetext = (value) => {
    console.log(value);
    return `${value}`;
  }

  return (
    <div className={classes.root}>
      {/* <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography> */}
      <Slider
        value={props.value}
        onChange={props.handlecchange}
        // onInput={props.handlechange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={props.min}
        max={props.max}
      />
    </div>
  );
}
