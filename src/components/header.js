import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import RepositorySelector from "./repositoryselector"
import {Provider} from '../utils/github-client'

const Header = ({ siteTitle,menuLinks }) => {

  if(!localStorage.getItem('github-token')){
    return(
      <header
      style={{
        background: `#393D3F`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
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
            {siteTitle}
          </Link>
        </h1>
        <div>
          </div>
      </div>
    </header>
    )
  }else{
    return(
      <header
        style={{
          background: `#393D3F`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
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
              {siteTitle}
            </Link>
          </h1>
          <div>
              <nav>
                <ul style={{ display: "flex", flex: 1 }}>
                  {menuLinks.map(link => (
                    <li
                      key={link.name}
                      style={{
                        listStyleType: `none`,
                        padding: `1rem`,
                      }}
                    >
                      <Link style={{ color: `white` }} to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li style={{
                        listStyleType: `none`,
                        padding: `1rem`,
                      }} >
                  </li>
                 
                </ul>
              </nav>
            </div>
        </div>
      </header>
      )
  }
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
