import React from "react";
// import "./ProfileDetails.css";
import faker from "faker";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";

const ProfilePage = () => {
  return (
    <div
      class="d-flex align-items-center justify-content-center"
      style={{ marginTop: "50px" }}
    >
      <div class="container">
        <div style={{ textAlign: "center" }}>
          <h1>Change Profile</h1>
        </div>
        <div class="row">
          <div class="column">
            <div>
              <img
                src={faker.image.avatar()}
                alt="fake"
                style={{ marginBottom: "16px", marginRight: "20px" }}
              />
              <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
              ></Button>
            </div>
            <form action="/action_page.php">
              <label for="fname" style={{ fontSize: "16px" }}>
                First Name (MenuItem al)
              </label>
              <input
                style={{ fontSize: "16px" }}
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label for="lname" style={{ fontSize: "16px" }}>
                Password
              </label>
              <input
                style={{ fontSize: "16px" }}
                type="text"
                id="lname"
                name="lastname"
                placeholder="New password"
              />
              <label for="lname" style={{ fontSize: "16px" }}>
                Confirm Password
              </label>
              <input
                style={{ fontSize: "16px" }}
                type="text"
                id="lname"
                name="lastname"
                placeholder="Confirm Password."
              />

              <input
                type="submit"
                value="Submit"
                style={{ backgroundColor: "#3F51B5" }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
