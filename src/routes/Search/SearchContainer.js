import React from 'react'
import SearchPresenter from './SearchPresenter'

const SearchContainer = () => {
  const [movieResults] = React.useState(null)
  const [tvResults] = React.useState(null)
  const [searchQuery] = React.useState('')
  const [error] = React.useState(null)
  const [loading] = React.useState(false)

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchQuery={searchQuery}
      error={error}
      loading={loading}
    />
  )
}

export default SearchContainer
