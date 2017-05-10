// @flow

import React from 'react'
import { Block, Row } from 'jsxstyle'
import NavItem from './NavItem'

const NavBar = () => (
  <Block height="40px" backgroundColor="#FFFFFF" borderBottom="4px solid #E5E5E5">
    <Block margin="0 auto" width="960px" height="100%">
      <Row justifyContent="center" alignItems="center" height="100%">
        <nav>
          <Block textAlign="center">
            <ul className="nav-top__ul">
              <NavItem name="Intellifleet V1"/>
              <Block height="90%" borderLeft="1px solid #B7B7B7"/>
              <NavItem name="Intellifleet V2"/>
              <Block height="90%" borderLeft="1px solid #B7B7B7"/>
              <NavItem name="Insights"/>
              <Block height="90%" borderLeft="1px solid #B7B7B7"/>
              {/*<Block height="90%" borderLeft="1px solid #E5E5E5"/>*/}
              <NavItem name="Warehouse"/>
              <Block height="90%" borderLeft="1px solid #B7B7B7"/>
              <NavItem name="Evos"/>                       
            </ul>
          </Block>
        </nav>
      </Row>
    </Block>
  </Block>
)

export default NavBar
