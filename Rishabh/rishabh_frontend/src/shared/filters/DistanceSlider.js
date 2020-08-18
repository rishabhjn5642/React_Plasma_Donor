import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
const marks = [
  {
    value: 1000,
    label: "1000",
  },
  {
    value: 2000,
    label: "2000",
  },
  {
    value: 4000,
    label: "4000",
  },
  {
    value: 10000,
    label: "10000 kms",
  },
];

class DistanceSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 20,
    };
  }

  render() {
    return (
      <div style={{ marginRight: "150px" }}>
        <Typography id="discrete-slider-custom" gutterBottom>
          DISTANCE (kms)
        </Typography>

        <Slider
          defaultValue={1200}
          aria-labelledby="discrete-slider-custom"
          step={1000}
          valueLabelDisplay="auto"
          marks={marks}
          min={1000}
          max={10000}
          onChange={(e, v) => {
            this.props.checkvalue(v);
          }}
        />
      </div>
    );
  }
}

export default DistanceSlider;
