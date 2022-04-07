import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Feature1_M1() {

  const modulePerms = useSelector((state) => state.userLogin.modulePerms);

  return (
    <div><Link to={modulePerms ? '/module1' : '/'}>Module 1</Link> / Feature 1</div>
  )
}