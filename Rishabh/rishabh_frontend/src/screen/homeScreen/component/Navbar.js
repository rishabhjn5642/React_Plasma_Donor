import React from "react";
import "./Nav.css";

const Navbar = (props) => {
  return (
    <div style={{ marginBottom: "-10px" }}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        {props.value === true ? (
          <li
            style={{
              float: "right",
              backgroundColor: "white",
            }}
          >
            <a href="/login">LogIn</a>
          </li>
        ) : (
          console.log("rishabh")
        )}
      </ul>
    </div>
  );
};

export default Navbar;
