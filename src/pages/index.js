import React from "react"
import { graphql } from 'gatsby'
import GuideLink from "../components/guide-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allGuidesYaml: { nodes },
  },
  }) => {
  const Guides = nodes.map(node => <GuideLink key={node.id} guide={node} />)

  return <Layout>
    <SEO title="Home" />
    <p className="nmdp-main-blurb">
      This page summarizes HL7 FHIR activities, tools, and endpoints available at NMDP & CIBMTR. These include 
      locally developed FHIR Implementations Guides (IGs), terminologies (code systems, value sets, identifiers), 
      and applications.
    </p>
    <ul className="nmdp-card-list">{Guides}</ul>
  </Layout>
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allGuidesYaml {
      nodes {
        id
        name
        uri
        description
        latestVersion
      }
    }
  }
`
