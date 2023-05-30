import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import './pages.scss';

const User = () => {
    const [user, setUser] = useState({});
    const {userId} = useParams();
    const navigate = useNavigate();

    const baseURL = 'https://jsonplaceholder.typicode.com/users/';

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(baseURL + userId);
            if (!response.ok){
                navigate('/');
            }
            const data = await response.json();
            setUser(data);            
        }
        fetchUser();
    }, [userId, navigate])

    return (
        <>
            <Navigation />
            <h1>User page</h1>
            <div>
                <h3>Name: {user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone number: {user.phone}</p>
            </div>
        </>        
    )
}

export default User