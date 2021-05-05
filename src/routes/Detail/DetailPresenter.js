import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from 'components/Loader'
import DefaultPoster from 'assets/images/default_poster.jpeg'

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  padding: 50px;
  position: relative;
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imgUrl});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -10;
`

const Content = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`

const Cover = styled.div`
  background-image: url(${ props => props.imgUrl });
  background-position: center center;
  background-size: cover;
  width: 30%;
  height: 100%;
  border-radius: 5px;
`

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`

const DetailsContainer = styled.div`
  margin: 20px 0;
`

const Detail = styled.span``

const Divider = styled.span`
  margin: 0 10px;
`

const Overview = styled.p`
  width: 50%;
  opacity: 0.7;
  line-height: 1.5;
  font-size: 12px;
`

const DetailYear = ({result: {release_date, first_air_date}}) => {
  const getYear = () => {
    if (release_date) {
      return release_date.substring(0, 4)
    } else if (first_air_date) {
      return first_air_date.substring(0, 4)
    } else {
      return 'Unknown'
    }
  }

  return (
    <Detail>{getYear()}</Detail>
  )
}

const DetailRunTime = ({result: { runtime, episode_run_time}}) => {
  const getRunTime = () => {
    if (runtime) {
      let result = []
      let hours = 0
      if (runtime >= 60) {
        hours = parseInt(runtime / 60)
        result.push(`${hours} ${hours > 1 ? 'hours' : 'hour'}`)
      }

      const minutes = runtime - hours * 60
      if (minutes > 0) {
        result.push(`${minutes} ${minutes > 1 ? 'mins' : 'min'}`)
      }

      return result.join(' ')
    } else if (episode_run_time && episode_run_time.length > 0) {
      return `${episode_run_time[0]} mins`
    } else {
      return 'Unknown'
    }
  }

  return (
    <Detail>{getRunTime()}</Detail>
  )
}


const DetailPresenter = ({ result, error, loading }) =>
  loading ? <Loader /> : (
    <Container>
      <Backdrop imgUrl={ result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : null } />
      <Content>
        <Cover imgUrl= { result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : DefaultPoster } />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <DetailsContainer>
            <DetailYear result={result} />
            <Divider>·</Divider>
            <DetailRunTime result={result} />
            <Divider>·</Divider>
            <Detail>
              {result.genres.map((genre, index) =>
                index === result.genres.length - 1 ? genre.name : `${genre.name} / `
              )}
            </Detail>
          </DetailsContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  )

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default DetailPresenter
