import React from 'react'
import PropsType from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DefaultPoster from '../assets/images/default_poster.jpeg'

const Container = styled.div`
  font-size: 12px;
`

const Image = styled.div`
  background-image: url(${ props => props.imgUrl });
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
`

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;

  &:hover {
    ${Image} {
      opacity: 0.6;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`

const Title = styled.span`
  display: block;
  margin-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-y: hidden;
`

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`

const Poster = ({ id, imgUrl, rating, title, year, isMovie = false }) =>
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image imgUrl={imgUrl ? `https://image.tmdb.org/t/p/w300${imgUrl}` : DefaultPoster } />
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
