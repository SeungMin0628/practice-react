import React from 'react'
import TVPresenter from './TVPresenter'

const TVContainer = () => {
  const [topRated] = React.useState(null)
  const [popular] = React.useState(null)
  const [airingToday] = React.useState(null)
  const [error] = React.useState(null)
  const [loading] = React.useState(true)

  return(
    <TVPresenter
      topRated={topRated}
      airingToday={airingToday}
      popular={popular}
      error={error}
      loading={loading}
    />
  )
}

export default TVContainer
