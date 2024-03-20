import React from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  return (
    <div>
      <h1>My Movie App</h1>
      <Filter />
      <MovieList />
    </div>
  );
}

export default App;