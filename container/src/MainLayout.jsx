import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import HomeContent from "container/HomeContent";
import Child1Content from "child1/Child1Content";
import Child2Content from "child2/Child2Content";
import Feature2_M1 from "child1/Feature2_M1";
import SafeComponent from './SafeComponent';
import Test3 from './Test3';
// import TrySome from "child3";
import axios from 'axios';


export default function MainLayout() {

  const dispatch = useDispatch()

  const modules = useSelector((state) => state.userLogin.modules);
  const modulePerms = useSelector((state) => state.userLogin.modulePerms);

  const login = () => {
    dispatch({ type: 'USER_SIGNIN_REQUEST'});
    //wait
    dispatch({ type: 'USER_SIGNIN_SUCCESS'});
  }

  const logout = () => {
    dispatch({ type: 'USER_SIGNOUT'});
  }

  const changePerm = () => {

    if(!modules) return;
    dispatch({ type: 'USER_CHANGE_PERMISSIONS'});
  }


  useEffect(() => {
    console.log('modules',modules , modulePerms);
  }, [modules , modulePerms])
  


  return (
    <Router>

<div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">Home</Link>
            <div className="mx-5">|</div>
            <button className="btn" onClick={login} >Log In</button>
            <div className="mx-5">|</div>
            <button className="btn" onClick={logout} >Log Out</button>
        </div>
        <div className="flex-end relative">
            <Link to='/' onClick={changePerm}  >Change Controls</Link>
        </div>
      </div>
    </div>

<div className="grid grid-cols-4 gap-4">
  <div className="bg-blue-300" style={{height:'75vh'}} >
    {(!modules || modules.includes('m1')) && <Link to='/module1'><p className="text-3xl font-bold text-center">Module 1</p></Link>}
    {(!modules || modules.includes('m2')) && <Link to='/module2'><p className="text-3xl font-bold text-center">Module 2</p></Link>}
    {(!modules || modules.includes('m3')) && <Link to='/module3'><p className="text-3xl font-bold text-center">Module 3</p></Link>}
  </div>
  <div className="col-span-3">
  <div className="text-3xl mx-auto max-w-6xl">
     <div className="my-10">
          {modules && modules[0] ? <Switch>
            <Route exact path="/" component={HomeContent} />
            {<Route exact path="/module1/feature-1" component={Feature2_M1} />}
            <Route exact path="/module1/feature-2" component={Feature2_M1} />
            <Route exact path="/module1/feature-3" component={Feature2_M1} />
            <Route exact path="/module1/feature-4" component={Feature2_M1} />
            <Route exact path="/module1" component={()=><Child1Content path='/module1' modules={modules} modulePerms={modulePerms} />} />
            <Route exact path="/module2" component={()=><Child2Content path='/module2' modules={modules} modulePerms={modulePerms} />} />

          </Switch>
        :
        <p><h1>Please Log In First</h1></p>  
        }
        </div>
       </div>
  </div>
</div>



    <div className="p-5 bg-blue-500 text-white text-3xl font-bold text-center">
        Footer
    </div>
    </Router>
  );
}
