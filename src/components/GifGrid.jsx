import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */
import { GifItem } from './GifItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js'

export const GifGrid = ({ category }) => {

    // Custom Hook
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {(isLoading) && (<h3>Cargando...</h3>)}

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}