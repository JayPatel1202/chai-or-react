import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

// function SampleFun() {
//   return <h1>Hello I am React.</h1>;
// }

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

// const reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "Click me to visit google"
// );

// const anotherElement = <a href="https://google.com">Visit Google</a>;

createRoot(document.getElementById("root")).render(<App />);
