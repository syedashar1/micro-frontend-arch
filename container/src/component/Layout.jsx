import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({children}) {
  return (
    <div>
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">Home</Link>
            <div className="mx-5">|</div>
            <button>Log In</button>
            <button>Log Out</button>
        </div>
        <div className="flex-end relative">
            <Link>Change Controls</Link>
        </div>
      </div>
    </div>

    
    <div>
        {children}
    </div>

    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
        Footer
    </div>

    </div>
  )
}
