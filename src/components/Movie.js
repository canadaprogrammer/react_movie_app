import React from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.module.css';

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className={styles.movie}>
      <img src={poster} alt={title} title={title} />
      <div className={styles.movie__data}>
        <h1 className={styles.movie__title}>{title}</h1>
        <h3 className={styles.movie__year}>{year}</h3>
        <p className={styles.movie__genres}>
          {genres.reduce((a, b) => `${a}, ${b}`)}
        </p>
        <p className={styles.movie__summary}>{summary}</p>
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
};

export default Movie;
