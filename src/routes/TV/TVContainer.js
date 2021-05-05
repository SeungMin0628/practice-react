import React, { useState, useEffect } from 'react'
import TVPresenter from './TVPresenter'
import { TVApi } from 'api'

const TVContainer = () => {
  const [topRated, setTopRated] = useState(null)
  const [popular, setPopular] = useState(null)
  const [airingToday, setAiringToday] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const pullDatas = async () => {
    try {
      const { data: { results: topRated } } = await TVApi.topRated()
      const { data: { results: popular } } = await TVApi.popular()
      const { data: { results: airingToday } } = await TVApi.airingToday()
      setTopRated(topRated)
      setPopular(popular)
      setAiringToday(airingToday)
    } catch {
      setError("Can't find TV shows information.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    pullDatas()
  }, [])

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
