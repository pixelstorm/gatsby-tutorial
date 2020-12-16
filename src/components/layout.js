import React from "react"
import Navbav from "./Navbav"
import "./layout.css"

const layout = ({ children }) => {
  return (
    <>
      <Navbav />
      <main>{children}</main>
    </>
  )
}

export default layout
