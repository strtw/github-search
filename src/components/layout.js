/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from './navbar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from "./header"
import CssBaseline from '@material-ui/core/CssBaseline';

//import "./layout.css"


//const theme = createMuiTheme();

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
                        name
                        link
                    }
        }
      }
    }
  `)

  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '90%',
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
