import React from "react";
import ReactDOM from "react-dom";
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./UI/routes/routes";


const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <Router/>
);