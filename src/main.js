const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    'api_key': API_KEY,
    'language': 'es'
  }
})


// funcion para obtener peliculas Trending
const getTrendingMoviesPreview = async () => {
  const containerTrendMoviesPrev = document.querySelector('#trendingPreview .trendingPreview-movieList')
  const {data} = await api ('trending/movie/day')
  const movies = data.results

  containerTrendMoviesPrev.innerHTML = ''

  movies.map(movie => {
    const movieContainer = document.createElement('div')
    movieContainer.addEventListener('click', ()=> {
      location.hash = `#movie=${movie.id}`
    })
    movieContainer.classList.add('movie-container')

    const movieImg = document.createElement('img')
    movieImg.classList.add('movie-img')
    movieImg.setAttribute('alt', movie.title)
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)

    containerTrendMoviesPrev.appendChild(movieContainer)
    movieContainer.appendChild(movieImg)
  })
}

// funcion para obtener el preview de las categorias 
const getCategoriesPreview = async () => {
  const categoriesPreviewContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')
  const {data} = await api ('genre/movie/list')
  const categories = data.genres

  categoriesPreviewContainer.innerHTML = ''

  categories.map(category => {
    const categoryContainer = document.createElement('div')
    categoryContainer.classList.add('category-container')

    const categoryTitle = document.createElement('h3')
    categoryTitle.classList.add('category-title')
    categoryTitle.setAttribute('id', `id${category.id}`)
    categoryTitle.addEventListener('click', ()=> {
      location.hash = `#category=${category.id}-${category.name}`
    })
    const categoryTitleText = document.createTextNode(category.name)
    categoryTitle.appendChild(categoryTitleText)

    categoriesPreviewContainer.appendChild(categoryContainer)
    categoryContainer.appendChild(categoryTitle)
  })
}

const getMoviesByCategory = async (id) => {
  const {data} = await api ('discover/movie', {
    params: {
      with_genres: id
    }
  })
  const movies = data.results

  genericSection.innerHTML = ''

  movies.map(movie => {
    const movieContainer = document.createElement('div')
    movieContainer.addEventListener('click', ()=> {
      location.hash = `#movie=${movie.id}`
    })
    movieContainer.classList.add('movie-container')

    const movieImg = document.createElement('img')
    movieImg.classList.add('movie-img')
    movieImg.setAttribute('alt', movie.title)
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)

    genericSection.appendChild(movieContainer)
    movieContainer.appendChild(movieImg)
  })
}

const getMoviesBySearch = async (query) => {
  const {data} = await api ('search/movie', {
    params: {
      query
    }
  })
  const movies = data.results

  genericSection.innerHTML = ''

  movies.map(movie => {
    const movieContainer = document.createElement('div')
    movieContainer.addEventListener('click', ()=> {
      location.hash = `#movie=${movie.id}`
    })
    movieContainer.classList.add('movie-container')

    const movieImg = document.createElement('img')
    movieImg.classList.add('movie-img')
    movieImg.setAttribute('alt', movie.title)
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)

    genericSection.appendChild(movieContainer)
    movieContainer.appendChild(movieImg)
  })
}

const getTrendingMovies = async () => {
  const {data} = await api ('trending/movie/day')
  const movies = data.results

  genericSection.innerHTML = ''

  movies.map(movie => {
    const movieContainer = document.createElement('div')
    movieContainer.addEventListener('click', ()=> {
      location.hash = `#movie=${movie.id}`
    })
    movieContainer.classList.add('movie-container')

    const movieImg = document.createElement('img')
    movieImg.classList.add('movie-img')
    movieImg.setAttribute('alt', movie.title)
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)

    genericSection.appendChild(movieContainer)
    movieContainer.appendChild(movieImg)
  })
}

const getMovieById = async (id) => {
  const {data: movie} = await api (`movie/${id}`)

  const movieImgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  headerSection.style.background = `url(${movieImgUrl})`

  movieDetailTitle.textContent = movie.title
  movieDetailDescription.textContent = movie.overview 
  movieDetailScore.textContent = movie.vote_average 

  movieDetailCategoriesList.innerHTML = ''

  movie.genres.map(category => {
    const categoryContainer = document.createElement('div')
    categoryContainer.classList.add('category-container')

    const categoryTitle = document.createElement('h3')
    categoryTitle.classList.add('category-title')
    categoryTitle.setAttribute('id', `id${category.id}`)
    categoryTitle.addEventListener('click', ()=> {
      location.hash = `#category=${category.id}-${category.name}`
    })
    const categoryTitleText = document.createTextNode(category.name)
    categoryTitle.appendChild(categoryTitleText)

    movieDetailCategoriesList.appendChild(categoryContainer)
    categoryContainer.appendChild(categoryTitle)
  })

  getRelatedMovieById(id)
}

const getRelatedMovieById = async (id) => {
  const {data} = await api (`movie/${id}/similar`)
  const movies = data.results

  relatedMoviesContainer.innerHTML = ''

  movies.map(movie => {
    const movieContainer = document.createElement('div')
    movieContainer.addEventListener('click', ()=> {
      location.hash = `#movie=${movie.id}`
    })
    movieContainer.classList.add('movie-container')

    const movieImg = document.createElement('img')
    movieImg.classList.add('movie-img')
    movieImg.setAttribute('alt', movie.title)
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)

    relatedMoviesContainer.appendChild(movieContainer)
    movieContainer.appendChild(movieImg)
  })
}