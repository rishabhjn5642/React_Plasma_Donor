import React, { Component } from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// import { Redirect } from "react-router-dom";

export default class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: "",
      message: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendOtp = (e) => {
    e.preventDefault();
    console.log(this.state.phonenumber);
    var otp1 = {
      phonenumber: this.state.phonenumber,
    };
    const url = "http://localhost:8080/api/sms/otp";
    console.log(otp1.phonenumber);
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(otp1),
    })
      .then((response) => response.text())
      .then((response) => console.log(response))
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser")
      );
  };

  verifyOtp = (e) => {
    e.preventDefault();
    console.log(this.state.phonenumber);

    const url = "http://localhost:8080/api/sms/verify";
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.text())
      .then((response) => console.log(response))
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser")
      );
  };

  render() {
    const paper = {
      marginTop: "64px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
    const form = {
      width: "100%",
      marginTop: "24px",
    };
    const submit = {
      margin: "24px 0px 16px",
    };
    const { phonenumber, message } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={paper}>
          <Typography component="h1" variant="h5">
            OTP
          </Typography>
          <form style={form} noValidate onSubmit={this.submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <TextField
                  autoComplete="phonenumber"
                  name="phonenumber"
                  variant="outlined"
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phonenumber"
                  autoFocus
                  value={phonenumber}
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Button
                  variant="contained"
                  color="#F1F1F1"
                  onClick={(e) => {
                    this.sendOtp(e);
                  }}
                >
                  Send Otp
                </Button>
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="message"
                  label="message"
                  type="message"
                  id="message"
                  autoComplete="message"
                  value={message}
                  onChange={this.changeHandler}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Button
                  variant="contained"
                  color="#F1F1F1"
                  onClick={(e) => {
                    this.verifyOtp(e);
                  }}
                >
                  Verify
                </Button>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="#F1F1F1"
              style={submit}
              href="http://localhost:3000/Thankyou"
            >
              submit
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="Signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    );
  }
}
