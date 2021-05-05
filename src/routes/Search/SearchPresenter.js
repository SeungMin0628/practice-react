import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Loader from 'components/Loader'
import Section from 'components/Section'
import Message from 'components/Message'
import Poster from 'components/Poster'

const Container = styled.div`
  padding: 0 20px;
`

const Form = styled.form`
  width: 100%;
  margin-bottom: 50px;
`

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`

const SearchPresenter = ({ movieResults, tvResults, searchQuery, error, loading, handleSubmit, updateSearchQuery }) =>
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search movies or TV shows..." value={searchQuery} onChange={updateSearchQuery} />
    </Form>
    {loading ? <Loader /> : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie results">
            {movieResults.map(movie =>
              <Poster
                key={movie.id}
                id={movie.id}
                imgUrl={movie.poster_path}
                rating={movie.vote_average}
                title={movie.original_title}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            )}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV shows results">
            {tvResults.map(show =>
              <Poster
                key={show.id}
                id={show.id}
                imgUrl={show.poster_name}
                rating={show.vote_average}
                title={show.original_name}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              />
            )}
          </Section>
        )}
      </>
    )}
    {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && <Message color="#95a5a6" text="Nothing found." />}
    {error && <Message color="#e74c3c" text={error} />}
  </Container>

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchQuery: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateSearchQuery: PropTypes.func.isRequired
}

export default SearchPresenter
