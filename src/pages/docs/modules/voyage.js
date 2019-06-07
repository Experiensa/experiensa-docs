import React from 'react'
import Link from 'gatsby-link'
import { Table, Icon, List, Card } from 'antd'

import voyageFields from '../data/voyage.js'

const columns = [{
  title: 'Field',
  dataIndex: 'field',
  key: 'field',
},{
  title: 'Field Type',
  dataIndex: 'type',
  key: 'type'
},{
  title: 'Meta name',
  dataIndex: 'name',
  key: 'name'
},{
  title: 'Required',
  dataIndex: 'required',
  key: 'required',
  render: (text, record) =>(
    <span>
      <Icon type={record.required}  className={record.required} />
    </span>
  ),
}];




// Assotiations
// - Countries
// - World regions
// - Included
// - excluded
// - Themes
// - Destinations
// - Included
// - excluded
// - Categories
// - Tags
//
// TODO
// - change "offer start date" => Start date
// - Check this countable
// - Remove Flight in voyage
// - Remove Accomodation in voyage
// - Deactivate Services CPT
// - Deactivate Brochures
// - Deactivate Enquery
// - price field => exp_voyage_price???
// - slogan field => exp_voyage_slogan??
// - days field => exp_voyage_number_days??
// - nights field => exp_voyage_number_nights
// - display_from field => exp_voyage_display_from
// - offer_start_date field => exp_voyage_start_date
// - expiry_date => exp_voyage_end_date
// - information_conditions field => exp_voyage_information_conditions
// - Add PDF File
// - voyage_gallery => exp_voyage_gallery
// Disable voyage itinerary

const functionalities = [
  'When the end date is bigger than current date, the status of the voyage becomes draft',
  'When the resell button is selected the user can add a percentage'
]


const VoyagePage = () => (
  <div>
    <h1>Voyage</h1>
    Voyage is custom post type that allows the user to input data relating to an offer. Also know as a travel product. Voyage = offer = Travel product
    <br/>
    <br/>
    <h3>Functionalities</h3>
    <List size="small" bordered dataSource={functionalities} renderItem={item => (<List.Item>{item}</List.Item>)} />
    <br/>
    <br/>
    <br/>
    <Table columns={columns} expandedRowRender={record => <p style={{ margin: 0 }}>{record.description }<br/></p>} dataSource={voyageFields} size="middle" pagination={{ pageSize: 50 }}  />
  </div>
)

export default VoyagePage
