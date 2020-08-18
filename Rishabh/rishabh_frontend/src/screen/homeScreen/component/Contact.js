import React, {Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";


import InputAdornment from '@material-ui/core/InputAdornment';

import EmailIcon from '@material-ui/icons/Email';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import AccountCircle from '@material-ui/icons/AccountCircle';
// import { Redirect } from "react-router-dom";
// import { useScrollTrigger } from "@material-ui/core";
// import './Signup.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:null,
      email:null,
      feedback:null,
      loggedIn:false
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://localhost:8080/feedback";
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
        
            name:this.state.name,
            email: this.state.email,
            feedback: this.state.feedback
          
      }),
    })
      .then((response) => response.text())
      .then((response) =>{
        console.log(response)

        if (this.state.name==="" || this.state.email==="" || this.state.feedback==="")
        {

            alert("fill the blanks")
        }


        else if(response==="send")
        {
          console.log(this.state.name)
          this.setState({
            loggedIn:true
          })
        }
        
    
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser")
      );
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/Thankyou" />;
    }
    const form = {
      width: "100%",
      marginTop: "24px",
    };
    const submit = {
      margin: "24px 0px 16px",
    };
    const x={
        margin:"12px"
    }
    const { name, email, feedback } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
        <div style={{ textAlign: "center",fontSize:"40px",paddingTop:"50px",paddingLeft:"60px",color:"red"}}>
           Plasma Contact Us
        </div>

        <div style={{
  backgroundColor: "lightgrey",
  width: "500px",
  border: "1px solid green",
  padding: "50px",
  margin: "20px",
   borderRadius: "120px 20px",
}}>
          <form style={form} onSubmit={this.submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField
        className={x}
        id="input-with-icon-textfield"
        label="Name"
        fullWidth="true"
        value={name}
        onChange={this.changeHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
              </Grid>
              <Grid item xs={12}>
              <TextField
        className={x}
        id="input-with-icon-textfield"
        label="Email"
        fullWidth="true"
        onChange={this.changeHandler}
        value={email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon/>
            </InputAdornment>
          ),
        }}
      />
              </Grid>
              <Grid item xs={12}>
              <TextField
          id="standard-textarea"
          label="Contact Us"
          placeholder="Min 50 words"
          onChange={this.changeHandler}
          multiline
          fullWidth="true"
          value={feedback}
          rows={8}
          
          
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
              Submit
            </Button>
            
          </form>
          </div>
        </div>
        <Box mt={5}></Box>
      </Container>
    );
  }
}
