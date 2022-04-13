import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Feature4_M2() {

  const modulePerms = useSelector((state) => state.userLogin.modulePerms);

  if(!modulePerms || modulePerms.m2_feature4 ) { 
    return (
      <div><Link to={modulePerms ? '/module2' : '/'}>Module 2</Link> / Feature 4</div>
    )
  }
  else {
    return <div>Not Permitted</div>
  }
}