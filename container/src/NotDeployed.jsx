import React from 'react'

export default function NotDeployed({path}) {
  return (
    <div>
        <p><b>{path && path.split('/')[1]}</b></p>
        <p> is Not Deployed. Please Contact Support.</p>
    </div>
  )
}
