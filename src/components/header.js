import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"

const Header = () => (
  <header
    style={{
      background: `#1D3557`,
      position: 'fiexed',
      color: '#F1FAEE'
    }}
  >
    <div
      style={{
        margin: `0 auto 1rem auto`,
        maxWidth: 960,
        paddingLeft: '1rem',
        paddingRight: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        
      }}
    >
      <h1 style={{ 
        margin: 0,
        display: 'inline-block',
        paddingTop: '.1rem' }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}>MWD
        </Link>
      </h1>
      <div style={{display: 'inline-block',}}>
      <Menu />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
