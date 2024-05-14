import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import style from '../Header/style.css'





const Header = () => {
    // const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));



    return (
        <div >

            <div className="d-flex px-1">
                <Link className="nav-link" to="/sign-in">
                    Sign In
                </Link>
                <Link className="nav-link" to="/sign-up">
                    Sign Up
                </Link>
            </div>


        </div>


    );
};

export default Header;
