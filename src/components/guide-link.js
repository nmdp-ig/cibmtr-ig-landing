import React from "react"

const GuideLink = ({ guide }) => (
    <li>
      <a href={ guide.uri }>{ guide.name }</a><br/>
      Latest version: { guide.latestVersion }
      <p>{ guide.description }</p>
    </li>
)
export default GuideLink
