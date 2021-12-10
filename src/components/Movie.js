import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, year, title, summary, poster, genres, backgroundImage }) {
  return (
    <div className='movie'>
      <img src={poster} alt={title} title={title} />
      <div className='movie__data'>
        <h1 className='movie__title'>{title}</h1>
        <h3 className='movie__year'>{year}</h3>
        <p className='movie__genres'>{genres.reduce((a, b) => `${a}, ${b}`)}</p>
        <p className='movie__summary'>{summary}</p>
        <img src={backgroundImage} alt={title} />
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default Movie;
