import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1000,
    label: "1000",
  },
  {
    value: 4000,
    label: "4000",
  },
  {
    value: 10000,
    label: "10000",
  },
];

class PriceSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 20,
    };
  }

  render() {
    return (
      <div style={{ marginLeft: "150px" }}>
        <Typography  id="discrete-slider-custom" gutterBottom>
          PRICE (Rs)
        </Typography>

        <Slider
          defaultValue={2000}
          aria-labelledby="discrete-slider-custom"
          step={1000}
          valueLabelDisplay="auto"
          marks={marks}
          min={0}
          max={10000}
          onChange={(e, v) => {
            this.props.checkvalue(v);
          }}
        />
      </div>
    );
  }
}

export default PriceSlider;
