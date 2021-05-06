import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from 'components/Loader'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Message from 'components/Message'
import Section from 'components/Section'
import Poster from 'components/Poster'

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  padding: 50px;
  position: relative;
`

const BackDrop = styled.div`
  position: absolute;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -10;
  filter: blur(3px);
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const CollectionPoster = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
`

const Data = styled.div`
  flex-grow: 1;
  margin-left: 15px;
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
`

const Overview = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 70%;
  opacity: 0.7;
`

const CollectionPresenter = ({ result, error, loading }) =>
  loading ? <Loader /> :
    <Container>
      {result &&
        <Content>
          <HelmetProvider>
            <Helmet>
              <title>{result.name || ""} | Nomflix</title>
            </Helmet>
          </HelmetProvider>
          <BackDrop imgUrl={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : null} />
          <CollectionPoster imgUrl={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : null } />
          <Data>
            <Title>{result.name}</Title>
            <Overview>{result.overview}</Overview>
            {result.parts && result.parts.length > 0 && (
              <Section title="Series">
                {result.parts.map(movie =>
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imgUrl={movie.poster_path}
                    rating={movie.vote_average}
                    title={movie.title}
                    year={movie.release_date && movie.release_date.substring(0, 4)}
                    isMovie={true}
                  />
                )}
              </Section>
            )}
          </Data>
        </Content>
      }
      {error && <Message text={error} color="#e74c3c" />}
    </Container>

CollectionPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

export default CollectionPresenter
