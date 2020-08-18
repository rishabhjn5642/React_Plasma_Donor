import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Down = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          style={{ backgroundColor: "blue" }}
        >
          cities
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Tohana</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Gurgaon</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Delhi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default Down;
