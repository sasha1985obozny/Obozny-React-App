import { NavLink } from "react-router-dom"
import './navigation.scss'

const Navigation = () => {
    return(
        <nav>
            <NavLink to = '/' >Home</NavLink>
            <NavLink to = '/about' >About</NavLink>
            <NavLink to = '/users' >Users</NavLink>
            <NavLink to = '/contacts' >Contacts</NavLink>
        </nav>
    )
}

export default Navigation