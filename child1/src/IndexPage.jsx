import React, { useState, useEffect } from "react";
import { BrowserRouter as Switch , Link } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function IndexPage({}) {


    const [pre, setPre] = useState('/')
    const modulePerms = useSelector((state) => state.userLogin.modulePerms);

    useEffect(() => {
      setPre(modulePerms ? '/module1' : '' )
    }, [ ])

  return (
    <div>
    <b>Module 1</b>
    {(!modulePerms || modulePerms.m1_feature1 ) && <p><Link to={`${pre}/f1`} > Feature : 1</Link></p>}
    {(!modulePerms || modulePerms.m1_feature2 ) && <p><Link to={`${pre}/f2`} > Feature : 2</Link></p>}
    {(!modulePerms || modulePerms.m1_feature3 ) && <p><Link to={`${pre}/f3`} > Feature : 3</Link></p>}
    {(!modulePerms || modulePerms.m1_feature4 ) && <p><Link to={`${pre}/f4`} > Feature : 4</Link></p>}
    </div>
  )
}
