import { Navigate, Route, Routes } from 'react-router-dom';

import { HeaderAll } from './Header/Header';
import { MovieList } from '../pages/MovieList/MovieList';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderAll />}>
        <Route index element={<MovieList />} />
        {/* <Route path={muvies} element={<MuvieSearch /> } /> */}
        {/* <Route path="muvies:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<MoviesActor />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
