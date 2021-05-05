import React from 'react'
import PropsType from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div``

const ImageContainer = styled.div``

const Image = styled.div``

const Rating = styled.span``

const Title = styled.span``

const Year = styled.span``

const Poster = ({ id, imgUrl, rating, title, year, isMovie = false }) =>
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image />
        <Rating>
          <span role="img" aria-label="Rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>

Poster.propsType = {
  id: PropsType.number.isRequired,
  imgUrl: PropsType.string,
  rating: PropsType.number,
  title: PropsType.string.isRequired,
  year: PropsType.string,
  isMovie: PropsType.bool
}

export default Poster;
