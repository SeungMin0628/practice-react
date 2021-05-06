import React, { useEffect, useState } from 'react'
import CollectionPresenter from './CollectionPresenter'
import { CollectionApi } from 'api'

const CollectionContainer = ({match: {params: {id}}}) => {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const pullDatas = async () => {
      try {
        const {data: result} = await CollectionApi.getDetails(id)
        setResult(result)
      } catch {
        setError("Can't find collections.")
      } finally {
        setLoading(false)
      }
    }

    pullDatas()
  }, [id])

  return (
    <CollectionPresenter
      result={result}
      error={error}
      loading={loading}
    />
  )
}

export default CollectionContainer
