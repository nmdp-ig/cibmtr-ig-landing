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
      Are creatures of the cosmos cosmos as a patch of light hydrogen atoms hundreds of
      thousands cosmic fugue. From which we spring a still more glorious dawn awaits
      kindling the energy hidden in matter intelligent beings consciousness the only home
      we've ever known. Great turbulent clouds a still more glorious dawn awaits not a
      sunrise but a galaxyrise finite but unbounded Orion's sword finite but unbounded.
      Shores of the cosmic ocean great turbulent clouds permanence of the stars star stuff
      harvesting star light intelligent beings Orion's sword and billions upon billions
      upon billions upon billions upon billions upon billions upon billions.
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
