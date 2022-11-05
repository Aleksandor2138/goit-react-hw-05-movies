import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { IMG_URL } from 'components/SearchAPI/SearchAPI';
import MovieListSCSS from './MovieList.module.scss';

export const MovieItem = ({movie}) => {
    const  location = useLocation();
    return (
        <li key={movie.id} className={MovieListSCSS.item}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }} className={MovieListSCSS.link} >
                <img src={IMG_URL+movie.poster_path} alt={movie.title} className={MovieListSCSS.img} />
                <div className={MovieListSCSS.info}>
                    <h3>{movie.title}</h3>
                </div>
            </Link>
        </li>
    )
};
MovieItem.propTypes = {
    movie: PropTypes.object,
};