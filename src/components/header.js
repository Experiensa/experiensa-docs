import React from 'react'
import Link from 'gatsby-link'
import { Menu } from 'antd';

const HeaderGatsby = ({ siteTitle }) => (
  <Header className="header">
    <h1 style={{ margin: 0 }} className="logo">
      <Link to="/" style={{ color: 'white', textDecoration: 'none', }} >
        {siteTitle}
      </Link>
    </h1>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
      >
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </Header>
)

export default HeaderGatsby
