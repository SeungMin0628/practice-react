import React from 'react'
import HomePresenter from './HomePresenter'

const HomeContainer = () => {
  const [nowPlaying] = React.useState(null)
  const [upcoming] = React.useState(null)
  const [popular] = React.useState(null)
  const [error] = React.useState(null)
  const [loading] = React.useState(true)

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />
  )
}

export default HomeContainer
