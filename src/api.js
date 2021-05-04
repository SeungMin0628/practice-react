import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '775fad429f72fbf6f65fe1fa916d3a44',
    language: 'en-US'
  }
})

export const TVApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
  search: (query) =>
    api.get('search/movie', {
      params: {
        query: query
      }
    })
}

export const MoviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  popular: () => api.get('movie/popular'),
  upcoming: () => api.get('movie/upcoming'),
  movie: (id) => api.get(`movie/${id}`),
  showDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
  search: (query) =>
    api.get('search/movie', {
      params: {
        query: query
      }
    })
}
