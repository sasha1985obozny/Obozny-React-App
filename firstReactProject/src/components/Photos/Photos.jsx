import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import './Photos.scss';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {

        const baseURL = 'https://jsonplaceholder.typicode.com/photos';

        const getPhotos = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(baseURL);
                if (!response.ok){
                    throw new Error('HTTP error');
                }
                const data = await response.json();
                setPhotos(data);
            } catch(e){
                setError(e);
            } finally {
                setIsLoading(false);
            }           
        }
        getPhotos();
    }, [])

    return (
        <div className='photos'>
            {isLoading && <Loader/>}
            {error && <h2>Something went wrong...</h2>}
            {photos && photos.map(photo =>     
                    <div className="photoContainer" key = {photo.id}>
                        <div className="left">
                            <a href = {photo.url} target='_blank'>
                                <img src = {photo.thumbnailUrl} alt = {photo.title} />
                            </a>
                        </div>
                        <div className="right">
                            <a href = {photo.url} target='_blank'>
                                <h2>{photo.title}</h2>
                            </a>
                        </div>
                    </div>     
                )
            }
        </div>
    );
};

export default Photos;