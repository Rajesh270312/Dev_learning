import { Testimonialcard } from "../../components/testimonialcard/Testimonialcard";
import { Footer } from "../../layout/Footer/Footer";
import { Navbar } from "../../layout/Navbar/navbar";
import { Topbar } from "../../layout/Topbar/topbar";
import './login.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';

export function Login(){
    return (
        <div style={{
            backgroundColor:"rgba(247, 247, 248, 1)",
        }}>
            <Topbar/>
            <Navbar/> 
                <LoginAndTestimonial />
            <Footer/>
        </div>
    )
}

function LoginAndTestimonial(){
    return (
        <div >
            <div className="login-container">
                <div className="login-testimonial">
                    <h2>Students Testimonials</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras sit at dignissim lorem nibh at. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    <div className="testimonial-content">
                        <Carousel>
                    <Testimonialcard img={"test1.png"} name={"Sarah L"} details={"The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"} />
                    <Testimonialcard img={"test2.png"} name={"Jason M"} details={"The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"} />
                    <Testimonialcard img={"test3.png"} name={"Emily R"} details={"The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"} />
                    <Testimonialcard img={"test4.png"} name={"Michael K"} details={"I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!"} />
                        </Carousel>
                    </div>
                 </div>
                 <div className="login">
                    <h2>Login</h2>
                    <p>Welcome back! Please login to access your account.</p>
                    <form>
                        <div className="login-form-group">
                            <label htmlFor="Email">Email</label>
                            <input type="email" id="Email" placeholder="Enter your Email" />
                        </div>
                        <div className="login-form-group">
                            <label htmlFor="Password">Password</label>
                            <input type="password" id="Password" placeholder="Enter your Password" />
                        </div>
                        <div className="login-form-group-remember">
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                        <div className="login-with-google">
                        <button class="" data-provider="google" data-oauthserver="https://accounts.google.com/o/oauth2/auth" data-oauthversion="2.0">
                            <svg aria-hidden="true" class="native svg-icon iconGoogle" width="18" height="15" viewBox="0 -3 18 18"><path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path><path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path><path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path><path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path></svg>
                            Log in with Google</button>
                        </div>
                        <p>Don't have an account? <a href="/SignUp">Sign Up</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}





