import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import "remixicon/fonts/remixicon.css";
import "./index.scss";
import NotDeployed from './NotDeployed';
import { Observable } from 'windowed-observable';
const observable1 = new Observable('child1');
const observable2 = new Observable('child2');
const observable3 = new Observable('child3');
let Child1Content ;
let Child2Content ;
let Child3Content ;
try { Child1Content = require('child1/Child1Content').default } catch (e) {Child1Content = NotDeployed}
try { Child2Content = require('child2/Child2Content').default } catch (e) {Child2Content = NotDeployed}
try { Child3Content = require('child3/Child3Content').default } catch (e) {Child3Content = NotDeployed}



export default function MainLayout() {

  const dispatch = useDispatch()

  const modules = useSelector((state) => state.userLogin.modules);
  const modulePerms = useSelector((state) => state.userLogin.modulePerms);

  const [path, setPath] = useState(null)

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
    setPath('/')
  }

  const handleRouteChange = (r) => {
    
    if(r=='/module1') observable1.publish({modulePerms : {m1_feature1 : modulePerms.m1_feature1 , m1_feature2 : modulePerms.m1_feature2 , m1_feature3 : modulePerms.m1_feature3 , m1_feature4 : modulePerms.m1_feature4} });
    if(r=='/module2') observable2.publish({modulePerms : {m2_feature1 : modulePerms.m2_feature1 , m2_feature2 : modulePerms.m2_feature2 , m2_feature3 : modulePerms.m2_feature3 , m2_feature4 : modulePerms.m2_feature4} });
    if(r=='/module3') observable3.publish({modulePerms : {m3_feature1 : modulePerms.m3_feature1 , m3_feature2 : modulePerms.m3_feature2 , m3_feature3 : modulePerms.m3_feature3 , m3_feature4 : modulePerms.m3_feature4} });

    setPath(r)
  }


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
    {(modules && modules.m1) && <Link to='/module1' onClick={()=>handleRouteChange('/module1')} ><p className="text-3xl font-bold text-center">Module 1</p></Link>}
    {(modules && modules.m2) && <Link to='/module2' onClick={()=>handleRouteChange('/module2')} ><p className="text-3xl font-bold text-center">Module 2</p></Link>}
    {(modules && modules.m3) && <Link to='/module3' onClick={()=>handleRouteChange('/module3')} ><p className="text-3xl font-bold text-center">Module 3</p></Link>}
  </div>
  <div className="col-span-3">
  <div className="text-3xl mx-auto max-w-6xl">
     <div className="my-10">
          {modules && modulePerms ? <Switch>
            <Route exact path="/" component={()=><div>Welcome</div>} />
            <Route exact path="/module1" component={()=><Child1Content/>} />
            <Route exact path="/module2" component={()=><Child2Content/>} />
            <Route exact path="/module3" component={()=><Child3Content/>} />
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
