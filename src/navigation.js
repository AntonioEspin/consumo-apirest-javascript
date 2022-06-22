searchFormBtn.addEventListener('click', () => {
  const searchMovie = searchFormInput.value
  location.hash = `#search=${searchMovie}`;
});

trendingBtn.addEventListener('click', () => {
  location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => {
  history.back()
  // location.hash = '#home';
});

window.addEventListener('DOMContentLoaded', navigation, false)
window.addEventListener('hashchange', navigation, false)

function navigation () {
  console.log({location})

  if (location.hash.startsWith('#trends')) {
    trendsPage()
  } else if (location.hash.startsWith('#search=')){
    searchPage()
  } else if (location.hash.startsWith('#movie=')){
    movieDetailPage()
  } else if (location.hash.startsWith('#category=')){
    categoriesPage()
  } else {
    homePage()
  }

  window.scrollTo(0,0)
}

function trendsPage () {
  console.log('Trends!')

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  headerCategoryTitle.innerHTML = 'Tendencias'
  getTrendingMovies()
}

function searchPage () {
  console.log('searchPage!')

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  const [_ , query] = location.hash.split('=')

  getMoviesBySearch (query)
}
function movieDetailPage () {
  console.log('movieDetailPage!')

  headerSection.classList.add('header-container--long');
  // headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.add('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.remove('inactive');

  const [_ , movieId] = location.hash.split('=')

  getMovieById(movieId)
}
function categoriesPage () {
  console.log('categoriesPage!')

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  const [_ , hashUrl] = location.hash.split('=')

  const [categoryId, categoryName] = hashUrl.split('-')

  const name = decodeURI(categoryName)
  headerCategoryTitle.innerHTML = name

  getMoviesByCategory(categoryId)
}
function homePage () {
  console.log('homePage!')

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.add('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.remove('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.remove('inactive');
  categoriesPreviewSection.classList.remove('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.add('inactive');

  getTrendingMoviesPreview()
  getCategoriesPreview()
}