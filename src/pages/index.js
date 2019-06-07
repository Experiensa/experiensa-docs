import React from 'react'
import Link from 'gatsby-link'
import { Card, Col, Row } from 'antd'
import 'antd/dist/antd.css'

const { Meta } = Card

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

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
    <br/>
    <h1>Business Goals</h1>
    <Row gutter={16}>
      <Col span={6}>
        <Card title="Increase travel agency efficiency" bordered={false}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at lacinia ante. Duis fermentum tortor id lectus pulvinar, sit amet ullamcorper metus faucibus</Card>

      </Col>
      <Col span={6}>
        <Card title="Card title" bordered={false}>Reduce operational costs</Card>
      </Col>
      <Col span={6}>
        <Card title="Card title" bordered={false}>Improve business/customer communication</Card>
      </Col>
      <Col span={6}>
        <Card title="Card title" bordered={false}>Improve customer service</Card>
      </Col>
    </Row>

    <br/>

    <Card title="Technical goals">
      <Card.Grid style={gridStyle}>Usability</Card.Grid>
      <Card.Grid style={gridStyle}>Attractiveness</Card.Grid>
      <Card.Grid style={gridStyle}>Responsiveness</Card.Grid>
      <Card.Grid style={gridStyle}>Performance</Card.Grid>
      <Card.Grid style={gridStyle}>Robutsness</Card.Grid>
      <Card.Grid style={gridStyle}>SEO</Card.Grid>
      <Card.Grid style={gridStyle}>Simplicity</Card.Grid>
      <Card.Grid style={gridStyle}>Security</Card.Grid>
      <Card.Grid style={gridStyle}>Integration</Card.Grid>
      <Card.Grid style={gridStyle}>Flexibility (API)</Card.Grid>
    </Card>
  </div>
)

export default IndexPage
