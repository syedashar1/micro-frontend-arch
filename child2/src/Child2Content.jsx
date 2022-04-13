import React, { useEffect } from "react";
import {  Route, Routes , Link , useParams , } from "react-router-dom";
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
  const params = useParams();
  
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

  if (params && params.feature == 'f1') return <Feature1_M2/>  
  if (params && params.feature == 'f2') return <Feature2_M2/>  
  if (params && params.feature == 'f3') return <Feature3_M2/>  
  if (params && params.feature == 'f4') return <Feature4_M2/> 
  if (params && params.feature == 'f5') return <div>Feature Not Found</div> 

  return (
    <div style={{height:'100%',background:'aquamarine',padding:'50px'}} className='text-3xl'>
  
     <Routes>
            <Route exact path="/">
                <Route exact index element={<IndexPage/>} />
                <Route exact path="f1" element={<Feature1_M2/>} />
                <Route exact path="f2" element={<Feature2_M2/>} />
                <Route exact path="f3" element={<Feature3_M2/>} />
                <Route exact path="f4" element={<Feature4_M2/>} />
                <Route exact path="*" element={ <div>Page Not Found</div> } />
            </Route>

    </Routes>

    </div>
  );
}
