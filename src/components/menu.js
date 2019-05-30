import React from 'react'
import { Link } from 'gatsby'

const menu = () => {
    return (
        <div>
          <ul style={{
            display: 'flex',
            justifyContent: 'space-between',
            textDecoration: 'none',
            listStyle: 'none',
            
        }}>
          <li><Link to="/#home">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#projects">Projects</Link></li>
          <li><Link to="/">Contact</Link></li>
         </ul>
        </div>
    )
}

export default menu
