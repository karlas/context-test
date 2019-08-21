import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => (
  <ul>
    <li>
      <Link to="/">Go home</Link>
    </li>
    <li>
      <Link to="/planet">Go to planet</Link>
    </li>
    <li>
      <Link to="/people">Go to people</Link>
    </li>
  </ul>
)

export default Links
