import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";

export default function IndexPage({path,modules,modulePerms}) {


    const [pre, setPre] = useState('/')
  
    useEffect(() => {
      setPre(path && path.length > 0 ? path : '' )
    }, [ ])

  return (
    <div>
    <b>Module 1</b>
    {(!modulePerms || modulePerms.includes('m1-feature1') ) && <p><Link to={`${pre}/f1`} > Link F1</Link></p>}
    <p><Link to={`${pre}/f2`} > Link F2</Link></p>
    <p><Link to={`${pre}/f3`} > Link F3</Link></p>
    <p><Link to={`${pre}/f4`} > Link F4</Link></p>
    </div>
  )
}
