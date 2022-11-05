import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { SearchTrend } from '../../components/SearchAPI/SearchAPI';
import { MovieItem } from './MovieItem';
import MovieListSCSS from './MovieList.module.scss';

export const MovieList = ({list}) => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState(true);

  useEffect(() => {
    if (list) {
      setMovies(list);
      setTitle(false);
      return;
    }
    serverAPI();
  }, [list]);

  const serverAPI = async () => {
    const data = await SearchTrend();
    const results = await data.results;
    console.log(results);
    setMovies(results);
    return;
  };

  return (
    <section>
      {title && <h2 className={MovieListSCSS.text}>Trending today</h2>}
      <ul className={MovieListSCSS.list}>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie}></MovieItem>
        ))}
      </ul>
    </section>
  );
};
MovieList.propTypes = {
  list: PropTypes.array,
};
