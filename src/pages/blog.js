import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is the blog</h1>
      </div>
    </Layout>
  )
}

export default blog
