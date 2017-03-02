import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// fetch('http://www.omdbapi.com/?s=Back+To+The+Future&plot=short&r=json')
//   .then(res => res.json())
//   .then(movies => )

function App(props) {
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
