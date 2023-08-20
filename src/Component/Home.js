import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h2>Home</h2>
        <Link to="/registery">Click here to go Registry</Link>
    </div>
  )
}

export default Home
