import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Section from 'components/Section'
import Loader from 'components/Loader'

const Container = styled.div`
  padding: 0 10px;
`

const TVPresenter = ({ topRated, airingToday, popular, error, loading }) =>
  loading ? (<Loader />) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map(show => <span id={show.id}>{show.name}</span>)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map(show => <span id={show.id}>{show.name}</span>)}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map(show => <span id={show.id}>{show.name}</span>)}
        </Section>
      )}
    </Container>
  )

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default TVPresenter
