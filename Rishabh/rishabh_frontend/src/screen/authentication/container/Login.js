import React, { useState, Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.state = {
      phonenumber:null,
      password:null,
      loggedIn
      
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    const { phonenumber, password } = this.state;
    console.log(this.state);
    const url = "http://localhost:8080/covid/login";
    const ans = "";
    const response = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(
        {
          phonenumber:this.state.phonenumber,
          password:this.state.password,
          
        }
      ),
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response)

        if(response==="verified")
        {
          this.setState({
            loggedIn:true
          })
        }
    
        else
        {
       alert("wrong Credentials")
        }
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser")
      );
    

   
  }

  render() 
  {
    if (this.state.loggedIn) {
      return <Redirect to="/loginpage" />;
    }
    // function validateForm() {
    //   return email.length > 0 && password.length > 0;
    // }
    const paper = {
      marginTop: "64px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };

    const avatar = {
      margin: "16px",
      backgroundColor: "#dc004e",
    };
    const form = {
      width: "100%",
      marginTop: "24px",
    };
    const submit = {
      margin: "24px 0px 16px",
    };
    const { phonenumber, password } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={paper}>
          <Avatar style={avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form style={form} onSubmit={this.submitHandler}>
            <Grid container spacing={2}>
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

              style={submit}
            >
              Sign In
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="Signup" variant="body2">
                  Don't have an account? Sign Up
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
