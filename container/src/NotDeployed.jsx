import React from 'react'
import { useLocation } from "react-router-dom";

export default function NotDeployed() {
  
  const location = useLocation()
  console.log(location);

   return (
    <div>
        <p><b>{location && location.pathname.split('/')[1]}</b></p>
        <p> is Not Deployed. Please Contact Support.</p>
    </div>
  )
}
