import React from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is the products</h1>
        <p> some text for the para </p>
      </div>
    </Layout>
  )
}

export default products
