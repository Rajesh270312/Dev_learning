import { Navbar } from "../../layout/Navbar/navbar";
import { Topbar } from "../../layout/Topbar/topbar";
import { HeroSection } from "../../layout/HeroSection/Hero";
import './home.css'
import { Footer } from "../../layout/Footer/Footer";
import { Benefitscards } from "../../components/benefitcards/benefitcards";
import { Button1, Button2 } from "../../components/button/button";
import { CoursesCard } from "../../components/CoursesCard/CoursesCard";
import { Testimonialcard } from "../../components/testimonialcard/Testimonialcard";
import { Pricingcard } from "../../components/Pricingcard/Pricingcard";
import { FAQ } from "../../layout/FAQ/FAQ";



export function Home(){
    return <div style={{
        backgroundColor:"rgba(247, 247, 248, 1)",
    }}> 

        <Topbar/>
        <Navbar/>
        <HeroSection/>
        <Promotion />
        <video 
            width="100%" 
            controls 
            style={{
                borderRadius: "10px",
                display: "block",
                margin: "5% auto",
                maxWidth: "1200px"
            }}
            >
            <source src="bannervideo.mp4" type="video/mp4" />
        </video>
        <Benefits />
        <Courses />
        <Testimonial />
        <PricingSection />
        <FAQ />
        <Footer />
    </div>
}

function Promotion(){
    return (
        <div className="promotion" >
            <div className="promotion-content">
                <img src="Adobe.png" alt="Company 1" />
                <img src="amazon.png" alt="Company 2" />
                <img src="netflix.png" alt="Company 3" />
                <img src="notion.png" alt="Company 4" />
                <img src="spotify.png" alt="Company 5" />
                <img src="zapier.png" alt="Company 6" />
                <img src="zoom.png" alt="Company 7" />

                <img src="Adobe.png" alt="Company 1" />
                <img src="amazon.png" alt="Company 2" />
                <img src="netflix.png" alt="Company 3" />
                <img src="notion.png" alt="Company 4" />
                <img src="spotify.png" alt="Company 5" />
                <img src="zapier.png" alt="Company 6" />
                <img src="zoom.png" alt="Company 7" />
            </div>
        </div>
    )
}

function Benefits(){

    function increase(){
        return (
            <div>

            </div>
        )
    }

    return(
        <div style={{display:"flex" , justifyContent:"center"}}>
            <div className="BenefitBox">
            <div className="Benefitheading" >
                <div style={{width:"60%"}}>
                    <h1 style={{fontFamily:" 'Be Vietnam Pro',sans-serif" , color: "rgba(38, 38, 38, 1)"}}>Benefits</h1>
                    <p style={{fontFamily:" 'Be Vietnam Pro',sans-serif" , color: "rgba(51, 51, 51, 1)"}}>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <div style={{alignSelf:"self-end"}}>
                    <Button1 onClick={increase} >View All</Button1>
                </div>
            </div>
            <div className="Cardgrid">
                
                    <Benefitscards title={"01"} description={"Flexible Learning Schedule"} content={"Fit your coursework around your existing commitments and obligations."} />
                    <Benefitscards title={"02"} description={"Expert Instruction"} content={"Learn from industry experts who have hands-on experience in design and development.."} />
                    <Benefitscards title={"03"} description={"Diverse Course Offerings"} content={"Explore a wide range of design and development courses covering various topics."} />
                
                    <Benefitscards title={"04"} description={"Updated Curriculum"} content={"Access courses with up-to-date content reflecting the latest trends and industry practices."} />
                    <Benefitscards title={"05"} description={"Practical Projects and Assignments"} content={"Develop a portfolio showcasing your skills and abilities to potential employers."} />
                    <Benefitscards title={"06"} description={"Interactive Learning Environment"} content={"Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."} />
              
            </div>
        </div>
        </div>
        
    )
}

