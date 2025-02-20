const apiKey = 
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na solicitação: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const movies = data.results;
    movies.sort((a, b) => b.vote_average - a.vote_average); // Ordena os filmes por média de votos
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '<ul>' + movies.map(movie => `
      <li>
        <h2>${movie.title}</h2>
        <p>Média de Votos: ${movie.vote_average}</p>
      </li>
    `).join('') + '</ul>';
  })
  .catch(error => console.error('Erro:', error));