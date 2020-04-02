import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import HW from "./HW";
import Glan from './Glan'
import './style/style.css';

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<HW />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(eruda => {}); //runtime download
}
