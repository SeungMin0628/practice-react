import React, { useState } from 'react'
import SearchPresenter from './SearchPresenter'
import { MoviesApi, TVApi } from 'api'

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null)
  const [tvResults, setTvResults] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const updateSearchQuery = (event) => {
    const { target: { value: searchQuery } } = event
    setSearchQuery(searchQuery)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchQuery !== "") {
      search(searchQuery)
    }
  }

  const search = async keyword => {
    try {
      setLoading(true)
      const { data: { results: movieResults } } = await MoviesApi.search(keyword)
      const { data: { results: tvResults } } = await TVApi.search(keyword)

      setMovieResults(movieResults)
      setTvResults(tvResults)
    } catch {
      setError("Can't find results.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchQuery={searchQuery}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
      updateSearchQuery={updateSearchQuery}
    />
  )
}

export default SearchContainer
