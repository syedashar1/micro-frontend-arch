import React from "react";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import MainLayout from "container/MainLayout";
import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <MainLayout />
    </Provider> , 
document.getElementById("app"));
