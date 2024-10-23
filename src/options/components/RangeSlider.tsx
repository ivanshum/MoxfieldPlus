import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;
type SliderProps = {
  initialVal?: number;
  minVal?: number;
  maxVal?: number;
  stepVal?: number;
};
const RangeSlider = ({
  initialVal = 10,
  minVal = 1,
  maxVal = 100,
  stepVal = 1,
}: SliderProps) => {
  const [value, setValue] = React.useState(initialVal);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? minVal : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < minVal) {
      setValue(minVal);
    } else if (value > maxVal) {
      setValue(maxVal);
    }
  };
  const rangeVals = { step: stepVal, min: minVal, max: maxVal };
  return (
    <Grid container spacing={4}>
      <Grid size="grow" maxWidth={250}>
        <Slider
          value={typeof value === 'number' ? value : minVal}
          onChange={handleSliderChange}
          {...rangeVals}
          valueLabelDisplay={'auto'}
        />
      </Grid>
      <Grid size="auto">
        <Input
          value={value}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            ...rangeVals,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </Grid>
    </Grid>
  );
};
export default RangeSlider;
