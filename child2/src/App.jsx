import React from "react";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";
import Child2Content from 'child2/Child2Content'
import { Provider } from 'react-redux'
import store from './store';
import { BrowserRouter} from "react-router-dom";


ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <Child2Content />
</BrowserRouter>
</Provider>
, document.getElementById("app"));
