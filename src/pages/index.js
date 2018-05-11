import React from 'react'
import Link from 'gatsby-link'
import { Card } from 'antd'
import 'antd/dist/antd.css'

const { Meta } = Card

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <br/>
    <Card hoverable style={{ width: 240 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  </div>
)

export default IndexPage
