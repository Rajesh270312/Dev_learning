import { Button2 , Button1 } from "../../components/button/button";
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'


export function Navbar(){
    const [showNavbar, setShowNavbar] = useState(false)
    const navigate = useNavigate();
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
                <Button1 onClick={signupclick}>Sign Up</Button1>
                <Button2 onClick={loginclick}>Login</Button2>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#262626" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>  
                </div>
            </div>
        </nav>
    )
}

