import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

export default function SupplementaryPage({ data }) {
  const suppPage = data.markdownRemark
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: suppPage.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`