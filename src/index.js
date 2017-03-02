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
  const allMovies = props.movies.Search.map(movies)
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
      </tbody>
    </table>
  )
}
