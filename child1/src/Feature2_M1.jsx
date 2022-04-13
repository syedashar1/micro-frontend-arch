import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Feature2_M1() {

  const modulePerms = useSelector((state) => state.userLogin.modulePerms);

  if(!modulePerms || modulePerms.m1_feature2 ) { 
    return (
      <div><Link to={modulePerms ? '/module1' : '/'}>Module 1</Link> / Feature 2</div>
    )
  }
  else {
    return <div>Not Permitted</div>
  }
}