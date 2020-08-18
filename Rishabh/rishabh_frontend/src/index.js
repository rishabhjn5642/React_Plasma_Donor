import ReactDom from "react-dom";
import Routers from "./routes/Routes";
import React from "react";

const Index = () => {
  return (
    <div>
      <Routers />
    </div>
  );
};

ReactDom.render(<Index />, document.querySelector("#root"));
