import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import React from "react";
import Home from "../screen/homeScreen/component/HomePage";
import SignInSide from "../screen/adminPage/component/Loginadmin";
import Signup from "../screen/registeration/component/Signup";
import Login from "../screen/authentication/container/Login";
import Cardgrid from "../shared/cardDetails/component/CardsGrid";
import Location from "../screen/adminPage/container/Logic";
import Contact from "../screen/homeScreen/component/Contact";
import Navbar from "../screen/homeScreen/component/Navbar";
import Profile from "../screen/myProfile/ProfilePage";
import Cardpage from "../shared/cardDetails/containor/CardPage";
import ThankYouPage from "../screen/registeration/component/ThankyouPage";
import Otp from "../screen/registeration/containor/OtpforRecovered";

const Routers = () => {
  return (
    <Router>
      <div>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <div>
                {/* <Homecontent /> */}
                <Home />
              </div>
            );
          }}
        />
        <Route
          path="/contact"
          exact
          render={() => {
            return (
              <div>
                <Navbar />
                <Contact/>
               
              </div>
            );
          }}
        />
        <Route
          path="/login"
          exact
          render={() => {
            return (
              <div>
                <Navbar />
                <Login />
              </div>
            );
          }}
        />
        <Route
          path="/signup"
          exact
          render={() => {
            return (
              <div>
                <Location />
                <Signup />
              </div>
            );
          }}
        />
        <Route
          path="/loginpage"
          exact
          render={() => {
            return (
              <div>
                <Location />
                <SignInSide />
                <Cardpage />
                <Cardgrid />
              </div>
            );
          }}
        />
        <Route
          path="/profile"
          exact
          render={() => {
            return (
              <div>
                <Navbar value={false} />
                <Profile />
              </div>
            );
          }}
        />
        <Route
          path="/Thankyou"
          exact
          render={() => {
            return <ThankYouPage />;
          }}
        />
        <Route
          path="/otp"
          exact
          render={() => {
            return <Otp />;
          }}
        />
      </div>
    </Router>
  );
};

export default Routers;
