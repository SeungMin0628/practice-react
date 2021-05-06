import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Loader from 'components/Loader'
import DefaultPoster from 'assets/images/default_poster.jpeg'
import Message from 'components/Message'
import Section from 'components/Section'
import { Link } from 'react-router-dom';

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
  margin-left: 15px;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`

const DetailsContainer = styled.div`
  margin: 20px 0;
`

const Detail = styled.span``

const IMDbLink = styled.a`
  color: #fdcb6e;
  font-weight: bold;

  &:hover {
    color: #ffeaa7;
  }
`

const Divider = styled.span`
  margin: 0 10px;
`

const STabList = styled(TabList)`
  margin: 30px 0;
`

const STab = styled(Tab)`
  all: unset;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: rgba(52, 152, 219, 0);
  color: rgba(255, 255, 255, 0.65);

  &:hover{
    color: rgba(255, 255, 255, 1);
  }

  ${({selected}) => selected && `
    color: white;
    border-bottom-color: rgba(52, 152, 219, 1);
    background-color: rgba(255, 255, 255, 0.2);
  `}

  transition: all 0.3s ease-in-out;
`

const STabPanel = styled(TabPanel)`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 50px - 100px - 32px - 52px - 56px);
  overflow-y: auto;

  ${({selected}) => selected && `
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
  `}
`

const Overview = styled.p`
  width: 50%;
  opacity: 0.8;
  line-height: 1.5;
  font-size: 12px;
`

const Videos = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
`

const Video = styled.iframe`
  width: 400px;
  height: 300px;
`

const Productions = styled.div``

const SeasonsContainer = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-gap: 10px;
  margin-top: 10px;
`

const SmallHeading = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-top: 15px;
`

const Production = ({name, logoPath = null, countryCode = null}) => {
  const Container = styled.div`
    position: relative;
  `

  const Logo = styled.div`
    height: 150px;
    background-image: url(${props => props.imgUrl});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 3px;
  `

  const ContryFlag = styled.div`
    height: 80px;
    background-image: url(${props => props.imgUrl});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 3px;
  `

  const Name = styled.span``

  return (
    <Container>
      {logoPath && <Logo imgUrl={`https://image.tmdb.org/t/p/w300${logoPath}`} />}
      {countryCode && <ContryFlag imgUrl={`https://www.countryflags.io/${countryCode}/flat/64.png`} />}
      <Name>{name}</Name>
    </Container>
  )
}

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
    let time = runtime || episode_run_time[0]

    if (time) {
      let result = []
      let hours = 0
      if (time >= 60) {
        hours = parseInt(time / 60)
        result.push(`${hours} ${hours > 1 ? 'hours' : 'hour'}`)
      }

      const minutes = time - hours * 60
      if (minutes > 0) {
        result.push(`${minutes} ${minutes > 1 ? 'mins' : 'min'}`)
      }

      return result.join(' ')
    } else {
      return 'Unknown'
    }
  }

  return (
    <Detail>{getRunTime()}</Detail>
  )
}

const Collection = ({id, name, posterPath}) => {
  const Container = styled.div`
    width: 300px;
    margin-top: 20px;
  `

  const Name = styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  `

  const SLink = styled(Link)`
    &:hover {
      filter: brightness(1.5)
    }
  `

  const Poster = styled.img`
    border-radius: 5px;
  `

  return (
    <Container>
        <Name>{name}</Name>
        <SLink to={`/collection/${id}`}>
          <Poster src={posterPath ? `https://image.tmdb.org/t/p/w300${posterPath}` : DefaultPoster} />
        </SLink>
    </Container>
  )
}

const Season = ({season: {air_date, name, overview, poster_path}}) => {
  const Container = styled.div`
    display: flex;
    height: 120px;
  `

  const Poster = styled.div`
    width: 100px;
    background-image: url(${props => props.imgUrl});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  `

  const Data = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    flex-grow: 1;
  `

  const Name = styled.h4`
    font-size: 14px;
    font-weight: 600;
  `

  const Detail = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
  `

  const Overview = styled.p`
    opacity: 0.7;
    width: 300px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  `

  return(
    <Container>
      <Poster imgUrl={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : DefaultPoster} />
      <Data>
        <Name>{name}</Name>
        <Detail>Air Date: {air_date || 'Unknown'}</Detail>
        <Overview>{overview}</Overview>
      </Data>
    </Container>
  )
}

const getTitle = (result) => result.title || result.name

const DetailPresenter = ({ result, error, loading }) =>
  loading ? <Loader /> : (
    <Container>
      {result && (
        <HelmetProvider>
          {console.log(result)}
          <Helmet>
            <title>{getTitle(result)} | Nomflix</title>
          </Helmet>
          <Backdrop imgUrl={ result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : null } />
          <Content>
            <Cover imgUrl= { result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : DefaultPoster } />
            <Data>
              <Title>{getTitle(result)}</Title>
              <DetailsContainer>
                <DetailYear result={result} />
                <Divider>·</Divider>
                <DetailRunTime result={result} />
                { result.imdb_id && (
                  <>
                    <Divider>·</Divider>
                    <Detail>
                      <IMDbLink href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank" rel="noreferrer">IMDb</IMDbLink>
                    </Detail>
                  </>
                )}
                <Divider>·</Divider>
                <Detail>
                  {result.genres.map((genre, index) =>
                    index === result.genres.length - 1 ? genre.name : `${genre.name} / `
                  )}
                </Detail>
              </DetailsContainer>
              <Tabs>
                <STabList>
                  <STab>Overview</STab>
                  {result.videos.results && result.videos.results.length > 0 && <STab>Videos</STab>}
                  <STab>Production companies & countries</STab>
                </STabList>

                <STabPanel>
                  <Overview>{result.overview}</Overview>
                  {result.belongs_to_collection && (
                    <Collection
                      id={result.belongs_to_collection.id}
                      name={result.belongs_to_collection.name}
                      posterPath={result.belongs_to_collection.poster_path}
                    />
                  )}
                  {result.seasons &&
                    <>
                      <SmallHeading>Seasons</SmallHeading>
                      <SeasonsContainer>
                        {result.seasons.map(season =>
                          <Season key={season.id} season={season} />
                        )}
                      </SeasonsContainer>
                    </>
                  }
                </STabPanel>

                {result.videos.results && result.videos.results.length > 0 && (
                  <STabPanel>
                    <Videos>
                      {result.videos.results.map(video =>
                        video.site === 'YouTube' && <Video
                          key={video.id}
                          src={`https://www.youtube.com/embed/${video.key}`}
                          title={video.name}
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        />
                      )}
                    </Videos>
                  </STabPanel>
                )}

                <STabPanel>
                  <Productions>
                    {result.production_companies && result.production_companies.length > 0 && (
                      <Section title="Production companies">
                        {result.production_companies.map(company =>
                          <Production key={company.id} logoPath={company.logo_path} name={company.name} />
                        )}
                      </Section>
                    )}
                    {result.production_countries && result.production_countries.length > 0 && (
                      <Section title="Production countries">
                        {result.production_countries.map((country, index) =>
                          <Production key={index} name={country.name} countryCode={country.iso_3166_1} />
                        )}
                      </Section>
                    )}
                  </Productions>
                </STabPanel>
              </Tabs>
            </Data>
          </Content>
        </HelmetProvider>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  )

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}

export default DetailPresenter
