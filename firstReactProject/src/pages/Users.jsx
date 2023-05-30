import { useState, useEffect } from 'react';
import Navigation from '../components/navigation/Navigation';
import { Link } from 'react-router-dom';
import './pages.scss';

const Users = () => {
    const [users, setUsers] = useState([]);

    const baseURL = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        const fetchAllUsers = async () => {
            const response = await fetch(baseURL);
            const data = await response.json();
            setUsers(data);
        }
        fetchAllUsers();
    }, [])
   

    return (
        <>
            <Navigation />
            <h1>Users</h1>
            {users && users.map(user => 
                <div key = {user.id} className='user-card'>
                    <Link to = {`/users/${user.id}`}>{user.name}</Link>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </div>)}
        </>
    )
}

export default Users