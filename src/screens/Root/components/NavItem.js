// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ name }: { name: string }) => {
  return (
    <li className="nav-top__li">
      <NavLink to={`/${name.toLowerCase()}`} activeClassName="nav-top__li--active">{name}</NavLink>
    </li>
  )
}



export default NavItem
