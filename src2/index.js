import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
//import App from "./App";
import HW from "./HW";

// Init VK  Mini App
bridge.send("VKWebAppInit");

//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<HW />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(eruda => {}); //runtime download
}