function Courses(){
    function increase(){
        return (
            <div>

            </div>
        )
    }
     return(
        <div style={{display:"flex" , justifyContent:"center"}}>
            <div className="BenefitBox">
            <div className="Benefitheading" >
                <div style={{width:"60%"}}>
                    <h1 style={{fontFamily:" 'Be Vietnam Pro',sans-serif" , color: "rgba(38, 38, 38, 1)"}}>Our Courses</h1>
                    <p style={{fontFamily:" 'Be Vietnam Pro',sans-serif" , color: "rgba(51, 51, 51, 1)"}}>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <div style={{alignSelf:"self-end"}}>
                    <Button1 onClick={increase} >View All</Button1>
                </div>
            </div>
            <div className="Coursegrid">
                
                    <CoursesCard img={"course6.png"} time={"5 months"} level={"Intermediate"} proff={"By Nema Ram Sir"} name={"Web Design Fundamentals"} details={"Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."} /> 
                    <CoursesCard img={"course5.png"} time={"5 months"} level={"Intermediate"} proff={"By Nema Ram Sir"} name={"UI/UX Design"} details={"Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."} /> 
                    <CoursesCard img={"course4.png"} time={"5 months"} level={"Intermediate"} proff={"By Nema Ram Sir"} name={"Mobile App Development"} details={"Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."} /> 
                    <CoursesCard img={"course3.png"} time={"5 months"} level={"Intermediate"} proff={"By Nema Ram Sir"} name={"Graphic Design for Beginners"} details={"Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."} /> 
                    <CoursesCard img={"course2.png"} time={"5 months"} level={"Intermediate"} proff={"By Nema Ram Sir"} name={"Front-End Web Development"} details={"Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."} /> 
                    <CoursesCard img={"course1.png"} time={"5 months"} level={"Intermediate"} proff={"By Nema Ram Sir"} name={"Advanced JavaScript"} details={"Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."} /> 

              
            </div>
        </div>
        </div>
        
    )
}

function Testimonial(){

function increase(){
    return (
        <div>

        </div>
    )
}
    return(
        <div style={{display:"flex" , justifyContent:"center"}}>
        <div className="BenefitBox">
        <div className="Benefitheading" >
            <div style={{width:"60%"}}>
                <h1 style={{fontFamily:" 'Be Vietnam Pro',sans-serif" , color: "rgba(38, 38, 38, 1)"}}>Our Testimonial</h1>
                <p style={{fontFamily:" 'Be Vietnam Pro',sans-serif" , color: "rgba(51, 51, 51, 1)"}}>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            <div style={{alignSelf:"self-end"}}>
                <Button1 onClick={increase} >View All</Button1>
            </div>
        </div>
        <div className="Coursegrid">
            <Testimonialcard img={"test1.png"} name={"Sarah L"} details={"The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"} />
            <Testimonialcard img={"test2.png"} name={"Jason M"} details={"The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"} />
            <Testimonialcard img={"test3.png"} name={"Emily R"} details={"The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"} />
            <Testimonialcard img={"test4.png"} name={"Michael K"} details={"I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!"} />
        </div>
    </div>
    </div>
    )
}


function PricingSection()  {
  const freePlanFeatures = [
    { text: 'Access to selected free courses.', included: true },
    { text: 'Limited course materials and resources.', included: true },
    { text: 'Basic community support.', included: true },
    { text: 'No certification upon completion.', included: true },
    { text: 'Ad-supported platform.', included: true },
    { text: 'Access to exclusive Pro Plan community forums.', included: false },
    { text: 'Early access to new courses and updates.', included: false },
  ];

  const proPlanFeatures = [
    { text: 'Unlimited access to all courses.', included: true },
    { text: 'Unlimited course materials and resources.', included: true },
    { text: 'Priority support from instructors.', included: true },
    { text: 'Course completion certificates.', included: true },
    { text: 'Ad-free experience.', included: true },
    { text: 'Access to exclusive Pro Plan community forums.', included: true },
    { text: 'Early access to new courses and updates.', included: true },
  ];

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <div className="home-pricing-section">
            <div className="home-pricing-heading">
                <div>
                    <h2>Our Pricing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                
                <div className="home-toggle-buttons">
                    <Button2>Monthly</Button2>
                    <Button1>Yearly</Button1>
                </div>
            </div>
            <div className="home-plans-container">
                <Pricingcard
                title="Free Plan"
                price="$0"
                features={freePlanFeatures}
                buttonLabel="Get Started"
                />
                <Pricingcard
                title="Pro Plan"
                price="$79"
                features={proPlanFeatures}
                buttonLabel="Get Started"
                />
        </div>
        </div>
      
    </div>
   
  );
};