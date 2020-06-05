import React from "react"

const GuideLink = ({ guide }) => (
  <li>
    <a href={guide.uri}>
    <div className="nmdp-guide-card">
      <div className="nmdp-guide-card-content">
        <h3>{guide.name}</h3>
        <h5>Latest version: {guide.latestVersion}</h5>
        <hr></hr>
        <p>{guide.description}</p>
      </div>
    </div>
    </a>
    
  </li>
)
export default GuideLink
