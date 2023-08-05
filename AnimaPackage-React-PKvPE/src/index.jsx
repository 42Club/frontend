import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomeGradation } from "./screens/HomeGradation";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomeGradation />);
