import { Testimonialcard } from "../../components/testimonialcard/Testimonialcard";
import { Footer } from "../../layout/Footer/Footer";
import { Navbar } from "../../layout/Navbar/navbar";
import { Topbar } from "../../layout/Topbar/topbar";
import './signup.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 
import axios from 'axios';
import { BACKEND_URL } from "../../configs";


export function SignUp(){
    return (
        <div style={{
            backgroundColor:"rgba(247, 247, 248, 1)",
        }}>
            <Topbar/>
            <Navbar/> 
            <SignUpAndTestimonial />
            <Footer/>
        </div>
    ) 
}

function SignUpAndTestimonial(){
    const [Fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTnC, setAgreeTnC] = useState(false);
    const { setIsLoggedIn, setUser } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!agreeTnC) {
            alert("Please agree to the terms and conditions");
            return;
        }
        try {
           const response = await axios.post(`${BACKEND_URL}/api/auth/signup`,{
            Fullname,
            email,
            password
           })

           const { user: userData, token } = response.data;
            setIsLoggedIn(true);
            setUser({
                Fullname: userData.Fullname,
                email: userData.email,
            });
            localStorage.setItem('token', token);        // Store the token in localStorage or a secure cookie
            navigate('/');                               // Redirect to home page after successful signup
        } 
        catch (error) {
            console.log(error);
            console.error("Signup failed", error.response ? error.response.data : error.message);
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <div >
            <div className="signup-container">
                <div className="signup-testimonial">
                    <h2>Students Testimonials</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras sit at dignissim lorem nibh at. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    <div className="testimonial-content-signup">
                    <Carousel>
                        <Testimonialcard img={"test1.png"} name={"Sarah L"} details={"The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"} />
                        <Testimonialcard img={"test2.png"} name={"Jason M"} details={"The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"} />
                        <Testimonialcard img={"test3.png"} name={"Emily R"} details={"The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"} />
                        <Testimonialcard img={"test4.png"} name={"Michael K"} details={"I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!"} />
                    </Carousel>                    
                    </div>
                 </div>
                 <div className="signup">
                    <h2>Sign Up</h2>
                    <p>Create an account to unlock exclusive features.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="signup-group">
                            <label htmlFor="Name">Full Name</label>
                            <input type="text" 
                                id="Name"  
                                placeholder="Enter your Name" 
                                value={Fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                required
                            />
                        </div>
                        <div className="signup-group">
                            <label htmlFor="email">Email</label>
                            <input  type="email" 
                                id="email" 
                                placeholder="Enter your Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="signup-group">
                            <label htmlFor="Password">Password</label>
                            <input  type="password" 
                                id="Password" 
                                placeholder="Enter your Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="signup-group-TnC">
                            <input 
                                type="checkbox" 
                                id="TnC" 
                                checked={agreeTnC}
                                onChange={(e) => setAgreeTnC(e.target.checked)}
                            />
                            <label htmlFor="TnC">
                                <p>I agree to our <a href="/legal/terms-of-service/public" target="_blank" rel="noopener noreferrer">terms of service</a> and <a href="/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.</p>
                            </label>
                        </div>
                        <button type="submit" className="signup-btn">SignUp</button>
                        <p>Don't have an account? <a href="/Login">Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}





