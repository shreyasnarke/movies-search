function getMovies() {
    return new Promise(async (resolve) => {
      const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1");
      const data = await response.json();
      resolve(data.results);
    });
  }
  export default getMovies;

 