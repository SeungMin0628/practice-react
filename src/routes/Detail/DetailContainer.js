import React, { useEffect, useState } from 'react'
import DetailPresenter from './DetailPresenter'
import { MoviesApi, TVApi } from 'api'

const DetailContainer = (props) => {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  // TODO: Delete this, we will accept isMovie from props
  const [isMovie] = useState(props.location.pathname.includes('/movie/'))

  useEffect(() => {
    const getId = () => {
      const { match: { params: { id } } } = props
      return id
    }

    const validateId = id => {
      const parsedId = Number(id)

      if (isNaN(parsedId)) {
        const { history: { push } } = props
        return push('/')
      }
    }

    const pullDatas = async id => {
      try {
        let result = null
        if (isMovie) {
          ({ data: result } = await MoviesApi.showDetail(id))
        } else {
          ({ data: result } = await TVApi.showDetail(id))
        }
        setResult(result)
      } catch {
        setError("Can't find result.")
      } finally {
        setLoading(false)
      }
    }

    const id = getId()
    validateId(id)
    pullDatas(id)
  }, [props, isMovie])

  return(
    <DetailPresenter
      result={result}
      error={error}
      loading={loading}
    />
  )
}

export default DetailContainer;
