import React, { useState, useEffect } from 'react'
import HomePresenter from './HomePresenter'
import { MoviesApi } from 'api'

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null)
  const [upcoming, setUpcoming] = useState(null)
  const [popular, setPopular] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const pullDatas = async () => {
    try {
      const { data: { results: nowPlaying } } = await MoviesApi.nowPlaying()
      const { data: { results: upcoming } } = await MoviesApi.upcoming()
      const { data: { results: popular } } = await MoviesApi.popular()
      setNowPlaying(nowPlaying)
      setUpcoming(upcoming)
      setPopular(popular)
    } catch {
      setError("Can't find movies information.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    pullDatas()
  }, [])

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
