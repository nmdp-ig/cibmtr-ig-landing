import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="nmdp-header">
    <div>
      <div className="nmdp-nav-wrapper">
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link to="/" style={{ color: `white`, textDecoration: `none` }}>{siteTitle}</Link>
        </h1>
        <div>
          <nav>
            <ul className="nmdp-nav">
              {menuLinks.map(link => (
                <li key={link.node.id} className="nmdp-nav-item">
                  <Link className="nmdp-nav-item-link" to={link.node.fields.slug}>
                    {link.node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = { siteTitle: PropTypes.string, }
Header.defaultProps = { siteTitle: ``, }

export default Header