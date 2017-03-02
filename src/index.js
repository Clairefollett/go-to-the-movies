import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



fetch('http://www.omdbapi.com/?s=Back+To+The+Future&plot=short&r=json')
  .then(res => res.json())
  .then(movies => 
    ReactDOM.render(
      <App />,
      document.getElementById('root')
  )
)

function App(props) {
  const allMovies=props.movies.Search.map(movie => (
      <List
        movie={movie}
        key={movie.imdbID}
      />
    )
  )
  return (
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>imdbID</th>
          <th>Type</th>
          <th>Poster</th>
        </tr>
        {allMovies}
      </tbody>
    </table>
  )
}

function List(props) {
  return (
    <tr>
      <td>{props.movie.Title}</td>
      <td>{props.movie.Year}</td>
      <td>{props.movie.imdbID}</td>
      <td>{props.movie.Type}</td>
      <td><img alt='moviePoster' src={props.movie.Poster} /></td>
    </tr>
  )
}
