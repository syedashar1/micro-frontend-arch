import React from "react";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";
import Child1Content from 'child1/Child1Content'
import { Provider } from 'react-redux'
import store from './store';
import { BrowserRouter} from "react-router-dom";


ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <Child1Content />
</BrowserRouter>
</Provider>
, document.getElementById("app"));
