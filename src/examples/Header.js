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
  const data = useStaticQuery(getData)
  console.log(data)
  return (
    <div>
      <h1>title : {data.site.siteMetadata.title}</h1>
      <h2>name : {data.site.siteMetadata.person.name}</h2>
    </div>
  )
}

export default Header
