import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

export default function IndexPage({}) {


    const [pre, setPre] = useState('/')
    const modulePerms = useSelector((state) => state.userLogin.modulePerms);

    useEffect(() => {
      setPre(modulePerms && modulePerms.length > 0 ? '/module2' : '' )
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
