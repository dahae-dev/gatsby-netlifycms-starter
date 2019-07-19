import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry }) => {
  console.log("entry: ", entry)
  const data = entry.getIn(['data']).toJS()
  console.log("data: ", data)

  if (data) {
    return (
      <IndexPageTemplate   
        title={data.title}
        heading={data.intro.heading}
        description={data.intro.description}
        src={data.image.src}
        alt={data.image.alt}
        html={data.html} // ??
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
