import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      siteMetadata: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>title : {title}</h1>
      <h2>name : {name}</h2>
    </div>
  )
}

export default Header
