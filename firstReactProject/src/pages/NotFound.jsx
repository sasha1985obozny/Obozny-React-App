import Navigation from '../components/navigation/Navigation';
import './pages.scss';

const NotFound = () => {
    return (
        <>
            <Navigation />
            <h1>404 Page not found</h1>
            <div className='not-found'>
                <img src="/not-found.jpg" alt="not found" />
            </div>
        </>
    )
}

export default NotFound