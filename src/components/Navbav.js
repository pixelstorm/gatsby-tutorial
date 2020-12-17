import React from "react"
import { Link } from "gatsby"

const Navbav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/products">products</Link>
          <Link to="/examples">examples</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbav
