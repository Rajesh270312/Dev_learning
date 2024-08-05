import { Button2 , Button1 } from "../../components/button/button";
import React ,{ useState , useEffect,useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'
import { useAuth } from '../../context/AuthContext';

export function Navbar(){
    const { isLoggedIn, user, setIsLoggedIn, setUser } = useAuth();
    const [showNavbar, setShowNavbar] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false);

    const navigate = useNavigate();

    const getInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : '?';
    };

    useEffect(() => {
        const closeDropdown = (e) => {
            if (!e.target.closest('.user_container')) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('click', closeDropdown);

        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        setIsLoggedIn(false);
        setUser(null);
    };

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    const signupclick=()=>{
        navigate('/SignUp');
    }

    const loginclick=()=>{
        navigate('/Login');
    }


    return (
        <nav className="navbar">
            <div className="container">
                <img 
                    src="devanant_app_private_limited_logo.jpeg" 
                    className="icon" 
                    alt="Logo" 
                />
                <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Courses">Courses</NavLink></li>
                        <li><NavLink to="/Aboutus">About Us</NavLink></li>
                        <li><NavLink to="/Pricing">Pricing</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="buttons_container">
                {isLoggedIn ? (
                    <div className="user_container">
                        <div 
                            className="user-avatar"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            {getInitial(user.Fullname)}
                        </div>
                        
                        {showDropdown && (
                            <div className="user-dropdown">
                                <Button2 onClick={handleLogout}>Logout</Button2>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <Button1 onClick={signupclick}>Sign Up</Button1>
                        <Button2 onClick={loginclick}>Login</Button2>
                    </>
                )}
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#262626" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>  
                </div>
            </div>
        </nav>
    )
}

