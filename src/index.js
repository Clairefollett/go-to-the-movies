import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

fetch('http://www.omdbapi.com/?s=Back+To+The+Future&plot=short&r=json')
  .then(res => res.json())
  .then(movies => )
