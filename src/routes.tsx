import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import Message from "./components/message";

const Routes = (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/message" exact component={Message} />
  </div>
);
export default Routes;
