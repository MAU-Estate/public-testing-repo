export default {
  name: 'commissions',
  title: 'commissions',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Material name',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Site and Location',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Year',
      type: 'date',
      description: 'Year will be displayed but month & day will be used for ordering',
      options: {
        dateFormat: 'MM-DD-YYYY'
      }
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ]
};
