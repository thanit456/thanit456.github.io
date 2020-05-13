import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

import "../css/background-image.css"
// import { rhythm } from "../utils/typography"
//www.google.com/search?q=background+image+css+gatsby&oq=background+image+css+gatsby&aqs=chrome.0.0l2.19946j1j4&sourceid=chrome&ie=UTF-8#kpvalbx=_IVG8XvyfNYP49QO15a6gCA30

https: const Header = ({ setTitle }) => (
  <header
    style={{
      background: `blue`,
      // backgroundImage: new Image(`../images/line_network_bg.jpg`),
      marginBottom: `1.45rem`,
    }}
  >
    <BackgroundImage
      className="masterthead"
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <div
          className="content-box"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {props.siteTitle}
            </Link>
          </h1>
          <p>
            <Link
              to={`/about/`}
              style={{
                float: `right`,
              }}
            >
              About
            </Link>
          </p>
        </div>
      </div>
    </BackgroundImage>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  image: PropTypes.image,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "line_network_bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
