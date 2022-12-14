import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log('context', user);

    const handleSignOut = () => {
        logOut()
        .then(() =>{})
        .catch(error=> console.error(error))
    }
    return (
        <div>
            <div class="navbar bg-primary text-primary-content">
            <Link to='/' className="btn btn-ghost normal-case text-xl">The Great Auth</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            {user?.email && <span>Welcome, {user.email}</span> }
            <button onClick={handleSignOut} className="btn btn-sm" >Sign Out</button>
            </div>
        </div>
    );
};

export default Header;