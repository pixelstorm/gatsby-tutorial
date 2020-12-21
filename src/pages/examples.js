import React from "react"
import Header from "../examples/Header"
import Layout from "../components/layout"
import { graphql } from "gatsby"
const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <h1>hello from examples</h1>
      <Header />
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
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
export default examples
