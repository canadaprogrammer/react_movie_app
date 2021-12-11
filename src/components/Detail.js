import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Movie.module.css';

function Detail() {
  const location = useLocation();
  const { poster, title, year, genres, summary } = location.state;
  return (
    <div className={styles.movie__detail}>
      <img src={poster} alt={title} />
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

export default Detail;
