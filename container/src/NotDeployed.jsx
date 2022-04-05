import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NotDeployed() {

  const history =  useHistory()
   return (
    <div>
        <p><b>{history && history.location.pathname.split('/')[1]}</b></p>
        <p> is Not Deployed. Please Contact Support.</p>
    </div>
  )
}
