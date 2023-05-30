import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import User from './pages/User';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import './main.scss';

function App() {
  return (
      <div>
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/about' element = { <About /> } />
          <Route path = '/contacts' element = { <Contacts /> } />
          <Route path = '/users' element = { <Users /> } />
          <Route path = '/users/:userId' element = { <User /> } />
          <Route path = '*' element = { <NotFound /> } />
        </Routes>
      </div>
  );
}

export default App;
