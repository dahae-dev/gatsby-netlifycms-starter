import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to blog page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
