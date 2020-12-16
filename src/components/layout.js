import React from "react"
import Navbav from "./Navbav"

const layout = ({ children }) => {
  return (
    <>
      <Navbav />
      <main>{children}</main>
    </>
  )
}

export default layout
