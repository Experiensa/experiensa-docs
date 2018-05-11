import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// import Header from '../components/header'
// import Footer from '../components/footer'
//import Sidebar from '../components/sidebar'

import './index.css'

const LayoutGatsby = ({ children, data }) => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} >
        <Menu.Item key="1"><Link to="/">Experiensa Docs</Link></Menu.Item>
        {/* comments
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          */}
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span><Icon type="dashboard" />General</span>}>
            <Menu.Item key="1">Requirement</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="code-o" />Modules</span>}>
            <Menu.Item key="5">
              <Link to="/docs/modules/voyage/">Voyage</Link>
            </Menu.Item>
            <Menu.Item key="6">Users</Menu.Item>
            <Menu.Item key="7">Inquiry</Menu.Item>
            <Menu.Item key="8">Host</Menu.Item>
            <Menu.Item key="81">Place</Menu.Item>
            <Menu.Item key="82">Settings</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="appstore-o" />Components</span>}>
            <Menu.Item key="9">Card</Menu.Item>
            <Menu.Item key="10">Catalog</Menu.Item>
            <Menu.Item key="11">Grid</Menu.Item>
            <Menu.Item key="12">Search</Menu.Item>
            <Menu.Item key="121">World Region Filter</Menu.Item>
            <Menu.Item key="122">Country Filter</Menu.Item>
            <Menu.Item key="123">Theme Filter</Menu.Item>
            <Menu.Item key="124">Activity Filter</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="api" />API</span>}>
            <Menu.Item key="13">option13</Menu.Item>
            <Menu.Item key="14">option14</Menu.Item>
            <Menu.Item key="15">option15</Menu.Item>
            <Menu.Item key="16">option16</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          {children()}
        </Content>
      </Layout>
    </Layout>
  </Layout>
)

LayoutGatsby.propTypes = {
  children: PropTypes.func,
}

export default LayoutGatsby

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
