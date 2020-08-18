import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
// import { Redirect } from "react-router-dom";
// import { useScrollTrigger } from "@material-ui/core";
// import './Signup.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phonenumber: null,
      password: null,
      loggedIn: false,
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://localhost:8080/covid/add/covid";
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
      body: JSON.stringify(this.state),
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);

        if (this.state.password === "" || this.state.phonenumber === "") {
          alert("fill the blanks");
        } else if (response === "gotit") {
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
      return <Redirect to="/login" />;
    }
    const form = {
      width: "100%",
      marginTop: "24px",
    };
    const submit = {
      margin: "24px 0px 16px",
    };
    const { name, phonenumber, password } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <form style={form} noValidate onSubmit={this.submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  style={{ fontSize: "20px" }}
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
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phonenumber"
                  name="phonenumber"
                  autoComplete="phonenumber"
                  value={phonenumber}
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="white"
              //   disabled={!validateForm()}
              style={submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
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
