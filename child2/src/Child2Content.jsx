import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";
import Feature1_M2 from "./Feature1_M2";
import Feature2_M2 from "./Feature2_M2";
import Feature3_M2 from "./Feature3_M2";
import Feature4_M2 from "./Feature4_M2";
import IndexPage from "./IndexPage";
import { Observable } from 'windowed-observable';
import { useDispatch } from 'react-redux'

const observable = new Observable('child2');

export default function Child2Content({ }) {
 
  const dispatch = useDispatch()
  
  const handleNewMessage = (newMessage) => { 
    console.log(newMessage);
    dispatch({ type: 'CHANGE_PERMS', payload: newMessage.modulePerms});
  };
  useEffect(() => {  
    observable.subscribe(handleNewMessage);
    return () => {
      observable.unsubscribe(handleNewMessage)
    }
  }, [handleNewMessage]);

  return (
    <div style={{height:'100%',background:'aquamarine',padding:'50px'}} className='text-3xl'>
<Router>
  
     <Switch>
            <Route exact path={["/module2", "/"]} component={()=><IndexPage/>} />
            <Route exact path={["/module2/f1", "/f1"]} component={Feature1_M2} />
            <Route exact path={["/module2/f2", "/f2"]} component={Feature2_M2} />
            <Route exact path={["/module2/f3", "/f3"]} component={Feature3_M2} />
            <Route exact path={["/module2/f4", "/f4"]} component={Feature4_M2} />
    </Switch>

    </Router>
    </div>
  );
}
