import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CovidButton from "../containor/ButtonCovid";

import Recovered from "../containor/ButtonForRecovered";

const useStyles = makeStyles((theme) => ({
  input: {
    border: "none",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: 16,
  },
  labelRoot: {
    fontSize: 16,
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [allowances, setAllowances] = useState({ i: 1 });

  return (
    <div
      style={{
        border: "1px solid",
        borderRadius: "30px",
        maxWidth: "400px",
        margin: "auto",
        marginTop: "30px",
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="white"
                  onClick={() => {
                    setAllowances({
                      i: 1,
                    });
                  }}
                >
                  Covid
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="white"
                  onClick={() => {
                    setAllowances({
                      i: 2,
                    });
                  }}
                >
                  Recovered
                </Button>
              </Grid>
            </Grid>
          </div>

          <form className={classes.form} noValidate>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              {allowances.i === 1 ? <CovidButton /> : <Recovered />} 
            </Container>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    </div>
  );
}







// import React from "react";

// import TextField from "@material-ui/core/TextField";

// import Grid from "@material-ui/core/Grid";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     get marginTop() {
//       return this._marginTop;
//     },
//     set marginTop(value) {
//       this._marginTop = value;
//     },
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     // marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     fontSize: 16,
//   },
//   labelRoot: {
//     fontSize: 12,
//   },
// }));
// const Covid = () => {
//   const classes = useStyles();
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6} lg={6}>
//         <TextField
//           autoComplete="fname"
//           name="firstName"
//           variant="outlined"
//           required
//           fullWidth
//           id="firstName"
//           label="Name"
//           InputLabelProps={{
//             classes: {
//               root: classes.labelRoot,
//             },
//           }}
//         />
//       </Grid>

//       <Grid item xs={12}>
//         <TextField
//           variant="outlined"
//           required
//           fullWidth
//           id="email"
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//           InputLabelProps={{
//             classes: {
//               root: classes.labelRoot,
//             },
//           }}
//         />
//       </Grid>

//       <Grid item xs={12} sm={6} lg={6}>
//         <TextField
//           autoComplete="fname"
//           name="PhoneNumber"
//           variant="outlined"
//           required
//           fullWidth
//           id="PhoneNumber"
//           label="PhoneNumber"
//           InputLabelProps={{
//             classes: {
//               root: classes.labelRoot,
//             },
//           }}
//         />
//       </Grid>

//       <Grid item xs={12}>
//         <TextField
//           variant="outlined"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           InputLabelProps={{
//             classes: {
//               root: classes.labelRoot,
//             },
//           }}
//         />
//       </Grid>
//     </Grid>
//   );
// };

// export default Covid;
