import { Testimonialcard } from "../../components/testimonialcard/Testimonialcard";
import { Footer } from "../../layout/Footer/Footer";
import { Navbar } from "../../layout/Navbar/navbar";
import { Topbar } from "../../layout/Topbar/topbar";
import './signup.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';

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
                        </Carousel>                    </div>
                 </div>
                 <div className="signup">
                    <h2>Sign Up</h2>
                    <p>Create an account to unlock exclusive features.</p>
                    <form>
                        <div className="signup-group">
                            <label htmlFor="Name">Full Name</label>
                            <input type="text" id="Name"  placeholder="Enter your Name" />
                        </div>
                        <div className="signup-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your Email" />
                        </div>
                        <div className="signup-group">
                            <label htmlFor="Password">Password</label>
                            <input type="password" id="Password" placeholder="Enter your Password" />
                        </div>
                        <div className="signup-group-TnC">
                            <input type="checkbox" id="TnC" />
                            <label htmlFor="TnC">
                            <p class="fs-caption fc-black-400 ta-left mb24">I you agree to our <a href="/legal/terms-of-service/public" target="_blank" rel="noopener noreferrer" class="s-link svelte-9quauz">terms of service</a>  and  <a href="/legal/privacy-policy" target="_blank" rel="noopener noreferrer" class="s-link svelte-9quauz">privacy policy</a>.</p>
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





