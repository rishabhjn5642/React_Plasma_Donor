import React from "react";
import Navbar from "./Navbar";
import Cara from "./Carsoel";
import Feat from "../../../shared/footer/Feature.js";
import HomeBox from "./HomeBox";

const Root = () => {
  return (
    <div>
      <Navbar value={true} />
      <Cara />
      <Feat />
      <HomeBox />
    </div>
  );
};

export default Root;
