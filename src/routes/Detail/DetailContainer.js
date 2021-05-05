import React from 'react'
import DetailPresenter from './DetailPresenter'

const DetailContainer = () => {
  const [result] = React.useState(null)
  const [error] = React.useState(null)
  const [loading] = React.useState(true)

  return(
    <DetailPresenter
      result={result}
      error={error}
      loading={loading}
    />
  )
}

export default DetailContainer;
