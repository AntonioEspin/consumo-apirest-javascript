const API_TRENDING_MOVIES = 'https://api.themoviedb.org/3/trending/movie/day'
const API_CATEGORIES_MOVIES = 'https://api.themoviedb.org/3/genre/movie/list'

// console.log(`${API}?api_key=${API_KEY}&language=es`)

// funcion para obtener peliculas Trending
const getTrendingMoviesPreview = async () => {
  const containerTrendMoviesPrev = document.querySelector('#trendingPreview .trendingPreview-movieList')
  const response = await fetch (`${API_TRENDING_MOVIES}?api_key=${API_KEY}&language=es`)
  const data = await response.json()
  const movies = data.results

  movies.map(movie => {
    const movieContainer = document.createElement('div')
    movieContainer.classList.add('movie-container')

    const movieImg = document.createElement('img')
    movieImg.classList.add('movie-img')
    movieImg.setAttribute('alt', movie.title)
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)

    containerTrendMoviesPrev.appendChild(movieContainer)
    movieContainer.appendChild(movieImg)
  })
}

const getCategoriesPreview = async () => {
  const categoriesPreviewContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')
  const response = await fetch (`${API_CATEGORIES_MOVIES}?api_key=${API_KEY}&language=es`)
  const data = await response.json()
  const categories = data.genres

  categories.map(category => {
    const categoryContainer = document.createElement('div')
    categoryContainer.classList.add('category-container')

    const categoryTitle = document.createElement('h3')
    categoryTitle.classList.add('category-title')
    categoryTitle.setAttribute('id', `id${category.id}`)
    const categoryTitleText = document.createTextNode(category.name)
    categoryTitle.appendChild(categoryTitleText)

    categoriesPreviewContainer.appendChild(categoryContainer)
    categoryContainer.appendChild(categoryTitle)
  })
}

getTrendingMoviesPreview()
getCategoriesPreview()