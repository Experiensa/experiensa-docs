const voyageFields = [{
  key: '1',
  field: 'Title',
  type: 'text',
  name: 'the_title()',
  required: 'check',
  description: 'Title of the offer. If there is no title, we use destination name or country name',
}, {
  key: '2',
  field: 'Description',
  type: 'editor',
  name: 'the_content()',
  required: 'check',
  description: 'Description about the offer, information related about the destination(s) and/or country',
},{
  key: '3',
  field: 'Excerpt',
  type: 'textarea',
  name: 'get_the_excerpt()',
  required: 'close',
  description: 'Short description text, It should be like a tweet (280 characters)',
},{
  key: '15',
  field: 'Cover Image',
  type: 'Image',
  name: 'get_the_post_thumbnail_url()',
  required: 'check',
  description: 'Main image. By default it should be a High Resolution Image (1920x1080) 16:9'
},{
  key: '4',
  field: 'Price',
  type: 'number',
  name: 'exp_voyage_price',
  required: 'close',
  description: 'Indicates de prices of the offers, sometimes it will be an starting price',
  lang: {en: 'Price', fr:'Prix', es:'Precios'}
},{
  key: '5',
  field: 'Start date',
  type: 'date',
  name: 'exp_voyage_start_date',
  required: 'close',
  description: 'First day when the offer becomes available'
},{
  key: '6',
  field: 'Expiry date',
  type: 'date',
  name: 'exp_voyage_end_date',
  required: 'close',
  description: 'Date when the offer expires'
},
{
  key: '7',
  field: 'Display From',
  type: 'boolean',
  name: 'exp_voyage_display_from',
  required: 'close',
  description: 'This option lets you define the way price will be display on the website site. In case the price is fixed, leave this checkbox empty, if this price represents an starting price for a trip then, check this checkbox'
},
{
  key: '8',
  field: 'Slogan',
  type: 'text',
  name: 'exp_voyage_slogan',
  required: 'close',
  description: 'Some offers or destination use a tagline to attract people, this field'
},
{
  key: '9',
  field: 'Number of days',
  type: 'number',
  name: 'exp_voyage_number_days',
  required: 'close',
  description: 'Total number of days that the trip will last, days refers to daylight'
},{
  key: '10',
  field: 'Number of nights',
  type: 'number',
  name: 'exp_voyage_number_nights',
  required: 'close',
  description: 'Total number of nights that the trip will last, this is usually related to hosting'
},{
  key: '11',
  field: 'information/conditions',
  type: 'editor',
  name: 'exp_voyage_information_conditions',
  required: 'close',
  description: ''
},{
  key: '12',
  field: 'Photo gallery',
  type: 'File',
  name: 'exp_voyage_gallery',
  required: 'close',
  description: 'Allows the user to add various images to the image gallery of the offer, it is very important to add many images'
},{
  key: '13',
  field: 'Flyer',
  type: 'File',
  name: 'exp_voyage_flyer',
  label: 'PDF File / Brochure',
  required: 'close',
  description: 'Allows the user to upload the a flyer or a Brochure (PDF File). This can file can be then downloaded by the client while visiting the website'
}];

export default voyageFields
