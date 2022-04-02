import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";

export default function IndexPage({path,modules,modulePerms}) {


    const [pre, setPre] = useState('/')
  
    useEffect(() => {
      setPre(path && path.length > 0 ? path : '' )
    }, [ ])

  return (
    <div>
    <b>Module 2</b>
    {(!modulePerms || modulePerms.includes('m2-feature1') ) && <p><Link to={`${pre}/f1`} >Link Feature 1</Link></p>}
    <p><Link to={`${pre}/f2`} > Link Feature 2</Link></p>
    <p><Link to={`${pre}/f3`} > Link Feature 3</Link></p>
    <p><Link to={`${pre}/f4`} > Link Feature 4</Link></p>
    </div>
  )
}
