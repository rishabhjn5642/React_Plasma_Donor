import React from "react";
import DistancSlider from "../../filters/DistanceSlider";
import PriceSlider from "../../filters/PriceSlider";
import faker from "faker";
import Card from "../component/Cards";
import BloodGroup from "../../filters/BloodGroupDropDown";
// import CitiesDropDown from "../../filters/CitiesDropdown";
import Grid from "@material-ui/core/Grid";

class CardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actual: null,
      price: null,
      data: [],
      filterdata: [],
      latitude: null,
      longitude: null,
      distance: null,
      i: 0,
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        i: 1,
      });
    });

    const url = "http://localhost:8080/covid/getAllCovidUsers";
    fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((response) => this.responsevalue(response))
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser")
      );
  }

  responsevalue = (response) => {
    console.log(response[0].bidPrice);
    let a = response.map((data) => {
      return {
        src: faker.image.avatar(),
        price: data.bidPrice,

        bloodGroup: data.bloodGroup,
        name: data.name,
        phonenumber: data.phonenumber,
      };
    });

    this.setState({
      data: a,
    });
  };

  responsevalue1 = (response) => {
    console.log(response);
    let a = response.map((filterdata) => {
      return {
        src: faker.image.avatar(),
        price: filterdata.bidPrice,
        bloodGroup: filterdata.bloodGroup,
        name: filterdata.name,
        phonenumber: filterdata.phonenumber,
      };
    });

    this.setState({
      filterdata: a,
    });
  };

  checkvalue1 = (v) => {
    console.log(v);
    this.setState({
      distance: v,
    });

    console.log(this.state.distance);

    const url1 = "http://localhost:8080/filters/distance";
    var q = {
      longitude: this.state.longitude,
      latitude: this.state.latitude,

      distance: this.state.distance,
    };

    console.log(q);

    const response = fetch(url1, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(q),
    })
      .then((response) => response.json())
      .then((response) => this.responsevalue1(response))
      .catch(() =>
        console.log(" rishabh " + url1 + " response. Blocked by browser")
      );
  };

  checkvalue2 = (v) => {
    this.setState({
      price: v,
    });
    console.log(v);
  };

  render() {
    return (
      <div>
        {console.log(this.state.filterdata.price)}
        <div
          style={{
            padding: "50px",
            borderRadius: "25px",
            backgroundColor: "#F1F1F1",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "20px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={5} lg={6}>
              <DistancSlider checkvalue={this.checkvalue1} />
            </Grid>
            <Grid item xs={5} lg={6}>
              <PriceSlider checkvalue={this.checkvalue2} />
            </Grid>
          </Grid>
        </div>
        {this.state.distance === null
          ? this.state.data.map((obj, key) => {
              return (
                <div>
                  <Card
                    imgsrc={this.state.data[key].src}
                    name={this.state.data[key].name}
                    BloodGroup={this.state.data[key].bloodGroup}
                    phonenumber={this.state.data[key].phonenumber}
                    price={this.state.data[key].price}
                  />
                </div>
              );
            })
          : this.state.price === null
          ? this.state.filterdata.map((obj, key) => {
              return (
                <Card
                  imgsrc={this.state.filterdata[key].src}
                  name={this.state.filterdata[key].name}
                  BloodGroup={this.state.filterdata[key].bloodGroup}
                  phonenumber={this.state.filterdata[key].phonenumber}
                  price={this.state.filterdata[key].price}
                />
              );
            })
          : this.state.filterdata.map((obj, key) => {
              if (this.state.price >= this.state.filterdata[key].price) {
                return (
                  <Card
                    imgsrc={this.state.data[key].src}
                    name={this.state.filterdata[key].name}
                    BloodGroup={this.state.filterdata[key].bloodGroup}
                    phonenumber={this.state.filterdata[key].phonenumber}
                    price={this.state.filterdata[key].price}
                  />
                );
              }
            })}
      </div>
    );
  }
}

export default CardPage;
