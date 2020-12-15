import React from "react"
import { Link } from "gatsby"
import Navbav from "../components/Navbav"

export default function Home() {
  return (
    <div>
      <Navbav />
      <Link to="blog">Blog Page</Link>
      Hello world!
    </div>
  )
}
