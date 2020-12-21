import React from "react"
import Navbav from "./Navbav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbav />
      <main>{children}</main>
    </>
  )
}

export default Layout
