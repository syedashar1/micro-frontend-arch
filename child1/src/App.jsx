import React from "react";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";
import Child1Content from 'child1/Child1Content'
import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
    <Provider store={store}><Child1Content /></Provider>
, document.getElementById("app"));
