import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, widgetFor }) => {
  console.log("entry: ", entry)
  const data = entry.getIn(['data']).toJS()
  console.log("data: ", data)
  console.log("body: ", widgetFor('body'))

  if (data) {
    return (
      <IndexPageTemplate   
        title={entry.getIn(['data', 'title'])}
        heading={entry.getIn(['data', 'intro', 'heading'])}
        description={entry.getIn(['data', 'intro', 'description'])}
        src={entry.getIn(['data', 'image', 'src'])}
        alt={entry.getIn(['data', 'image', 'alt'])}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default IndexPagePreview
