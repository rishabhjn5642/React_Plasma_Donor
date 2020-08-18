import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Redirect } from "react-router-dom";

export default class Recovered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,

      bidPrice: null,

      bloodGroup: null,
      cityName: null,
      longitude: props.longitude,
      latitude: props.latitude,
      phonenumber: null,

      loggedIn: false,
    };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        this.setState({
          err: error.message,
        });
      }
    );
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    const url = "http://localhost:8080/covid/add";
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,

        bidPrice: this.state.bidPrice,

        bloodGroup: this.state.bidPrice,
        cityName: this.state.cityName,
        longitude: this.state.longitude,
        latitude: this.state.latitude,
        phonenumber: this.state.phonenumber,
      }),
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);

        if (this.state.password === "" || this.state.phonenumber === "") {
          alert("fill the blanks");
        } else if (response) {
          console.log(this.state.password);
          this.setState({
            loggedIn: true,
          });
        }
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser")
      );
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/otp" />;
    }

    const form = {
      width: "100%",
      marginTop: "24px",
    };
    const {
      name,
      email,
      password,
      bidPrice,
      bloodGroup,
      cityName,
      phonenumber,
    } = this.state;

    return (
      <form style={form} noValidate onSubmit={this.submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={6}>
            <TextField
              autoComplete="name"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
              value={name}
              onChange={this.changeHandler}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="bidPrice"
              label="Rs Bid price"
              name="bidPrice"
              autoComplete="bidPrice"
              value={bidPrice}
              onChange={this.changeHandler}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={this.changeHandler}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={this.changeHandler}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cityName"
                label="cityName"
                type="cityName"
                id="cityName"
                autoComplete="cityName"
                value={cityName}
                onChange={this.changeHandler}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="bloodGroup"
                label="bloodGroup"
                type="bloodGroup"
                id="bloodGroup"
                autoComplete="bloodGroup"
                value={bloodGroup}
                onChange={this.changeHandler}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="phonenumber"
              label="Phonenumber"
              type="phonenumber"
              id="phonenumber"
              autoComplete="phonenumber"
              value={phonenumber}
              onChange={this.changeHandler}
            />
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="white"
            //   disabled={!validateForm()}
            // style={submit}
          >
            Went to the OTP
          </Button>
        </Grid>
      </form>
    );
  }
}
