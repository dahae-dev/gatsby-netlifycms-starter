import React from "react"
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

export const IndexPageTemplate = ({ heading, intro }) => (
  <Layout>
    <SEO title="Home" />
    <h1>{heading}</h1>
    <p>{intro.heading}</p>
    <p>{intro.description}</p>
    <Link to="/blog/">>> Go to blog page</Link>
  </Layout>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      heading={frontmatter.heading}
      intro={frontmatter.intro}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        intro {
          heading
          description
        }
      }
    }
  }
`
