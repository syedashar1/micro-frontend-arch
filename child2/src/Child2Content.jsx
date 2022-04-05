import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";
import Feature1_M2 from "./Feature1_M2";
import Feature2_M2 from "./Feature2_M2";
import Feature3_M2 from "./Feature3_M2";
import Feature4_M2 from "./Feature4_M2";
import IndexPage from "./IndexPage";
import { Observable } from 'windowed-observable';
const observable = new Observable('messages');

export default function Child2Content({ }) {

  const [modules, setmodules] = useState(null)
  const [path, setPath] = useState(null)
  const [modulePerms, setModulePerms] = useState(null)
  
  const handleNewMessage = (newMessage) => {
    console.log('new message');
    console.log(newMessage);
    setModulePerms(newMessage.modulePerms)
    setmodules(newMessage.modules)
    setPath(newMessage.path)
  };
  useEffect(() => {  
    observable.subscribe(handleNewMessage);
    return () => {
      observable.unsubscribe(handleNewMessage)
    }
  }, [handleNewMessage]);
  console.log('child 2',modules,modulePerms);

  return (
    <div style={{height:'100%',background:'aquamarine',padding:'50px'}} className='text-3xl'>
<Router>
  
     <Switch>
            <Route exact path={["/module2", "/"]} component={()=><IndexPage path={path} modules={modules} modulePerms={modulePerms}/>} />
            <Route exact path={["/module2/f1", "/f1"]} component={Feature1_M2} />
            <Route exact path={["/module2/f2", "/f2"]} component={Feature2_M2} />
            <Route exact path={["/module2/f3", "/f3"]} component={Feature3_M2} />
            <Route exact path={["/module2/f4", "/f4"]} component={Feature4_M2} />
    </Switch>

    </Router>
    </div>
  );
}
