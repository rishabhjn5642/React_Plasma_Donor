import React from "react";
// import CovidRecovered from "/Users/teaxpresspvtltd/Downloads/Rishabh/rishabh_frontend/src/screen/registeration/component/ButtonForRecovered.js"
class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      err: null,
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        this.setState({
          err: error.message,
        });
      }
    );
  }
  render() {
    return <div></div>;
  }
}
export default Location;
