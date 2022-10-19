import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
    const {user} = useContext(AuthContext);
    console.log('context', user);
    return (
        <div>
            <div class="navbar bg-primary text-primary-content">
            <Link to='/' className="btn btn-ghost normal-case text-xl">The Great Auth</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            {user?.displayName && <span>Welcome, {user.displayName}</span> }
            </div>
        </div>
    );
};

export default Header;